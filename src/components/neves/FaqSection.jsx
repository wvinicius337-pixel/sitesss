import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "@/components/neves/Reveal";

const FAQS = [
  {
    q: "Como faço meu pedido?",
    a: "É só escolher os itens no cardápio, montar seu pedido no botão \"Pedir\" e enviar direto no WhatsApp da Neves. A gente confirma tudo pelo chat.",
  },
  {
    q: "Preciso pagar adiantado?",
    a: "Não. O pedido é confirmado pelo WhatsApp e você paga na hora, seja na retirada ou na entrega.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Aceitamos dinheiro, Pix e cartão (débito e crédito). O Pix pode ser feito direto no WhatsApp.",
  },
  {
    q: "Vocês entregam ou é só retirar?",
    a: "Tem as duas. Você pode retirar no balcão ou combinar a entrega pelo WhatsApp, conforme a região.",
  },
  {
    q: "Qual o horário dos pedidos?",
    a: "Atendemos de quarta a domingo, das 18h às 23h. Pedidos fora desse horário são confirmados no próximo dia de funcionamento.",
  },
  {
    q: "Posso fazer reserva de mesa?",
    a: "Pode! É só mandar uma mensagem no WhatsApp pedindo a reserva que a gente garante seu lugar.",
  },
];

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="border-b border-cinder-white/10">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-6 py-5 text-left group"
      >
        <span
          className={`font-heading font-bold uppercase tracking-wide text-lg transition-colors ${
            open ? "text-frost-amber" : "text-cinder-white group-hover:text-frost-amber"
          }`}
        >
          {item.q}
        </span>
        <span className="grid place-items-center h-8 w-8 shrink-0 border border-cinder-white/15 rounded-sm text-frost-amber">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-cinder-white/65 font-light leading-relaxed">
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="relative bg-obsidian py-24 sm:py-32 overflow-hidden">
      <div className="absolute -top-24 left-1/3 w-[30rem] h-[30rem] rounded-full bg-frost-amber/6 blur-[130px] pointer-events-none" />
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <Reveal y={28}>
          <div className="mb-12 text-center">
            <p className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-10 bg-frost-amber" />
              <span className="text-[0.7rem] tracking-[0.4em] uppercase text-frost-amber font-medium">
                Tira-dúvidas
              </span>
              <span className="h-px w-10 bg-frost-amber" />
            </p>
            <h2 className="font-heading font-black uppercase leading-[0.9] text-cinder-white text-[clamp(2.5rem,7vw,4.5rem)]">
              Antes de <span className="text-frost-amber">pedir</span>
            </h2>
            <p className="mt-4 text-cinder-white/60 font-light">
              Como funciona o pedido no WhatsApp e as formas de pagamento.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} y={24}>
          <div>
            {FAQS.map((item, i) => (
              <FaqItem key={i} item={item} index={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}