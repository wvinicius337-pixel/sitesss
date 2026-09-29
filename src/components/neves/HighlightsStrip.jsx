import React from "react";
import { Snowflake, Flame, Users, Clock } from "lucide-react";
import Reveal from "@/components/neves/Reveal";

const HIGHLIGHTS = [
  {
    icon: Snowflake,
    title: "Chopp a −3°C",
    desc: "Tirado na hora, sempre no ponto.",
  },
  {
    icon: Flame,
    title: "Petisco na brasa",
    desc: "Calabresa, mandioca e pão de alho.",
  },
  {
    icon: Users,
    title: "Ambiente familiar",
    desc: "A roda que não acaba.",
  },
  {
    icon: Clock,
    title: "Qua a Dom · 18h–23h",
    desc: "Happy hour toda semana.",
  },
];

export default function HighlightsStrip() {
  return (
    <section className="relative bg-obsidian border-y border-cinder-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-cinder-white/10">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={i * 90} y={16} className="px-4 sm:px-6 first:pl-0 last:pr-0">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center h-10 w-10 rounded-full border border-frost-amber/30 text-frost-amber shrink-0">
                  <h.icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="font-heading font-bold uppercase text-cinder-white text-[0.8rem] sm:text-sm leading-tight tracking-wide break-words">
                    {h.title}
                  </p>
                  <p className="text-[0.7rem] text-cinder-white/50 font-light leading-snug break-words">
                    {h.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}