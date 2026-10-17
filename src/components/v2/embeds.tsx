import * as React from "react";
import Image from "next/image";
import { CalendarClock, ChevronLeft, ChevronRight, Play } from "lucide-react";

/*
 * Click-to-load media, driven by /public/v2/motion.js (data-video-play, data-embed-load, data-carousel).
 * Server-rendered markup only: no React state, so it ports to WordPress unchanged.
 */

export function V2VideoCard({ id, poster, caption }: { id: string; poster: string; caption: string }) {
  return (
    <figure className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-navy-900 shadow-lift ring-1 ring-navy-800">
      <div data-video-src={`https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0`} data-video-title={`Client testimonial video: ${caption}`} className="relative aspect-video w-full overflow-hidden bg-navy-950">
        <button type="button" data-video-play className="absolute inset-0 size-full" aria-label={`Play testimonial video: ${caption}`}>
          <Image src={poster} alt="" fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105" />
          <span className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" aria-hidden />
          <span className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-lime text-navy-900 shadow-2xl transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-1 size-8 fill-current" aria-hidden />
          </span>
        </button>
      </div>
      <figcaption className="px-6 py-4 text-center text-sm font-medium text-white/85">{caption}</figcaption>
    </figure>
  );
}

export function V2Embed({ src, title }: { src: string; title: string }) {
  return (
    <div data-embed-src={`${src}?hide_gdpr_banner=1`} data-embed-title={title} data-embed-height="640px" className="overflow-hidden rounded-3xl border border-line bg-white">
      <div className="grid h-[320px] place-items-center bg-gradient-to-br from-tint to-white p-6 text-center">
        <div>
          <span className="mx-auto grid size-14 place-items-center rounded-full bg-lime text-navy-900">
            <CalendarClock className="size-7" aria-hidden />
          </span>
          <p className="mt-4 font-display text-xl font-medium text-ink">20–30 minute strategy call</p>
          <p className="mx-auto mt-1 max-w-xs text-sm text-body">See open slots and pick the time that suits you.</p>
          <button type="button" data-embed-load className="group/btn mt-5 inline-flex h-12 items-center gap-3 rounded-full bg-lime pl-6 pr-6 font-sans text-[15px] font-semibold text-navy-900 transition-colors hover:bg-lime-600">
            Choose a time
          </button>
        </div>
      </div>
    </div>
  );
}

export function V2Carousel({ items, label }: { items: { src: string; alt: string }[]; label: string }) {
  const nav = "grid size-12 place-items-center rounded-full border border-ink/25 text-ink transition-all hover:bg-ink hover:text-paper disabled:pointer-events-none disabled:opacity-35";
  return (
    <div data-carousel role="region" aria-roledescription="carousel" aria-label={label}>
      <ul data-carousel-track tabIndex={0} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
        {items.map((it) => (
          <li key={it.src} className="w-[88%] shrink-0 snap-center overflow-hidden rounded-[1.6rem] bg-white p-2 ring-1 ring-line sm:w-[62%] lg:w-[48%]">
            <Image src={it.src} alt={it.alt} width={1140} height={505} sizes="(min-width: 1024px) 560px, 88vw" className="h-auto w-full rounded-[1.2rem]" />
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
