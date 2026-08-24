import { useEffect, useState } from "react"
import { LOGO_SRC, NAV_LINKS, PHONE_DISPLAY, PHONE_INTL } from "../data"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="container header-inner">
          <a href="#inicio" className="logo" aria-label="MIRAX Painting - Inicio">
            <img className="logo-img" src={LOGO_SRC} alt="" aria-hidden="true" />
            <span className="logo-text">
              <span className="logo-main">Mirax</span>
              <span className="logo-sub">Painting®</span>
            </span>
          </a>
          <nav className="nav-desktop" aria-label="Menú principal">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <a href={`tel:+${PHONE_INTL}`} className="btn btn--blue nav-phone">
              {PHONE_DISPLAY}
            </a>
          </nav>
          <button
            type="button"
            className={`burger${menuOpen ? " open" : ""}`}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      {menuOpen && (
        <nav className="mobile-menu" aria-label="Menú móvil">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={`tel:+${PHONE_INTL}`} className="btn btn--whatsapp">
            Llámanos: {PHONE_DISPLAY}
          </a>
        </nav>
      )}
    </>
  )
}
