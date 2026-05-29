"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import { extras, suites } from "@/lib/data";
import { Reservation, reservationSheetService } from "@/lib/reservations";
import { Button } from "@/components/button";

const steps = ["Dates", "Room", "Extras", "Guest", "Confirm"];

export function ReservationFlow() {
  const searchParams = useSearchParams();
  const initialRoom = searchParams.get("room") || suites[1].name;
  const [step, setStep] = useState(0);
  const [saved, setSaved] = useState<Reservation | null>(null);
  const [form, setForm] = useState({
    checkIn: "2026-06-12",
    checkOut: "2026-06-16",
    guests: 2,
    room: initialRoom,
    extras: ["Airport Transfer"],
    guestName: "Demo Guest",
    email: "guest@example.com",
    phone: "+54 387 555 0000"
  });

  const room = useMemo(() => suites.find((item) => item.name === form.room) || suites[0], [form.room]);
  const nights = Math.max(1, Math.round((new Date(form.checkOut).getTime() - new Date(form.checkIn).getTime()) / 86400000));
  const total = room.price * nights + form.extras.length * 180;

  async function confirm() {
    const reservation = await reservationSheetService.createReservation(form);
    setSaved(reservation);
    setStep(4);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <section className="glass p-5 md:p-8">
        <div className="mb-8 grid grid-cols-5 gap-2">
          {steps.map((label, index) => (
            <button
              key={label}
              onClick={() => setStep(index)}
              className={`min-h-12 border text-[10px] font-bold uppercase tracking-[0.14em] md:text-xs ${
                index === step ? "border-[#d7b56d] bg-[#d7b56d] text-black" : "border-white/10 bg-white/5 text-white/48"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {step === 0 ? (
          <div className="grid gap-5 md:grid-cols-3">
            <Field label="Check-In" type="date" value={form.checkIn} onChange={(value) => setForm({ ...form, checkIn: value })} />
            <Field label="Check-Out" type="date" value={form.checkOut} onChange={(value) => setForm({ ...form, checkOut: value })} />
            <Field label="Guests" type="number" value={String(form.guests)} onChange={(value) => setForm({ ...form, guests: Number(value) })} />
          </div>
        ) : null}

        {step === 1 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {suites.map((suite) => (
              <button
                key={suite.id}
                onClick={() => setForm({ ...form, room: suite.name })}
                className={`border p-5 text-left transition ${
                  form.room === suite.name ? "border-[#d7b56d] bg-[#d7b56d]/12" : "border-white/10 bg-white/5 hover:border-white/25"
                }`}
              >
                <p className="font-display text-3xl text-white">{suite.name}</p>
                <p className="mt-2 text-sm text-white/55">{suite.capacity} / {suite.size}</p>
                <p className="mt-4 text-[#d7b56d]">${suite.price} per night</p>
              </button>
            ))}
          </div>
        ) : null}

        {step === 2 ? (
          <div className="grid gap-3 md:grid-cols-2">
            {extras.map((extra) => (
              <label key={extra} className="flex cursor-pointer items-center gap-3 border border-white/10 bg-white/5 p-4 text-sm text-white/72">
                <input
                  type="checkbox"
                  checked={form.extras.includes(extra)}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      extras: event.target.checked ? [...form.extras, extra] : form.extras.filter((item) => item !== extra)
                    })
                  }
                />
                {extra}
              </label>
            ))}
          </div>
        ) : null}

        {step === 3 ? (
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Guest Name" value={form.guestName} onChange={(value) => setForm({ ...form, guestName: value })} />
            <Field label="Email" value={form.email} onChange={(value) => setForm({ ...form, email: value })} />
            <Field label="Phone" value={form.phone} onChange={(value) => setForm({ ...form, phone: value })} />
          </div>
        ) : null}

        {step === 4 ? (
          <div className="py-10 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#d7b56d] text-black">
              <Check />
            </div>
            <h2 className="mt-6 font-display text-5xl text-white">Reservation Confirmed</h2>
            <p className="mt-4 text-white/62">
              {saved ? `Saved to mock Google Sheet service as ${saved.reservationId}.` : "Review your stay details and confirm when ready."}
            </p>
          </div>
        ) : null}

        <div className="mt-8 flex justify-between gap-3">
          <Button variant="ghost" disabled={step === 0} onClick={() => setStep(Math.max(0, step - 1))}>Back</Button>
          {step < 3 ? <Button onClick={() => setStep(step + 1)}>Continue <ChevronRight size={16} /></Button> : null}
          {step === 3 ? <Button onClick={confirm}>Confirm Reservation</Button> : null}
        </div>
      </section>

      <aside className="glass h-fit p-6">
        <p className="text-xs uppercase tracking-[0.28em] text-[#d7b56d]">Stay Summary</p>
        <h2 className="mt-4 font-display text-4xl text-white">{form.room}</h2>
        <div className="mt-6 space-y-3 text-sm text-white/68">
          <p>{form.checkIn} to {form.checkOut}</p>
          <p>{nights} nights / {form.guests} guests</p>
          <p>Extras: {form.extras.join(", ") || "None"}</p>
        </div>
        <div className="mt-6 border-t border-white/10 pt-6">
          <p className="text-sm text-white/46">Estimated total</p>
          <p className="font-display text-5xl text-[#d7b56d]">${total.toLocaleString()}</p>
        </div>
      </aside>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text"
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.22em] text-white/45">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-3 h-13 w-full border border-white/10 bg-white/5 px-4 text-white outline-none focus:border-[#d7b56d]/50"
      />
    </label>
  );
}
