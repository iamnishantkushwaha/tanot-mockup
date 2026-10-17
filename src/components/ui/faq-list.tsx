import * as React from "react";
import { Plus } from "lucide-react";

/**
 * FAQ list on native <details> (exclusive via data-acc-group, animated by /public/motion/motion.js).
 * Works without JavaScript and ports to WordPress as plain HTML.
 */
export function FaqList({ items, group = "faq" }: { items: { q: string; a: React.ReactNode }[]; group?: string }) {
  return (
    <div className="space-y-3">
      {items.map((f, i) => (
        <details
          key={f.q}
          data-acc
          data-acc-group={group}
          open={i === 0}
          className="group/item overflow-hidden rounded-2xl border border-line bg-white transition-[border-color,box-shadow] duration-300 open:border-brand-300 open:shadow-card"
        >
          <summary className="flex items-center justify-between gap-4 px-5 py-5 text-left font-display text-base font-semibold text-ink transition-colors hover:text-brand-600 sm:px-6 sm:text-lg">
            {f.q}
            <span className="acc-icon grid size-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 group-open/item:bg-brand-500 group-open/item:text-white">
              <Plus className="size-4" aria-hidden />
            </span>
          </summary>
          <div className="px-5 pb-6 pr-14 text-[15px] leading-relaxed text-body sm:px-6">{f.a}</div>
        </details>
      ))}
    </div>
  );
}
