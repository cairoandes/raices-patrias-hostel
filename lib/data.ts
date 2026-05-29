import { images } from "@/lib/assets";

export const suites = [
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    price: 1280,
    size: "215 sqm",
    capacity: "4 guests",
    view: "Private terrace, valley and Andes panorama",
    image: images.suite,
    gallery: [images.suite, images.pool, images.terrace],
    amenities: ["Private butler", "Wine cellar", "Steam shower", "Outdoor soaking tub", "Dining salon"],
    floorPlan: "Grand salon, primary suite, guest suite, terrace, spa bath"
  },
  {
    id: "andean-suite",
    name: "Andean Suite",
    price: 760,
    size: "124 sqm",
    capacity: "3 guests",
    view: "Cerro San Bernardo and garden courtyards",
    image: images.terrace,
    gallery: [images.terrace, images.lobby, images.spa],
    amenities: ["Fireplace", "Mountain balcony", "Aromatherapy bath", "Evening aperitif"],
    floorPlan: "Bedroom, lounge, balcony, dressing room, marble bath"
  },
  {
    id: "deluxe-mountain-view",
    name: "Deluxe Mountain View",
    price: 460,
    size: "64 sqm",
    capacity: "2 guests",
    view: "Sunrise mountain aspect",
    image: images.mountain,
    gallery: [images.mountain, images.lobby, images.gastronomy],
    amenities: ["King bed", "Rain shower", "Curated minibar", "Work lounge"],
    floorPlan: "Sleeping area, sitting bay, bath, view deck"
  },
  {
    id: "executive-room",
    name: "Executive Room",
    price: 390,
    size: "52 sqm",
    capacity: "2 guests",
    view: "Historic Salta skyline",
    image: images.lobby,
    gallery: [images.lobby, images.city, images.pool],
    amenities: ["Quiet floor", "Executive desk", "Nespresso bar", "Priority concierge"],
    floorPlan: "Bedroom, writing desk, bath, wardrobe"
  }
];

export const experiences = [
  {
    title: "Wine Tours",
    duration: "7 hours",
    image: images.vineyard,
    description: "Private tastings through Cafayate with a sommelier, vineyard lunch, and helicopter return option."
  },
  {
    title: "High Mountain Adventures",
    duration: "Full day",
    image: images.mountain,
    description: "Guided routes across red rock valleys, salt flats, and elevated viewpoints in a private expedition vehicle."
  },
  {
    title: "Private Gastronomy",
    duration: "3 hours",
    image: images.gastronomy,
    description: "A candlelit tasting menu from the chef's table with regional ingredients and rare Argentine pairings."
  },
  {
    title: "Cultural Experiences",
    duration: "4 hours",
    image: images.city,
    description: "After-hours museum access, artisan ateliers, and colonial architecture tours curated by local historians."
  },
  {
    title: "Wellness Retreats",
    duration: "Half or full day",
    image: images.spa,
    description: "Rituals inspired by Andean botanicals, thermal circuits, breathwork, and private recovery suites."
  }
];

export const destinationLocations = [
  {
    name: "MAAM Museum",
    type: "Museums",
    position: [-24.7891, -65.4107] as [number, number],
    distance: "12 min",
    travel: "4.2 km by private car",
    image: images.city,
    description: "A refined cultural landmark with pre-Columbian collections and Salta's most important archaeological exhibits."
  },
  {
    name: "Cafayate Vineyards",
    type: "Vineyards",
    position: [-26.0721, -65.9764] as [number, number],
    distance: "2 hr 45 min",
    travel: "188 km scenic route",
    image: images.vineyard,
    description: "High-altitude wineries known for Torrontes, private cellar tastings, and cinematic desert landscapes."
  },
  {
    name: "Martin Miguel de Guemes Airport",
    type: "Airport",
    position: [-24.856, -65.4862] as [number, number],
    distance: "24 min",
    travel: "13.5 km by transfer",
    image: images.lobby,
    description: "The resort concierge arranges seamless airport transfers with arrival refreshments and luggage handling."
  },
  {
    name: "Cerro San Bernardo",
    type: "Attractions",
    position: [-24.779, -65.3907] as [number, number],
    distance: "18 min",
    travel: "6.1 km by car",
    image: images.mountain,
    description: "Panoramic overlook above Salta with sunrise hikes, private picnics, and photographer-led excursions."
  },
  {
    name: "El Baqueano",
    type: "Restaurants",
    position: [-24.7867, -65.4123] as [number, number],
    distance: "13 min",
    travel: "4.6 km by car",
    image: images.gastronomy,
    description: "An elegant tasting-menu restaurant celebrating native Argentine ingredients and modern technique."
  },
  {
    name: "Balcarce Cafe District",
    type: "Cafes",
    position: [-24.7813, -65.4132] as [number, number],
    distance: "11 min",
    travel: "3.9 km by car",
    image: images.city,
    description: "Boutique cafes, music rooms, and relaxed terraces for late afternoon coffee or evening aperitifs."
  },
  {
    name: "Hospital Privado Santa Clara",
    type: "Hospitals",
    position: [-24.7945, -65.4214] as [number, number],
    distance: "16 min",
    travel: "5.4 km by car",
    image: images.lobby,
    description: "Private medical support listed for guest assurance, coordinated discreetly by the resort team."
  }
];

export const testimonials = [
  {
    name: "Isabella & Mateo",
    type: "Couples",
    text: "Every moment felt choreographed but never forced. The mountain dinner was the most beautiful evening of our honeymoon.",
    rating: 5
  },
  {
    name: "The Nakamura Family",
    type: "Families",
    text: "The team understood luxury and warmth in equal measure. Our children still talk about the private astronomy experience.",
    rating: 5
  },
  {
    name: "Charlotte Reeves",
    type: "Business Travelers",
    text: "Flawless corporate hospitality. Board meetings, transfers, dining, and wellness recovery all happened with quiet precision.",
    rating: 5
  },
  {
    name: "Rafael M.",
    type: "Couples",
    text: "It has the stillness of Aman and the service confidence of the great city hotels. Salta has never felt this elevated.",
    rating: 5
  }
];

export const extras = ["Airport Transfer", "Spa Package", "Wine Tour", "Private Dinner", "Late Checkout"];

export const analytics = {
  totalReservations: 384,
  revenue: 842600,
  occupancy: 87,
  popularRooms: [
    { name: "Presidential", reservations: 74 },
    { name: "Andean", reservations: 132 },
    { name: "Deluxe", reservations: 108 },
    { name: "Executive", reservations: 70 }
  ],
  arrivals: [
    { guest: "Amelia Costa", room: "Andean Suite", date: "May 30" },
    { guest: "Victor Laurent", room: "Presidential Suite", date: "May 31" },
    { guest: "Sofia Garcia", room: "Deluxe Mountain View", date: "June 1" }
  ],
  revenueTrend: [
    { month: "Jan", revenue: 92000 },
    { month: "Feb", revenue: 111000 },
    { month: "Mar", revenue: 138000 },
    { month: "Apr", revenue: 156000 },
    { month: "May", revenue: 182000 },
    { month: "Jun", revenue: 205000 }
  ]
};
