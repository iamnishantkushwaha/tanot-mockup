import * as React from "react";
import Image from "next/image";
import { hero } from "@/lib/content";
import { links } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { LeadForm } from "@/components/forms/lead-form";

type Css = React.CSSProperties & Record<`--${string}`, string | number>;
const d = (s: number): Css => ({ "--m-delay": `${s}s` });

/** Word-by-word headline: each word slides up from a mask. Pure CSS (data-word), staggered with --m-delay. */
function Words({ text, className, startDelay = 0 }: { text: string; className?: string; startDelay?: number }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={`${w}-${i}`} data-word-wrap>
          <span data-word className={className} style={d(startDelay + i * 0.06)}>
            {w}&nbsp;
          </span>
        </span>
      ))}
    </>
  );
}

/*
 * All entrance motion is CSS (data-rise / data-word, see /public/motion/motion.css), so this is
 * plain server-rendered markup that ports to WordPress as-is.
 */
export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-gradient-to-b from-tint via-[#f2f6fc] to-white pt-[72px]">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
      <div className="absolute -left-32 top-10 -z-10 size-[420px] rounded-full bg-brand-400/20 blur-[110px]" aria-hidden />
      <div className="absolute -right-24 top-40 -z-10 size-[380px] rounded-full bg-teal-brand/15 blur-[110px]" aria-hidden />

      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-28 lg:pt-20">
        <div>
          <a
            href={links.clutch}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tanot Solutions on Clutch, 5.0 rating"
            className="mb-6 inline-block rounded-xl bg-white p-2 shadow-card ring-1 ring-line transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
          >
            <Image src="/images/brand/clutch-badge.png" alt="Reviewed on Clutch, 5.0 rating" width={245} height={102} priority style={{ width: 130, height: "auto" }} />
          </a>
          <h1 className="text-[2.5rem] font-extrabold leading-[1.05] sm:text-6xl lg:text-[3.9rem]">
            <Words text={hero.titleAccent} className="text-gradient" />
            <Words text={hero.titleRest} startDelay={0.2} />
          </h1>
          <p data-rise style={d(0.55)} className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-body sm:text-lg">
            {hero.body}
          </p>
          <div data-rise style={d(0.7)} className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href={links.bookCall} target="_blank" rel="noopener noreferrer" size="lg" arrow>
              Book a Free Strategy Call
            </ButtonLink>
            <ButtonLink href="#case-study" variant="outline" size="lg">
              See Client Results
            </ButtonLink>
          </div>
        </div>

        <div data-rise="card" style={d(0.35)} className="relative">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-400/30 to-teal-brand/20 blur-2xl" aria-hidden />
          <div className="rounded-3xl border border-white bg-white p-6 shadow-lift ring-1 ring-line sm:p-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
