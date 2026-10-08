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

### Opción A — Automática (recomendada, en uso)

Flujo: `push a main` → GitHub Actions ejecuta lint + build → sube el `dist/`
compilado a la rama **`deploy`** → Hostinger (integración Git por OAuth) publica
esa rama en `public_html/`.

Configuración única en hPanel (**Sitios web → dashboard → Avanzado → Git**):

1. Repositorio conectado: `alejandrojfs26-lgtm/mirax-painting-web`.
2. **Rama:** `deploy` (no `main`: la Git genérica de Hostinger no ejecuta `npm run build`).
3. **Directorio de despliegue:** raíz (`public_html/`).
4. Primera vez: `public_html/` debe estar **vacío** (borra los archivos del sitio
   anterior con el File Manager) y pulsar **Deploy**.
5. Auto-deployment activo: cada push a `main` reconstruye y vuelve a publicar.

### Opción B — FTP manual (fallback)

1. En GitHub: **Settings → Secrets and variables → Actions**, crea `FTP_SERVER`,
   `FTP_USERNAME` (usuario tipo `u123456789`, no el email) y `FTP_PASSWORD`.
2. Pestaña **Actions → Deploy a Hostinger (FTP) → Run workflow**.
3. O sube el contenido de `dist/` con File Manager. Verifica que `.htaccess` quedó
   copiado (activa "mostrar archivos ocultos").

## Checklist SEO tras el despliegue

- [ ] SSL activo en Hostinger (Seguridad → SSL) y forzar HTTPS
- [ ] Google Search Console: dar de alta `https://miraxpainting.es` y enviar `sitemap.xml`
- [ ] Perfil de Empresa de Google (google.com/business) con dirección Av. de Balaídos 51
- [ ] Pedir reseñas a clientes en Google Maps
- [ ] Comprobar datos estructurados: https://search.google.com/test/rich-results
- [ ] PageSpeed: https://pagespeed.web.dev/
