import React from "react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/neves/Reveal";

const FACADE_IMG =
  "https://media.base44.com/images/public/6abb38dc29f7f2f0f80b8d38/316fd1922_insta-stories-viewerorg_Instagram__3902887970579908799.jpg";

export default function IntroSection() {
  return (
    <section id="intro" className="relative bg-obsidian py-24 sm:py-32 overflow-hidden">
      {/* amber glow */}
      <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-frost-amber/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-[24rem] h-[24rem] rounded-full bg-burnt-copper/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal y={36}>
          <div>
            <p className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-burnt-copper" />
              <span className="text-[0.7rem] tracking-[0.4em] uppercase text-burnt-copper font-medium">
                O Primeiro Gole
              </span>
            </p>
            <h2 className="font-heading font-black uppercase leading-[0.9] text-cinder-white text-[clamp(2.5rem,6vw,4.5rem)]">
              Um boteco que <span className="text-frost-amber">vira</span> instituição
            </h2>
            <div className="mt-8 space-y-5 text-cinder-white/70 leading-relaxed font-light">
              <p>
                A Neves nasceu daquela coisa simples: chopp tirado na temperatura
                certa, comida honesta feita na hora e gente de verdade do outro
                lado do balcão. Nada de frescura — só o essencial bem feito.
              </p>
              <p>
                Aqui o petisco é caprichado e o copo
                sempre chega embaçado de tão gelado. É o lugar de encontrar os
                amigos, encerrar o dia e começar a noite — no Periolo, em
                Cascavel.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <Stat value="5.0" label="Avaliação Google" />
              <Stat value="−3°C" label="Chopp na temperatura" />
              <Stat value="Qua–Dom" label="18h às 23h" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={180} y={-28}>
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-frost-amber/20">
              <Image
                src={FACADE_IMG}
                alt="Fachada da Neves Choperia e Petiscaria à noite"
                className="w-full h-full object-cover"
                fittingType="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 frost-blur bg-obsidian/60 border border-frost-amber/30 px-5 py-3">
              <p className="font-script text-frost-amber text-2xl leading-none">Neves Choperia</p>
              <p className="text-[0.6rem] tracking-[0.25em] uppercase text-cinder-white/60 mt-1">
                A nossa casa
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-heading font-black text-frost-amber text-3xl leading-none">{value}</p>
      <p className="mt-2 text-[0.65rem] tracking-[0.2em] uppercase text-cinder-white/50 leading-snug">
        {label}
      </p>
    </div>
  );
}