import * as React from "react";
import Image from "next/image";
import { hero } from "@/lib/content";
import { links } from "@/lib/site";
import { Btn, Eyebrow, Wrap } from "./ui";
import { HeroGraphic, LinkChain, Sparkle, Sticker, Squiggle } from "./graphics";
import { FormCard } from "./shared";

type Css = React.CSSProperties & Record<`--${string}`, string | number>;
const d = (s: number): Css => ({ "--m-delay": `${s}s` });

/** Word-by-word headline: each word slides up from a mask. Pure CSS (data-word), staggered with --m-delay. */
function Words({ text, start = 0 }: { text: string; start?: number }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={`${w}-${i}`} data-word-wrap>
          <span data-word style={d(start + i * 0.06)}>
            {w}&nbsp;
          </span>
        </span>
      ))}
    </>
  );
}

/*
 * Hero + form panel. All entrance motion is CSS (data-rise / data-word / .m-draw, see
 * /public/v2/motion.css), so this is plain server-rendered markup that ports to WordPress as-is.
 */
export function V2Hero() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-28 sm:pt-32">
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
        <LinkChain className="absolute -left-14 top-52 -z-10 w-64 -rotate-12 text-brand-100" />
        <Sparkle className="absolute left-[46%] top-36 -z-10 size-8 text-lime-600/80" />
        <Wrap className="grid items-center gap-14 pb-28 pt-4 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 lg:pt-10">
          <div>
            <a
              data-rise
              style={d(0)}
              href={links.clutch}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tanot Solutions on Clutch, 5.0 rating"
              className="mb-7 inline-block rounded-2xl bg-white p-2 shadow-card ring-1 ring-line transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Image src="/images/brand/clutch-badge.png" alt="Reviewed on Clutch, 5.0 rating" width={245} height={102} priority style={{ width: 128, height: "auto" }} />
            </a>
            <h1 className="text-[clamp(2.5rem,5.1vw,4.7rem)] leading-[1] text-ink">
              <span className="relative mr-2 inline-block whitespace-nowrap pb-2 italic text-brand-500 sm:pb-3">
                <Words text={hero.titleAccent} />
                <Squiggle className="absolute -bottom-0 left-0 text-lime-600" />
              </span>
              <Words text={hero.titleRest} start={0.25} />
            </h1>
            <p data-rise style={d(0.6)} className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-body">
              {hero.body}
            </p>
            <div data-rise style={d(0.75)} className="mt-10 flex flex-wrap items-center gap-3">
              <Btn href={links.bookCall} size="lg">
                Book a Free Strategy Call
              </Btn>
              <Btn href="#case-study" variant="outline" size="lg" arrow={false}>
                See Client Results
              </Btn>
            </div>
          </div>
          <div data-rise style={d(0.3)} className="relative lg:pl-6">
            <HeroGraphic />
            <Sticker text="SEO · GOOGLE · AI SEARCH · " className="absolute -bottom-6 left-2 hidden w-28 sm:block lg:-left-4" />
          </div>
        </Wrap>
      </section>

      <section aria-labelledby="v2-form-h" className="relative z-10 -mt-14 pb-24">
        <Wrap>
          <div className="grid overflow-hidden rounded-[2.5rem] bg-navy-900 shadow-lift lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative flex flex-col justify-between overflow-hidden p-8 text-white sm:p-12">
              <LinkChain className="absolute -bottom-6 -left-10 w-72 text-white/[0.06]" />
              <div className="relative">
                <Eyebrow light>Free strategy</Eyebrow>
                <h2 id="v2-form-h" className="mt-5 text-4xl leading-[1.04] text-white sm:text-5xl">
                  Get Your Free <em className="text-lime">SEO Strategy</em>
                </h2>
                <p className="mt-5 max-w-sm text-lg leading-relaxed text-white/75">Tell us about your goals and we&apos;ll show you where your organic growth can improve.</p>
              </div>
              <div className="relative mt-10 flex items-end justify-between gap-4">
                <p className="text-sm text-white/55">Sent straight to {links.email}</p>
                <Sticker text="NO UPFRONT PAYMENT · " className="size-28 shrink-0 sm:size-32" />
              </div>
            </div>
            <div className="p-3 sm:p-4 lg:pl-0">
              <FormCard id="v2hero" className="h-full rounded-[1.9rem] shadow-none" />
            </div>
          </div>
        </Wrap>
      </section>
    </>
  );
}
