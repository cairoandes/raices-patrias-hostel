"use client";

import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/button";

const replies: Record<string, string> = {
  "Where should I dine tonight?":
    "Tonight I would reserve El Baqueano for a tasting menu, then arrange a private digestif on the resort terrace. I can schedule a 7:45 PM transfer and request a quiet table.",
  "What wineries do you recommend?":
    "For a refined Cafayate route, I recommend El Esteco, Piatelli, and a small family cellar for contrast. A sommelier-led itinerary with lunch usually takes seven hours.",
  "What can I visit tomorrow?":
    "Tomorrow is ideal for MAAM Museum in the morning, San Bernardo at golden hour, and a private empanada workshop before dinner. The pacing is elegant and not rushed.",
  "How do I get to Cafayate?":
    "The scenic private drive takes roughly 2 hours and 45 minutes. I recommend departing at 8:30 AM with a guide, stopping in Quebrada de las Conchas, and returning after sunset."
};

type Message = {
  role: "guest" | "concierge";
  text: string;
};

export function ConciergeChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "concierge",
      text: "Good evening. I can arrange dining, wineries, excursions, transfers, wellness rituals, and private experiences across Salta."
    }
  ]);
  const [input, setInput] = useState("");

  function ask(question: string) {
    const answer = replies[question] || "I would recommend a private itinerary based on your pace, weather, and preferred level of privacy. For this demo, the response is mocked and ready to connect to a real AI service.";
    setMessages((current) => [...current, { role: "guest", text: question }, { role: "concierge", text: answer }]);
    setInput("");
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.7fr_1fr]">
      <aside className="glass p-6">
        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#d7b56d]"><Sparkles size={16} /> Example Questions</p>
        <div className="mt-6 grid gap-3">
          {Object.keys(replies).map((question) => (
            <button
              key={question}
              onClick={() => ask(question)}
              className="border border-white/10 bg-white/5 p-4 text-left text-sm leading-6 text-white/70 transition hover:border-[#d7b56d]/40 hover:text-white"
            >
              {question}
            </button>
          ))}
        </div>
      </aside>

      <section className="glass flex min-h-[620px] flex-col overflow-hidden">
        <div className="border-b border-white/10 p-5">
          <p className="font-display text-3xl text-white">AI Digital Concierge</p>
          <p className="mt-1 text-sm text-white/48">Mocked today, architected for a real AI assistant tomorrow.</p>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={`flex ${message.role === "guest" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[82%] rounded-sm p-4 text-sm leading-7 ${
                message.role === "guest" ? "bg-[#d7b56d] text-black" : "border border-white/10 bg-black/45 text-white/72"
              }`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <form
          className="flex gap-3 border-t border-white/10 p-4"
          onSubmit={(event) => {
            event.preventDefault();
            if (input.trim()) ask(input.trim());
          }}
        >
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask for dining, wineries, tomorrow's itinerary..."
            className="min-w-0 flex-1 border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#d7b56d]/50"
          />
          <Button type="submit" className="px-4"><Send size={17} /></Button>
        </form>
      </section>
    </div>
  );
}
