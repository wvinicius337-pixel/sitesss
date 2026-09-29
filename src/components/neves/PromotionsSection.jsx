import React from "react";
import { Flame, Clock, Tag, ArrowRight } from "lucide-react";
import Reveal from "@/components/neves/Reveal";
import { WhatsAppLogo } from "./BrandLogos";
import { WHATSAPP_NUMBER } from "./orderConfig";
import { PROMOS } from "./promotionsData";

const WA_TEXT = encodeURIComponent(
  "Fala Neves! Quero aproveitar a promoção da semana. 🍻"
);
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_TEXT}`;

export default function PromotionsSection() {
  return (
    <section
      id="promocoes"
      className="relative py-24 sm:py-32 overflow-hidden bg-obsidian"
      style={{
        background:
          "linear-gradient(180deg, #0A0A0A 0%, #120c04 50%, #0A0A0A 100%)",
      }}
    >
      <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-frost-amber/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal y={28}>
          <div className="mb-14 text-center">
            <p className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-10 bg-frost-amber" />
              <span className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.4em] uppercase text-frost-amber font-medium">
                <Tag size={13} /> Promoções
              </span>
              <span className="h-px w-10 bg-frost-amber" />
            </p>
            <h2 className="font-heading font-black uppercase leading-[0.9] text-cinder-white text-[clamp(2.5rem,7vw,4.5rem)]">
              A semana <span className="text-frost-amber">tem desconto</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-cinder-white/60 font-light">
              Toda semana uma oferta nova pra você voltar. Confere o cardápio das
              promoções e avisa no WhatsApp qual você vai aproveitar.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {PROMOS.map((p, i) => (
            <Reveal key={p.day} delay={i * 90} y={28}>
              <article className="group relative h-full flex flex-col frost-blur bg-obsidian/60 border border-cinder-white/10 rounded-sm p-6 sm:p-7 hover:border-frost-amber/40 transition-colors duration-500">
                <div className="flex items-start justify-between gap-3 mb-5">
                  <span className="text-[0.65rem] tracking-[0.3em] uppercase text-cinder-white/40">
                    {p.day}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-frost-amber text-obsidian px-3 py-1 text-[0.7rem] font-bold tracking-[0.15em] uppercase">
                    <Flame size={12} /> {p.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold uppercase text-cinder-white text-2xl leading-tight group-hover:text-frost-amber transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-cinder-white/60 text-sm font-light leading-relaxed flex-1">
                  {p.desc}
                </p>

                <div className="mt-6 pt-5 border-t border-cinder-white/10 flex items-center gap-2 text-cinder-white/45 text-xs">
                  <Clock size={13} className="text-frost-amber/70" />
                  <span className="tracking-[0.1em] uppercase">{p.valid}</span>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Card CTA */}
          <Reveal delay={PROMOS.length * 90} y={28}>
            <article className="relative h-full flex flex-col justify-center items-center text-center bg-frost-amber text-obsidian rounded-sm p-7">
              <WhatsAppLogo size={34} />
              <h3 className="mt-4 font-heading font-black uppercase text-2xl leading-tight">
                Bora aproveitar?
              </h3>
              <p className="mt-2 text-obsidian/80 text-sm font-medium">
                Chama no WhatsApp e garante já a sua promoção da semana.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-obsidian text-cinder-white px-6 py-3 text-[0.7rem] font-bold tracking-[0.2em] uppercase hover:bg-cinder-white hover:text-obsidian transition-colors"
              >
                Quero a promo <ArrowRight size={15} />
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}