import React, { useState, useEffect } from "react";
import { Menu, X, MapPin } from "lucide-react";
import useScrollSpy from "@/components/neves/useScrollSpy";
import { WHATSAPP_NUMBER } from "./orderConfig";
import { InstagramLogo, WhatsAppLogo } from "./BrandLogos";

const LINKS = [
  { label: "O Boteco", href: "#intro" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Visite", href: "#visite" },
];

const SPY_IDS = ["top", "intro", "cardapio", "avaliacoes", "quem-somos", "visite"];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const active = useScrollSpy(SPY_IDS);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 80);
      if (y > 120 && y > last) setVisible(false);
      else setVisible(true);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        className={`transition-all duration-500 ${
          atTop
            ? "bg-transparent border-b border-transparent"
            : "frost-blur bg-obsidian/75 border-b border-frost-amber/20 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.7)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2 group">
            <span className="font-heading font-black text-xl tracking-tight text-cinder-white transition-colors group-hover:text-frost-amber">
              NEVES
            </span>
            <span className="font-heading font-medium text-frost-amber text-sm tracking-[0.3em] uppercase">
              Choperia
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`relative px-4 py-2 text-[0.7rem] font-medium tracking-[0.25em] uppercase transition-colors duration-300 ${
                      isActive
                        ? "text-frost-amber"
                        : "text-cinder-white/70 hover:text-frost-amber"
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute left-3 right-3 -bottom-0.5 h-px bg-frost-amber origin-center transition-transform duration-500 ease-out ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Neves+Choperia+Rua+Europa+1164+Periolo+Cascavel+PR"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-frost-amber text-obsidian px-4 py-2 text-[0.7rem] font-bold tracking-[0.2em] uppercase hover:bg-cinder-white transition-colors"
            >
              <MapPin size={14} /> Como Chegar
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Fala Neves! Quero fazer um pedido. 🍻")}`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 border border-frost-amber/40 text-frost-amber px-3 py-2 text-[0.7rem] font-bold tracking-[0.2em] uppercase hover:bg-frost-amber hover:text-obsidian transition-colors"
              aria-label="Pedir pelo WhatsApp"
            >
              <WhatsAppLogo size={16} /> Pedir
            </a>
            <a
              href="https://www.instagram.com/neves_choperia/"
              target="_blank"
              rel="noreferrer"
              className="text-cinder-white/70 hover:text-frost-amber transition-colors"
              aria-label="Instagram"
            >
              <InstagramLogo size={22} />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden text-cinder-white"
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
            open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          } border-t border-frost-amber/15 bg-obsidian/95`}
        >
          <ul className="px-5 py-4 space-y-1">
            {LINKS.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 py-2 text-sm font-medium tracking-[0.2em] uppercase transition-colors ${
                      isActive ? "text-frost-amber" : "text-cinder-white/80"
                    }`}
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive ? "w-8 bg-frost-amber" : "w-4 bg-cinder-white/30"
                      }`}
                    />
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}