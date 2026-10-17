import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Clock, Mic } from "lucide-react";
import { featured_listings, featured_stats } from "@/lib/page-data";
import { reviews } from "@/lib/reviews";
import { links } from "@/lib/site";
import { CountUp, Reveal, Stagger, StaggerItem } from "@/components/v2/motion";
import { Band, Btn, Head, V2Link } from "@/components/v2/ui";
import { CtaV2, PageHeroV2, QuoteTile, Underlined } from "@/components/v2/shared";

export const metadata: Metadata = {
  title: "Featured In",
  description: "Tanot Solutions has been listed, reviewed, and cited by authoritative platforms across SEO and B2B marketing.",
};

export default function V2FeaturedIn() {
  return (
    <>
      <PageHeroV2
        title={
          <>
            Recognized by the platforms that <Underlined>shape the SEO industry.</Underlined>
          </>
        }
        body={
          <>
            <p>Tanot Solutions has been listed, reviewed, and cited by authoritative platforms across SEO and B2B marketing.</p>
            <p>
              Our credibility is built on verified results, independent reviews, and industry recognition — not claims. From rankings on platforms like Clutch to mentions and endorsements from senior professionals, each citation reflects the quality of work delivered for 150+ brands worldwide.
            </p>
            <p>We continue to expand our editorial presence across leading SEO and marketing publications through contributions, expert commentary, and data-backed insights.</p>
          </>
        }
        aside={
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-600">
              <Mic className="size-4" aria-hidden /> Media inquiries
            </p>
            <div className="mt-5 flex items-center gap-4">
              <Image src="/images/brand/renu-small.jpg" alt="Renu Sharma" width={92} height={92} className="size-20 rounded-full object-cover ring-4 ring-lime" />
              <h2 className="text-2xl font-medium leading-snug">Talk to Renu Sharma — SEO &amp; Link Building Expert</h2>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-body">Writing about SEO, link building, or AI search? Renu Sharma is available for expert commentary, original data insights, guest articles, and podcast appearances.</p>
            <Btn href={links.contact} className="mt-6 w-full justify-between">
              Get in touch
            </Btn>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-body">
              <Clock className="size-3.5" aria-hidden /> Typically responds within 1 business day
            </p>
          </div>
        }
      />

      <Band tone="white" label="Verified listings">
        <Head eyebrow="Verified listings" title={<>Where you can <em>verify us</em></>} />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" stagger={0.07}>
          {featured_listings.map((l) => (
            <StaggerItem key={l.name} className="h-full">
              <V2Link href={l.href} className="group flex h-full min-h-[150px] flex-col items-center justify-center rounded-[2rem] bg-paper p-6 text-center ring-1 ring-line transition-all duration-500 hover:-translate-y-1.5 hover:bg-lime hover:shadow-lift">
                <span className="font-display text-3xl font-semibold tracking-tight text-ink">{l.name}</span>
                <span className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-body group-hover:text-navy-900/80">{l.note}</span>
                <ArrowUpRight className="mt-3 size-4 text-brand-500 opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-navy-900" aria-hidden />
              </V2Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Band>

      <Band tone="forest" label="Proven results">
        <Head light title={<>Proven Results Across <em>150+ Brands</em> Worldwide</>} />
        <Stagger className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 text-center lg:grid-cols-5">
          {featured_stats.map((s) => (
            <StaggerItem key={s.label}>
              <p className="font-display text-5xl font-medium text-lime sm:text-6xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mx-auto mt-3 max-w-[11rem] text-sm text-white/70">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Band>

      <Band tone="cream" label="About Renu Sharma">
        <div className="grid items-start gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -left-4 -top-4 size-36 rounded-full bg-lime" aria-hidden />
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-[#dfe3e8] shadow-lift">
                <Image src="/images/brand/renu-sharma.webp" alt="Renu Sharma, Co-Founder and Head of SEO" fill sizes="384px" className="object-cover object-top" />
              </div>
              <p className="mt-5 text-center font-display text-xl font-medium text-ink">Renu Sharma</p>
              <p className="text-center text-sm text-body">Co-Founder &amp; Head of SEO, Tanot Solutions</p>
              <Btn href={links.linkedin} variant="outline" className="mt-5 w-full justify-between">
                View LinkedIn
              </Btn>
            </div>
          </Reveal>
          <div>
            <Head align="left" title={<>11+ Years Building Links That Drive <em>Rankings And Growth</em></>} />
            <Reveal delay={0.1} className="mt-6 text-[17px] leading-relaxed text-body">
              <p>Renu Sharma has over a decade of experience in SEO, specializing in white-hat link acquisition, editorial outreach, and AI search visibility. She founded Tanot Solutions in 2020 to address a gap in the industry, where many agencies prioritized link volume over quality. Today, she leads SEO strategy across 150+ global brand partnerships and contributes insights on link building, topical authority, and AI-driven search trends.</p>
            </Reveal>
            <Reveal delay={0.15} className="mt-10">
              <h3 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-brand-600">Why industry leaders trust Renu Sharma for link building</h3>
            </Reveal>
            <Stagger className="mt-5 grid gap-5" stagger={0.1}>
              {([reviews.michael, reviews.anish, reviews.monika] as const).map((t, i) => (
                <StaggerItem key={t.name}>
                  <QuoteTile t={t} tone={(["lime", "forest", "white"] as const)[i]} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Band>

      <CtaV2
        title="Ready to build links that drive real SEO growth?"
        note={
          <>
            <p>White-hat link building, technical SEO, and AI search visibility for 150+ global brands.</p>
            <ul className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold">
              <li>✓ No upfront fees</li>
              <li>✓ No lock-in</li>
              <li>✓ 1-year link replacement guarantee</li>
            </ul>
          </>
        }
        primary={{ label: "Book a free strategy call", href: links.bookCall }}
        secondary={{ label: "See case studies", href: links.caseStudies }}
      />
    </>
  );
}
