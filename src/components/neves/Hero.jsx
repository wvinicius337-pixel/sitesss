import React from "react";
import { ArrowDown, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-obsidian">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          src="https://media.base44.com/videos/public/6abb38dc29f7f2f0f80b8d38/6e9b8cf19_insta-stories-viewerorg_Instagram_neves_choperia_3449935722084308131.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/65 to-obsidian/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 min-h-[100svh] flex flex-col justify-center pt-24 pb-28">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 mb-6 animate-fade-in">
            <span className="h-px w-12 bg-frost-amber" />
            <span className="text-[0.7rem] tracking-[0.4em] uppercase text-frost-amber font-medium">
              Cascavel · PR · desde sempre
            </span>
          </p>

          <h1 className="font-heading font-black uppercase leading-[0.85] tracking-tight text-cinder-white animate-fade-up">
            <span className="block text-[clamp(3.5rem,12vw,9rem)]">Tradição</span>
            <span className="block text-[clamp(3.5rem,12vw,9rem)] text-frost-amber">
              em estado
            </span>
            <span className="block text-[clamp(3.5rem,12vw,9rem)]">líquido</span>
          </h1>

          <p className="mt-8 max-w-xl text-cinder-white/75 text-lg leading-relaxed font-light animate-fade-up [animation-delay:150ms]">
            O chopp mais gelado do Periolo, o petisco que
            combina com a roda e o clima que puxa. O happy hour começa aqui —
            quarta a domingo, sempre tem mesa boa.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:300ms]">
            <a
              href="#cardapio"
              className="group inline-flex items-center gap-3 bg-frost-amber text-obsidian px-7 py-4 font-bold tracking-[0.2em] uppercase text-xs hover:bg-cinder-white transition-colors"
            >
              Ver o Cardápio
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#visite"
              className="inline-flex items-center gap-3 border border-cinder-white/30 text-cinder-white px-7 py-4 font-medium tracking-[0.2em] uppercase text-xs hover:border-frost-amber hover:text-frost-amber transition-colors"
            >
              <MapPin size={16} /> Como Chegar
            </a>
          </div>
        </div>
      </div>

      {/* Floating status widget */}
      <div className="absolute bottom-6 right-5 sm:right-8 z-20 frost-blur bg-obsidian/40 border border-frost-amber/30 rounded-sm px-5 py-4 animate-fade-in [animation-delay:600ms]">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-frost-amber opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-frost-amber" />
          </span>
          <div>
            <p className="text-[0.6rem] tracking-[0.3em] uppercase text-cinder-white/60">
              Status
            </p>
            <p className="font-heading font-bold text-frost-amber text-lg leading-none">
              Live &amp; Cold · −3°C
            </p>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-5 sm:left-8 z-20 flex items-center gap-2 text-cinder-white/40 animate-fade-in [animation-delay:800ms]">
        <ArrowDown size={14} className="animate-bounce" />
        <span className="text-[0.6rem] tracking-[0.3em] uppercase">Role pra descer</span>
      </div>
    </section>
  );
}