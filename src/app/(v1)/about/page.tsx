import type { Metadata } from "next";
import {
  Award,
  Compass,
  Eye,
  Handshake,
  Layers,
  Medal,
  ShieldCheck,
  Star,
  Target,
  Telescope,
  Trophy,
  BarChart3,
  Quote,
} from "lucide-react";
import { links } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid, Section } from "@/components/sections/blocks";
import { CtaBand } from "@/components/sections/company";
import { SmartLink } from "@/components/ui/smart-link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Tanot Solutions is a link-building and SEO agency founded in 2020 in Jodhpur, Rajasthan. Built on integrity, driven by results.",
};

const values = [
  { icon: Layers, title: "Quality Over Volume", body: "We would rather build 10 genuinely relevant, editorially placed links than 100 that look fine in a spreadsheet and do nothing for your rankings." },
  { icon: Eye, title: "Full Transparency", body: "You approve every site before outreach begins. Every delivered link comes with a live URL, DR, estimated traffic, and anchor text. No black boxes, ever." },
  { icon: ShieldCheck, title: "White-Hat Always", body: "No PBNs, link farms, or manipulative schemes. Every method we use is one we would publicly defend in front of any SEO professional or Google reviewer." },
  { icon: BarChart3, title: "Outcomes, Not Optics", body: "We measure success in rankings, organic traffic, and ROI. Not link counts or domain rating scores alone. Your growth is our report card." },
  { icon: Handshake, title: "Long-Term Partnership", body: "We do not disappear after delivery. We work as an extension of your team, thinking about your SEO goals the way a trusted in-house strategist would." },
  { icon: Compass, title: "Relevance First", body: "Every placement is matched to your niche and audience. We never chase domain rating numbers on sites that have nothing to do with your industry." },
];

const timeline = [
  {
    year: "2020",
    label: "Founded",
    title: "Tanot Solutions launches as a white-hat link building agency in Jodhpur, Rajasthan",
    body: "Founded with a single mandate: deliver high-authority editorial backlinks with full client transparency and zero shortcuts. First clients onboarded in SaaS and B2B. The client-approval workflow and publisher vetting process were built from day one.",
    chip: "Year 1 of operations",
  },
  {
    year: "2022",
    label: "Scaling Up",
    title: "50+ brands served and white-label link building launched for agencies worldwide",
    body: "Crossed 50+ active brand partnerships. Launched white-label services for digital agencies. Publisher network grew to 500+ vetted sites across 15+ countries. Client retention surpassed 80%.",
    chip: "50+ brands served",
  },
  {
    year: "2026",
    label: "Today",
    title: "Clutch Top Link Building Agency 2026 serving 150+ brands across 20+ countries",
    body: "Named Clutch Top Link Building Agency 2026. 15+ specialists. A publisher network of 1,000+ vetted sites. Full services covering editorial link building, niche edits, guest posts, technical SEO, and AI search visibility. 5,000+ editorial backlinks delivered.",
    chip: "150+ brands worldwide",
  },
];

const recognition = [
  { icon: Trophy, title: "Top Link Building Agency 2026", body: "Clutch, Global Leader, verified by client reviews", href: links.clutch },
  { icon: Medal, title: "Global Leader in SEO Services 2025", body: "Clutch, independently verified client reviews", href: links.clutch },
  { icon: Star, title: "5.0 Star Rating on Clutch", body: "Verified reviews with consistent 5-star scores across all engagements", href: links.clutch },
  { icon: Award, title: "Top SEO Agency on DesignRush", body: "Listed and verified as a top-performing SEO and link-building agency", href: links.designrush },
];

const industries = [
  "SaaS and Software",
  "B2B and Enterprise",
  "eCommerce",
  "Legal and Law Firms",
  "Healthcare",
  "Education and EdTech",
  "iGaming and Casino",
  "AI and Technology",
  "Marketing Agencies",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        formId="about"
        title={
          <>
            Built on Integrity.
            <br />
            <span className="text-gradient">Driven by Results.</span>
          </>
        }
        body="Tanot Solutions is a link-building and SEO agency founded in 2020 in Jodhpur, Rajasthan. We help ambitious brands earn high-authority, editorially placed backlinks, grow organic traffic, and build lasting visibility across both traditional search and AI-driven results."
        bullets={["100% Google-compliant methods", "1-year link guarantee"]}
        actions={
          <>
            <ButtonLink href={links.bookCall} size="lg" arrow>
              Book a Free Strategy Call
            </ButtonLink>
            <ButtonLink href={links.reviews} variant="outline" size="lg">
              See Client Results
            </ButtonLink>
          </>
        }
      />

      <Section label="Why Tanot Solutions exists">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading align="left" eyebrow="Our story" title="Why Tanot Solutions Exists" />
            <Reveal delay={0.1} className="mt-6 space-y-4 text-[17px] leading-relaxed text-body">
              <p>
                Tanot Solutions was born out of a problem that kept repeating across the SEO industry. Brands were spending serious budgets on link building, yet the vast majority of those links were low-quality, irrelevant, or violating Google&apos;s guidelines. Agencies were optimizing for volume, not value.
              </p>
              <p>
                We founded Tanot Solutions in 2020 with one idea: build links the way a responsible editorial team would. Manually vetted, niche-relevant, client-approved, and built to last. Today, 15+ specialists serve 150+ brands across 20+ countries using that same process from day one.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={links.caseStudies} arrow>
                View Case Studies
              </ButtonLink>
              <ButtonLink href={links.featuredIn} variant="outline">
                See Where We&apos;re Featured
              </ButtonLink>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <figure className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 text-white shadow-lift sm:p-10">
              <div className="absolute -right-16 -top-16 size-56 rounded-full bg-brand-500/30 blur-[70px]" aria-hidden />
              <Quote className="relative size-10 fill-brand-400/40 text-brand-400/40" aria-hidden />
              <blockquote className="relative mt-4 text-xl font-medium leading-relaxed sm:text-2xl">
                &ldquo;We started Tanot Solutions because the industry needed an agency that would defend every link it built in public, not one that hid its methods behind dashboards and jargon.&rdquo;
              </blockquote>
              <figcaption className="relative mt-6 text-sm text-white/75">
                <span className="font-display font-bold text-white">Renu Sharma</span>, Co-Founder
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      <Section tone="tint" label="Mission and vision">
        <SectionHeading
          eyebrow="Mission & vision"
          title="Our Mission And Vision"
          description="Two commitments that govern every campaign, every link, and every client relationship."
        />
        <Stagger className="mt-14 grid gap-6 lg:grid-cols-2">
          {[
            {
              icon: Target,
              kicker: "Our Mission",
              title: "To make white-hat link building the obvious choice for every serious brand.",
              body: "We exist to deliver editorial backlinks that actually move rankings, grow traffic, and support real business goals. Full transparency and zero shortcuts on every campaign. Every link we build should be something we are proud to show to a client, a journalist, and Google alike.",
              tag: "Quality over volume",
            },
            {
              icon: Telescope,
              kicker: "Our Vision",
              title: "To become the most trusted SEO growth partner for brands that value long-term authority.",
              body: "We are building toward a future where Tanot Solutions is the first name brands think of when they need a link-building partner they can trust to act as a true extension of their own team, across search, AI visibility, and content authority.",
              tag: "Built for the long term",
            },
          ].map(({ icon: Icon, kicker, title, body, tag }) => (
            <StaggerItem key={kicker} className="group flex flex-col rounded-3xl border border-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift sm:p-10">
              <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-teal-brand text-white shadow-[0_10px_24px_-10px_rgb(26_140_208/0.9)]">
                <Icon className="size-7" aria-hidden />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-brand-500">{kicker}</p>
              <h3 className="mt-2 text-2xl font-bold leading-snug">{title}</h3>
              <p className="mt-4 flex-1 text-[16px] leading-relaxed text-body">{body}</p>
              <p className="mt-6 inline-flex w-fit rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-600">{tag}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section label="Company timeline">
        <SectionHeading
          eyebrow="Our journey"
          title="From Day One To Where We Are Today"
          description="Six years of building, learning, and growing. One editorial link at a time."
        />
        <div className="relative mx-auto mt-16 max-w-4xl">
          <span className="absolute bottom-0 left-[31px] top-0 w-px bg-gradient-to-b from-brand-300 via-brand-200 to-transparent md:left-1/2" aria-hidden />
          <ol className="space-y-12">
            {timeline.map((t, i) => (
              <li key={t.year} className="relative grid items-start gap-6 md:grid-cols-2 md:gap-16">
                <span className="absolute left-[31px] top-6 z-10 size-4 -translate-x-1/2 rounded-full border-4 border-white bg-brand-500 shadow md:left-1/2" aria-hidden />
                <Reveal className={`pl-20 md:pl-0 ${i % 2 === 0 ? "md:text-right" : "md:order-2"}`}>
                  <p className="font-display text-5xl font-extrabold text-gradient sm:text-6xl">{t.year}</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-brand-500">{t.label}</p>
                </Reveal>
                <Reveal delay={0.1} className={`ml-20 rounded-3xl border border-line bg-white p-7 shadow-card md:ml-0 ${i % 2 === 0 ? "" : "md:order-1"}`}>
                  <h3 className="text-lg font-bold leading-snug">{t.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-body">{t.body}</p>
                  <p className="mt-4 inline-flex rounded-full bg-brand-50 px-3.5 py-1 text-sm font-semibold text-brand-600">{t.chip}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="tint" label="Values">
        <SectionHeading
          eyebrow="Values"
          title="The Values Behind Every Campaign"
          description="These are not slogans. They are the operating principles that govern every link we build, every report we send, and every decision we make as an agency."
        />
        <div className="mt-14">
          <FeatureGrid items={values} />
        </div>
      </Section>

      <Section label="Awards and recognition">
        <SectionHeading
          eyebrow="Recognition"
          title="Awards And Industry Recognition"
          description="Independent recognition based on verified client reviews and campaign outcomes, not self-nomination."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recognition.map(({ icon: Icon, title, body, href }) => (
            <StaggerItem key={title} className="h-full">
              <SmartLink
                href={href}
                className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-lift"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-star/15 text-star transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold leading-snug">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-body">{body}</p>
              </SmartLink>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="navy" label="Industries we serve">
        <SectionHeading
          light
          eyebrow="Industries"
          title="Industries We Serve"
          description="We serve 20+ industries across 20+ countries. Wherever your brand competes, we know the publishers and placements that matter."
        />
        <Stagger className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3" stagger={0.05}>
          {industries.map((i) => (
            <StaggerItem
              key={i}
              className="rounded-full border border-white/15 bg-white/[0.07] px-5 py-3 text-[15px] font-medium text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              {i}
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.2} className="mt-12 flex flex-wrap justify-center gap-3">
          <ButtonLink href={links.pricing} variant="white" size="lg" arrow>
            See Our Pricing
          </ButtonLink>
          <ButtonLink href={links.bookCall} variant="ghostLight" size="lg">
            Request a Proposal
          </ButtonLink>
        </Reveal>
      </Section>

      <CtaBand title="Try Our SEO And Link Building Service For 30 Days Then Choose To Stay." />
    </>
  );
}
