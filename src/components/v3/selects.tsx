"use client";
import { useEffect } from "react";

/** Wires up the custom dropdowns ([data-select]) in the injected page HTML. */
export function Selects() {
  useEffect(() => {
    const roots = Array.from(document.querySelectorAll<HTMLElement>("[data-select]"));
    const close = (root: HTMLElement) => {
      root.removeAttribute("data-open");
      root.querySelector<HTMLElement>("[data-select-btn]")?.setAttribute("aria-expanded", "false");
      const list = root.querySelector<HTMLElement>("[data-select-list]");
      if (list) list.hidden = true;
    };
    const open = (root: HTMLElement) => {
      roots.forEach((r) => r !== root && close(r));
      root.setAttribute("data-open", "");
      root.querySelector<HTMLElement>("[data-select-btn]")?.setAttribute("aria-expanded", "true");
      const list = root.querySelector<HTMLElement>("[data-select-list]");
      if (list) list.hidden = false;
    };
    const choose = (root: HTMLElement, li: HTMLElement) => {
      const input = root.querySelector<HTMLInputElement>("[data-select-input]");
      const label = root.querySelector<HTMLElement>("[data-select-label]");
      if (input) input.value = li.dataset.value ?? "";
      if (label) label.textContent = li.textContent;
      root.setAttribute("data-selected", "");
      root.querySelectorAll("[role=option]").forEach((o) => o.setAttribute("aria-selected", String(o === li)));
      close(root);
      root.querySelector<HTMLElement>("[data-select-btn]")?.focus();
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const root = t.closest<HTMLElement>("[data-select]");
      if (!root) return roots.forEach(close);
      const li = t.closest<HTMLElement>("[role=option]");
      if (li) return choose(root, li);
      if (t.closest("[data-select-btn]")) root.hasAttribute("data-open") ? close(root) : open(root);
    };
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      const root = t.closest<HTMLElement>("[data-select]");
      if (e.key === "Escape") return roots.forEach(close);
      if (!root) return;
      const opts = Array.from(root.querySelectorAll<HTMLElement>("[role=option]"));
      const idx = opts.indexOf(t);
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        if (!root.hasAttribute("data-open")) open(root);
        const n = e.key === "ArrowDown" ? Math.min(idx + 1, opts.length - 1) : Math.max(idx - 1, 0);
        opts[idx < 0 && e.key === "ArrowDown" ? 0 : n]?.focus();
      } else if ((e.key === "Enter" || e.key === " ") && idx >= 0) {
        e.preventDefault();
        choose(root, t);
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  return null;
}
