import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Scroll-snap image carousel. Buttons and disabled states are driven by /public/motion/motion.js
 * (data-carousel / data-carousel-track / data-carousel-prev|next); plain markup, ports to WordPress as-is.
 */
export function Gallery({
  items,
  label,
  width = 1140,
  height = 505,
}: {
  items: { src: string; alt: string }[];
  label: string;
  width?: number;
  height?: number;
}) {
  const nav = "grid size-12 place-items-center rounded-full border border-line bg-white text-ink transition-all hover:border-brand-400 hover:text-brand-600 disabled:opacity-40";
  return (
    <div data-carousel className="relative" role="region" aria-roledescription="carousel" aria-label={label}>
      <ul data-carousel-track tabIndex={0} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
        {items.map((it) => (
          <li key={it.src} className="w-[88%] shrink-0 snap-center overflow-hidden rounded-2xl border border-line bg-white shadow-card sm:w-[62%] lg:w-[48%]">
            <Image src={it.src} alt={it.alt} width={width} height={height} sizes="(min-width: 1024px) 560px, 88vw" className="h-auto w-full" />
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-center gap-3">
        <button type="button" data-carousel-prev aria-label="Previous" className={nav}>
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <button type="button" data-carousel-next aria-label="Next" className={nav}>
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
