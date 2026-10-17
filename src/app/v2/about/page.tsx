import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { about_industries, about_recognition, about_timeline, about_values } from "@/lib/page-data";
import { links } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "@/components/v2/motion";
import { Band, Btn, Head } from "@/components/v2/ui";
import { CtaV2, PageHeroV2, Tile, Underlined } from "@/components/v2/shared";
import { Sparkle } from "@/components/v2/graphics";
import { V2Link } from "@/components/v2/ui";

export const metadata: Metadata = {
  title: "About Us",
  description: "Tanot Solutions is a link-building and SEO agency founded in 2020 in Jodhpur, Rajasthan. Built on integrity, driven by results.",
};

const tones = ["lime", "forest", "white", "cream", "brand", "white"] as const;

export default function V2About() {
  return (
    <>
      <PageHeroV2
        formId="v2about"
        title={
          <>
            Built on Integrity. <Underlined>Driven by Results.</Underlined>
          </>
        }
        body="Tanot Solutions is a link-building and SEO agency founded in 2020 in Jodhpur, Rajasthan. We help ambitious brands earn high-authority, editorially placed backlinks, grow organic traffic, and build lasting visibility across both traditional search and AI-driven results."
        bullets={["100% Google-compliant methods", "1-year link guarantee"]}
        actions={
          <>
            <Btn href={links.bookCall} size="lg">
              Book a Free Strategy Call
            </Btn>
            <Btn href={links.reviews} variant="outline" size="lg" arrow={false}>
              See Client Results
            </Btn>
          </>
        }
      />

      <Band tone="white" label="Why Tanot exists">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Head align="left" eyebrow="Our story" title={<>Why Tanot Solutions <em>Exists</em></>} />
            <Reveal delay={0.1} className="mt-7 space-y-4 text-[17px] leading-relaxed text-body">
              <p>
                Tanot Solutions was born out of a problem that kept repeating across the SEO industry. Brands were spending serious budgets on link building, yet the vast majority of those links were low-quality, irrelevant, or violating Google&apos;s guidelines. Agencies were optimizing for volume, not value.
              </p>
              <p>
                We founded Tanot Solutions in 2020 with one idea: build links the way a responsible editorial team would. Manually vetted, niche-relevant, client-approved, and built to last. Today, 15+ specialists serve 150+ brands across 20+ countries using that same process from day one.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
              <Btn href={links.caseStudies}>View Case Studies</Btn>
              <Btn href={links.featuredIn} variant="outline" arrow={false}>
                See Where We&apos;re Featured
              </Btn>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <figure className="relative overflow-hidden rounded-[2rem] bg-navy-900 p-8 text-white shadow-lift sm:p-10">
              <Sparkle className="absolute right-6 top-6 size-9 text-lime" />
              <Quote className="size-10 fill-lime text-lime" aria-hidden />
              <blockquote className="mt-4 font-display text-2xl font-medium leading-snug sm:text-[1.9rem]">
                &ldquo;We started Tanot Solutions because the industry needed an agency that would defend every link it built in public, not one that hid its methods behind dashboards and jargon.&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm text-white/75">
                <span className="font-display text-lg font-medium text-white">Renu Sharma</span>, Co-Founder
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Band>

      <Band tone="cream" label="Mission and vision">
        <Head eyebrow="Mission & vision" title={<>Our <em>Mission</em> And Vision</>} lead="Two commitments that govern every campaign, every link, and every client relationship." />
        <Stagger className="mt-14 grid gap-5 lg:grid-cols-2">
          {[
            { tone: "lime" as const, kicker: "Our Mission", title: "To make white-hat link building the obvious choice for every serious brand.", body: "We exist to deliver editorial backlinks that actually move rankings, grow traffic, and support real business goals. Full transparency and zero shortcuts on every campaign. Every link we build should be something we are proud to show to a client, a journalist, and Google alike.", tag: "Quality over volume" },
            { tone: "forest" as const, kicker: "Our Vision", title: "To become the most trusted SEO growth partner for brands that value long-term authority.", body: "We are building toward a future where Tanot Solutions is the first name brands think of when they need a link-building partner they can trust to act as a true extension of their own team, across search, AI visibility, and content authority.", tag: "Built for the long term" },
          ].map((m) => (
            <StaggerItem key={m.kicker}>
              <Tile tone={m.tone} className="h-full">
                <p className={`text-xs font-bold uppercase tracking-[0.2em] ${m.tone === "forest" ? "text-lime" : "text-navy-900/70"}`}>{m.kicker}</p>
                <h3 className={`mt-4 text-3xl font-medium leading-tight sm:text-4xl ${m.tone === "forest" ? "text-white" : "text-navy-900"}`}>{m.title}</h3>
                <p className={`mt-5 flex-1 text-[16px] leading-relaxed ${m.tone === "forest" ? "text-white/80" : "text-navy-900/80"}`}>{m.body}</p>
                <p className={`mt-7 inline-flex w-fit rounded-full px-4 py-1.5 text-sm font-semibold ${m.tone === "forest" ? "bg-lime text-navy-900" : "bg-navy-900 text-lime"}`}>{m.tag}</p>
              </Tile>
            </StaggerItem>
          ))}
        </Stagger>
      </Band>

      <Band tone="paper" label="Timeline">
        <Head eyebrow="Our journey" title={<>From Day One To <em>Where We Are Today</em></>} lead="Six years of building, learning, and growing. One editorial link at a time." />
        <ol className="mx-auto mt-16 max-w-5xl space-y-6">
          {about_timeline.map((t, i) => (
            <li key={t.year}>
              <Reveal className="grid gap-6 rounded-[2rem] bg-white p-7 ring-1 ring-line sm:p-10 md:grid-cols-[220px_1fr] md:gap-12">
                <div>
                  <p className="font-display text-7xl font-medium leading-none text-brand-500 sm:text-8xl">{t.year}</p>
                  <p className="mt-3 inline-flex rounded-full bg-lime px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-900">{t.label}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-medium leading-snug text-ink sm:text-3xl">{t.title}</h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-body">{t.body}</p>
                  <p className="mt-5 text-sm font-bold uppercase tracking-wider text-brand-500">
                    {String(i + 1).padStart(2, "0")} · {t.chip}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Band>

      <Band tone="cream" label="Values">
        <Head eyebrow="Values" title={<>The Values Behind <em>Every Campaign</em></>} lead="These are not slogans. They are the operating principles that govern every link we build, every report we send, and every decision we make as an agency." />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {about_values.map((v, i) => {
            const tone = tones[i];
            const dark = tone === "forest" || tone === "brand";
            return (
              <StaggerItem key={v.title}>
                <Tile tone={tone} className="h-full min-h-[270px] justify-between">
                  <span className={`grid size-14 place-items-center rounded-2xl ${dark ? "bg-lime text-navy-900" : "bg-navy-900 text-lime"}`}>
                    <v.icon className="size-7" aria-hidden />
                  </span>
                  <div className="mt-8">
                    <h3 className={`text-2xl font-medium ${dark ? "text-white" : "text-navy-900"}`}>{v.title}</h3>
                    <p className={`mt-3 text-[15px] leading-relaxed ${dark ? "text-white/80" : tone === "lime" ? "text-navy-900/80" : "text-body"}`}>{v.body}</p>
                  </div>
                </Tile>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Band>

      <Band tone="white" label="Recognition">
        <Head eyebrow="Recognition" title={<>Awards And <em>Industry Recognition</em></>} lead="Independent recognition based on verified client reviews and campaign outcomes, not self-nomination." />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about_recognition.map((r) => (
            <StaggerItem key={r.title} className="h-full">
              <V2Link href={r.href} className="group flex h-full flex-col rounded-[2rem] bg-paper p-7 ring-1 ring-line transition-all duration-500 hover:-translate-y-1.5 hover:bg-lime hover:shadow-lift">
                <span className="grid size-14 place-items-center rounded-full bg-lime text-navy-900 transition-colors group-hover:bg-navy-900 group-hover:text-lime">
                  <r.icon className="size-7" aria-hidden />
                </span>
                <h3 className="mt-6 text-xl font-medium leading-snug text-ink">{r.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-body group-hover:text-navy-900/80">{r.body}</p>
              </V2Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Band>

      <Band tone="forest" label="Industries">
        <Head light eyebrow="Industries" title={<>Industries <em>We Serve</em></>} lead="We serve 20+ industries across 20+ countries. Wherever your brand competes, we know the publishers and placements that matter." />
        <Stagger className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3" stagger={0.05}>
          {about_industries.map((i) => (
            <StaggerItem key={i} className="rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 font-display text-lg text-white transition-colors hover:bg-lime hover:text-navy-900">
              {i}
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.2} className="mt-12 flex flex-wrap justify-center gap-3">
          <Btn href={links.pricing} size="lg">
            See Our Pricing
          </Btn>
          <Btn href={links.bookCall} variant="outlineLight" size="lg" arrow={false}>
            Request a Proposal
          </Btn>
        </Reveal>
      </Band>

      <CtaV2 title="Try Our SEO And Link Building Service For 30 Days Then Choose To Stay." />
    </>
  );
}
