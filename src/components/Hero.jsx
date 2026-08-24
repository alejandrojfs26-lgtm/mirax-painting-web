import { useEffect, useRef, useState } from "react"
import { HERO_IMAGE, HERO_VIDEOS } from "../data"

export default function Hero() {
  const [videoIndex, setVideoIndex] = useState(0)
  const videoRef = useRef(null)
  const allowMotion =
    typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const showVideo = allowMotion && HERO_VIDEOS.length > 0

  useEffect(() => {
    if (!showVideo) return undefined
    const video = videoRef.current
    if (!video) return undefined

    video.muted = true
    video.setAttribute("muted", "")

    const tryPlay = () =>
      video.play().catch(() => {
        /* autoplay bloqueado por política del navegador */
      })

    tryPlay()
    const onFirstInteraction = () => tryPlay()
    window.addEventListener("touchstart", onFirstInteraction, { once: true, passive: true })
    return () => window.removeEventListener("touchstart", onFirstInteraction)
  }, [showVideo, videoIndex])

  return (
    <section id="inicio" className="hero">
      <img className="hero-bg" src={HERO_IMAGE} alt="Equipo de MIRAX Painting pintando un interior en Vigo" />
      {showVideo && (
        <video
          className="hero-video"
          ref={videoRef}
          key={HERO_VIDEOS[videoIndex]}
          src={HERO_VIDEOS[videoIndex]}
          poster={HERO_IMAGE}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => setVideoIndex((index) => (index + 1) % HERO_VIDEOS.length)}
        />
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
