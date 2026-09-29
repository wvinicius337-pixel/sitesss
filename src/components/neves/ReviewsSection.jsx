import React from "react";
import { Star, Quote } from "lucide-react";
import Reveal from "@/components/neves/Reveal";

// Avaliações REAIS do Google Maps, capturadas em 09/2026.
// Nota 5,0 · 693 avaliações. Fonte: Google Maps via Restaurant Guru.
const RATING = 5.0;
const COUNT = 693;

const REVIEWS = [
  {
    author: "Rosangela Aparecida",
    rating: 5,
    text: "Atendimento de primeira!! Ambiente familiar... amo.",
  },
  {
    author: "Selmo José Carlos",
    rating: 5,
    text: "Foi top, atendimento e o clima bem bom, a comida estava maravilhosa.",
  },
  {
    author: "Cmp Tricolor",
    rating: 5,
    text: "Melhor do sul do mundo. Tudo muito bem feito, atendimento nota 10.",
  },
  {
    author: "Ana Claudia Camargo",
    rating: 5,
    text: "Ambiente agradável, comidas com sabor maravilhoso, super recomendo.",
  },
  {
    author: "Milena Lopes",
    rating: 5,
    text: "A comida e o atendimento são muito bons, valor justo!",
  },
  {
    author: "Natalya Hauanna",
    rating: 5,
    text: "Atendimento e comida excelente! Voltaremos mais vezes.",
  },
  {
    author: "Cris Lubke",
    rating: 5,
    text: "Ambiente familiar, atendimento personalizado e a melhor batata recheada da cidade.",
  },
  {
    author: "Luiz Fernando Silva",
    rating: 5,
    text: "Cerveja gelada, comida excelente, atendimento nota 10.",
  },
  {
    author: "Adriano David Ferreira",
    rating: 5,
    text: "O melhor lugar de Cascavel. Atendimento impecável, sabor nota mil, super recomendo.",
  },
  {
    author: "Emanuely Guedes",
    rating: 5,
    text: "Ótimo lugar para se descontrair do dia a dia, ótimo o cardápio.",
  },
  {
    author: "Thiago Leibante",
    rating: 5,
    text: "Ótimo lugar! Fomos pelo Tour. Comida muito boa e excelente atendimento.",
  },
  {
    author: "Tiago Henrique Gomes",
    rating: 5,
    text: "Sempre muito bem atendido.",
  },
];

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Neves+Choperia+Rua+Europa+1164+Periolo+Cascavel+PR";

function Stars({ n, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={
            i <= Math.round(n)
              ? "fill-frost-amber text-frost-amber"
              : "text-cinder-white/20"
          }
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section
      id="avaliacoes"
      className="relative py-24 sm:py-32 overflow-hidden bg-obsidian"
    >
      <div className="absolute top-0 left-1/3 w-[36rem] h-[20rem] bg-frost-amber/6 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal y={32}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-frost-amber" />
                <span className="text-[0.7rem] tracking-[0.4em] uppercase text-frost-amber font-medium">
                  Quem provou, contou
                </span>
              </p>
              <h2 className="font-heading font-black uppercase leading-[0.9] text-cinder-white text-[clamp(2.5rem,7vw,5rem)]">
                A roda <span className="text-frost-amber">aprova</span>
              </h2>
              <p className="mt-4 max-w-lg text-cinder-white/60 font-light">
                Avaliações reais do Google Maps. Quem senta na mesa da Neves
                sempre volta — e deixa registrado.
              </p>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 frost-blur bg-obsidian/50 border border-frost-amber/25 px-6 py-4 hover:border-frost-amber/50 transition-colors"
            >
              <span className="font-heading font-black text-frost-amber text-5xl leading-none">
                {RATING.toFixed(1).replace(".", ",")}
              </span>
              <div>
                <Stars n={RATING} size={16} />
                <p className="mt-1 text-[0.65rem] tracking-[0.25em] uppercase text-cinder-white/50">
                  {COUNT} avaliações no Google
                </p>
              </div>
            </a>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 6).map((r, i) => (
            <Reveal key={i} delay={i * 80} y={28}>
              <article className="h-full flex flex-col border border-cinder-white/10 bg-obsidian/40 p-6 hover:border-frost-amber/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full grid place-items-center bg-frost-amber/15 text-frost-amber font-heading font-bold uppercase">
                      {r.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-heading font-bold uppercase text-cinder-white text-sm leading-tight">
                        {r.author}
                      </p>
                      <Stars n={r.rating} />
                    </div>
                  </div>
                  <Quote size={22} className="text-frost-amber/30 shrink-0" />
                </div>
                <p className="text-cinder-white/70 text-sm font-light leading-relaxed flex-1">
                  {r.text}
                </p>
                <p className="mt-4 text-[0.6rem] tracking-[0.25em] uppercase text-cinder-white/30">
                  no Google
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-frost-amber text-xs tracking-[0.2em] uppercase hover:underline"
            >
              <Star size={14} /> Ver todas as avaliações no Google Maps
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}