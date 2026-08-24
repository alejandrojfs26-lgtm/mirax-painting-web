import { useEffect, useRef, useState } from "react"
import { HERO_IMAGE, HERO_VIDEOS } from "../data"

export default function Hero() {
  const [videoIndex, setVideoIndex] = useState(0)
  const [showFallbackButton, setShowFallbackButton] = useState(false)
  const videoRef = useRef(null)
  const hasVideos = HERO_VIDEOS.length > 0

  useEffect(() => {
    if (!hasVideos) return undefined
    const video = videoRef.current
    if (!video) return undefined

    const tryPlay = () => {
      if (!video.paused) return true
      const promise = video.play()
      if (promise) promise.catch(() => {})
      return !video.paused
    }

    // Atributos requeridos por navegadores móviles para permitir autoplay
    video.muted = true
    video.setAttribute("muted", "")
    video.setAttribute("autoplay", "")
    video.setAttribute("playsinline", "")
    video.setAttribute("webkit-playsinline", "")

    tryPlay()

    // Reintento periódico hasta que la reproducción arranque
    const interval = setInterval(() => {
      if (tryPlay()) clearInterval(interval)
    }, 2000)

    // Reintentos ante la primera interacción del usuario
    const events = ["touchstart", "pointerdown", "scroll", "keydown"]
    events.forEach((event) => window.addEventListener(event, tryPlay, { once: true, passive: true }))

    // Botón de respaldo si a los 4 segundos sigue parado
    const fallbackTimer = setTimeout(() => setShowFallbackButton(video.paused), 4000)

    return () => {
      clearInterval(interval)
      clearTimeout(fallbackTimer)
      events.forEach((event) => window.removeEventListener(event, tryPlay))
    }
  }, [hasVideos, videoIndex])

  const handleManualPlay = () => {
    setShowFallbackButton(false)
    videoRef.current?.play().catch(() => {})
  }

  return (
    <section id="inicio" className="hero">
      <img className="hero-bg" src={HERO_IMAGE} alt="Equipo de MIRAX Painting pintando un interior en Vigo" />
      {hasVideos && (
        <>
          <video
            className="hero-video"
            ref={(el) => {
              videoRef.current = el
              if (el) {
                el.muted = true
                el.setAttribute("muted", "")
                el.setAttribute("playsinline", "")
                el.setAttribute("webkit-playsinline", "")
              }
            }}
            key={HERO_VIDEOS[videoIndex]}
            src={HERO_VIDEOS[videoIndex]}
            poster={HERO_IMAGE}
            autoPlay
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            controlsList="nodownload"
            onPlaying={() => setShowFallbackButton(false)}
            onEnded={() => setVideoIndex((index) => (index + 1) % HERO_VIDEOS.length)}
          />
          {showFallbackButton && (
            <button type="button" className="hero-play-fallback" onClick={handleManualPlay} aria-label="Reproducir video">
              ▶
            </button>
          )}
        </>
      )}
      <div className="hero-mask" />
      <div className="hero-blob hero-blob--one" aria-hidden="true" />
      <div className="hero-blob hero-blob--two" aria-hidden="true" />
      <div className="container hero-content">
        <span className="hero-pretitle">Pintores en Vigo · Pontevedra</span>
        <h1 className="hero-title">
          Transformamos
          <br />
          tus espacios<span className="hero-title-accent">_</span>
        </h1>
        <p className="hero-description">
          ¿Un dormitorio relajante? ¿Un salón con un toque moderno? ¿Una fachada que atraiga clientes a tu comercio?
          Te asesoramos sobre los colores y la técnica adecuada para cada espacio.
        </p>
        <div className="hero-actions">
          <a href="#servicios" className="btn btn--blue">
            Ver servicios
          </a>
          <a href="#contacto" className="btn btn--outline-light">
            Solicita presupuesto
          </a>
        </div>
      </div>
    </section>
  )
}
