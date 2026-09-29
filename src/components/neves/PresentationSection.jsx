import React, { useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import Reveal from "@/components/neves/Reveal";

// Vídeo de apresentação da Neves Choperia
const VIDEO_URL =
  "https://media.base44.com/videos/public/6abb38dc29f7f2f0f80b8d38/bfc6e99c8_09291.mp4";

export default function PresentationSection() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) v.play().catch(() => {});
  };

  return (
    <section
      id="apresentacao"
      className="relative py-24 sm:py-32 overflow-hidden bg-obsidian"
      style={{
        background:
          "linear-gradient(180deg, #0A0A0A 0%, #0f0c04 50%, #0A0A0A 100%)",
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] rounded-full bg-frost-amber/5 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal y={28}>
          <div className="mb-12 sm:mb-16 text-center">
            <p className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-10 bg-frost-amber" />
              <span className="text-[0.7rem] tracking-[0.4em] uppercase text-frost-amber font-medium">
                Em vídeo
              </span>
              <span className="h-px w-10 bg-frost-amber" />
            </p>
            <h2 className="font-heading font-black uppercase leading-[0.9] text-cinder-white text-[clamp(2.5rem,7vw,4.5rem)]">
              A roda <span className="text-frost-amber">aprovou</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-cinder-white/60 font-light">
              Dá uma olhada na experiência completa: o combo, o bife e o chopp
              gelado que fazem a roda aprová-la toda semana.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Vídeo */}
          <Reveal delay={140} y={32} className="lg:col-span-5">
            <div className="relative mx-auto max-w-[22rem]">
              <div className="absolute -inset-3 bg-gradient-to-b from-frost-amber/40 via-frost-amber/10 to-transparent rounded-md pointer-events-none" />
              <div className="absolute -inset-1 border border-frost-amber/30 rounded-md pointer-events-none" />
              <div className="relative rounded-md overflow-hidden border border-cinder-white/10 bg-obsidian shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
                <div className="relative w-full" style={{ aspectRatio: "9 / 16" }}>
                  <video
                    ref={videoRef}
                    src={VIDEO_URL}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <button
                    onClick={toggleSound}
                    aria-label={muted ? "Ativar som" : "Desativar som"}
                    className="absolute bottom-3 right-3 z-10 h-10 w-10 grid place-items-center rounded-full bg-obsidian/70 border border-frost-amber/40 text-frost-amber hover:bg-frost-amber hover:text-obsidian transition-colors frost-blur"
                  >
                    {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                </div>
              </div>
              <p className="mt-5 inline-flex items-center gap-2 text-cinder-white/70 text-xs tracking-[0.2em] uppercase">
                <Play size={13} className="text-frost-amber" />
                A experiência Neves em vídeo · toque para {muted ? "ouvir" : "silenciar"}
              </p>
            </div>
          </Reveal>

          {/* Conteúdo lateral */}
          <Reveal delay={240} y={24} className="lg:col-span-7">
            <div className="space-y-8 lg:pl-4">
              <blockquote className="relative pl-6 border-l-2 border-frost-amber">
                <p className="font-script text-2xl sm:text-3xl text-cinder-white/90 leading-snug">
                  “O chopp mais gelado do Periolo, o combo que sustenta a roda e
                  o clima que puxa. Vem pra Neves.”
                </p>
                <footer className="mt-3 text-[0.7rem] tracking-[0.3em] uppercase text-frost-amber/80">
                  A roda aprova · Neves Choperia
                </footer>
              </blockquote>

              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  { n: "−3°C", l: "Chopp na temperatura certa" },
                  { n: "Combo Neves", l: "Bife + petisco + chopp" },
                  { n: "18h às 23h", l: "Quarta a domingo" },
                  { n: "Periolo", l: "Rua Europa, 1164" },
                ].map((s) => (
                  <li
                    key={s.l}
                    className="frost-blur border border-cinder-white/10 bg-obsidian/40 rounded-sm px-4 py-3"
                  >
                    <p className="font-heading font-bold text-frost-amber text-xl leading-none">
                      {s.n}
                    </p>
                    <p className="mt-1 text-cinder-white/60 text-xs tracking-[0.15em] uppercase">
                      {s.l}
                    </p>
                  </li>
                ))}
              </ul>

              <a
                href="#cardapio"
                className="inline-flex items-center gap-3 bg-frost-amber text-obsidian px-6 py-3 font-bold tracking-[0.2em] uppercase text-xs hover:bg-cinder-white transition-colors"
              >
                <Play size={15} /> Quero provar também
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}