"use client";

import { useEffect, useState } from "react";
import { CalendarDays, ConciergeBell, MessageCircle, PenLine, type LucideIcon } from "lucide-react";
import { Button } from "@/components/button";
import { Reservation, reservationSheetService } from "@/lib/reservations";

export function GuestDashboard() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [active, setActive] = useState<Reservation | null>(null);
  const [request, setRequest] = useState("Prepare a private wine tasting recommendation.");

  useEffect(() => {
    reservationSheetService.listReservations().then((items) => {
      setReservations(items);
      setActive(items[0] || null);
    });
  }, []);

  async function modify() {
    if (!active) return;
    const updated = await reservationSheetService.updateReservation(active.reservationId, {
      extras: [...new Set([...active.extras, "Late Checkout"])]
    });
    if (updated) {
      setActive(updated);
      setReservations((items) => items.map((item) => (item.reservationId === updated.reservationId ? updated : item)));
    }
  }

  const summaryCards: Array<[LucideIcon, string, string]> = active
    ? [
        [CalendarDays, "Dates", `${active.checkIn} to ${active.checkOut}`],
        [ConciergeBell, "Room", active.room],
        [MessageCircle, "Extras", active.extras.join(", ")],
        [PenLine, "Guests", `${active.guests} guests`]
      ]
    : [];

  return (
    <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
      <aside className="glass p-5">
        <p className="text-xs uppercase tracking-[0.28em] text-[#d7b56d]">Reservations</p>
        <div className="mt-5 grid gap-3">
          {reservations.map((reservation) => (
            <button
              key={reservation.reservationId}
              onClick={() => setActive(reservation)}
              className={`border p-4 text-left ${
                active?.reservationId === reservation.reservationId ? "border-[#d7b56d] bg-[#d7b56d]/12" : "border-white/10 bg-white/5"
              }`}
            >
              <p className="font-semibold text-white">{reservation.guestName}</p>
              <p className="mt-1 text-xs text-white/50">{reservation.reservationId} / {reservation.room}</p>
            </button>
          ))}
        </div>
      </aside>

      <section className="grid gap-6">
        <div className="glass p-6 md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#d7b56d]">Guest Dashboard</p>
              <h2 className="mt-4 font-display text-5xl text-white">{active?.guestName || "Guest"}</h2>
              <p className="mt-3 text-white/58">{active?.email} / {active?.phone}</p>
            </div>
            <span className="w-fit border border-[#d7b56d]/35 bg-[#d7b56d]/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#d7b56d]">
              {active?.status}
            </span>
          </div>

          {active ? (
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {summaryCards.map(([Icon, label, value]) => (
                <div key={String(label)} className="border border-white/10 bg-white/5 p-4">
                  <Icon className="text-[#d7b56d]" size={19} />
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/42">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-white/72">{value}</p>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button onClick={modify}><PenLine size={17} /> Add Late Checkout</Button>
            <Button href="/concierge" variant="ghost"><MessageCircle size={17} /> Contact Concierge</Button>
          </div>
        </div>

        <div className="glass p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-[#d7b56d]">Request Services</p>
          <textarea
            value={request}
            onChange={(event) => setRequest(event.target.value)}
            className="mt-5 min-h-36 w-full border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-[#d7b56d]/50"
          />
          <Button className="mt-4">Send Service Request</Button>
        </div>
      </section>
    </div>
  );
}
