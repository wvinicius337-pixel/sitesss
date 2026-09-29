import React, { useRef, useEffect, useState } from "react";

/**
 * Reveal — anima o conteúdo quando ele entra (rolando pra baixo) e sai
 * (rolando pra cima) da tela. Re-dispara toda vez que o elemento cruza
 * o viewport, dando a sensação de movimento nos dois sentidos.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 32,
  x = 0,
  once = false,
  threshold = 0.15,
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const locked = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) {
              locked.current = true;
              io.disconnect();
            }
          } else if (!locked.current) {
            setShown(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -6% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  return (
    <Tag
      ref={ref}
      className={`transition-all will-change-transform ${
        shown ? "opacity-100 blur-0" : "opacity-0 blur-[2px]"
      } ${className}`}
      style={{
        transform: shown ? "translate(0,0)" : `translate(${x}px, ${y}px)`,
        transitionDuration: "900ms",
        transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}