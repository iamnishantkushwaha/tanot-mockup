import type { Metadata } from "next";
import Image from "next/image";
import { X } from "lucide-react";
import { awards } from "@/lib/content";
import { lb_faqs, lb_impact, lb_kpis, lb_process, lb_proof, lb_stats, lb_strategies, lb_vanity } from "@/lib/page-data";
import { links } from "@/lib/site";
import { CountUp, Reveal, Stagger, StaggerItem } from "@/components/v2/motion";
import { V2Carousel } from "@/components/v2/embeds";
import { Band, Btn, Head, V2Link } from "@/components/v2/ui";
import { CheckV2, CtaV2, FaqV2, PageHeroV2, Tile, Underlined } from "@/components/v2/shared";
import { LinkChain } from "@/components/v2/graphics";

export const metadata: Metadata = {
  title: "Link Building Agency",
  description: "White-hat, editorial link building that improves rankings, increases AI search visibility and supports measurable commercial growth.",
};

const tones = ["lime", "white", "forest", "cream", "brand"] as const;

export default function V2LinkBuilding() {
  return (
    <>
      <PageHeroV2
        formId="v2lb"
        title={
          <>
            <Underlined>Link Building Agency</Underlined> That Moves Revenue Metrics
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
          <Btn href={links.bookCall} size="lg">
            Book a Call
          </Btn>
        }
        footnote={
          <div className="flex flex-wrap items-center gap-5">
            <V2Link href={links.clutch} aria-label="Tanot Solutions on Clutch, 5.0 rating" className="inline-block rounded-2xl bg-white p-2 shadow-card ring-1 ring-line transition-transform hover:-translate-y-0.5">
              <Image src="/images/brand/clutch-badge.png" alt="Reviewed on Clutch, 5.0 rating" width={245} height={102} style={{ width: 128, height: "auto" }} />
            </V2Link>
            <span>No lock-ins. Cancel anytime with 30 days’ notice</span>
          </div>
        }
      />

      <section aria-label="Link building in numbers" className="relative overflow-hidden bg-lime py-14 text-navy-900 grain">
        <Stagger className="relative mx-auto grid max-w-[1000px] grid-cols-1 gap-10 px-5 text-center sm:grid-cols-3 sm:px-8">
          {lb_stats.map((s) => (
            <StaggerItem key={s.label}>
              <p className="font-display text-6xl font-medium leading-none sm:text-7xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-navy-900/75">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <Band tone="white" label="Trusted brands">
        <Head title={<>Trusted By <em>150+ Brands</em> Worldwide</>} lead="We help brands earn high-authority, editorial backlinks that improve rankings, increase AI search visibility, and support measurable commercial growth." />
        <Reveal className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-dashed border-line bg-paper p-4 sm:p-8">
          <Image src="/images/brand/trusted-brands.png" alt="Logos of brands that trust Tanot Solutions" width={1024} height={332} sizes="(min-width: 1024px) 960px, 100vw" className="h-auto w-full" />
        </Reveal>
        <p className="mt-6 text-center text-sm font-semibold uppercase tracking-[0.18em] text-body">and many more</p>
      </Band>

      <Band tone="cream" label="Awards">
        <Head eyebrow="Recognition" title={<>Awarded As The <em>Best SEO And Link Building Agency</em></>} />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {awards.map((a, i) => (
            <StaggerItem key={`${a.title}-${i}`} className="group">
              <div className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-white ring-1 ring-line transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative m-3 h-44 overflow-hidden rounded-[1.4rem] bg-paper">
                  <Image src={a.image} alt={a.title} fill sizes="(min-width: 1024px) 380px, 90vw" className="object-contain p-3 transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="px-6 pb-6 pt-2 font-display text-xl font-medium leading-snug text-ink">{a.title}</h3>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Band>

      <Band tone="paper" label="Strategies">
        <Head eyebrow="Our strategies" title={<>Our White-Hat Link Building Strategies <em>Built For Scale &amp; Relevance</em></>} lead="We deploy ethical, scalable link acquisition strategies tailored to your niche, competition, and goals." />
        <Stagger className="mt-14 grid gap-5 lg:grid-cols-6">
          {lb_strategies.map((s, i) => {
            const tone = tones[i];
            const dark = tone === "forest" || tone === "brand";
            return (
              <StaggerItem key={s.title} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
                <Tile tone={tone} className="h-full">
                  <span className={`grid size-14 place-items-center rounded-2xl ${dark ? "bg-lime text-navy-900" : "bg-navy-900 text-lime"}`}>
                    <s.icon className="size-7" aria-hidden />
                  </span>
                  <h3 className={`mt-7 text-2xl font-medium leading-snug ${dark ? "text-white" : "text-navy-900"}`}>{s.title}</h3>
                  <p className={`mt-3 text-[15px] leading-relaxed ${dark ? "text-white/80" : tone === "lime" ? "text-navy-900/80" : "text-body"}`}>{s.body}</p>
                </Tile>
              </StaggerItem>
            );
          })}
        </Stagger>
        <Reveal className="mt-10 text-center">
          <Btn href={links.bookCall}>Get a Custom Link Strategy</Btn>
        </Reveal>
      </Band>

      <Band tone="cream" label="Placements">
        <Head eyebrow="Placements" title={<>Where We Secure <em>Link Placements</em> And Brand Mentions</>} lead="We’ve secured placements on high-authority publications with genuine editorial standards, trusted by both search engines and AI systems." />
        <Stagger className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4" stagger={0.05}>
          {Array.from({ length: 8 }, (_, i) => (
            <StaggerItem key={i} className="grid place-items-center transition-transform duration-300 hover:-translate-y-1.5">
              <Image src={`/images/publishers/p${i + 1}.png`} alt={`Publication where Tanot Solutions has secured placements, ${i + 1} of 8`} width={202} height={80} className="w-full max-w-[202px]" style={{ width: "100%", height: "auto" }} />
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-8 text-center text-sm font-semibold uppercase tracking-[0.18em] text-body">and many more</p>
      </Band>

      <Band tone="white" label="Measurement">
        <Head eyebrow="Measurement" title={<>How We Measure The Impact Of <em>Link Building</em></>} lead="We focus on metrics that influence buying decisions — not numbers that only look good in reports." />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <Tile tone="cream" className="h-full">
              <h3 className="text-3xl font-medium text-ink">Vanity Metrics We Don’t Track</h3>
              <p className="mt-3 text-[15px] text-body">We do not optimize or report success based on:</p>
              <ul className="mt-6 space-y-4">
                {lb_vanity.map((v) => (
                  <li key={v} className="flex items-start gap-3 text-[15px] font-medium text-ink">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-ink text-paper">
                      <X className="size-3.5" strokeWidth={3.5} aria-hidden />
                    </span>
                    {v}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-body">These metrics often look impressive, but rarely translate into ROI.</p>
            </Tile>
          </Reveal>
          <Reveal delay={0.1}>
            <Tile tone="lime" className="h-full">
              <h3 className="text-3xl font-medium text-navy-900">KPIs That Actually Matter</h3>
              <p className="mt-3 text-[15px] text-navy-900/80">Our link building services are measured using business-driven SEO KPIs:</p>
              <div className="mt-6">
                <CheckV2 items={lb_kpis} />
              </div>
              <p className="mt-6 text-sm text-navy-900/80">Metrics tied directly to buying intent, pipeline, and long-term growth.</p>
            </Tile>
          </Reveal>
        </div>
        <Reveal className="mt-10 text-center">
          <Btn href={links.bookCall}>Work with us</Btn>
        </Reveal>
      </Band>

      <Band tone="forest" label="Process">
        <Head light eyebrow="Process" title={<>Our Transparent <em>Link Building Process</em></>} lead="We’ve built a clear, approval-first backlink building process that keeps you informed and in control at every stage." />
        <ol className="mx-auto mt-14 grid max-w-5xl gap-4">
          {lb_process.map((s, i) => (
            <li key={s.title}>
              <Reveal className="grid items-center gap-4 rounded-[2rem] border border-white/15 bg-white/[0.05] p-6 sm:grid-cols-[110px_1fr] sm:p-8">
                <span className="font-display text-6xl font-medium leading-none text-lime sm:text-7xl">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-2xl font-medium text-white">{s.title}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-white/75">{s.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Band>

      <Band tone="paper" label="Proof of impact">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="relative">
            <LinkChain className="absolute -left-6 -top-8 w-40 text-lime" />
            <Image src="/images/pages/lb-visual.png" alt="Illustration of a team building contextual backlinks" width={485} height={490} className="relative mx-auto h-auto w-full max-w-md" />
          </Reveal>
          <div>
            <Head align="left" eyebrow="Results" title={<>Proof Of Impact, <em>Not Vanity Metrics</em></>} lead="We focus on metrics that influence buying decisions — not numbers that only look good in reports." />
            <Reveal delay={0.1} className="mt-7">
              <p className="mb-4 font-display text-xl font-medium text-ink">Our link building campaigns consistently result in:</p>
              <CheckV2 items={lb_impact} />
            </Reveal>
          </div>
        </div>
        <Reveal className="mt-16">
          <V2Carousel items={lb_proof} label="Client feedback screenshots" />
        </Reveal>
        <Reveal className="mt-8 text-center">
          <Btn href={links.reviews} variant="outline">
            Read More Reviews
          </Btn>
        </Reveal>
      </Band>

      <Band tone="lime" label="Your partner">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Head align="left" title={<>Your Partner For Scalable, <em className="!text-navy-900 underline decoration-navy-900/30 decoration-4 underline-offset-8">White-Hat Link Building</em></>} lead="If you’re done wasting budget on low-quality links and outdated tactics, it’s time to work with a link building company focused on long-term SEO growth." />
            <Reveal delay={0.1} className="mt-8">
              <CheckV2 items={["11+ years of combined hands-on SEO and link building experience", "Smooth communication via Email, Slack, WhatsApp, or Teams", "No links on unapproved websites"]} />
            </Reveal>
            <Reveal delay={0.2} className="mt-9">
              <Btn href={links.bookCall} variant="dark" size="lg">
                Book a Strategy Call
              </Btn>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="mx-auto">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-[#dfe3e8] shadow-lift">
              <Image src="/images/brand/renu-sharma.webp" alt="Renu Sharma, Founder of Tanot Solutions" fill sizes="384px" className="object-cover object-top" />
            </div>
          </Reveal>
        </div>
      </Band>

      <FaqV2 tone="white" title={<>Frequently Asked <em>Questions</em></>} items={lb_faqs} />
      <CtaV2 />
    </>
  );
}
