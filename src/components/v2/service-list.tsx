import * as React from "react";
import { Cloud, Link2, MapPin, PenLine, Plus, Search, Sparkles, type LucideIcon } from "lucide-react";
import { services } from "@/lib/content";
import { links } from "@/lib/site";
import { Btn } from "./ui";
import { CheckV2 } from "./shared";

const icons: Record<string, LucideIcon> = {
  "link-building": Link2,
  "technical-seo": Search,
  "ai-seo": Sparkles,
  "local-seo": MapPin,
  "saas-seo": Cloud,
  "content-marketing": PenLine,
};

/**
 * Editorial accordion on native <details> (exclusive via data-acc-group, animated by /public/v2/motion.js).
 * Works without JavaScript and without any React state, so it ports to WordPress as plain HTML.
 */
export function ServiceList() {
  return (
    <div className="mx-auto mt-14 max-w-5xl">
      {services.map((s, i) => {
        const Icon = icons[s.id] ?? Link2;
        return (
          <details key={s.id} data-acc data-acc-group="services" open={i === 0} className="group/svc border-t border-ink/15 last:border-b open:bg-white/60">
            <summary className="flex w-full items-center gap-4 px-2 py-6 text-left sm:gap-8 sm:px-6 sm:py-8">
              <span className="w-9 shrink-0 font-sans text-sm font-bold tabular-nums text-brand-500 sm:w-12 sm:text-base">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex-1 font-display text-[1.65rem] font-medium leading-tight text-ink/70 transition-colors duration-300 group-hover/svc:text-ink group-open/svc:text-ink sm:text-5xl">{s.title}</span>
              <span className="acc-icon grid size-11 shrink-0 place-items-center rounded-full border border-ink/25 text-ink group-open/svc:border-lime group-open/svc:bg-lime group-open/svc:text-navy-900 sm:size-14">
                <Plus className="size-5" aria-hidden />
              </span>
            </summary>
            <div className="grid gap-8 px-2 pb-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:gap-14 lg:pl-[5.5rem]">
              <div>
                <p className="max-w-2xl text-[17px] leading-relaxed text-body">{s.body}</p>
                <div className="mt-7">
                  <CheckV2 items={s.points} cols={2} />
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Btn href={links.bookCall}>{s.cta}</Btn>
                  {"learnMore" in s && s.learnMore && (
                    <Btn href={links.linkBuilding} variant="outline" arrow={false}>
                      Learn More
                    </Btn>
                  )}
                </div>
              </div>
              <div className="hidden lg:block" aria-hidden>
                <div className="relative grid size-52 place-items-center rounded-full bg-lime">
                  <div className="absolute inset-3 rounded-full border border-dashed border-navy-900/30" />
                  <Icon className="size-20 text-navy-900" strokeWidth={1.4} />
                </div>
              </div>
            </div>
          </details>
        );
      })}
    </div>
  );
}
