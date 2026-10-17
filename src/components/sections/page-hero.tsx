import * as React from "react";
import { Check } from "lucide-react";
import { LeadForm } from "@/components/forms/lead-form";
import { Reveal } from "@/components/ui/motion-primitives";

/** Inner-page hero: gradient + grid backdrop, headline copy on the left, form (or custom card) on the right. */
export function PageHero({
  eyebrow,
  title,
  body,
  bullets,
  actions,
  footnote,
  aside = "form",
  formId = "page",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  bullets?: React.ReactNode[];
  actions?: React.ReactNode;
  footnote?: React.ReactNode;
  aside?: "form" | "none" | React.ReactNode;
  formId?: string;
}) {
  const hasAside = aside !== "none";
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-tint via-[#f2f6fc] to-white pt-[72px]">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
      <div className="absolute -left-32 top-10 -z-10 size-[420px] rounded-full bg-brand-400/20 blur-[110px]" aria-hidden />
      <div className="absolute -right-24 top-40 -z-10 size-[380px] rounded-full bg-teal-brand/15 blur-[110px]" aria-hidden />
      <div
        className={`mx-auto grid max-w-[1280px] items-center gap-12 px-5 pb-16 pt-12 sm:px-8 lg:gap-16 lg:pb-24 lg:pt-20 ${
          hasAside ? "grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]" : "grid-cols-1"
        }`}
      >
        <div className={hasAside ? "" : "max-w-3xl"}>
          {eyebrow && (
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-500">
                <span className="h-px w-6 bg-current" aria-hidden />
                {eyebrow}
              </p>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.06] sm:text-5xl lg:text-[3.4rem]">{title}</h1>
          </Reveal>
          {body && (
            <Reveal delay={0.15}>
              <div className="mt-6 max-w-xl space-y-4 text-pretty text-base leading-relaxed text-body sm:text-lg">{body}</div>
            </Reveal>
          )}
          {bullets && (
            <Reveal delay={0.22}>
              <ul className="mt-7 space-y-3">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] font-medium text-ink">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-leaf/15 text-leaf">
                      <Check className="size-3.5" strokeWidth={3} aria-hidden />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
          {actions && (
            <Reveal delay={0.3} className="mt-9 flex flex-wrap items-center gap-3">
              {actions}
            </Reveal>
          )}
          {footnote && (
            <Reveal delay={0.36} className="mt-4 text-sm text-body">
              {footnote}
            </Reveal>
          )}
        </div>
        {hasAside && (
          <Reveal delay={0.2} y={40} className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-400/30 to-teal-brand/20 blur-2xl" aria-hidden />
            <div className="rounded-3xl border border-white bg-white p-6 shadow-lift ring-1 ring-line sm:p-8">
              {aside === "form" ? <LeadForm idPrefix={formId} /> : aside}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
