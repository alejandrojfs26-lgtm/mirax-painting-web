import { FAQS } from "../data"

export default function Faq() {
  return (
    <section id="preguntas-frecuentes" className="section section--gray">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="kicker">Preguntas frecuentes</span>
          <h2 className="section-title">Pintores en Vigo: dudas más habituales</h2>
          <p className="section-description">
            Resolvemos las preguntas que más nos hacen los clientes de Vigo y su área metropolitana antes de contratar
            un servicio de pintura profesional.
          </p>
        </div>
        <div className="faq-list">
          {FAQS.map((item) => (
            <details key={item.q} className="faq-item">
              <summary className="faq-question">{item.q}</summary>
              <p className="faq-answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
