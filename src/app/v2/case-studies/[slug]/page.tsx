import * as React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Building2, CircleAlert, Quote, Target, Wrench } from "lucide-react";
import { caseStudies, getCase, localizeHtml, type CaseBlock } from "@/lib/articles";
import { links, routes } from "@/lib/site";
import { Reveal, Rise, Stagger, StaggerItem } from "@/components/v2/motion";
import { Band, Btn, Head, V2Link, Wrap } from "@/components/v2/ui";
import { CaseGridV2 } from "@/components/v2/case-grid";
import { CtaV2, FaqList, Tile } from "@/components/v2/shared";
import { LinkChain, Sparkle } from "@/components/v2/graphics";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  return c ? { title: c.title, description: c.description } : {};
}

const navLabels: Record<string, string> = { overview: "Overview", challenge: "The Challenge", strategy: "Strategy", execution: "Execution", baseline: "Key Metrics", faq: "FAQ" };
const html = (h: string) => ({ __html: localizeHtml(h, "/v2") });
const overviewIcon = (t: string) => (/client/i.test(t) ? Building2 : /service/i.test(t) ? Wrench : Target);

function AccentTitle({ html: h }: { html: string }) {
  return (
    <>
      {h.split(/(<em>.*?<\/em>)/).map((part, i) =>
        part.startsWith("<em>") ? (
          <em key={i} className="text-brand-500">{part.replace(/<\/?em>/g, "")}</em>
        ) : (
          <React.Fragment key={i}>{part.replace(/<[^>]+>/g, "")}</React.Fragment>
        ),
      )}
    </>
  );
}

function Cards({ id, cards }: { id: string; cards: Extract<CaseBlock, { t: "cards" }>["cards"] }) {
  if (id === "execution") {
    return (
      <ol className="mx-auto grid max-w-4xl gap-4">
        {cards.map((c, i) => (
          <li key={c.title}>
            <Reveal className="grid gap-4 rounded-[2rem] bg-white p-7 ring-1 ring-line sm:grid-cols-[96px_1fr] sm:p-9">
              <span className="font-display text-6xl font-medium leading-none text-lime-600">{String(i + 1).padStart(2, "0")}</span>
              <div>
                {c.kicker && <p className="inline-flex rounded-full bg-lime px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-900">{c.kicker}</p>}
                <h3 className="mt-3 text-2xl font-medium text-ink">{c.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-body" dangerouslySetInnerHTML={html(c.body)} />
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    );
  }
  const numbered = id === "strategy";
  const tones = ["lime", "forest", "white", "cream"] as const;
  return (
    <Stagger className={`grid gap-5 sm:grid-cols-2 ${cards.length % 3 === 0 ? "lg:grid-cols-3" : cards.length === 4 ? "lg:grid-cols-4" : ""}`}>
      {cards.map((c, i) => {
        const Icon = id === "overview" ? overviewIcon(c.title) : CircleAlert;
        const tone = numbered ? tones[i % 4] : id === "overview" ? tones[i % 3] : "white";
        const dark = tone === "forest";
        return (
          <StaggerItem key={c.title} className="h-full">
            <Tile tone={tone} className="h-full">
              {numbered ? (
                <span className={`font-display text-5xl font-medium ${dark ? "text-lime" : "text-navy-900/30"}`}>{c.kicker || String(i + 1).padStart(2, "0")}</span>
              ) : (
                <span className={`grid size-12 place-items-center rounded-2xl ${dark ? "bg-lime text-navy-900" : "bg-navy-900 text-lime"}`}>
                  <Icon className="size-6" aria-hidden />
                </span>
              )}
              <h3 className={`mt-5 text-xl font-medium leading-snug ${dark ? "text-white" : "text-navy-900"}`}>{c.title}</h3>
              <p className={`mt-2 text-[15px] leading-relaxed ${dark ? "text-white/80" : tone === "lime" ? "text-navy-900/80" : "text-body"}`} dangerouslySetInnerHTML={html(c.body)} />
            </Tile>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}

function BeforeAfter({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <>
      <div className="hidden overflow-hidden rounded-[2rem] bg-white ring-1 ring-line md:block">
        <table className="w-full border-collapse text-left text-[15px] leading-relaxed">
          <thead>
            <tr className="bg-navy-900 text-white">
              {head.map((h, i) => (
                <th key={i} scope="col" className={`px-6 py-4 font-sans text-sm font-bold ${i === head.length - 1 ? "bg-lime text-navy-900" : ""}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-line">
                {r.map((c, j) => (
                  <td key={j} className={`px-6 py-4 align-top ${j === r.length - 1 ? "bg-lime/25 font-semibold text-ink" : ""}`} dangerouslySetInnerHTML={html(c)} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="grid gap-4 md:hidden">
        {rows.map((r, i) => (
          <li key={i} className="rounded-3xl bg-white p-5 ring-1 ring-line">
            <p className="font-display text-lg font-medium text-ink" dangerouslySetInnerHTML={html(r[0])} />
            <dl className="mt-3 space-y-3">
              {r.slice(1).map((c, j) => (
                <div key={j} className={`rounded-2xl p-3 ${j === r.length - 2 ? "bg-lime/35" : "bg-tint"}`}>
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-brand-600">{head[j + 1]}</dt>
                  <dd className="mt-1 text-[15px] text-ink" dangerouslySetInnerHTML={html(c)} />
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}

function Blocks({ id, blocks }: { id: string; blocks: CaseBlock[] }) {
  return (
    <div className="space-y-8">
      {blocks.map((b, i) => {
        switch (b.t) {
          case "p":
            return <p key={i} className="mx-auto max-w-3xl text-center text-[17px] leading-relaxed text-body" dangerouslySetInnerHTML={html(b.x)} />;
          case "ul":
          case "ol":
            return (
              <ul key={i} className="mx-auto max-w-3xl space-y-2.5">
                {b.items.map((li, j) => (
                  <li key={j} className="relative pl-7 text-[16px] before:absolute before:left-1 before:top-[0.65em] before:size-2 before:rounded-full before:bg-lime-600" dangerouslySetInnerHTML={html(li)} />
                ))}
              </ul>
            );
          case "quote":
            return (
              <Reveal key={i}>
                <figure className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-navy-900 p-8 text-white sm:p-12">
                  <Sparkle className="absolute right-6 top-6 size-9 text-lime" />
                  <Quote className="size-10 fill-lime text-lime" aria-hidden />
                  <blockquote className="mt-4 font-display text-xl font-medium leading-snug sm:text-2xl" dangerouslySetInnerHTML={html(b.x)} />
                  {(b.name || b.role) && (
                    <figcaption className="mt-6 text-sm text-white/75">
                      <span className="font-display text-lg font-medium text-white">{b.name}</span>
                      {b.role ? `, ${b.role}` : ""}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            );
          case "cards":
            return <Cards key={i} id={id} cards={b.cards} />;
          case "table":
            return (
              <Reveal key={i}>
                <BeforeAfter head={b.head} rows={b.rows} />
              </Reveal>
            );
          case "img":
            return (
              <Reveal key={i} className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-white p-3 ring-1 ring-line">
                <Image src={b.src} alt={b.alt} width={1400} height={800} sizes="(min-width: 1024px) 896px, 100vw" className="h-auto w-full rounded-[1.5rem]" />
              </Reveal>
            );
          case "faq":
            return (
              <Reveal key={i}>
                <div className="mx-auto max-w-3xl">
                  <FaqList group="case-faq" items={b.items.map((f) => ({ q: f.q, a: <span dangerouslySetInnerHTML={html(f.a)} /> }))} />
                </div>
              </Reveal>
            );
        }
      })}
    </div>
  );
}

export default async function V2CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();
  return (
    <>
      <header className="relative isolate overflow-hidden pt-28 sm:pt-32">
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
        <LinkChain className="absolute -left-12 top-48 -z-10 w-56 -rotate-12 text-brand-100" />
        <Wrap className="grid items-center gap-12 pb-16 pt-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pb-24">
          <div>
            <Rise>
              <V2Link href={routes.caseStudies} className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:underline">
                <ArrowLeft className="size-4" aria-hidden /> All case studies
              </V2Link>
            </Rise>
            <Rise delay={0.05}>
              <h1 className="text-balance text-[2.1rem] leading-[1.04] sm:text-5xl lg:text-[3.3rem] [&_em]:font-medium [&_em]:italic">
                <AccentTitle html={c.titleHtml} />
              </h1>
            </Rise>
            <Rise delay={0.12}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-body">{c.sub}</p>
            </Rise>
            <Rise delay={0.2}>
              <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {c.stats.map((s, i) => (
                  <div key={s.lbl} className={`rounded-3xl px-5 py-4 ${i % 2 === 0 ? "bg-lime text-navy-900" : "bg-navy-900 text-white"}`}>
                    <dd className="font-display text-2xl font-medium leading-tight">{s.val}</dd>
                    <dt className={`mt-1 text-[11px] font-bold uppercase tracking-wider ${i % 2 === 0 ? "text-navy-900/70" : "text-lime"}`}>{s.lbl}</dt>
                  </div>
                ))}
              </dl>
            </Rise>
            <Rise delay={0.28} className="mt-8">
              <Btn href={links.bookCall} size="lg">Book a Free Strategy Call</Btn>
            </Rise>
          </div>
          {c.heroImage && (
            <Rise delay={0.2} y={30} className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-lime" aria-hidden />
              <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-lift ring-1 ring-line">
                <Image src={c.heroImage} alt="" width={800} height={800} priority sizes="(min-width: 1024px) 420px, 90vw" className="h-auto w-full rounded-[1.5rem]" />
              </div>
            </Rise>
          )}
        </Wrap>
      </header>

      <nav aria-label="Case study sections" className="sticky top-[84px] z-30 border-y border-line bg-paper/90 backdrop-blur-xl">
        <ul className="mx-auto flex max-w-[1240px] gap-1 overflow-x-auto px-5 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {c.sections.map((s) => (
            <li key={s.id} className="shrink-0">
              <a href={`#${s.id}`} className="block px-4 py-4 text-sm font-bold text-body transition-colors hover:text-brand-600">{navLabels[s.id] ?? s.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {c.sections.map((s, i) => (
        <Band key={s.id} id={s.id} tone={i % 2 === 0 ? "white" : "cream"} className="scroll-mt-32">
          <Head title={s.title} lead={s.lead} />
          <div className="mt-12">
            <Blocks id={s.id} blocks={s.blocks} />
          </div>
        </Band>
      ))}

      <Band tone="paper" label="Related case studies">
        <Head eyebrow="More proof" title={<>Related <em>Case Studies</em></>} />
        <CaseGridV2 exclude={c.slug} className="mt-14" />
        <Reveal className="mt-10 text-center">
          <Btn href={links.reviews} variant="outline">View All Client Reviews</Btn>
        </Reveal>
      </Band>

      <CtaV2 title={c.cta?.title ?? "Drive Organic Rankings and AI Search Visibility with High-Authority Backlinks"} note={c.cta?.desc ? <p>{c.cta.desc}</p> : undefined} primary={{ label: "Book a Free Strategy Call", href: links.bookCall }} secondary={{ label: "Contact Us", href: links.contact }} />
    </>
  );
}
