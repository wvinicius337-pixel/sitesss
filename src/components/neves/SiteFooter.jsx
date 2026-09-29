import React from "react";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import Reveal from "@/components/neves/Reveal";
import { InstagramLogo, WhatsAppLogo } from "./BrandLogos";
import { WHATSAPP_NUMBER } from "./orderConfig";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Fala Neves! Quero reservar uma mesa. 🍻"
)}`;
const MAPS_DIR =
  "https://www.google.com/maps/dir/?api=1&destination=Neves+Choperia+Rua+Europa+1164+Periolo+Cascavel+PR";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Neves%20Choperia%20Rua%20Europa%201164%20Periolo%20Cascavel%20PR&z=15&output=embed";

export default function SiteFooter() {
  return (
    <footer id="visite" className="relative bg-obsidian">
      {/* Full-width map band */}
      <div className="relative h-[60vh] min-h-[24rem] w-full overflow-hidden">
        <iframe
          title="Mapa Neves Choperia"
          src={MAPS_EMBED}
          className="absolute inset-0 w-full h-full grayscale contrast-125 opacity-55"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/30" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-5 sm:px-8 flex flex-col justify-center">
          <Reveal y={32}>
            <div className="max-w-xl frost-blur bg-obsidian/50 border border-frost-amber/25 p-8 sm:p-10">
              <p className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-frost-amber" />
                <span className="text-[0.7rem] tracking-[0.4em] uppercase text-frost-amber font-medium">
                  Visite
                </span>
              </p>
              <h2 className="font-heading font-black uppercase leading-[0.9] text-cinder-white text-[clamp(2.5rem,7vw,4.5rem)]">
                Sua mesa <span className="text-frost-amber">te espera</span>
              </h2>
              <p className="mt-4 text-cinder-white/70 font-light">
                Chega, senta e pede o primeiro. A gente cuida do resto.
              </p>
              <a
                href={MAPS_DIR}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-3 bg-cinder-white text-obsidian px-7 py-4 font-bold tracking-[0.2em] uppercase text-xs hover:bg-frost-amber transition-colors"
              >
                <Navigation size={16} /> Traçar rota
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Info bar */}
      <div className="border-t border-cinder-white/10 bg-obsidian">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid gap-8 md:gap-10 md:grid-cols-12">
          {/* Marca + social */}
          <Reveal y={24} className="md:col-span-4">
            <div className="flex items-baseline gap-2">
              <span className="font-heading font-black text-3xl tracking-tight text-cinder-white">
                NEVES
              </span>
              <span className="font-heading font-medium text-frost-amber text-sm tracking-[0.3em] uppercase">
                Choperia
              </span>
            </div>
            <p className="mt-4 text-cinder-white/50 text-sm font-light leading-relaxed max-w-xs">
              Tradição em estado líquido. Chopp gelado, petisco caprichado e o
              melhor happy hour do Periolo.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialBtn href={WHATSAPP_LINK} label="WhatsApp">
                <WhatsAppLogo size={22} />
              </SocialBtn>
              <SocialBtn
                href="https://www.instagram.com/neves_choperia/"
                label="Instagram"
              >
                <InstagramLogo size={22} />
              </SocialBtn>
              <a
                href="tel:+5545999228422"
                className="h-11 w-11 grid place-items-center rounded-full border border-cinder-white/15 text-cinder-white/70 hover:border-frost-amber hover:text-frost-amber hover:bg-frost-amber/5 transition-colors"
                aria-label="Ligar"
              >
                <Phone size={18} />
              </a>
            </div>
          </Reveal>

          {/* Endereço */}
          <Reveal delay={100} y={24} className="md:col-span-3">
            <InfoCol icon={<MapPin size={18} />} title="Endereço">
              <p>R. Europa, 1164 — Periolo</p>
              <p>Cascavel — PR · 85817-310</p>
              <a
                href={MAPS_DIR}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-frost-amber text-[0.65rem] tracking-[0.25em] uppercase hover:underline"
              >
                <Navigation size={13} /> Traçar rota
              </a>
            </InfoCol>
          </Reveal>

          {/* Horário */}
          <Reveal delay={200} y={24} className="md:col-span-2">
            <InfoCol icon={<Clock size={18} />} title="Horário">
              <p>Quarta a Domingo</p>
              <p className="font-heading font-bold text-cinder-white text-base">
                18h às 23h
              </p>
              <p className="text-cinder-white/40 mt-1">Seg &amp; Ter · fechado</p>
            </InfoCol>
          </Reveal>

          {/* Contato */}
          <Reveal delay={300} y={24} className="md:col-span-3">
            <InfoCol icon={<Phone size={18} />} title="Contato">
              <a
                href="tel:+5545999228422"
                className="font-heading font-bold text-cinder-white text-lg hover:text-frost-amber transition-colors"
              >
                (45) 99922-8422
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 bg-frost-amber text-obsidian px-4 py-2 text-[0.65rem] tracking-[0.2em] uppercase font-bold hover:bg-cinder-white transition-colors"
              >
                <WhatsAppLogo size={14} /> Pedir no WhatsApp
              </a>
              <a
                href="https://www.instagram.com/neves_choperia/"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-cinder-white/70 hover:text-frost-amber transition-colors text-sm"
              >
                <InstagramLogo size={16} /> @neves_choperia
              </a>
            </InfoCol>
          </Reveal>
        </div>

        <div className="border-t border-cinder-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-cinder-white/40 text-xs">
            <p>© {new Date().getFullYear()} Neves Choperia e Petiscaria · Cascavel/PR</p>
            <p className="font-script text-frost-amber/70 text-base">
              "O gelo encontra a brasa."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="h-11 w-11 grid place-items-center rounded-full border border-frost-amber/40 text-frost-amber hover:bg-frost-amber hover:text-obsidian transition-colors"
    >
      {children}
    </a>
  );
}

function InfoCol({ icon, title, children }) {
  return (
    <div className="h-full frost-blur bg-obsidian/40 border border-cinder-white/10 rounded-sm p-5">
      <p className="flex items-center gap-3 text-frost-amber text-[0.65rem] tracking-[0.3em] uppercase font-medium mb-4">
        <span className="h-8 w-8 grid place-items-center rounded-full bg-frost-amber/10 border border-frost-amber/25">
          {icon}
        </span>
        {title}
      </p>
      <div className="space-y-1 text-cinder-white/70 text-sm font-light leading-relaxed">
        {children}
      </div>
    </div>
  );
}