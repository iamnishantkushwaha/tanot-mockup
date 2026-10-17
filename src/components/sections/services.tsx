import Image from "next/image";
import { Check, ChevronRight } from "lucide-react";
import { caseStudy, services } from "@/lib/content";
import { links } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { CountUp, Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { SectionHeading } from "@/components/ui/section-heading";

/*
 * Services tabs: plain markup (role=tablist / tab / tabpanel). Switching, the sliding highlight and the
 * panel fade are handled by /public/motion/motion.js (data-tabs / data-pill / data-panel), so it ports to WordPress as-is.
 */
export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title={<span id="services-heading">SEO services built around revenue, not vanity metrics.</span>}
          description="Pick one service or combine them. Every campaign targets authority, high-intent traffic and conversions."
        />

        <Reveal className="mt-14">
          <div data-tabs className="grid gap-6 lg:grid-cols-[340px_1fr]">
            <div
              role="tablist"
              aria-label="SEO services"
              aria-orientation="vertical"
              className="relative isolate -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
            >
              <span data-pill aria-hidden className="pointer-events-none absolute left-0 top-0 -z-10 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 opacity-0 shadow-lift" />
              {services.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  id={`tab-${s.id}`}
                  data-tab={s.id}
                  aria-controls={`panel-${s.id}`}
                  aria-selected={i === 0}
                  tabIndex={i === 0 ? 0 : -1}
                  className="group relative flex shrink-0 items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3.5 text-left text-ink transition-all duration-300 hover:border-brand-300 hover:bg-brand-50/60 aria-selected:border-transparent aria-selected:bg-transparent aria-selected:text-white aria-selected:shadow-lift aria-selected:hover:border-transparent aria-selected:hover:bg-transparent lg:w-full lg:py-4"
                >
                  <span className="relative font-display text-xs font-bold tabular-nums text-brand-500 group-aria-selected:text-white/70">{String(i + 1).padStart(2, "0")}</span>
                  <span className="relative whitespace-nowrap font-display text-[15px] font-semibold lg:flex-1 lg:whitespace-normal">{s.title}</span>
                  <ChevronRight className="relative hidden size-4 opacity-40 transition-transform duration-300 group-hover:translate-x-1 group-aria-selected:translate-x-1 group-aria-selected:opacity-100 lg:block" aria-hidden />
                </button>
              ))}
            </div>

            <div>
              {services.map((s, i) => (
                <div
                  key={s.id}
                  role="tabpanel"
                  id={`panel-${s.id}`}
                  aria-labelledby={`tab-${s.id}`}
                  data-panel={s.id}
                  data-active={i === 0 ? "" : undefined}
                  hidden={i !== 0}
                  className="h-full rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-50/50 p-7 shadow-card sm:p-10"
                >
                  <h3 className="text-2xl font-bold sm:text-3xl">{s.title}</h3>
                  <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-body">{s.body}</p>
                  <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-[15px] font-medium text-ink">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-leaf/15 text-leaf">
                          <Check className="size-3.5" strokeWidth={3} aria-hidden />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <ButtonLink href={links.bookCall} arrow>
                      {s.cta}
                    </ButtonLink>
                    {"learnMore" in s && s.learnMore && (
                      <ButtonLink href={s.learnMore} variant="outline">
                        Learn More
                      </ButtonLink>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const metrics = [
  { label: "Monthly Visitors", to: 6200, suffix: "", decimals: 0 },
  { label: "AI visibility", to: 1.3, suffix: "K Citations", decimals: 1 },
  { label: "Ranking keywords", to: 1.6, suffix: "K", decimals: 1 },
];

export function CaseStudy() {
  return (
    <section id="case-study" aria-labelledby="case-heading" className="relative overflow-hidden bg-navy-900 py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(50%_70%_at_85%_10%,rgb(26_140_208/0.3),transparent),radial-gradient(40%_50%_at_0%_100%,rgb(22_176_201/0.18),transparent)]" aria-hidden />
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionHeading
          light
          eyebrow="Case study"
          title={<span id="case-heading">{caseStudy.title}</span>}
          className="max-w-4xl"
        />
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal>
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgb(0_0_0/0.6)] ring-1 ring-white/20">
              <div className="flex items-center gap-1.5 border-b border-line bg-brand-50 px-4 py-3" aria-hidden>
                <span className="size-2.5 rounded-full bg-red-300" />
                <span className="size-2.5 rounded-full bg-amber-300" />
                <span className="size-2.5 rounded-full bg-green-300" />
              </div>
              <div className="group overflow-hidden">
                <Image
                  src={caseStudy.image}
                  alt="Analytics dashboard showing organic traffic growth for the HR company case study"
                  width={512}
                  height={296}
                  sizes="(min-width: 1024px) 620px, 100vw"
                  className="h-auto w-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-white/80">{caseStudy.body}</p>
            </Reveal>
            <Stagger className="mt-8 grid gap-3" stagger={0.1}>
              {metrics.map((m) => (
                <StaggerItem
                  key={m.label}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur transition-colors hover:bg-white/10"
                >
                  <span className="text-sm text-white/70">{m.label}</span>
                  <span className="font-display text-xl font-bold text-white sm:text-2xl">
                    <CountUp to={m.to} prefix="0 - " suffix={m.suffix} decimals={m.decimals} />
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={links.caseStudies} target="_blank" rel="noopener noreferrer" variant="white" arrow>
                Read full case study
              </ButtonLink>
              <ButtonLink href={links.caseStudies} target="_blank" rel="noopener noreferrer" variant="ghostLight">
                All Case Studies
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
