import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Wine, Plus, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/neves/Reveal";
import { useOrder } from "./OrderProvider";
import { MENU_ITEMS as ITEMS } from "./orderConfig";

function AddButton({ item }) {
  const { items, add } = useOrder();
  const qty = items[item.id] || 0;
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.04 }}
      onClick={() => add(item.id)}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[0.6rem] tracking-[0.2em] uppercase font-bold rounded-sm frost-blur ${
        qty > 0
          ? "bg-frost-amber text-obsidian border border-frost-amber"
          : "bg-obsidian/40 text-cinder-white border border-cinder-white/25 hover:border-frost-amber hover:text-frost-amber"
      }`}
    >
      <motion.span
        key={qty > 0 ? "added" : "idle"}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 16 }}
        className="inline-flex items-center gap-1.5"
      >
        {qty > 0 ? (
          <>
            <Check size={12} /> {qty} no pedido
          </>
        ) : (
          <>
            <Plus size={12} /> Pedir
          </>
        )}
      </motion.span>
    </motion.button>
  );
}

export default function MenuSection() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.8, 640);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section
      id="cardapio"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0A0A0A 0%, #110d02 40%, #1a1305 100%)",
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-frost-amber/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <Reveal y={32}>
            <div>
              <p className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-frost-amber" />
                <span className="text-[0.7rem] tracking-[0.4em] uppercase text-frost-amber font-medium">
                  O Altar do Sabor
                </span>
              </p>
              <h2 className="font-heading font-black uppercase leading-[0.9] text-cinder-white text-[clamp(2.5rem,7vw,5rem)]">
                Cada item é <span className="text-frost-amber">arte</span>
              </h2>
              <p className="mt-4 max-w-lg text-cinder-white/60 font-light">
                Arraste pra ver. Cada prato tem o chopp que combina — afinal, o
                happy hour é um acordo entre o gelo e a brasa.
              </p>
            </div>
          </Reveal>
          <Reveal delay={160} y={24}>
            <div className="flex gap-3">
              <button
                onClick={() => scroll(-1)}
                className="h-12 w-12 grid place-items-center border border-cinder-white/20 text-cinder-white hover:border-frost-amber hover:text-frost-amber hover:bg-frost-amber/5 transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll(1)}
                className="h-12 w-12 grid place-items-center border border-cinder-white/20 text-cinder-white hover:border-frost-amber hover:text-frost-amber hover:bg-frost-amber/5 transition-colors"
                aria-label="Próximo"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory px-5 sm:px-8 pb-4"
      >
        {ITEMS.map((item, i) => (
          <Reveal
            key={item.name}
            delay={i * 90}
            y={42}
            className="snap-start shrink-0 w-[80%] sm:w-[60%] lg:w-[28rem]"
          >
            <article className="group h-full">
              <div className="relative aspect-[3/4] overflow-hidden border border-cinder-white/10 transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
                <span className="absolute top-4 left-4 frost-blur bg-obsidian/50 border border-frost-amber/30 px-3 py-1 text-[0.6rem] tracking-[0.25em] uppercase text-frost-amber">
                  {item.tag}
                </span>
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading font-black uppercase text-cinder-white text-3xl leading-none">
                      {item.name}
                    </h3>
                    <span className="font-heading font-bold text-frost-amber text-2xl whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-3 flex items-start gap-2 text-cinder-white/70 text-sm font-light leading-relaxed">
                    <Wine size={15} className="mt-0.5 shrink-0 text-burnt-copper" />
                    {item.pairing}
                  </p>
                  <div className="mt-4">
                    <AddButton item={item} />
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-10">
        <Reveal>
          <p className="text-cinder-white/40 text-xs tracking-[0.2em] uppercase">
            {`0${ITEMS.length}`} itens · valores sujeitos a alteração · consulte no balcão
          </p>
        </Reveal>
      </div>
    </section>
  );
}