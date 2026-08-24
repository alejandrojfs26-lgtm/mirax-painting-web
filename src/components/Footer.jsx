import { ADDRESS, LEGAL_LINKS, LOGO_SRC, MAPS_URL, NAV_LINKS, PHONE_DISPLAY, PHONE_INTL, TIKTOK_URL } from "../data"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#inicio" className="logo" aria-label="MIRAX Painting - Inicio">
              <img className="logo-img" src={LOGO_SRC} alt="" aria-hidden="true" />
              <span className="logo-text">
                <span className="logo-main">Mirax</span>
                <span className="logo-sub">Painting®</span>
              </span>
            </a>
            <p>
              Empresa de pintura profesional en Vigo y provincia de Pontevedra. Más de 20 años de experiencia
              ofreciendo servicios de alta calidad.
            </p>
            <a
              className="footer-address"
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Ver dirección en Google Maps"
            >
              {ADDRESS}
            </a>
            <a className="footer-social" href={TIKTOK_URL} target="_blank" rel="noreferrer">
              @miraxpainting.es en TikTok
            </a>
          </div>
          <div>
            <h3 className="footer-heading">Menú</h3>
            <ul className="footer-menu">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="footer-heading">Documentos legales</h3>
            <ul className="footer-menu">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`tel:+${PHONE_INTL}`}>{PHONE_DISPLAY} (Miguel)</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Copyright © {new Date().getFullYear()} MIRAX Painting®</span>
          <a href="#inicio" className="back-to-top">
            Subir ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
