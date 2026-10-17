import type { Metadata } from "next";
import Image from "next/image";
import { Brain, FileEdit, Link2, Newspaper, PenLine, X } from "lucide-react";
import { links } from "@/lib/site";
import { awards } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button";
import { SmartLink } from "@/components/ui/smart-link";
import { CountUp, Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { SectionHeading } from "@/components/ui/section-heading";
import { Gallery } from "@/components/ui/gallery";
import { PageHero } from "@/components/sections/page-hero";
import { CheckList, FeatureGrid, Section, Steps } from "@/components/sections/blocks";
import { CtaBand } from "@/components/sections/company";
import { FaqSection } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "Link Building Agency",
  description:
    "White-hat, editorial link building that improves rankings, increases AI search visibility and supports measurable commercial growth. 1-year link replacement guarantee, no upfront charges.",
};

const stats = [
  { value: 5000, suffix: "+", label: "Links Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 11, suffix: "+", label: "Years of experience" },
];

const strategies = [
  { icon: Brain, title: "Authority Citations for AI Visibility", body: "We prioritize backlinks from trusted publications that AI search platforms like ChatGPT, Perplexity, and Gemini, reference as reliable sources. This improves your brand’s chances of appearing when buyers use AI search systems to explore products, services, and vendors." },
  { icon: Link2, title: "Link Insertions", body: "We place contextual links inside existing, high-performing content that already ranks and attracts traffic. This allows your pages to benefit from established authority and demand, accelerating rankings without waiting months for new content to gain traction." },
  { icon: FileEdit, title: "Niche Edit Link Building", body: "We don’t place links in loosely related articles. Each niche edit is secured within tightly aligned content to reinforce topical relevance and avoid diluted link equity." },
  { icon: PenLine, title: "Guest Posting", body: "Unlike mass guest posting, our approach prioritizes editorial integrity. We publish guest content on trusted publications with real audiences, avoiding networks that dilute authority and put rankings at risk." },
  { icon: Newspaper, title: "Brand Mentions", body: "We secure contextual brand mentions within authoritative articles and listicles, building referral traffic and brand authority recognized across evolving search environments." },
];

const vanity = [
  "Domain Authority (DA) or Domain Rating (DR) alone",
  "Irrelevant referral traffic",
  "Raw backlink volume",
  "Short-term ranking spikes",
];

const kpis = [
  "Organic traffic growth on conversion-focused pages",
  "Keyword movement for BOFU and commercial queries",
  "Leads, demo requests, or sales from organic traffic",
  "Assisted conversions influenced by backlinks",
  "Overall organic visibility across priority pages",
];

const process = [
  { title: "Audit & Goal Alignment", body: "We audit your existing backlink profile and align on target pages, anchor strategy, DR, and traffic benchmarks, and your overall SEO goals." },
  { title: "Website Research & Shortlisting", body: "Using competitor backlink analysis and niche research, we curate a list of relevant, high-quality websites that meet your criteria and share them in a transparent tracking sheet." },
  { title: "Website Approval", body: "We move forward only with the domains you approve — no substitutions, no exceptions." },
  { title: "Link Placement & Final Review", body: "Links are placed contextually within approved content, and shared with you for final review before going live." },
  { title: "Links Go Live & Performance Tracking", body: "Once approved, links are published and tracked with clean reporting, focused on visibility, traffic, and commercial impact." },
];

const impact = [
  "Growth in organic traffic to high-intent pages",
  "Improved traditional search and AI visibility for commercial keywords",
  "Leads and conversions attributed to organic search",
  "Sustainable ranking improvements in competitive SERPs",
];

const proof = [1, 2, 3, 4, 5].map((n) => ({
  src: `/images/proof/proof-${n}.png`,
  alt: `Client feedback screenshot ${n} of 5`,
}));

const faqs = [
  { q: "Are your link building services white-hat?", a: "Yes. All links are editorial, contextual, and comply fully with Google’s ethical SEO guidelines. We don’t use PBNs, link marketplaces, or manipulative link schemes." },
  { q: "Do you guarantee rankings?", a: "We don’t guarantee rankings. Instead, we guarantee quality, transparency, and link building focused on measurable organic growth — not short-term spikes." },
  { q: "Does your link building service support AI search visibility?", a: "Yes. We build high-authority, editorial backlinks from trusted sources that search engines and AI systems rely on. This strengthens your brand’s eligibility and visibility when buyers research solutions through AI search systems like ChatGPT, Perplexity, and Gemini, without shortcuts or manipulation." },
  { q: "How do you report backlinks?", a: "We provide clear backlink reporting and tracking, including live URLs, anchor text, placement status, and relevant traffic signals." },
  { q: "Can I approve every website before link placement?", a: "Absolutely. Every website is shared for approval before outreach, and no backlink goes live without your sign-off. And if a link is removed within one year, we replace it at no additional cost." },
  { q: "Who are these backlink building services best suited for?", a: "Our link building services are best suited for B2B brands, SaaS companies, and agencies targeting competitive markets with long-term SEO goals." },
  { q: "How is pricing structured for your link building services?", a: "Our pricing is pay-per-link, tailored to your goals. You pay only for live, approved backlinks, billed at the end of each month." },
];

export default function LinkBuildingPage() {
  return (
    <>
      <PageHero
        formId="lb"
        title={
          <>
            <span className="text-gradient">Link Building Agency</span> That Moves Revenue Metrics
          </>
        }
        body="We help brands earn high-authority, editorial backlinks that improve rankings, increase AI search visibility, and support measurable commercial growth."
        bullets={[
          "Contextual backlinks from relevant, authoritative publications",
          "White-hat, Google-compliant outreach (no marketplaces, no schemes)",
          "1-year link replacement guarantee",
          "No upfront or consultation charges",
        ]}
        actions={
          <ButtonLink href={links.bookCall} size="lg" arrow>
            Book a Call
          </ButtonLink>
        }
        footnote={
          <div className="flex flex-wrap items-center gap-5">
            <SmartLink
              href={links.clutch}
              aria-label="Tanot Solutions on Clutch, 5.0 rating"
              className="inline-block rounded-xl bg-white p-2.5 shadow-card ring-1 ring-line transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <Image src="/images/brand/clutch-badge.png" alt="Reviewed on Clutch, 5.0 rating" width={140} height={58} className="h-auto w-[140px]" />
            </SmartLink>
            <span>No lock-ins. Cancel anytime with 30 days’ notice</span>
          </div>
        }
      />

      <section aria-label="Link building in numbers" className="relative bg-navy-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(60%_120%_at_20%_0%,rgb(26_140_208/0.28),transparent)]" aria-hidden />
        <Stagger className="relative mx-auto grid max-w-[1000px] grid-cols-1 gap-8 px-5 py-12 text-center sm:grid-cols-3 sm:px-8">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <p className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1.5 text-sm text-white/70">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <Section label="Trusted brands">
        <SectionHeading
          title="Trusted By 150+ Brands Worldwide"
          description="We help brands earn high-authority, editorial backlinks that improve rankings, increase AI search visibility, and support measurable commercial growth."
        />
        <Reveal className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-line bg-white p-4 shadow-card sm:p-8">
          <Image src="/images/brand/trusted-brands.png" alt="Logos of brands that trust Tanot Solutions" width={1024} height={332} sizes="(min-width: 1024px) 960px, 100vw" className="h-auto w-full" />
        </Reveal>
        <p className="mt-6 text-center text-sm font-medium text-body">and many more</p>
      </Section>

      <Section tone="tint" label="Awards">
        <SectionHeading eyebrow="Recognition" title="Awarded As The Best SEO And Link Building Agency" />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {awards.map((a, i) => (
            <StaggerItem
              key={`${a.title}-${i}`}
              className="group flex h-[200px] items-center gap-5 rounded-2xl bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="relative h-full w-[46%] shrink-0 overflow-hidden rounded-xl">
                <Image src={a.image} alt={a.title} fill sizes="(min-width: 1024px) 180px, 40vw" className="object-contain transition-transform duration-500 ease-out-expo group-hover:scale-110" />
              </div>
              <h3 className="text-[17px] font-semibold leading-snug text-ink">{a.title}</h3>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section label="Link building strategies">
        <SectionHeading
          eyebrow="Our strategies"
          title="Our White-Hat Link Building Strategies Built For Scale & Relevance"
          description="We deploy ethical, scalable link acquisition strategies tailored to your niche, competition, and goals."
        />
        <div className="mt-14">
          <FeatureGrid items={strategies} />
        </div>
        <Reveal className="mt-10 text-center">
          <ButtonLink href={links.bookCall} arrow>
            Get a Custom Link Strategy
          </ButtonLink>
        </Reveal>
      </Section>

      <Section tone="tint" label="Where we secure placements">
        <SectionHeading
          eyebrow="Placements"
          title="Where We Secure Link Placements And Brand Mentions"
          description="We’ve secured placements on high-authority publications with genuine editorial standards, trusted by both search engines and AI systems."
        />
        <Stagger className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4" stagger={0.05}>
          {Array.from({ length: 8 }, (_, i) => (
            <StaggerItem key={i} className="grid place-items-center rounded-2xl transition-transform duration-300 hover:-translate-y-1.5">
              <Image src={`/images/publishers/p${i + 1}.png`} alt={`Publication where Tanot Solutions has secured placements, ${i + 1} of 8`} width={202} height={80} className="w-full max-w-[202px]" style={{ width: "100%", height: "auto" }} />
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-8 text-center text-sm font-medium text-body">and many more</p>
      </Section>

      <Section label="How we measure impact">
        <SectionHeading
          eyebrow="Measurement"
          title="How We Measure The Impact Of Link Building"
          description="We focus on metrics that influence buying decisions — not numbers that only look good in reports."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-line bg-white p-8 shadow-card sm:p-10">
            <h3 className="text-xl font-bold">Vanity Metrics We Don’t Track</h3>
            <p className="mt-3 text-[15px] text-body">We do not optimize or report success based on:</p>
            <ul className="mt-6 space-y-4">
              {vanity.map((v) => (
                <li key={v} className="flex items-start gap-3 text-[15px] font-medium text-ink">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-red-100 text-red-500">
                    <X className="size-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  {v}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-body">These metrics often look impressive, but rarely translate into ROI.</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-8 shadow-card sm:p-10">
            <h3 className="text-xl font-bold">KPIs That Actually Matter</h3>
            <p className="mt-3 text-[15px] text-body">Our link building services are measured using business-driven SEO KPIs:</p>
            <CheckList items={kpis} className="mt-6" />
            <p className="mt-6 text-sm text-body">Metrics tied directly to buying intent, pipeline, and long-term growth.</p>
          </Reveal>
        </div>
        <Reveal className="mt-10 text-center">
          <ButtonLink href={links.bookCall} arrow>
            Work with us
          </ButtonLink>
        </Reveal>
      </Section>

      <Section tone="tint" label="Our process">
        <SectionHeading
          eyebrow="Process"
          title="Our Transparent Link Building Process"
          description="We’ve built a clear, approval-first backlink building process that keeps you informed and in control at every stage."
        />
        <div className="mt-14">
          <Steps items={process} />
        </div>
      </Section>

      <Section label="Proof of impact">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <Image src="/images/pages/lb-visual.png" alt="Illustration of a team building contextual backlinks" width={485} height={490} className="mx-auto h-auto w-full max-w-md" />
          </Reveal>
          <div>
            <SectionHeading align="left" eyebrow="Results" title="Proof Of Impact, Not Vanity Metrics" description="We focus on metrics that influence buying decisions — not numbers that only look good in reports." />
            <Reveal delay={0.1} className="mt-7">
              <p className="mb-4 font-display text-base font-bold text-ink">Our link building campaigns consistently result in:</p>
              <CheckList items={impact} />
            </Reveal>
          </div>
        </div>
        <Reveal className="mt-16">
          <Gallery items={proof} label="Client feedback screenshots" width={1140} height={505} />
        </Reveal>
        <Reveal className="mt-8 text-center">
          <ButtonLink href={links.reviews} variant="outline" arrow>
            Read More Reviews
          </ButtonLink>
        </Reveal>
      </Section>

      <Section tone="navy" label="Your partner">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading light align="left" title="Your Partner For Scalable, White-Hat Link Building" description="If you’re done wasting budget on low-quality links and outdated tactics, it’s time to work with a link building company focused on long-term SEO growth." />
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-4 text-[15px] font-medium text-white">
                {[
                  "11+ years of combined hands-on SEO and link building experience",
                  "Smooth communication via Email, Slack, WhatsApp, or Teams",
                  "No links on unapproved websites",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-leaf text-white">
                      <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3.5" aria-hidden>
                        <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2} className="mt-9">
              <ButtonLink href={links.bookCall} variant="white" size="lg" arrow>
                Book a Strategy Call
              </ButtonLink>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="mx-auto">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-400/40 to-teal-brand/30 blur-2xl" aria-hidden />
              <Image src="/images/brand/renu-sharma.webp" alt="Renu Sharma, Founder of Tanot Solutions" width={420} height={520} className="relative h-auto w-full max-w-sm rounded-3xl bg-[#dfe3e8] object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <FaqSection tone="tint" title="Frequently Asked Questions" items={faqs} />

      <CtaBand />
    </>
  );
}
