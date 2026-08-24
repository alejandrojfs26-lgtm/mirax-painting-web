import { useEffect, useState } from "react"
import { PROJECTS } from "../data"

const INITIAL_COUNT = 9

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)
  const [selected, setSelected] = useState(null)

  const visible = PROJECTS.slice(0, visibleCount)

  useEffect(() => {
    if (selected === null) return undefined
    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelected(null)
      if (event.key === "ArrowRight") setSelected((index) => (index + 1) % visible.length)
      if (event.key === "ArrowLeft") setSelected((index) => (index - 1 + visible.length) % visible.length)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [selected, visible.length])

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Proyectos</span>
          <h2 className="section-title">Proyectos &amp; pintura</h2>
          <p className="section-description">
            Estamos orgullosos de nuestros trabajos y aquí te mostramos algunos de ellos. Soluciones personalizadas
            para cada cliente, garantizando excelentes resultados en cada proyecto.
          </p>
        </div>
        <div className="masonry" id="masonry-container">
          {visible.map((project, index) => (
            <figure key={project.src} className="masonry-item" onClick={() => setSelected(index)}>
              <img src={project.src} alt={project.title} loading="lazy" />
            </figure>
          ))}
        </div>
        {visibleCount < PROJECTS.length && (
          <div className="gallery-footer">
            <button type="button" className="btn btn--gray" onClick={() => setVisibleCount(PROJECTS.length)}>
              Cargar más
            </button>
          </div>
        )}
      </div>
      {selected !== null && (
        <div
          className="modal-gallery"
          role="dialog"
          aria-modal="true"
          aria-label={PROJECTS[selected].title}
          onClick={() => setSelected(null)}
        >
          <button type="button" className="modal-gallery-close" aria-label="Cerrar" onClick={() => setSelected(null)}>
            ✕
          </button>
          <button
            type="button"
            className="modal-gallery-prev"
            aria-label="Anterior"
            onClick={(event) => {
              event.stopPropagation()
              setSelected((index) => (index - 1 + visible.length) % visible.length)
            }}
          >
            ‹
          </button>
          <img
            id="modalImage"
            className="modal-gallery-content"
            src={PROJECTS[selected].src}
            alt={PROJECTS[selected].title}
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className="modal-gallery-next"
            aria-label="Siguiente"
            onClick={(event) => {
              event.stopPropagation()
              setSelected((index) => (index + 1) % visible.length)
            }}
          >
            ›
          </button>
          <span className="modal-gallery-caption">{PROJECTS[selected].title}</span>
        </div>
      )}
    </section>
  )
}
