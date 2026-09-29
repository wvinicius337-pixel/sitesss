import React from "react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/neves/Reveal";

const POUR_IMG =
  "https://media.base44.com/images/public/6abb38dc29f7f2f0f80b8d38/7e2bf4001_insta-stories-viewerorg_Instagram__3689952406393661228.webp";

export default function AtmosphereSection() {
  return (
    <section className="relative bg-obsidian py-24 sm:py-32 overflow-hidden">
      <div className="absolute -top-32 right-1/4 w-[32rem] h-[32rem] rounded-full bg-frost-amber/8 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal y={28}>
          <div className="mb-12 max-w-2xl">
            <p className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-frost-amber" />
              <span className="text-[0.7rem] tracking-[0.4em] uppercase text-frost-amber font-medium">
                O Clima da Casa
              </span>
            </p>
            <h2 className="font-heading font-black uppercase leading-[0.9] text-cinder-white text-[clamp(2.5rem,7vw,5rem)]">
              A roda que <span className="text-frost-amber">não acaba</span>
            </h2>
            <p className="mt-4 max-w-lg text-cinder-white/60 font-light">
              Sexta à noite, mesa cheia, chopp gelado e risada no ar. O happy
              hour da Neves começa cedo e só acaba quando o último copo esvazia.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Big feature */}
          <Reveal y={36} className="lg:col-span-7">
            <div className="relative aspect-[4/3] lg:aspect-auto h-full min-h-[20rem] overflow-hidden border border-cinder-white/10 group">
              <video
                src="https://media.base44.com/videos/public/6abb38dc29f7f2f0f80b8d38/4ed4b1e12_insta-stories-viewerorg_Instagram_neves_choperia_3380357148424055005.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[0.65rem] tracking-[0.3em] uppercase text-frost-amber mb-2">
                  Sexta à noite
                </p>
                <h3 className="font-heading font-black uppercase text-cinder-white text-3xl sm:text-4xl leading-none">
                  A roda que não acaba
                </h3>
              </div>
            </div>
          </Reveal>

          {/* Right column */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            <Reveal delay={140} y={28}>
              <div className="relative aspect-square overflow-hidden border border-cinder-white/10 group">
                <Image
                  src={POUR_IMG}
                  alt="Mesa com chopp e petiscos da Neves"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-heading font-bold uppercase text-frost-amber text-xl">
                    No ponto
                  </p>
                  <p className="text-[0.6rem] tracking-[0.25em] uppercase text-cinder-white/60">
                    tirado na hora
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={260} y={28}>
              <div className="relative flex-1 min-h-[12rem] overflow-hidden border border-cinder-white/10 group">
                <video
                  src="https://media.base44.com/videos/public/6abb38dc29f7f2f0f80b8d38/9ef759303_insta-stories-viewerorg_Instagram__3932644822229583701.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-heading font-bold uppercase text-burnt-copper text-xl">
                    Pra dividir
                  </p>
                  <p className="text-[0.6rem] tracking-[0.25em] uppercase text-cinder-white/60">
                    petisco da casa
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}