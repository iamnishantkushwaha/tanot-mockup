import type { Metadata } from "next";
import Image from "next/image";
import { ClipboardList, LineChart, Gauge, Headset, Link2, ShieldCheck, SlidersHorizontal, Route } from "lucide-react";
import { links } from "@/lib/site";
import { reviews } from "@/lib/reviews";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid, Section } from "@/components/sections/blocks";
import { CalendlyEmbed } from "@/components/ui/calendly-embed";
import { CtaBand } from "@/components/sections/company";
import { FaqSection } from "@/components/sections/faq";
import { TestimonialCard } from "@/components/sections/proof";

export const metadata: Metadata = {
  title: "Book a Free Link Building Strategy Session",
  description:
    "Schedule a free strategy call with Tanot Solutions. Get real, actionable insights into your SEO and backlink strategy, no sales pitch, just expert advice.",
};

const happens = [
  { icon: ClipboardList, title: "Site & Strategy Review", body: "We start by reviewing your site and backlink profile to identify gaps, missed opportunities, and issues. You’ll get clear, actionable insights to help you build a stronger SEO foundation." },
  { icon: Route, title: "Custom Link Plan", body: "We create a tailored link-building strategy based on your goals, niche, and competitors including link types, target pages, and outreach methods designed for long-term SEO results." },
  { icon: LineChart, title: "Results Tracking & Optimization", body: "After links go live, we track performance and provide clear reports. Based on the results, we refine your strategy to keep improving rankings and driving sustainable SEO growth." },
  { icon: Headset, title: "Ongoing Support & Delivery", body: "Once approved, we handle outreach, placements, and content creation. You’ll get transparent timelines, full reporting, and a dedicated team to support you throughout the process." },
];

const why = [
  { icon: ShieldCheck, title: "Google-Safe Tactics", body: "100% white-hat link building." },
  { icon: Link2, title: "Quality Backlinks", body: "Niche-relevant, high-authority sites." },
  { icon: SlidersHorizontal, title: "Custom Strategies", body: "Tailored to your SEO goals." },
  { icon: Gauge, title: "Clear Reporting", body: "Full transparency, real results." },
];

const cases = [
  {
    title: "Resume Building Software",
    image: "/images/pages/call-1.png",
    alt: "Ahrefs dashboard for the resume building software campaign",
    facts: [
      ["Links Built", "250+"],
      ["Timeframe", "14 months (ongoing)"],
      ["Results", "700K+ traffic, 35K+ new keywords in #10"],
    ],
  },
  {
    title: "Amazon Management Software",
    image: "/images/pages/call-2.png",
    alt: "Ahrefs dashboard for the Amazon management software campaign",
    facts: [
      ["Links Built", "35+"],
      ["Timeframe", "4 months"],
      ["Results", "100% Increase in organic traffic"],
    ],
  },
];

const faqs = [
  { q: "What happens on the call?", a: "We’ll take a quick look at your website, backlink profile, and SEO goals. Then we’ll walk you through what kind of links you actually need to improve rankings, no sales pitch, just real advice." },
  { q: "Is the call really free?", a: "Yes, 100% free. This is a value-first call to help you understand your current SEO situation and how we can help, no commitment required." },
  { q: "Who will I be speaking with?", a: "You’ll speak directly with Renu Sharma, Co-founder of Tanot Solutions, not a salesperson. Her goal is to give you honest, actionable SEO insights, whether you decide to work with us or not." },
  { q: "How long does the call take?", a: "Most calls take about 20–30 minutes, depending on your site and goals. If you need more time, we’re happy to dig deeper, we’re here to help." },
  { q: "Do I need to prepare anything?", a: "No prep needed. Just share your website URL when booking. If you have specific goals or challenges in mind, feel free to mention them, but we’ll guide everything." },
  { q: "What kind of websites do you work with?", a: "We work with SaaS, agencies, ecommerce, B2B, and content-driven businesses. If you’re serious about growing your organic traffic, we’ll likely be a good fit." },
  { q: "Will you try to sell me something on the call?", a: "No hard selling ever. If we think we can help, we’ll explain how. But the call is about giving you clarity and honest recommendations first." },
  { q: "What happens after the call?", a: "If you’re interested in working with us, we’ll send a custom proposal. If not, you’ll still leave with real insights and a better understanding of your link-building needs." },
  { q: "Do you guarantee results?", a: "We don’t promise rankings, no one ethical can. But we do guarantee transparency, safe practices, and a clear plan tailored to your goals and timeline." },
  { q: "Can I reschedule or cancel if needed?", a: "Of course. You’ll receive a confirmation email with reschedule and cancellation options. We respect your time and appreciate the same in return." },
];

export default function LetsTalkPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Book a Free <span className="text-gradient">Link Building Strategy</span> Session
          </>
        }
        body="We’ll take a quick look at your site and show you what kind of links you actually need to rank better. No sales talk. Just real advice based on your current SEO."
        bullets={["Free, with no commitment", "20–30 minutes, directly with Renu Sharma", "No hard selling, ever"]}
        aside={
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">Pick a time that suits you</h2>
            <p className="mt-2 text-sm leading-relaxed text-body">Choose a slot here, or open the scheduler in a new tab.</p>
            <div className="mt-5">
              <CalendlyEmbed src={links.calendly} title="Schedule a free strategy call with Renu Sharma" />
            </div>
            <ButtonLink href={links.calendly} variant="outline" className="mt-4 w-full">
              Open scheduler in a new tab
            </ButtonLink>
          </div>
        }
      />

      <Section tone="tint" label="Reviews from people who booked a call">
        <SectionHeading eyebrow="Client voices" title="Hear From Those Who’ve Booked A Call Before You" />
        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.1}>
          {[reviews.monika, reviews.sandeep, reviews.gabriel].map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <TestimonialCard t={t} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section label="What happens on the call">
        <SectionHeading
          eyebrow="Empower your business growth"
          title="Here’s What Happens On Your Free Link Strategy Call"
          description="Ready to take your business to the next level? We specialize in solutions that boost efficiency and drive results, ensuring you stay ahead of the competition. Let’s tackle your challenges together!"
        />
        <div className="mt-14">
          <FeatureGrid items={happens} cols={2} />
        </div>
        <Reveal className="mt-10 text-center">
          <ButtonLink href={links.calendly} arrow>
            Book A Call
          </ButtonLink>
        </Reveal>
      </Section>

      <Section tone="tint" label="Why choose us">
        <SectionHeading eyebrow="Why choose us" title="Why Choose Us" />
        <div className="mt-14">
          <FeatureGrid items={why} cols={4} />
        </div>
      </Section>

      <Section label="Case studies">
        <SectionHeading
          eyebrow="Case studies"
          title="Top Link Building Case Studies By Tanot Solutions"
          description="These detailed case studies explain how we increased rankings and traffic to websites through link building."
        />
        <Stagger className="mt-14 grid gap-6 lg:grid-cols-2" stagger={0.1}>
          {cases.map((c) => (
            <StaggerItem key={c.title} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-lift">
                <div className="overflow-hidden border-b border-line bg-brand-50">
                  <Image src={c.image} alt={c.alt} width={1489} height={970} sizes="(min-width: 1024px) 600px, 100vw" className="h-auto w-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-bold">{c.title}</h3>
                  <dl className="mt-5 space-y-3">
                    {c.facts.map(([k, v]) => (
                      <div key={k} className="flex flex-wrap gap-x-3 text-[15px]">
                        <dt className="font-semibold text-ink">{k}</dt>
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
          <ButtonLink href={links.caseStudies} variant="outline" arrow>
            Read More Case Studies
          </ButtonLink>
        </Reveal>
      </Section>

      <FaqSection tone="tint" title="Frequently Asked Questions (FAQs)" items={faqs} />

      <CtaBand />
    </>
  );
}
