import React from "react";
import { Heart } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/neves/Reveal";
import { InstagramLogo } from "./BrandLogos";

const COUPLE_IMG =
  "https://media.base44.com/images/public/6abb38dc29f7f2f0f80b8d38/17dcbcf38_insta-stories-viewerorg_Instagram__3033294770877949006.webp";

export default function OwnersSection() {
  return (
    <section
      id="quem-somos"
      className="relative bg-obsidian py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute -bottom-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-burnt-copper/10 blur-[120px] pointer-events-none" />
      <div className="absolute -top-32 right-0 w-[28rem] h-[28rem] rounded-full bg-frost-amber/8 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal y={28}>
          <div className="mb-14 text-center">
            <p className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-10 bg-burnt-copper" />
              <span className="text-[0.7rem] tracking-[0.4em] uppercase text-burnt-copper font-medium">
                Quem Somos
              </span>
              <span className="h-px w-10 bg-burnt-copper" />
            </p>
            <h2 className="font-heading font-black uppercase leading-[0.9] text-cinder-white text-[clamp(2.5rem,7vw,5rem)]">
              Elson & <span className="text-frost-amber">Leidi</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Portrait */}
          <Reveal y={36} x={-24}>
            <div className="relative aspect-[4/5] overflow-hidden border border-cinder-white/10 group">
              <Image
                src={COUPLE_IMG}
                alt="Elson e Leidi, donos da Neves Choperia"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                fittingType="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="font-heading font-black uppercase text-cinder-white text-3xl leading-none">
                    Elson & Leidi
                  </p>
                  <p className="text-[0.65rem] tracking-[0.25em] uppercase text-frost-amber mt-2">
                    Os donos do boteco
                  </p>
                </div>
                <Heart className="text-burnt-copper" size={22} fill="currentColor" />
              </div>
            </div>
          </Reveal>

          {/* Story */}
          <Reveal delay={180} x={24}>
            <div className="flex flex-col">
              <div className="relative frost-blur bg-obsidian/40 border border-cinder-white/10 p-8 sm:p-10">
                <p className="font-script text-cinder-white text-3xl sm:text-4xl leading-snug">
                  "A Neves é a nossa casa — e a porta tá sempre aberta. O chopp
                  gelado a gente garante; a risada da galera é por conta de vocês."
                </p>
                <p className="mt-6 text-[0.7rem] tracking-[0.3em] uppercase text-cinder-white/50">
                  — Elson & Leidi, donos da Neves
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://www.instagram.com/elson6482/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 frost-blur bg-obsidian/40 border border-cinder-white/10 hover:border-frost-amber/60 p-4 transition-colors"
                >
                  <span className="grid place-items-center h-11 w-11 rounded-full border border-cinder-white/15 overflow-hidden group-hover:bg-frost-amber transition-colors">
                    <InstagramLogo size={22} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-heading font-black text-frost-amber text-xl leading-none">
                      Elson
                    </span>
                    <span className="block mt-1.5 text-[0.65rem] tracking-[0.2em] uppercase text-cinder-white/55 leading-snug">
                      No balcão · @elson6482
                    </span>
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/leidi_meri/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 frost-blur bg-obsidian/40 border border-cinder-white/10 hover:border-frost-amber/60 p-4 transition-colors"
                >
                  <span className="grid place-items-center h-11 w-11 rounded-full border border-cinder-white/15 overflow-hidden group-hover:bg-frost-amber transition-colors">
                    <InstagramLogo size={22} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-heading font-black text-frost-amber text-xl leading-none">
                      Leidi
                    </span>
                    <span className="block mt-1.5 text-[0.65rem] tracking-[0.2em] uppercase text-cinder-white/55 leading-snug">
                      Na casa · @leidi_meri
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}