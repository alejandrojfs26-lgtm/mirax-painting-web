import { createServer } from "node:http"
import { readFile, writeFile } from "node:fs/promises"
import { existsSync, mkdtempSync } from "node:fs"
import { tmpdir } from "node:os"
import { extname, join, resolve } from "node:path"
import { spawn, spawnSync } from "node:child_process"

const DIST = resolve(process.cwd(), "dist")
const PORT = Number(process.env.PRERENDER_PORT || 8099)
const ORIGIN = `http://localhost:${PORT}`

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
}

function findChrome() {
  const candidates =
    process.platform === "darwin"
      ? ["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "/Applications/Chromium.app/Contents/MacOS/Chromium"]
      : ["google-chrome", "google-chrome-stable", "chromium", "chromium-browser", "chrome"]
  for (const bin of candidates) {
    if (bin.includes("/")) {
      if (existsSync(bin)) return bin
    } else {
      const found = spawnSync("command", ["-v", bin], { shell: true, encoding: "utf8" })
      if (found.status === 0 && found.stdout.trim()) return found.stdout.trim()
    }
  }
  return null
}

function startServer() {
  const server = createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0])
    let filePath = join(DIST, urlPath)
    if (urlPath.endsWith("/")) filePath = join(filePath, "index.html")
    if (!filePath.startsWith(DIST)) {
      res.writeHead(403).end("Forbidden")
      return
    }
    readFile(filePath)
      .then((data) => {
        res.writeHead(200, { "Content-Type": MIME[extname(filePath).toLowerCase()] || "application/octet-stream" })
        res.end(data)
      })
      .catch(() => {
        // Fallback al index para rutas del SPA
        readFile(join(DIST, "index.html"))
          .then((data) => res.writeHead(200, { "Content-Type": MIME[".html"] }).end(data))
          .catch(() => res.writeHead(404).end("Not found"))
      })
  })
  return new Promise((resolvePromise, reject) => {
    server.on("error", reject)
    server.listen(PORT, "127.0.0.1", () => resolvePromise(server))
  })
}

function dumpDom(chrome) {
  return new Promise((resolvePromise, reject) => {
    const args = [
      "--headless=new",
      "--no-sandbox",
      "--disable-gpu",
      "--hide-scrollbars",
      "--no-first-run",
      "--disable-extensions",
      "--disable-background-networking",
      "--autoplay-policy=no-user-gesture-required",
      `--user-data-dir=${mkdtempSync(join(tmpdir(), "mirax-prerender-"))}`,
      "--virtual-time-budget=6000",
      "--dump-dom",
      `${ORIGIN}/`,
    ]
    const child = spawn(chrome, args, { stdio: ["ignore", "pipe", "ignore"] })
    let out = ""
    let done = false
    const finish = (fn) => {
      if (done) return
      done = true
      clearTimeout(timer)
      fn()
    }
    const timer = setTimeout(() => {
      child.kill("SIGKILL")
      finish(() => reject(new Error("timeout de Chrome (30s)")))
    }, 30000)
    child.stdout.on("data", (chunk) => {
      out += chunk.toString("utf8")
    })
    child.on("error", (error) => finish(() => reject(error)))
    child.on("close", (code) =>
      finish(() => (out.includes("<html") ? resolvePromise(out) : reject(new Error(`Chrome salió con código ${code}`)))),
    )
  })
}

async function main() {
  if (!existsSync(join(DIST, "index.html"))) {
    console.warn("[prerender] no existe dist/index.html, se omite")
    return
  }
  const chrome = findChrome()
  if (!chrome) {
    console.warn("[prerender] Chrome no encontrado; se conserva el HTML del SPA (sin prerender)")
    return
  }
  let server
  try {
    server = await startServer()
    const dumped = await dumpDom(chrome)
    const html = dumped.replaceAll(`${ORIGIN}/`, "/").replaceAll(ORIGIN, "")
    await writeFile(join(DIST, "index.html"), html, "utf8")
    const kb = Math.round(Buffer.byteLength(html) / 1024)
    console.log(`[prerender] HTML prerenderizado escrito (${kb} KB)`)
  } catch (error) {
    console.warn(`[prerender] omitido: ${error.message}`)
  } finally {
    if (server) server.close()
  }
}

main()
