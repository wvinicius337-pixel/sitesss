import { useEffect, useState } from "react";

/**
 * useScrollSpy — retorna o id da seção atualmente em destaque no viewport.
 * Usa IntersectionObserver em cada seção observada.
 */
export default function useScrollSpy(ids, offset = "-45% 0px -50% 0px") {
  const [active, setActive] = useState(ids[0] || "");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const visible = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        });
        let best = "";
        let bestRatio = 0;
        visible.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        });
        if (best) setActive(best);
      },
      { rootMargin: offset, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, [ids.join(","), offset]);

  return active;
}