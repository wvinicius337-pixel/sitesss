import React, { useState, useEffect } from "react";
import { Flame, ArrowRight, Clock } from "lucide-react";
import Reveal from "@/components/neves/Reveal";
import { WhatsAppLogo } from "./BrandLogos";
import { WHATSAPP_NUMBER } from "./orderConfig";
import { PROMOS } from "./promotionsData";

const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Fala Neves! Quero aproveitar a promoção da semana. 🍻"
)}`;

const WEEKDAYS = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

export default function PromoBanner() {
  const [today, setToday] = useState(null);

  useEffect(() => {
    const wd = WEEKDAYS[new Date().getDay()];
    setToday(PROMOS.find((p) => p.day === wd) || PROMOS[0]);
  }, []);

  if (!today) return null;

  return (
    <section className="relative bg-obsidian py-10 sm:py-14">
      <div className="absolute inset-0 bg-gradient-to-r from-frost-amber/10 via-transparent to-frost-amber/10 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal y={20}>
          <div className="relative overflow-hidden rounded-sm border border-frost-amber/40 bg-gradient-to-br from-deep-amber via-obsidian to-obsidian shadow-[0_20px_60px_-20px_rgba(255,184,0,0.35)]">
            {/* Glow */}
            <div className="absolute -top-1/2 -right-10 w-72 h-72 rounded-full bg-frost-amber/20 blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-1/2 -left-10 w-72 h-72 rounded-full bg-burnt-copper/15 blur-[90px] pointer-events-none" />

            <div className="relative grid md:grid-cols-12 items-center gap-6 p-6 sm:p-8 lg:p-10">
              {/* Badge / label */}
              <div className="md:col-span-3 flex md:flex-col items-start gap-3">
                <span className="inline-flex items-center gap-2 bg-frost-amber text-obsidian px-4 py-2 text-[0.7rem] font-black tracking-[0.25em] uppercase">
                  <Flame size={14} /> Promo da vez
                </span>
                <span className="text-[0.65rem] tracking-[0.3em] uppercase text-cinder-white/45">
                  {today.day}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="md:col-span-6">
                <h3 className="font-heading font-black uppercase leading-[0.95] text-cinder-white text-[clamp(1.75rem,4vw,2.75rem)]">
                  {today.title}{" "}
                  <span className="text-frost-amber">· {today.badge}</span>
                </h3>
                <p className="mt-2 text-cinder-white/70 text-sm sm:text-base font-light leading-relaxed max-w-lg">
                  {today.desc}
                </p>
                <p className="mt-3 inline-flex items-center gap-2 text-cinder-white/50 text-xs">
                  <Clock size={13} className="text-frost-amber/70" />
                  <span className="tracking-[0.1em] uppercase">{today.valid}</span>
                </p>
              </div>

              {/* CTA */}
              <div className="md:col-span-3 flex md:justify-end">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 bg-frost-amber text-obsidian px-6 py-4 font-black tracking-[0.2em] uppercase text-xs hover:bg-cinder-white transition-colors"
                >
                  <WhatsAppLogo size={18} />
                  Quero a promo
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* Faixa inferior pulsante */}
            <div className="h-1 w-full bg-gradient-to-r from-burnt-copper via-frost-amber to-burnt-copper animate-pulse" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}