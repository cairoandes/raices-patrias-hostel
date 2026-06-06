"use client";

import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/button";

const replies: Record<string, string> = {
  "¿Dónde puedo cenar hoy?":
    "Te recomiendo La Casona para comida regional, o si querés algo más tranquilo, El Mangrullo tiene la mejor vista al lago. ¿Querés que te reserve mesa?",
  "¿Qué bares me recomiendan?":
    "La Calle Balcarce es el corazón nocturno: tenés Dorian Gray para música en vivo, y La Casa de los Milagros para algo más bohemio. ¿Querés que arme un recorrido?",
  "¿Qué puedo hacer mañana?":
    "Podés empezar con yoga al amanecer en la terraza, después ir al lago San Roque en bicicleta, y cerrar el día con una fogata en el hostel. ¿Te anoto?",
  "¿Cómo llego a Cumbrecita?":
    "Está a 1 hora y media en auto por las sierras. Te recomiendo salir temprano, hacer el camino de las altas cumbres, y visitar las cascadas. ¿Querés que te organice el viaje?"
};

type Message = {
  role: "guest" | "concierge";
  text: string;
};

export function ConciergeChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "concierge",
      text: "¡Hola! Soy tu concierge digital. Te puedo ayudar con bares, restaurantes, excursiones, actividades y todo lo que necesites para disfrutar Carlos Paz."
    }
  ]);
  const [input, setInput] = useState("");

  function ask(question: string) {
    const answer = replies[question] || "Te puedo armar una experiencia personalizada según lo que te guste. Para esta demo, la respuesta está preparada y lista para conectar con un servicio de IA real.";
    setMessages((current) => [...current, { role: "guest", text: question }, { role: "concierge", text: answer }]);
    setInput("");
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.7fr_1fr]">
      <aside className="glass p-6">
        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#C1694F]"><Sparkles size={16} /> Preguntas de Ejemplo</p>
        <div className="mt-6 grid gap-3">
          {Object.keys(replies).map((question) => (
            <button
              key={question}
              onClick={() => ask(question)}
              className="border border-white/10 bg-white/5 p-4 text-left text-sm leading-6 text-white/70 transition hover:border-[#C1694F]/40 hover:text-white"
            >
              {question}
            </button>
          ))}
        </div>
      </aside>

      <section className="glass flex min-h-[620px] flex-col overflow-hidden">
        <div className="border-b border-[#C1694F]/15 p-5">
          <p className="font-display text-3xl text-white">Concierge Digital</p>
          <p className="mt-1 text-sm text-white/48">Tu guía personal para disfrutar Carlos Paz al máximo.</p>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={`flex ${message.role === "guest" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[82%] rounded-sm p-4 text-sm leading-7 ${
                message.role === "guest" ? "bg-[#C1694F] text-black" : "border border-[#C1694F]/15 bg-black/45 text-white/72"
              }`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <form
          className="flex gap-3 border-t border-[#C1694F]/15 p-4"
          onSubmit={(event) => {
            event.preventDefault();
            if (input.trim()) ask(input.trim());
          }}
        >
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Preguntá por bares, excursiones, actividades..."
            className="min-w-0 flex-1 border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#C1694F]/50"
          />
          <Button type="submit" className="px-4"><Send size={17} /></Button>
        </form>
      </section>
    </div>
  );
}
