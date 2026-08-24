import { ADDRESS, MAPS_URL } from "../data"

export default function MapSection() {
  return (
    <section className="map-wrap" aria-label="Ubicación de MIRAX Painting en Vigo">
      <iframe
        title="Mapa de MIRAX Painting - Av. de Balaídos, 51, Vigo"
        src="https://www.google.com/maps?q=Av.+de+Bala%C3%ADdos,+51,+Coia,+36210+Vigo&z=16&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="map-popup">
        {ADDRESS}.{" "}
        <a href={MAPS_URL} target="_blank" rel="noreferrer">
          Pide tu presupuesto sin compromiso
        </a>
      </div>
    </section>
  )
}
