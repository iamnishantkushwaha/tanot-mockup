import type { Metadata } from "next";
import Image from "next/image";
import { links } from "@/lib/site";
import { reviews } from "@/lib/reviews";
import { talk_cases, talk_faqs, talk_happens, talk_why } from "@/lib/page-data";
import { Reveal, Stagger, StaggerItem } from "@/components/v2/motion";
import { V2Embed } from "@/components/v2/embeds";
import { Band, Btn, Head } from "@/components/v2/ui";
import { CtaV2, FaqV2, PageHeroV2, QuoteTile, Tile, Underlined } from "@/components/v2/shared";

export const metadata: Metadata = {
  title: "Book a Free Link Building Strategy Session",
  description: "Schedule a free strategy call with Tanot Solutions. Get real, actionable insights into your SEO and backlink strategy, no sales pitch.",
};

const tones = ["lime", "forest", "cream", "white"] as const;

export default function V2LetsTalk() {
  return (
    <>
      <PageHeroV2
        title={
          <>
            Book a Free <Underlined>Link Building Strategy</Underlined> Session
          </>
        }
        body="We’ll take a quick look at your site and show you what kind of links you actually need to rank better. No sales talk. Just real advice based on your current SEO."
        bullets={["Free, with no commitment", "20–30 minutes, directly with Renu Sharma", "No hard selling, ever"]}
        aside={
          <div>
            <h2 className="text-3xl font-medium">Pick a time that suits you</h2>
            <p className="mt-2 text-sm text-body">Choose a slot here, or open the scheduler in a new tab.</p>
            <div className="mt-5">
              <V2Embed src={links.calendly} title="Schedule a free strategy call with Renu Sharma" />
            </div>
            <Btn href={links.calendly} variant="outline" arrow={false} className="mt-4 w-full">
              Open scheduler in a new tab
            </Btn>
          </div>
        }
      />

      <Band tone="cream" label="Reviews from people who booked a call">
        <Head eyebrow="Client voices" title={<>Hear From Those Who’ve <em>Booked A Call</em> Before You</>} />
        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3" stagger={0.1}>
          {[reviews.monika, reviews.sandeep, reviews.gabriel].map((t, i) => (
            <StaggerItem key={t.name} className="h-full">
              <QuoteTile t={t} tone={(["lime", "forest", "white"] as const)[i]} />
            </StaggerItem>
          ))}
        </Stagger>
      </Band>

      <Band tone="white" label="What happens on the call">
        <Head eyebrow="Empower your business growth" title={<>Here’s What Happens On Your <em>Free Link Strategy Call</em></>} lead="Ready to take your business to the next level? We specialize in solutions that boost efficiency and drive results, ensuring you stay ahead of the competition. Let’s tackle your challenges together!" />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2">
          {talk_happens.map((h, i) => {
            const tone = tones[i];
            const dark = tone === "forest";
            return (
              <StaggerItem key={h.title}>
                <Tile tone={tone} className="h-full">
                  <div className="flex items-start justify-between">
                    <span className={`grid size-14 place-items-center rounded-2xl ${dark ? "bg-lime text-navy-900" : "bg-navy-900 text-lime"}`}>
                      <h.icon className="size-7" aria-hidden />
                    </span>
                    <span className={`font-display text-5xl font-medium ${dark ? "text-lime" : "text-navy-900/25"}`}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className={`mt-8 text-2xl font-medium ${dark ? "text-white" : "text-navy-900"}`}>{h.title}</h3>
                  <p className={`mt-3 text-[15px] leading-relaxed ${dark ? "text-white/80" : tone === "lime" ? "text-navy-900/80" : "text-body"}`}>{h.body}</p>
                </Tile>
              </StaggerItem>
            );
          })}
        </Stagger>
        <Reveal className="mt-10 text-center">
          <Btn href={links.calendly}>Book A Call</Btn>
        </Reveal>
      </Band>

      <Band tone="paper" label="Why choose us">
        <Head eyebrow="Why choose us" title={<>Why <em>Choose</em> Us</>} />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {talk_why.map((w, i) => (
            <StaggerItem key={w.title}>
              <Tile tone={i % 2 ? "forest" : "white"} className="h-full min-h-[210px] justify-between">
                <span className={`grid size-14 place-items-center rounded-2xl ${i % 2 ? "bg-lime text-navy-900" : "bg-navy-900 text-lime"}`}>
                  <w.icon className="size-7" aria-hidden />
                </span>
                <div className="mt-8">
                  <h3 className={`text-xl font-medium ${i % 2 ? "text-white" : "text-navy-900"}`}>{w.title}</h3>
                  <p className={`mt-2 text-[15px] ${i % 2 ? "text-white/80" : "text-body"}`}>{w.body}</p>
                </div>
              </Tile>
            </StaggerItem>
          ))}
        </Stagger>
      </Band>

      <Band tone="forest" label="Case studies">
        <Head light eyebrow="Case studies" title={<>Top Link Building <em>Case Studies</em> By Tanot Solutions</>} lead="These detailed case studies explain how we increased rankings and traffic to websites through link building." />
        <Stagger className="mt-14 grid gap-6 lg:grid-cols-2" stagger={0.1}>
          {talk_cases.map((c) => (
            <StaggerItem key={c.title} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-paper transition-all duration-500 hover:-translate-y-1.5">
                <div className="m-3 overflow-hidden rounded-[1.4rem] border border-line bg-white">
                  <Image src={c.image} alt={c.alt} width={1489} height={970} sizes="(min-width: 1024px) 600px, 100vw" className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="p-7 pt-4">
                  <h3 className="text-2xl font-medium text-ink">{c.title}</h3>
                  <dl className="mt-5 space-y-3">
                    {c.facts.map(([k, v]) => (
                      <div key={k} className="flex flex-wrap gap-x-3 text-[15px]">
                        <dt className="font-bold text-ink">{k}</dt>
                        <dd className="text-body">— {v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 text-center">
          <Btn href={links.caseStudies} variant="outlineLight" arrow={false}>
            Read More Case Studies
          </Btn>
        </Reveal>
      </Band>

      <FaqV2 tone="cream" title={<>Frequently Asked <em>Questions</em> (FAQs)</>} items={talk_faqs} />
      <CtaV2 />
    </>
  );
}
