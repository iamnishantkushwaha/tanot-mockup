"use client";
import { useEffect } from "react";

/** Animates every [data-cu] element from 0 to its target once it scrolls into view. */
export function CountUp() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-cu]"));
    if (!els.length) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const run = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.cu ?? "0");
      const dec = parseInt(el.dataset.decimals ?? "0", 10);
      const suf = el.dataset.suffix ?? "";
      const pre = el.dataset.prefix ?? "";
      const dur = 1800;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 4); // easeOutQuart
        el.textContent = pre + (target * e).toFixed(dec) + suf;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if (reduce) return;
    els.forEach((el) => (el.textContent = (el.dataset.prefix ?? "") + (0).toFixed(parseInt(el.dataset.decimals ?? "0", 10)) + (el.dataset.suffix ?? "")));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            run(en.target as HTMLElement);
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.6 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
