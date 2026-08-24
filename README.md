# MIRAX Painting® — Web oficial

Web corporativa de MIRAX Painting, empresa de pintura profesional en Vigo y Pontevedra.
React 19 + Vite. Despliegue: Hostinger (miraxpainting.es).

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo
npm run build     # build de producción → dist/
npm run preview   # previsualizar el build
npm run lint      # linter (oxlint)
```

## Estructura

- `src/components/` — secciones de la página (Hero con video, Servicios, Proyectos, Contacto…)
- `src/data.js` — textos, servicios, galería y datos del negocio
- `src/assets/gallery/` — fotos reales de trabajos (comprimidas)
- `src/assets/videos/` — videos del hero (H.264 baseline, sin audio, faststart)
- `public/` — favicon, og-image, robots.txt, sitemap.xml y .htaccess (Hostinger)

## Despliegue en Hostinger

### Opción A — Automática (recomendada)

1. En el panel de Hostinger: **Sitios web → FTP** y anota servidor, usuario y contraseña.
2. En GitHub: **Settings → Secrets and variables → Actions → New repository secret**, crea:
   - `FTP_SERVER` (ej. ftp.miraxpainting.es)
   - `FTP_USERNAME`
   - `FTP_PASSWORD`
3. Pestaña **Actions → Deploy a Hostinger (FTP) → Run workflow**.

Sube el contenido de `dist/` a `public_html/`. El `.htaccess` incluido fuerza HTTPS,
redirige www, activa GZIP y caché de un año para los assets.

### Opción B — Manual

1. `npm run build`
2. Sube **el contenido de `dist/`** a `public_html/` con File Manager o FTP.
3. Verifica que `.htaccess` quedó copiado (activa "mostrar archivos ocultos").

## Checklist SEO tras el despliegue

- [ ] SSL activo en Hostinger (Seguridad → SSL) y forzar HTTPS
- [ ] Google Search Console: dar de alta `https://miraxpainting.es` y enviar `sitemap.xml`
- [ ] Perfil de Empresa de Google (google.com/business) con dirección Av. de Balaídos 51
- [ ] Pedir reseñas a clientes en Google Maps
- [ ] Comprobar datos estructurados: https://search.google.com/test/rich-results
- [ ] PageSpeed: https://pagespeed.web.dev/
