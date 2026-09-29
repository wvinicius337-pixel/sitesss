import React from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/neves/Reveal";
import { WHATSAPP_NUMBER } from "./orderConfig";
import { WhatsAppLogo } from "./BrandLogos";

export default function CtaBanner() {
  const msg = encodeURIComponent(
    "Fala Neves! Quero reservar uma mesa. 🍻"
  );
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

  return (
    <section className="relative bg-obsidian py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-burnt-copper/15 via-transparent to-frost-amber/15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[16rem] bg-frost-amber/8 blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <Reveal y={28}>
          <p className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-frost-amber" />
            <span className="text-[0.7rem] tracking-[0.4em] uppercase text-frost-amber font-medium">
              Bora marcar
            </span>
            <span className="h-px w-10 bg-frost-amber" />
          </p>
          <h2 className="font-heading font-black uppercase leading-[0.9] text-cinder-white text-[clamp(2.5rem,7vw,4.5rem)]">
            Sua mesa tá <span className="text-frost-amber">reservada</span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-cinder-white/65 font-light">
            Chope gelado, petisco caprichado e a roda te esperando. Fala com a
            gente no WhatsApp e garante seu lugar no happy hour.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-frost-amber text-obsidian px-7 py-4 font-bold tracking-[0.2em] uppercase text-xs hover:bg-cinder-white transition-colors"
            >
              <WhatsAppLogo size={18} /> Reservar pelo WhatsApp
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#cardapio"
              className="inline-flex items-center gap-3 border border-cinder-white/30 text-cinder-white px-7 py-4 font-medium tracking-[0.2em] uppercase text-xs hover:border-frost-amber hover:text-frost-amber transition-colors"
            >
              Ver o Cardápio
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}