import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Plus, Minus, Trash2, ShoppingBag, Send, Check } from "lucide-react";
import { useOrder } from "./OrderProvider";
import { WHATSAPP_NUMBER, formatBRL } from "./orderConfig";
import { WhatsAppLogo } from "./BrandLogos";

export default function FloatingOrder() {
  const { count, total, lines, name, obs, add, dec, remove, clear, setName, setObs } =
    useOrder();
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [bump, setBump] = useState(0);

  const handleAdd = (id) => {
    add(id);
    setBump((b) => b + 1);
  };

  const sendOrder = () => {
    if (lines.length === 0) return;
    setSending(true);
    const itemLines = lines
      .map(
        (l, i) =>
          `${i + 1}. ${l.qty}x ${l.item.name} — ${formatBRL(l.subtotal)} (${l.item.price})`
      )
      .join("\n");
    const msg =
      `*Novo pedido — Neves Choperia*\n\n` +
      (name ? `Nome: ${name}\n` : "") +
      `\nItens:\n${itemLines}\n\n` +
      `Total: ${formatBRL(total)}\n` +
      (obs ? `\nObs: ${obs}\n` : "") +
      `\nPode confirmar? 🍻`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setSending(false);
      setOpen(false);
    }, 1400);
  };

  return (
    <>
      {/* Botão flutuante */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="fab"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: 24, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="fixed bottom-5 right-5 z-50 frost-blur bg-obsidian/60 border border-frost-amber/40 rounded-full pl-4 pr-5 py-3 flex items-center gap-3 hover:border-frost-amber hover:bg-obsidian/80"
            aria-label="Abrir pedido"
          >
            <span className="relative grid place-items-center">
              <motion.span
                key={bump}
                initial={{ scale: 0.6, rotate: -12 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 14 }}
              >
                <WhatsAppLogo size={24} />
              </motion.span>
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 18 }}
                    className="absolute -top-2 -right-2 bg-frost-amber text-obsidian text-[0.6rem] font-bold rounded-full h-4 min-w-4 px-1 grid place-items-center"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
            <span className="font-heading font-bold uppercase text-sm text-cinder-white">
              {count > 0 ? `Pedir · ${formatBRL(total)}` : "Pedir"}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Painel do pedido */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="fixed bottom-5 right-5 left-5 sm:left-auto sm:w-[24rem] z-50 frost-blur bg-obsidian/90 border border-frost-amber/30 rounded-sm shadow-2xl overflow-hidden"
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-frost-amber to-transparent" />
            <div className="flex items-center justify-between px-5 py-4 border-b border-cinder-white/10">
              <div className="flex items-center gap-2">
                <motion.span
                  initial={{ rotate: -20, scale: 0.6 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <ShoppingBag size={18} className="text-frost-amber" />
                </motion.span>
                <h3 className="font-heading font-bold uppercase tracking-wide text-cinder-white">
                  Seu pedido
                </h3>
                {count > 0 && (
                  <span className="text-[0.6rem] tracking-[0.2em] uppercase text-frost-amber/80 ml-1">
                    · {count} {count === 1 ? "item" : "itens"}
                  </span>
                )}
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-cinder-white/60 hover:text-frost-amber transition-colors"
                aria-label="Fechar"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-5 py-4 max-h-[55vh] overflow-y-auto no-scrollbar">
              {lines.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-10 text-center"
                >
                  <p className="text-cinder-white/50 text-sm font-light">
                    Seu pedido tá vazio. Adiciona uns itens no cardápio pra
                    começar a roda. 🍻
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-4 text-frost-amber text-xs tracking-[0.2em] uppercase hover:underline"
                  >
                    Ver cardápio
                  </button>
                </motion.div>
              ) : (
                <ul className="space-y-2">
                  <AnimatePresence initial={false}>
                    {lines.map((l) => (
                      <motion.li
                        key={l.item.id}
                        layout
                        initial={{ opacity: 0, x: 24, height: 0 }}
                        animate={{ opacity: 1, x: 0, height: "auto" }}
                        exit={{ opacity: 0, x: -24, height: 0 }}
                        transition={{ type: "spring", stiffness: 320, damping: 30 }}
                        className="flex items-center gap-3 overflow-hidden"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-heading font-bold uppercase text-cinder-white text-sm leading-tight truncate">
                            {l.item.name}
                          </p>
                          <p className="text-cinder-white/50 text-xs">
                            {l.item.price} · {formatBRL(l.subtotal)}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 border border-cinder-white/15 rounded-sm">
                          <motion.button
                            whileTap={{ scale: 0.85 }}
                            onClick={() => dec(l.item.id)}
                            className="h-8 w-8 grid place-items-center text-cinder-white/70 hover:text-frost-amber transition-colors"
                            aria-label="Diminuir"
                          >
                            <Minus size={14} />
                          </motion.button>
                          <motion.span
                            key={l.qty}
                            initial={{ scale: 1.3 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 18 }}
                            className="w-6 text-center text-cinder-white text-sm font-medium"
                          >
                            {l.qty}
                          </motion.span>
                          <motion.button
                            whileTap={{ scale: 0.85 }}
                            onClick={() => handleAdd(l.item.id)}
                            className="h-8 w-8 grid place-items-center text-cinder-white/70 hover:text-frost-amber transition-colors"
                            aria-label="Aumentar"
                          >
                            <Plus size={14} />
                          </motion.button>
                        </div>
                        <motion.button
                          whileTap={{ scale: 0.85 }}
                          onClick={() => remove(l.item.id)}
                          className="text-cinder-white/40 hover:text-burnt-copper transition-colors"
                          aria-label="Remover"
                        >
                          <Trash2 size={15} />
                        </motion.button>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}

              {lines.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 space-y-3"
                >
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome (opcional)"
                    className="w-full bg-transparent border border-cinder-white/15 focus:border-frost-amber/50 rounded-sm px-3 py-2 text-cinder-white text-sm placeholder:text-cinder-white/30 outline-none transition-colors"
                  />
                  <textarea
                    value={obs}
                    onChange={(e) => setObs(e.target.value)}
                    placeholder="Observações (ex.: sem cebola, mais gelo)"
                    rows={2}
                    className="w-full bg-transparent border border-cinder-white/15 focus:border-frost-amber/50 rounded-sm px-3 py-2 text-cinder-white text-sm placeholder:text-cinder-white/30 outline-none transition-colors resize-none"
                  />
                </motion.div>
              )}
            </div>

            <AnimatePresence>
              {lines.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="px-5 py-4 border-t border-cinder-white/10"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[0.65rem] tracking-[0.3em] uppercase text-cinder-white/50">
                      Total
                    </span>
                    <motion.span
                      key={total}
                      initial={{ scale: 1.15, color: "hsl(41 100% 70%)" }}
                      animate={{ scale: 1, color: "hsl(41 100% 50%)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="font-heading font-bold text-frost-amber text-2xl"
                    >
                      {formatBRL(total)}
                    </motion.span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={clear}
                      className="px-3 py-3 border border-cinder-white/15 text-cinder-white/70 text-xs tracking-[0.2em] uppercase hover:border-burnt-copper hover:text-burnt-copper transition-colors rounded-sm"
                    >
                      Limpar
                    </button>
                    <motion.button
                      onClick={sendOrder}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      disabled={sending}
                      className="relative flex-1 inline-flex items-center justify-center gap-2 bg-frost-amber text-obsidian px-4 py-3 font-bold tracking-[0.15em] uppercase text-xs hover:bg-cinder-white transition-colors rounded-sm overflow-hidden disabled:opacity-90"
                    >
                      <AnimatePresence mode="wait">
                        {sending ? (
                          <motion.span
                            key="sending"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="inline-flex items-center gap-2"
                          >
                            <Check size={15} /> Abrindo WhatsApp…
                          </motion.span>
                        ) : (
                          <motion.span
                            key="idle"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="inline-flex items-center gap-2"
                          >
                            <WhatsAppLogo size={16} /> Enviar no WhatsApp
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}