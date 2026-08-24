import { SERVICES } from "../data"

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="kicker">Servicios</span>
          <h2 className="section-title">Pintura profesional en Pontevedra</h2>
          <p className="section-description">
            Utilizamos únicamente materiales de alta calidad y trabajamos de manera eficiente para garantizar
            resultados impecables dentro del presupuesto disponible.
          </p>
        </div>
        <div className="grid-3">
          {SERVICES.map((service) => (
            <article key={service.title} className="card">
              <img className="card-image" src={service.image} alt={service.alt} loading="lazy" />
              <div className="card-body">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
                <a href="#contacto" className="card-link">
                  Solicitar presupuesto
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
