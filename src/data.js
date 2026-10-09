import LOGO_SRC from "./assets/logo.webp";
import heroHome from "./assets/galeria/hero-home.jpg";
import photoBaneras from "./assets/galeria/pintura-baneras.jpg";
import photoAirless from "./assets/galeria/pintura-airless.jpg";
import photoComercios from "./assets/galeria/pintura-comercios.jpg";
import photoCocinas from "./assets/galeria/pintura-cocinas.jpg";
import photoBanos from "./assets/galeria/pintura-banos.jpg";
import photoHogares from "./assets/galeria/pintura-hogares.jpg";
import aboutPhoto from "./assets/galeria/sobre-nosotros.jpg";
import projAparcamientos from "./assets/galeria/proyecto-aparcamientos.jpg";
import projLacadoPuertas from "./assets/galeria/proyecto-lacado-puertas.jpg";
import projComunidad from "./assets/galeria/proyecto-comunidad-vecinos.jpg";
import projSuelos from "./assets/galeria/proyecto-suelos-epoxicos.jpg";
import projOficinas from "./assets/galeria/proyecto-oficinas.jpg";
import projEncimeras from "./assets/galeria/proyecto-encimeras.jpg";

export { LOGO_SRC };

const heroVideos = import.meta.glob("./assets/videos/*.mp4", {
  eager: true,
  import: "default",
});

export const HERO_VIDEOS = Object.values(heroVideos);

export const PHONE_DISPLAY = "627 256 959";
export const PHONE_INTL = "34627256959";
export const TIKTOK_URL = "https://www.tiktok.com/@miraxpainting.es?is_from_webapp=1&sender_device=pc";
export const MAPS_URL =
  "https://www.google.com/maps?q=Av.+de+Bala%C3%ADdos,+51,+Coia,+36210+Vigo,+Pontevedra";
export const ADDRESS = "Av. de Balaídos, 51 · Coia · 36210 Vigo, Pontevedra";

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre nosotros", href: "#sobrenosotros" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export const HERO_IMAGE = heroHome;

export const SERVICES = [
  {
    title: "Pintura de bañeras y duchas",
    description:
      "El desgaste hace que bañeras y platos de ducha pierdan su apariencia original. Lo solucionamos sin reemplazarlos, con pinturas epóxicas y poliuretano de alta durabilidad y sistema Airless. También restauramos azulejos y eliminamos gotelé.",
    image: photoBaneras,
    alt: "Bañera restaurada con pintura epóxica por MIRAX Painting en Vigo",
  },
  {
    title: "Pintura con pistola Airless",
    description:
      "Aplicación profesional con pistola Airless para paredes, techos, puertas y muebles. Acabados precisos y uniformes en cualquier superficie, ya sea una habitación o toda tu casa, comercio u oficina.",
    image: photoAirless,
    alt: "Pared pintada con pistola Airless por MIRAX Painting en Vigo",
  },
  {
    title: "Pintura para comercios",
    description:
      "Renovamos el aspecto de tu local sin interrupciones para tu negocio. Usamos técnicas innovadoras y pinturas de poliuretano de dos componentes para acabados duraderos en paredes, techos, fachadas y mobiliario.",
    image: photoComercios,
    alt: "Restaurante pintado por MIRAX Painting en Vigo",
  },
  {
    title: "Pintura de cocinas",
    description:
      "Renovamos paredes, techos y mobiliario de tu cocina. Además, podemos actualizar mesadas y fregaderos con pinturas específicas, encontrando las tonalidades que mejor se adapten a tus gustos y necesidades.",
    image: photoCocinas,
    alt: "Cocina renovada con pintura por MIRAX Painting en Vigo",
  },
  {
    title: "Pintura de baños",
    description:
      "Soluciones personalizadas para dar un aspecto nuevo a tu baño: pintura de paredes y techos, restauración de bañeras, platos de ducha y azulejos con acabados resistentes a la humedad.",
    image: photoBanos,
    alt: "Baño pintado y renovado por MIRAX Painting en Vigo",
  },
  {
    title: "Pintura para hogares",
    description:
      "Transformamos cualquier habitación en un espacio acogedor y moderno, con diseños personalizados para cada estancia interior o exterior. Especialistas en espacios de medidas complejas y plazos ajustados.",
    image: photoHogares,
    alt: "Habitación pintada por MIRAX Painting en Vigo",
  },
];

export const ABOUT_IMAGE = aboutPhoto;

export const STATS = [
  { value: "+20", label: "Años de experiencia" },
  { value: "5/5", label: "Valoración del servicio" },
  { value: "100%", label: "Presupuesto sin compromiso" },
];

export const PROJECTS = [
  {
    title: "Señalización de aparcamientos",
    alt: "Señalización y pintura de aparcamientos en Vigo por MIRAX Painting",
    src: projAparcamientos,
  },
  {
    title: "Lacado de puertas",
    alt: "Lacado de puertas en Vigo por MIRAX Painting",
    src: projLacadoPuertas,
  },
  {
    title: "Pintura de comunidad de vecinos",
    alt: "Pintura de comunidad de vecinos en Vigo por MIRAX Painting",
    src: projComunidad,
  },
  {
    title: "Suelos epóxicos",
    alt: "Pintura de suelos epóxicos en Vigo por MIRAX Painting",
    src: projSuelos,
  },
  {
    title: "Pintura de oficinas y superficies comerciales",
    alt: "Pintura de oficinas y locales comerciales en Vigo por MIRAX Painting",
    src: projOficinas,
  },
  {
    title: "Pintura de encimeras",
    alt: "Pintura de encimeras y mesadas de cocina en Vigo por MIRAX Painting",
    src: projEncimeras,
  },
];

export const FAQS = [
  {
    q: "¿Cuánto cuesta un pintor en Vigo?",
    a: "El precio depende de los metros cuadrados, el estado de las paredes y el tipo de pintura. En MIRAX Painting® el presupuesto es gratuito y sin compromiso: llámanos al 627 256 959 y valoramos tu proyecto en persona.",
  },
  {
    q: "¿Cuánto tardáis en pintar un piso en Vigo?",
    a: "Un piso de unos 80 m² suele pintarse en 3 a 5 días de trabajo, según el estado de las superficies y los acabados elegidos. Trabajamos con plazos ajustados y protegemos muebles y suelos antes de empezar.",
  },
  {
    q: "¿Restauráis bañeras y platos de ducha en lugar de cambiarlos?",
    a: "Sí. Restauramos bañeras, platos de ducha y azulejos con pinturas epóxicas y de poliuretano de alta durabilidad y acabado profesional, sin necesidad de sustituirlos y con una inversión mucho menor.",
  },
  {
    q: "¿Trabajáis en toda la provincia de Pontevedra?",
    a: "Damos servicio en Vigo y su área metropolitana (Coia, Teis, Bouzas, Navia, Nigrán, Gondomar, Redondela, Cangas y Mos) y en el resto de la provincia de Pontevedra.",
  },
  {
    q: "¿Qué es la pintura con pistola Airless?",
    a: "Es un sistema de proyección sin aire que aplica la pintura de forma rápida y uniforme, ideal para paredes, techos, puertas y muebles. Consigue acabados lisos y profesionales con menos tiempo y sin apenas salpicaduras.",
  },
  {
    q: "¿El presupuesto tiene algún coste o compromiso?",
    a: "No. El presupuesto es totalmente gratuito y sin compromiso. Escríbenos por teléfono o WhatsApp y visitamos tu vivienda, local o comunidad en Vigo para darte un precio cerrado.",
  },
];

export const LEGAL_LINKS = [
  { label: "Política de Privacidad", href: "https://miraxpainting.es/politica-de-privacidad" },
  { label: "Aviso Legal", href: "https://miraxpainting.es/aviso-legal" },
  { label: "Política de Cookies", href: "https://miraxpainting.es/politica-de-cookies" },
];
