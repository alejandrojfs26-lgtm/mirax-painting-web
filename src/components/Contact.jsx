import { useState } from "react"
import { ADDRESS, LEGAL_LINKS, MAPS_URL, PHONE_DISPLAY, PHONE_INTL, TIKTOK_URL } from "../data"

function IconPhone() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconPin() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function IconTikTok() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.31-2.83v-3.5a6.37 6.37 0 1 0 5.76 6.33V8.69a8.16 8.16 0 0 0 4.77 1.52V6.75a4.85 4.85 0 0 1-1-.06z" />
    </svg>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      `Hola MIRAX Painting, soy ${data.get("nombre")}.`,
      `Teléfono: ${data.get("telefono")}`,
      `Email: ${data.get("email")}`,
      `Mensaje: ${data.get("mensaje")}`,
    ].join("\n")
    window.open(`https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(message)}`, "_blank", "noopener")
    setSent(true)
  }

  return (
    <section id="contacto" className="section section--gray">
      <div className="container contact-grid">
        <div>
          <span className="kicker">Contacto</span>
          <h2 className="section-title">¿Manos a la obra?</h2>
          <blockquote className="contact-quote">
            Para que un proyecto vea la luz es importante tomar las decisiones adecuadas en el momento adecuado.
            Solicita ahora mismo presupuesto sin coste ni compromiso.
          </blockquote>
          <ul className="contact-list">
            <li className="contact-item">
              <IconPhone />
              <a href={`tel:+${PHONE_INTL}`}>
                {PHONE_DISPLAY} <small>(Miguel)</small>
              </a>
            </li>
            <li className="contact-item">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#25d366" }} aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.174-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              <a href={`https://wa.me/${PHONE_INTL}`} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li className="contact-item">
              <IconPin />
              <a href={MAPS_URL} target="_blank" rel="noreferrer">
                {ADDRESS}
              </a>
            </li>
            <li className="contact-item">
              <IconTikTok />
              <a href={TIKTOK_URL} target="_blank" rel="noreferrer">
                Síguenos en TikTok
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="form-note" style={{ marginBottom: 20 }}>
            Solicita información y presupuestos. Te contestaremos lo antes posible.
          </p>
          {sent && (
            <p className="form-success" role="status">
              Gracias por tu solicitud. Se ha abierto WhatsApp con tu mensaje listo para enviar.
            </p>
          )}
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="nombre">Nombre y Apellido *</label>
              <input id="nombre" name="nombre" type="text" required maxLength={400} />
            </div>
            <div className="form-field">
              <label htmlFor="telefono">Teléfono *</label>
              <input id="telefono" name="telefono" type="tel" required maxLength={400} />
            </div>
            <div className="form-field">
              <label htmlFor="email">Correo electrónico *</label>
              <input id="email" name="email" type="email" required maxLength={400} />
            </div>
            <div className="form-field">
              <label htmlFor="mensaje">Mensaje *</label>
              <textarea id="mensaje" name="mensaje" rows={5} required maxLength={2000} />
            </div>
            <div className="form-field form-legal">
              <input type="checkbox" id="legal" name="legal" required />
              <label htmlFor="legal">
                Acepto el{" "}
                <a href={LEGAL_LINKS[1].href} target="_blank" rel="noreferrer">
                  aviso legal
                </a>{" "}
                y la{" "}
                <a href={LEGAL_LINKS[0].href} target="_blank" rel="noreferrer">
                  política de privacidad
                </a>
                .
              </label>
            </div>
            <button type="submit" className="btn btn--blue form-submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
