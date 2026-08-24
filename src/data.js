import LOGO_SRC from "./assets/logo.webp";

export { LOGO_SRC };

export const CDN = "https://miraxpainting.es/wp-content/uploads";

const galleryImages = import.meta.glob("./assets/gallery/*.jpeg", {
  eager: true,
  import: "default",
});

export const GALLERY_IMAGES = Object.values(galleryImages);

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

export const HERO_IMAGE = `${CDN}/2023/04/mirapainting_header_home_2.jpg`;

export const SERVICES = [
  {
    title: "Pintura de bañeras y duchas",
    description:
      "El desgaste hace que bañeras y platos de ducha pierdan su apariencia original. Lo solucionamos sin reemplazarlos, con pinturas epóxicas y poliuretano de alta durabilidad y sistema Airless. También restauramos azulejos y eliminamos gotelé.",
    image: `${CDN}/2023/08/mirapainting_proyectos_banera.jpg`,
    alt: "Bañera restaurada con pintura epóxica por MIRAX Painting",
  },
  {
    title: "Pintura con pistola Airless",
    description:
      "Aplicación profesional con pistola Airless para paredes, techos, puertas y muebles. Acabados precisos y uniformes en cualquier superficie, ya sea una habitación o toda tu casa, comercio u oficina.",
    image: `${CDN}/2023/04/mirapainting_pintura_pistola_resultado.jpeg`,
    alt: "Pared pintada con pistola Airless por MIRAX Painting",
  },
  {
    title: "Pintura para comercios",
    description:
      "Renovamos el aspecto de tu local sin interrupciones para tu negocio. Usamos técnicas innovadoras y pinturas de poliuretano de dos componentes para acabados duraderos en paredes, techos, fachadas y mobiliario.",
    image: `${CDN}/2023/04/mirapainting_restaurante.jpg`,
    alt: "Restaurante pintado por MIRAX Painting en Vigo",
  },
  {
    title: "Pintura de cocinas",
    description:
      "Renovamos paredes, techos y mobiliario de tu cocina. Además, podemos actualizar mesadas y fregaderos con pinturas específicas, encontrando las tonalidades que mejor se adapten a tus gustos y necesidades.",
    image: `${CDN}/2023/04/mirapainting_servicios_mesada.jpg`,
    alt: "Encimera y mobiliario de cocina renovados con pintura",
  },
  {
    title: "Pintura de baños",
    description:
      "Soluciones personalizadas para dar un aspecto nuevo a tu baño: pintura de paredes y techos, restauración de bañeras, platos de ducha y azulejos con acabados resistentes a la humedad.",
    image: `${CDN}/2023/04/mirapainting_decoracion_bano-e1681377398668.jpg`,
    alt: "Baño moderno pintado por MIRAX Painting",
  },
  {
    title: "Pintura para hogares",
    description:
      "Transformamos cualquier habitación en un espacio acogedor y moderno, con diseños personalizados para cada estancia interior o exterior. Especialistas en espacios de medidas complejas y plazos ajustados.",
    image: `${CDN}/2023/08/mirapainting_servicios.jpeg`,
    alt: "Habitación pintada por MIRAX Painting",
  },
];

export const ABOUT_IMAGE = `${CDN}/2026/04/ef51b8da-56c6-4c39-a02e-8151fa542978-1024x768.jpg`;

export const STATS = [
  { value: "+20", label: "Años de experiencia" },
  { value: "5/5", label: "Valoración del servicio" },
  { value: "100%", label: "Presupuesto sin compromiso" },
];

export const PROJECTS = [
  ...GALLERY_IMAGES.map((src, index) => ({
    title: `Trabajo reciente MIRAX · Vigo (${index + 1})`,
    src,
  })),
  {
    title: "Señalización de aparcamientos",
    src: `${CDN}/2026/04/22746df4-7d52-47d5-9b4a-5379b63a6cdc.jpg`,
  },
  { title: "Lacado de puertas", src: `${CDN}/2023/08/mirapainting_proyectos_lacado_puertas.jpg` },
  {
    title: "Comunidad de vecinos",
    src: `${CDN}/2023/05/mirapainting_servicios_comunidad_vecinos.jpg`,
  },
  { title: "Suelos epóxicos", src: `${CDN}/2023/04/mirapainting_proyectos_suelo_epoxico-1.jpg` },
  { title: "Oficinas y superficies comerciales", src: `${CDN}/2023/04/mirapainting_decoracion_oficina.jpg` },
  { title: "Pintura de encimeras", src: `${CDN}/2023/04/mirapainting_servicios_mesada.jpg` },
  { title: "Restauración de bañeras", src: `${CDN}/2023/08/mirapainting_proyectos_banera.jpg` },
  { title: "Pistola Airless en vivienda", src: `${CDN}/2023/04/mirapainting_pintura_pistola_resultado.jpeg` },
  { title: "Decoración de baños", src: `${CDN}/2023/04/mirapainting_decoracion_bano-e1681377398668.jpg` },
  { title: "Reforma de restaurante", src: `${CDN}/2023/04/mirapainting_restaurante.jpg` },
  { title: "Proyecto reciente en Vigo", src: `${CDN}/2026/04/ef51b8da-56c6-4c39-a02e-8151fa542978-1024x768.jpg` },
  { title: "Pintura integral de hogar", src: `${CDN}/2023/08/mirapainting_servicios.jpeg` },
];

export const LEGAL_LINKS = [
  { label: "Política de Privacidad", href: "https://miraxpainting.es/politica-de-privacidad" },
  { label: "Aviso Legal", href: "https://miraxpainting.es/aviso-legal" },
  { label: "Política de Cookies", href: "https://miraxpainting.es/politica-de-cookies" },
];
