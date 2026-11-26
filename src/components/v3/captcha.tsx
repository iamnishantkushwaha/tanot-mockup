"use client";
import { useEffect } from "react";

const CONSONANTS = "bcdfghjkmnprstvwxz";
const VOWELS = "aeiou";
/** Fresh pronounceable 5-letter word every time (no ambiguous letters like l/i/o/q), so words never repeat. */
const makeWord = () => {
  let w = "";
  for (let i = 0; i < 5; i++) {
    const set = i % 2 === 0 ? CONSONANTS : VOWELS;
    w += set[Math.floor(Math.random() * set.length)];
  }
  return w;
};

/** Human check for the lead forms: distorted word on a canvas with live feedback; blocks submit until solved. */
export function Captcha() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    document.querySelectorAll<HTMLElement>("[data-captcha]").forEach((box) => {
      const q = box.querySelector<HTMLCanvasElement>("[data-captcha-q]");
      const a = box.querySelector<HTMLInputElement>("[data-captcha-a]");
      const err = box.querySelector<HTMLElement>("[data-captcha-err]");
      const hint = box.querySelector<HTMLElement>("[data-captcha-hint]");
      const icon = box.querySelector<HTMLElement>("[data-captcha-icon]");
      const tick = box.querySelector<SVGElement>("[data-captcha-tick]");
      const refresh = box.querySelector<HTMLElement>("[data-captcha-refresh]");
      const form = box.closest("form");
      if (!q || !a || !form) return;
      let answer = "";
      const setOk = (ok: boolean) => {
        box.dataset.ok = String(ok);
        if (hint) hint.textContent = ok ? "Verified, thank you" : "Type the word you see";
        tick?.classList.toggle("opacity-0", !ok);
        icon?.classList.toggle("bg-lime", ok);
        icon?.classList.toggle("text-navy-900", ok);
        icon?.classList.toggle("bg-navy-900", !ok);
        icon?.classList.toggle("text-lime", !ok);
      };
      const draw = (word: string) => {
        const ctx = q.getContext("2d");
        if (!ctx) return;
        const { width: w, height: h } = q;
        ctx.clearRect(0, 0, w, h);
        const g = ctx.createLinearGradient(0, 0, w, h);
        g.addColorStop(0, "#eef6fc");
        g.addColorStop(1, "#f6fbe6");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
        const rnd = (n: number) => Math.random() * n;
        for (let i = 0; i < 6; i++) {
          ctx.strokeStyle = `rgba(10,22,40,${0.18 + rnd(0.2)})`;
          ctx.lineWidth = 1 + rnd(1.2);
          ctx.beginPath();
          ctx.moveTo(rnd(w), rnd(h));
          ctx.bezierCurveTo(rnd(w), rnd(h), rnd(w), rnd(h), rnd(w), rnd(h));
          ctx.stroke();
        }
        const colors = ["#0a1628", "#0f78b6", "#3f8f2a", "#0c5f93"];
        const step = (w - 20) / word.length;
        [...word].forEach((ch, i) => {
          ctx.save();
          ctx.translate(12 + i * step + step / 2, h / 2 + (rnd(8) - 4));
          ctx.rotate((rnd(40) - 20) * (Math.PI / 180));
          ctx.font = `${700} ${24 + Math.floor(rnd(6))}px Georgia, serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = colors[Math.floor(rnd(colors.length))];
          ctx.fillText(ch, 0, 0);
          ctx.restore();
        });
        for (let i = 0; i < 40; i++) {
          ctx.fillStyle = `rgba(10,22,40,${rnd(0.3)})`;
          ctx.fillRect(rnd(w), rnd(h), 1.5, 1.5);
        }
      };
      const next = () => {
        let word = answer;
        while (word === answer) word = makeWord();
        answer = word;
        draw(word);
        a.value = "";
        setOk(false);
      };
      next();
      const onInput = () => {
        const ok = a.value.trim().toLowerCase() === answer;
        setOk(ok);
        if (ok && err) err.hidden = true;
      };
      const onSubmit = (e: Event) => {
        if (a.value.trim().toLowerCase() !== answer) {
          e.preventDefault();
          e.stopImmediatePropagation();
          if (err) err.hidden = false;
          next();
          a.focus();
        }
      };
      a.addEventListener("input", onInput);
      refresh?.addEventListener("click", next);
      form.addEventListener("submit", onSubmit, true);
      cleanups.push(() => {
        a.removeEventListener("input", onInput);
        refresh?.removeEventListener("click", next);
        form.removeEventListener("submit", onSubmit, true);
      });
    });
    return () => cleanups.forEach((f) => f());
  }, []);
  return null;
}
