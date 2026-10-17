import * as React from "react";
import Image from "next/image";
import { BarChart3, Eye, HandCoins, ShieldCheck, Sparkles, Users, type LucideIcon } from "lucide-react";
import { awards, caseStudy, clientLogos, faqs, featuredOn, founder, posts, stats, team, testimonials, video, whyUs } from "@/lib/content";
import { links } from "@/lib/site";
import { CountUp, Reveal, Stagger, StaggerItem } from "./motion";
import { V2VideoCard } from "./embeds";
import { LinkChain, Sparkle } from "./graphics";
import { Band, Btn, Head, Wrap } from "./ui";
import { FaqV2, PostGridV2, QuoteTile, Tile } from "./shared";
import { ServiceList } from "./service-list";

export function V2Stats() {
  return (
    <section aria-label="Tanot Solutions in numbers" className="relative overflow-hidden bg-lime py-14 text-navy-900 grain lg:py-20">
      <LinkChain className="absolute -right-10 -top-8 w-72 -rotate-6 text-navy-900/[0.07]" />
      <Wrap className="relative">
        <Stagger className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StaggerItem key={s.label} className={i > 0 ? "lg:border-l lg:border-navy-900/20 lg:pl-8" : ""}>
              <p className="font-display text-6xl font-medium leading-none tracking-tight sm:text-7xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 max-w-[12rem] text-sm font-semibold uppercase tracking-wider text-navy-900/75">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Wrap>
    </section>
  );
}

export function V2TrustedBy() {
  return (
    <Band tone="white" label="Clients">
      <Head title={<>Trusted By <em>150+ Brands</em> Across SaaS, Healthcare, Marketing, B2B And Enterprise</>} />
      <Stagger stagger={0.035} className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {clientLogos.map((src, i) => (
          <StaggerItem
            key={src}
            className="group grid h-24 place-items-center rounded-3xl border border-dashed border-line bg-paper p-4 transition-all duration-300 hover:-translate-y-1 hover:border-solid hover:border-brand-500 hover:bg-white hover:shadow-card"
          >
            <Image src={src} alt={`Client logo ${i + 1}`} width={160} height={56} className="max-h-11 w-auto max-w-full object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0" />
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal className="mt-8 text-center text-sm font-semibold uppercase tracking-[0.18em] text-body">and many more.</Reveal>
    </Band>
  );
}

export function V2Reviews() {
  return (
    <Band id="reviews" tone="paper" label="Reviews">
      <Head eyebrow="Client reviews" title={<>Reviews From Businesses <em>We&apos;ve Helped Grow</em></>} lead="Don’t take our word for it. Here’s what clients say about working with Tanot Solutions." />
      <Stagger className="mt-14 grid gap-5 lg:grid-cols-12">
        <StaggerItem className="lg:col-span-7">
          <V2VideoCard id={video.id} poster={video.poster} caption={video.caption} />
        </StaggerItem>
        <StaggerItem className="lg:col-span-5">
          <QuoteTile t={testimonials[0]} tone="lime" big />
        </StaggerItem>
        <StaggerItem className="lg:col-span-5">
          <QuoteTile t={testimonials[1]} tone="forest" />
        </StaggerItem>
        <StaggerItem className="lg:col-span-7">
          <QuoteTile t={testimonials[2]} tone="white" />
        </StaggerItem>
      </Stagger>
      <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
        <Btn href={links.reviews}>View All Client Reviews</Btn>
        <Btn href={links.clutch} variant="outline" arrow={false}>
          See us on Clutch
        </Btn>
      </Reveal>
    </Band>
  );
}

export function V2Services() {
  return (
    <Band id="services" tone="cream" label="Services">
      <Head eyebrow="Services" title={<>SEO services built around <em>revenue</em>, not vanity metrics.</>} lead="Pick one service or combine them. Every campaign targets authority, high-intent traffic and conversions." />
      <ServiceList />
    </Band>
  );
}

const metrics = [
  { label: "Monthly Visitors", to: 6200, suffix: "", decimals: 0 },
  { label: "AI visibility, citations", to: 1.3, suffix: "K", decimals: 1 },
  { label: "Ranking keywords", to: 1.6, suffix: "K", decimals: 1 },
];

export function V2CaseStudy() {
  return (
    <Band id="case-study" tone="forest" label="Case study">
      <Head light eyebrow="Case study" title={<>How an HR company grew from zero to <em>6200 monthly visitors</em> in 8 months</>} className="max-w-4xl" />
      <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-white/80">{caseStudy.body}</p>
          </Reveal>
          <Stagger className="mt-8 divide-y divide-white/15 border-y border-white/15" stagger={0.1}>
            {metrics.map((m) => (
              <StaggerItem key={m.label} className="flex items-baseline justify-between gap-4 py-5">
                <span className="text-sm font-semibold uppercase tracking-wider text-white/65">{m.label}</span>
                <span className="font-display text-4xl font-medium text-lime sm:text-5xl">
                  <span className="mr-2 text-white/40">0 →</span>
                  <CountUp to={m.to} suffix={m.suffix} decimals={m.decimals} />
                </span>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.2} className="mt-9 flex flex-wrap gap-3">
            <Btn href="/case-studies/hr-recruitment">Read full case study</Btn>
            <Btn href={links.caseStudies} variant="outlineLight" arrow={false}>
              All Case Studies
            </Btn>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="relative">
            <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-lime" aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-lift">
              <div className="mb-3 flex items-center gap-1.5 px-2 pt-1" aria-hidden>
                <span className="size-2.5 rounded-full bg-navy-900/20" />
                <span className="size-2.5 rounded-full bg-navy-900/20" />
                <span className="size-2.5 rounded-full bg-lime-600" />
              </div>
              <Image src={caseStudy.image} alt="Analytics dashboard showing organic traffic growth for the HR company case study" width={512} height={296} sizes="(min-width: 1024px) 560px, 100vw" className="h-auto w-full rounded-xl" />
            </div>
          </div>
        </Reveal>
      </div>
    </Band>
  );
}

const icons: Record<(typeof whyUs.items)[number]["icon"], LucideIcon> = {
  chart: BarChart3,
  wallet: HandCoins,
  shield: ShieldCheck,
  eye: Eye,
  sparkles: Sparkles,
  users: Users,
};
const bento = [
  { span: "lg:col-span-4", tone: "lime" as const },
  { span: "lg:col-span-2", tone: "forest" as const },
  { span: "lg:col-span-2", tone: "cream" as const },
  { span: "lg:col-span-4", tone: "white" as const },
  { span: "lg:col-span-3", tone: "brand" as const },
  { span: "lg:col-span-3", tone: "white" as const },
];

export function V2WhyUs() {
  return (
    <Band tone="paper" label="Why Tanot">
      <Head eyebrow="Why Tanot" title={<>A growth partner, <em>not another</em> SEO agency.</>} lead={whyUs.body} />
      <Stagger className="mt-14 grid gap-5 lg:grid-cols-6" stagger={0.07}>
        {whyUs.items.map((item, i) => {
          const Icon = icons[item.icon];
          const b = bento[i];
          const dark = b.tone === "forest" || b.tone === "brand";
          return (
            <StaggerItem key={item.title} className={b.span}>
              <Tile tone={b.tone} className="h-full min-h-[240px] justify-between">
                <span className={`grid size-14 place-items-center rounded-2xl ${b.tone === "lime" ? "bg-navy-900 text-lime" : dark ? "bg-lime text-navy-900" : "bg-navy-900 text-lime"}`}>
                  <Icon className="size-7" aria-hidden />
                </span>
                <div className="mt-10">
                  <h3 className={`text-2xl font-medium leading-tight sm:text-3xl ${dark ? "text-white" : "text-navy-900"}`}>{item.title}</h3>
                  <p className={`mt-3 max-w-md text-[15px] leading-relaxed ${dark ? "text-white/80" : b.tone === "lime" ? "text-navy-900/80" : "text-body"}`}>{item.body}</p>
                </div>
              </Tile>
            </StaggerItem>
          );
        })}
      </Stagger>
      <Reveal className="mt-10 text-center">
        <Btn href={links.bookCall}>Talk to our team</Btn>
      </Reveal>
    </Band>
  );
}

export function V2Awards() {
  return (
    <Band tone="cream" label="Awards">
      <Head eyebrow="Recognition" title={<>The Industry&apos;s <em>Top-Rated</em> SEO Agency</>} />
      <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
        {awards.map((a, i) => (
          <StaggerItem key={`${a.title}-${i}`} className="group">
            <div className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-white ring-1 ring-line transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
              <div className="relative m-3 h-48 overflow-hidden rounded-[1.4rem] bg-paper">
                <Image src={a.image} alt={a.title} fill sizes="(min-width: 1024px) 380px, 90vw" className="object-contain p-3 transition-transform duration-500 ease-out-expo group-hover:scale-105" />
              </div>
              <h3 className="px-6 pb-6 pt-2 font-display text-xl font-medium leading-snug text-ink">{a.title}</h3>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Band>
  );
}

export function V2Founder() {
  return (
    <Band tone="paper" label="Founder">
      <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <div className="relative mx-auto max-w-md">
            <div className="absolute -left-5 -top-5 size-40 rounded-full bg-lime" aria-hidden />
            <div className="absolute -bottom-4 -right-4 size-full rounded-t-[999px] rounded-b-[2rem] border-2 border-brand-500" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-[#dfe3e8] shadow-lift">
              <Image src={founder.image} alt={`${founder.name}, ${founder.role}`} fill sizes="(min-width: 1024px) 440px, 90vw" className="object-cover object-top" />
            </div>
            <div className="absolute -right-2 bottom-10 rounded-2xl bg-navy-900 px-5 py-3 text-white shadow-lift sm:-right-8">
              <p className="font-display text-lg font-medium">{founder.name}</p>
              <p className="text-xs text-white/70">{founder.role}</p>
            </div>
          </div>
        </Reveal>
        <div>
          <Head align="left" as="h2" title={<>Hi, I&apos;m Renu. I built <em>Tanot Solutions</em> to make SEO accountable.</>} />
          <Reveal delay={0.1} className="mt-7 space-y-4 text-[17px] leading-relaxed text-body">
            {founder.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.2} className="mt-9 flex flex-wrap gap-3">
            <Btn href={links.bookCall}>Book a call with Renu</Btn>
            <Btn href={links.linkedin} variant="outline" arrow={false}>
              Connect on LinkedIn
            </Btn>
          </Reveal>
        </div>
      </div>
    </Band>
  );
}

export function V2Team() {
  return (
    <Band tone="white" label="Team">
      <Head eyebrow="Our people" title={<>The team behind <em>your results</em></>} />
      <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
        {team.map((m) => (
          <StaggerItem key={m.name} className="group text-center">
            <div className="rounded-[2rem] bg-paper p-8 ring-1 ring-line transition-all duration-500 group-hover:-translate-y-1.5 group-hover:bg-white group-hover:shadow-lift">
              {/* The reference page has no team photos, so initials stand in. */}
              <div className="mx-auto grid size-28 place-items-center rounded-full bg-lime ring-8 ring-lime/30 transition-transform duration-500 group-hover:scale-105">
                <span className="font-display text-4xl font-medium text-navy-900" aria-hidden>
                  {m.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-medium text-ink">{m.name}</h3>
              <p className="mt-1 text-sm text-body">{m.role}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Band>
  );
}

export function V2FeaturedOn() {
  return (
    <Band tone="cream" className="!py-16 lg:!py-20" label="Featured on">
      <Head eyebrow="In the press" title={<>As <em>Featured</em> On</>} />
      <Stagger className="mt-12 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5" stagger={0.07}>
        {featuredOn.map((f) => (
          <StaggerItem key={f.name} className="flex h-16 items-center justify-center">
            <Image src={f.image} alt={f.name} width={200} height={64} className="max-h-12 w-auto max-w-[160px] object-contain opacity-60 grayscale transition-all duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0" />
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal className="mt-10 text-center text-sm font-semibold uppercase tracking-[0.18em] text-body">and many more.</Reveal>
    </Band>
  );
}

export function V2Faq() {
  return (
    <FaqV2
      title={<>Questions to ask before <em>hiring</em> an SEO agency</>}
      lead="Can’t find your answer? We’re happy to walk you through it on a quick call."
      items={faqs.map((f) => ({ q: f.q, a: f.a }))}
      aside={
        <Reveal delay={0.15} className="relative mt-8 overflow-hidden rounded-[2rem] bg-navy-900 p-8 text-white">
          <Sparkle className="absolute right-5 top-5 size-8 text-lime" />
          <p className="font-display text-2xl font-medium">Still deciding?</p>
          <p className="mt-3 text-[15px] leading-relaxed text-white/75">Get a free, no-obligation audit showing your website’s current position and a step-by-step roadmap to 2X your traffic and leads.</p>
          <Btn href={links.bookCall} className="mt-6">
            Claim your free SEO growth plan
          </Btn>
        </Reveal>
      }
    />
  );
}

export function V2Insights() {
  return (
    <Band tone="paper" label="Insights">
      <Head eyebrow="Blog" title={<>Latest SEO &amp; <em>link building</em> insights</>} />
      <PostGridV2
        className="mt-14"
        posts={posts.map((p) => ({ category: p.category, title: p.title, href: p.href, date: p.date, image: p.image }))}
      />
      <Reveal className="mt-10 text-center">
        <Btn href={links.blog} variant="outline">
          Read the blog
        </Btn>
      </Reveal>
    </Band>
  );
}
