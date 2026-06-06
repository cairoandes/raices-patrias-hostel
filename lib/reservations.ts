export type Reservation = {
  reservationId: string;
  date: string;
  guestName: string;
  email: string;
  phone: string;
  room: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  extras: string[];
  status: "Confirmed" | "Pending" | "Modified";
};

const STORAGE_KEY = "raices-patrias-reservations";

export const mockReservations: Reservation[] = [
  {
    reservationId: "RPH-10284",
    date: "2026-06-06",
    guestName: "Lucía Rojas",
    email: "lucia@example.com",
    phone: "+54 3541 555 0191",
    room: "Dormitorio 4 Camas",
    checkIn: "2026-06-15",
    checkOut: "2026-06-18",
    guests: 1,
    extras: ["Desayuno Criollo", "Alquiler Bicicleta"],
    status: "Confirmed"
  },
  {
    reservationId: "RPH-10285",
    date: "2026-06-06",
    guestName: "Mateo Bianchi",
    email: "mateo@example.com",
    phone: "+54 11 6123 9120",
    room: "Suite Bohemia con Balcón",
    checkIn: "2026-06-20",
    checkOut: "2026-06-24",
    guests: 2,
    extras: ["Tour Privado", "Late Checkout"],
    status: "Confirmed"
  }
];

export interface ReservationSheetService {
  listReservations(): Promise<Reservation[]>;
  createReservation(input: Omit<Reservation, "reservationId" | "date" | "status">): Promise<Reservation>;
  updateReservation(reservationId: string, patch: Partial<Reservation>): Promise<Reservation | null>;
}

function readLocalReservations(): Reservation[] {
  if (typeof window === "undefined") return mockReservations;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(mockReservations));
    return mockReservations;
  }
  return JSON.parse(stored) as Reservation[];
}

function writeLocalReservations(reservations: Reservation[]) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
  }
}

class MockGoogleSheetReservationService implements ReservationSheetService {
  async listReservations() {
    return readLocalReservations();
  }

  async createReservation(input: Omit<Reservation, "reservationId" | "date" | "status">) {
    const reservations = readLocalReservations();
    const reservation: Reservation = {
      ...input,
      reservationId: `RPH-${Math.floor(10000 + Math.random() * 89999)}`,
      date: new Date().toISOString().slice(0, 10),
      status: "Confirmed"
    };

    writeLocalReservations([reservation, ...reservations]);
    return reservation;
  }

  async updateReservation(reservationId: string, patch: Partial<Reservation>) {
    const reservations = readLocalReservations();
    const index = reservations.findIndex((reservation) => reservation.reservationId === reservationId);
    if (index === -1) return null;

    const updated = {
      ...reservations[index],
      ...patch,
      status: "Modified" as const
    };
    reservations[index] = updated;
    writeLocalReservations(reservations);
    return updated;
  }
}

export const reservationSheetService: ReservationSheetService = new MockGoogleSheetReservationService();

export const googleSheetColumns = [
  "Reservation ID",
  "Date",
  "Guest Name",
  "Email",
  "Phone",
  "Room",
  "Check-In",
  "Check-Out",
  "Guests",
  "Extras",
  "Status"
];
