import * as React from "react";
import { CalendarClock } from "lucide-react";

/** Click-to-load scheduler, driven by /public/motion/motion.js (data-embed-src / data-embed-load). Plain markup. */
export function CalendlyEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div data-embed-src={`${src}?hide_gdpr_banner=1`} data-embed-title={title} data-embed-height="640px" className="overflow-hidden rounded-2xl border border-line bg-white">
      <div className="grid h-[320px] place-items-center bg-gradient-to-br from-brand-50 to-white p-6 text-center">
        <div>
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-teal-brand text-white shadow-[0_10px_24px_-10px_rgb(26_140_208/0.9)]">
            <CalendarClock className="size-7" aria-hidden />
          </span>
          <p className="mt-4 font-display text-lg font-bold text-ink">20–30 minute strategy call</p>
          <p className="mx-auto mt-1 max-w-xs text-sm text-body">See open slots and pick the time that suits you.</p>
          <button
            type="button"
            data-embed-load
            className="group/btn mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 px-6 py-2.5 font-sans text-[15px] font-semibold text-white shadow-[0_8px_20px_-8px_rgb(26_140_208/0.7)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Choose a time
          </button>
        </div>
      </div>
    </div>
  );
}
