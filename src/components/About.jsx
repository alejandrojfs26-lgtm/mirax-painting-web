import { ABOUT_IMAGE, STATS } from "../data"

export default function About() {
  return (
    <section id="sobrenosotros" className="section section--gray">
      <div className="container about-grid">
        <img
          className="about-image"
          src={ABOUT_IMAGE}
          alt="Trabajo de pintura reciente realizado por MIRAX Painting"
          loading="lazy"
        />
        <div className="about-text">
          <span className="kicker">Sobre nosotros</span>
          <h2 className="section-title">Experiencia y acabados de calidad</h2>
          <p style={{ marginTop: 20 }}>
            <strong>MIRAX Painting®</strong>, tu empresa de pintura profesional de confianza. Contamos con{" "}
            <strong>más de 20 años de experiencia en el sector</strong> y un equipo altamente capacitado, con las
            herramientas y técnicas necesarias para llevar a cabo cualquier proyecto con precisión y eficiencia.
          </p>
          <p>
            Cada proyecto es único: ofrecemos soluciones personalizadas para hogares, oficinas, locales comerciales,
            aparcamientos y grandes superficies. Protegemos tus muebles y suelos antes de empezar y limpiamos el área
            de trabajo al terminar.
          </p>
          <p>Nuestra prioridad es tu satisfacción. Estamos aquí para ayudarte con tu proyecto de pintura.</p>
          <div className="stats-row">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="about-actions">
            <a href="#contacto" className="btn btn--dark">
              Solicita presupuesto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
