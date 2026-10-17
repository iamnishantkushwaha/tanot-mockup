import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Clock, Mic } from "lucide-react";
import { links } from "@/lib/site";
import { reviews } from "@/lib/reviews";
import { ButtonLink } from "@/components/ui/button";
import { CountUp, Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { SectionHeading } from "@/components/ui/section-heading";
import { SmartLink } from "@/components/ui/smart-link";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/blocks";
import { CtaBand } from "@/components/sections/company";
import { TestimonialCard } from "@/components/sections/proof";

export const metadata: Metadata = {
  title: "Featured In",
  description:
    "Tanot Solutions has been listed, reviewed, and cited by authoritative platforms across SEO and B2B marketing. Credibility built on verified results and independent reviews.",
};

const listings = [
  { name: "Clutch", note: "B2B REVIEWS · NO.1 RANKED", href: links.clutch },
  { name: "GoodFirms", note: "AGENCY DIRECTORY", href: links.goodfirms },
  { name: "The Manifest", note: "AGENCY DIRECTORY", href: links.manifest },
  { name: "DesignRush", note: "AGENCY RANKINGS", href: links.designrush },
  { name: "Othlist", note: "AGENCY DIRECTORY", href: links.othlist },
];

const stats = [
  { value: 5000, suffix: "+", label: "Editorial Backlinks" },
  { value: 150, suffix: "+", label: "Brands Across the World" },
  { value: 11, suffix: "+", label: "Years of Combined SEO Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction Rate" },
  { value: 85, suffix: "%+", label: "Client Retention Rate" },
];

export default function FeaturedInPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Recognized by the platforms that <span className="text-gradient">shape the SEO industry.</span>
          </>
        }
        body={
          <>
            <p>Tanot Solutions has been listed, reviewed, and cited by authoritative platforms across SEO and B2B marketing.</p>
            <p>
              Our credibility is built on verified results, independent reviews, and industry recognition — not claims. From rankings on platforms like Clutch to mentions and endorsements from senior professionals, each citation reflects the quality of work delivered for 150+ brands worldwide.
            </p>
            <p>
              We continue to expand our editorial presence across leading SEO and marketing publications through contributions, expert commentary, and data-backed insights.
            </p>
          </>
        }
        aside={
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-500">
              <Mic className="size-4" aria-hidden /> Media inquiries
            </p>
            <div className="mt-5 flex items-center gap-4">
              <Image src="/images/brand/renu-small.jpg" alt="Renu Sharma" width={92} height={92} className="size-20 rounded-2xl object-cover ring-4 ring-brand-50" />
              <h2 className="text-xl font-bold leading-snug">Talk to Renu Sharma — SEO &amp; Link Building Expert</h2>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-body">
              Writing about SEO, link building, or AI search? Renu Sharma is available for expert commentary, original data insights, guest articles, and podcast appearances.
            </p>
            <ButtonLink href={links.contact} arrow className="mt-6 w-full">
              Get in touch
            </ButtonLink>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-body">
              <Clock className="size-3.5" aria-hidden /> Typically responds within 1 business day
            </p>
          </div>
        }
      />

      <Section label="Verified listings">
        <SectionHeading eyebrow="Verified listings" title="Where you can verify us" />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" stagger={0.07}>
          {listings.map((l) => (
            <StaggerItem key={l.name} className="h-full">
              <SmartLink
                href={l.href}
                className="group flex h-full min-h-[140px] flex-col items-center justify-center rounded-3xl border border-line bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-lift"
              >
                <span className="font-display text-2xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-brand-600">{l.name}</span>
                <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-body">{l.note}</span>
                <ArrowUpRight className="mt-3 size-4 text-brand-500 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
              </SmartLink>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <section aria-label="Proven results" className="relative bg-navy-900 py-16 text-white lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(60%_120%_at_20%_0%,rgb(26_140_208/0.28),transparent)]" aria-hidden />
        <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
          <SectionHeading light title="Proven Results Across 150+ Brands Worldwide" />
          <Stagger className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 text-center lg:grid-cols-5">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <p className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="mx-auto mt-2 max-w-[11rem] text-sm text-white/70">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Section tone="tint" label="About Renu Sharma">
        <div className="grid items-start gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -bottom-4 -right-4 size-full rounded-3xl bg-gradient-to-br from-brand-400 to-teal-brand opacity-30" aria-hidden />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#dfe3e8] shadow-lift">
                <Image src="/images/brand/renu-sharma.webp" alt="Renu Sharma, Co-Founder and Head of SEO" fill sizes="384px" className="object-cover object-top" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/85 to-transparent p-6 pt-16 text-white">
                  <p className="font-display text-lg font-bold">Renu Sharma</p>
                  <p className="text-sm text-white/80">Co-Founder &amp; Head of SEO, Tanot Solutions</p>
                </div>
              </div>
              <ButtonLink href={links.linkedin} variant="outline" className="mt-6 w-full">
                View LinkedIn
              </ButtonLink>
            </div>
          </Reveal>
          <div>
            <SectionHeading align="left" title="11+ Years Building Links That Drive Rankings And Growth" />
            <Reveal delay={0.1} className="mt-6 text-[17px] leading-relaxed text-body">
              <p>
                Renu Sharma has over a decade of experience in SEO, specializing in white-hat link acquisition, editorial outreach, and AI search visibility. She founded Tanot Solutions in 2020 to address a gap in the industry, where many agencies prioritized link volume over quality. Today, she leads SEO strategy across 150+ global brand partnerships and contributes insights on link building, topical authority, and AI-driven search trends.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-10">
              <h3 className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-brand-500">
                Why industry leaders trust Renu Sharma for link building
              </h3>
            </Reveal>
            <Stagger className="mt-5 grid gap-5" stagger={0.1}>
              {[reviews.michael, reviews.anish, reviews.monika].map((t) => (
                <StaggerItem key={t.name}>
                  <TestimonialCard t={t} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Ready to build links that drive real SEO growth?"
        note={
          <>
            <p>White-hat link building, technical SEO, and AI search visibility for 150+ global brands.</p>
            <ul className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-white">
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
