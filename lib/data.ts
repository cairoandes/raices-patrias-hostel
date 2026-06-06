import { images } from "@/lib/assets";

export const suites = [
  {
    id: "dorm-6",
    name: "Dormitorio 6 Camas",
    price: 25,
    size: "28 sqm",
    capacity: "6 viajeros",
    view: "Vista al jardín interior",
    image: images.suite,
    gallery: [images.suite, images.pool, images.terrace],
    amenities: ["Lockers individuales", "Luz de lectura", "Aire acondicionado", "Baño compartido"],
    floorPlan: "6 camas individuales, lockers, escritorio compartido"
  },
  {
    id: "dorm-4",
    name: "Dormitorio 4 Camas",
    price: 35,
    size: "22 sqm",
    capacity: "4 viajeros",
    view: "Vista a la calle principal",
    image: images.terrace,
    gallery: [images.terrace, images.lobby, images.spa],
    amenities: ["Cortinas de privacidad", "Ensuite bathroom", "Escritorio", "Ventilador"],
    floorPlan: "4 camas individuales, baño privado, ventana amplia"
  },
  {
    id: "privada-doble",
    name: "Habitación Privada Doble",
    price: 65,
    size: "18 sqm",
    capacity: "2 viajeros",
    view: "Vista al patio con plantas",
    image: images.mountain,
    gallery: [images.mountain, images.lobby, images.gastronomy],
    amenities: ["Cama doble", "Baño privado", "Escritorio", "Ventana con luz natural"],
    floorPlan: "Cama doble, baño, escritorio, armario"
  },
  {
    id: "suite-bohemia",
    name: "Suite Bohemia con Balcón",
    price: 85,
    size: "32 sqm",
    capacity: "2 viajeros",
    view: "Balcón con vista a las sierras",
    image: images.lobby,
    gallery: [images.lobby, images.city, images.pool],
    amenities: ["Balcón privado", "Hamaca", "Baño privado", "Minibar", "Decoración artesanal"],
    floorPlan: "Cama doble, living, balcón, baño, vestidor"
  }
];

export const experiences = [
  {
    title: "Tour Graffiti Urbano",
    duration: "3 horas",
    image: images.city,
    description: "Recorre los murales y graffiti de Carlos Paz con un artista local. Descubre las historias detrás de cada pared."
  },
  {
    title: "Clase de Empanadas",
    duration: "2 horas",
    image: images.gastronomy,
    description: "Aprende a hacer empanadas cordobesas de la mano de una chef local. Incluye degustación y receta."
  },
  {
    title: "Noche de Fogata",
    duration: "Toda la noche",
    image: images.terrace,
    description: "Guitarreada, mates, juegos de mesa y nuevas amistades bajo las estrellas de las sierras."
  },
  {
    title: "Yoga al Amanecer",
    duration: "1 hora",
    image: images.spa,
    description: "Clase de yoga en la terraza con vista a las sierras. Ideal para conectar con vos mismo y con la naturaleza."
  },
  {
    title: "Lago San Roque",
    duration: "Medio día",
    image: images.mountain,
    description: "Excursión al lago con kayak, playa y picnic. El spot perfecto para desconectar y disfrutar de Córdoba."
  }
];

export const destinationLocations = [
  {
    name: "Lago San Roque",
    type: "Naturaleza",
    position: [-31.375, -64.475] as [number, number],
    distance: "5 min",
    travel: "1.5 km en bicicleta",
    image: images.mountain,
    description: "El icónico lago de Carlos Paz. Playas, kayak, paseos en barco y atardeceres imperdibles."
  },
  {
    name: "Calle Balcarce",
    type: "Vida Nocturna",
    position: [-31.424, -64.498] as [number, number],
    distance: "8 min",
    travel: "2.3 km a pie",
    image: images.city,
    description: "El corazón de la vida nocturna: bares, restaurantes, música en vivo y la mejor movida de Carlos Paz."
  },
  {
    name: "Cumbrecita",
    type: "Excursión",
    position: [-31.95, -64.85] as [number, number],
    distance: "1 hr 30 min",
    travel: "78 km por sierras",
    image: images.vineyard,
    description: "Pueblo de montaña alemán con cascadas, senderos y la mejor vista de las sierras de Córdoba."
  },
  {
    name: "Cerro de la Cruz",
    type: "Mirador",
    position: [-31.42, -64.5] as [number, number],
    distance: "15 min",
    travel: "3.2 km en auto",
    image: images.mountain,
    description: "Mirador panorámico con vista 360° de Carlos Paz, el lago y las sierras. Ideal para fotos."
  },
  {
    name: "Mercado Artesanal",
    type: "Compras",
    position: [-31.423, -64.497] as [number, number],
    distance: "10 min",
    travel: "2.1 km a pie",
    image: images.gastronomy,
    description: "Artesanías locales, cuero, mates, dulces regionales y souvenirs con alma cordobesa."
  },
  {
    name: "Paseo de los Arroyos",
    type: "Shopping",
    position: [-31.426, -64.496] as [number, number],
    distance: "12 min",
    travel: "2.5 km en auto",
    image: images.lobby,
    description: "Centro comercial a cielo abierto con tiendas, cafés y espacios verdes para relajarse."
  },
  {
    name: "Hospital Privado Carlos Paz",
    type: "Salud",
    position: [-31.43, -64.5] as [number, number],
    distance: "10 min",
    travel: "2.8 km en auto",
    image: images.lobby,
    description: "Centro médico de referencia para emergencias y consultas, a minutos del hostel."
  }
];

export const testimonials = [
  {
    name: "Lucía y Franco",
    type: "Parejas",
    text: "La noche de fogata fue mágica. Conocimos gente increíble y las empanadas de la clase eran las mejores que probamos en Córdoba.",
    rating: 5
  },
  {
    name: "Backpackers de Brasil",
    type: "Mochileros",
    text: "El hostel tiene onda propia. Las habitaciones son cómodas, el personal es genial y la ubicación es perfecta para explorar Carlos Paz.",
    rating: 5
  },
  {
    name: "Sofi y Marti",
    type: "Amigas",
    text: "Nos quedamos una semana y no queríamos irnos. El yoga al amanecer en la terraza es una experiencia que todos deberían vivir.",
    rating: 5
  },
  {
    name: "Nico M.",
    type: "Nómada Digital",
    text: "Wifi rápido, espacios de trabajo cómodos y la mejor comunidad viajera. Raíces Patrias es mi hogar lejos de casa en Córdoba.",
    rating: 5
  }
];

export const extras = ["Desayuno Criollo", "Alquiler Bicicleta", "Tour Privado", "Lavandería", "Late Checkout"];

export const analytics = {
  totalReservations: 1247,
  revenue: 89650,
  occupancy: 78,
  popularRooms: [
    { name: "Dorm 6 Camas", reservations: 412 },
    { name: "Dorm 4 Camas", reservations: 356 },
    { name: "Privada Doble", reservations: 298 },
    { name: "Suite Bohemia", reservations: 181 }
  ],
  arrivals: [
    { guest: "Camila Rojas", room: "Dorm 4 Camas", date: "Jun 12" },
    { guest: "Luca Bianchi", room: "Suite Bohemia", date: "Jun 13" },
    { guest: "Ana Torres", room: "Privada Doble", date: "Jun 14" }
  ],
  revenueTrend: [
    { month: "Ene", revenue: 12400 },
    { month: "Feb", revenue: 15800 },
    { month: "Mar", revenue: 18200 },
    { month: "Abr", revenue: 16500 },
    { month: "May", revenue: 14300 },
    { month: "Jun", revenue: 12450 }
  ]
};
