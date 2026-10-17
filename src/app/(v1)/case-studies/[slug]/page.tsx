import * as React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Building2, CircleAlert, Quote, Target, Wrench } from "lucide-react";
import { caseStudies, getCase, localizeHtml, type CaseBlock } from "@/lib/articles";
import { links, routes } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { SectionHeading } from "@/components/ui/section-heading";
import { SmartLink } from "@/components/ui/smart-link";
import { FaqList } from "@/components/ui/faq-list";
import { Section } from "@/components/sections/blocks";
import { CaseGrid } from "@/components/sections/case-cards";
import { CtaBand } from "@/components/sections/company";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  return { title: c.title, description: c.description, openGraph: { title: c.title, description: c.description } };
}

const navLabels: Record<string, string> = {
  overview: "Overview",
  challenge: "The Challenge",
  strategy: "Strategy",
  execution: "Execution",
  baseline: "Key Metrics",
  faq: "FAQ",
};

const html = (h: string) => ({ __html: localizeHtml(h) });
const prose = "[&_a]:font-medium [&_a]:text-brand-600 [&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-semibold [&_strong]:text-ink";

/** Turns `<em>accent</em>` runs in the source headline into the gradient accent. */
function AccentTitle({ html: h }: { html: string }) {
  return (
    <>
      {h.split(/(<em>.*?<\/em>)/).map((part, i) =>
        part.startsWith("<em>") ? (
          <span key={i} className="text-gradient">
            {part.replace(/<\/?em>/g, "")}
          </span>
        ) : (
          <React.Fragment key={i}>{part.replace(/<[^>]+>/g, "")}</React.Fragment>
        ),
      )}
    </>
  );
}

const overviewIcon = (title: string) => (/client/i.test(title) ? Building2 : /service/i.test(title) ? Wrench : Target);

function Cards({ id, cards }: { id: string; cards: Extract<CaseBlock, { t: "cards" }>["cards"] }) {
  if (id === "execution") {
    return (
      <ol className="relative mx-auto max-w-3xl space-y-5">
        <span className="absolute bottom-6 left-[11px] top-6 w-px bg-gradient-to-b from-brand-300 via-brand-200 to-transparent" aria-hidden />
        {cards.map((c) => (
          <li key={c.title} className="relative pl-10">
            <span className="absolute left-0 top-7 size-6 rounded-full border-4 border-white bg-brand-500 shadow" aria-hidden />
            <Reveal className="rounded-3xl border border-line bg-white p-7 shadow-card">
              {c.kicker && <p className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-600">{c.kicker}</p>}
              <h3 className="mt-3 text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-body" dangerouslySetInnerHTML={html(c.body)} />
            </Reveal>
          </li>
        ))}
      </ol>
    );
  }
  const numbered = id === "strategy";
  return (
    <Stagger className={`grid gap-5 sm:grid-cols-2 ${cards.length % 3 === 0 ? "lg:grid-cols-3" : cards.length === 4 ? "lg:grid-cols-4" : ""}`}>
      {cards.map((c, i) => {
        const Icon = id === "overview" ? overviewIcon(c.title) : CircleAlert;
        return (
          <StaggerItem
            key={c.title}
            className="group flex flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-lift"
          >
            {numbered ? (
              <span className="font-display text-3xl font-extrabold text-gradient">{c.kicker || String(i + 1).padStart(2, "0")}</span>
            ) : (
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-teal-brand group-hover:text-white">
                <Icon className="size-6" aria-hidden />
              </span>
            )}
            <h3 className="mt-4 text-lg font-bold leading-snug">{c.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-body" dangerouslySetInnerHTML={html(c.body)} />
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}

function BeforeAfter({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <>
      <div className="hidden overflow-hidden rounded-3xl border border-line bg-white shadow-card md:block">
        <table className="w-full border-collapse text-left text-[15px] leading-relaxed">
          <thead>
            <tr className="bg-navy-900 text-white">
              {head.map((h, i) => (
                <th key={i} scope="col" className={`px-6 py-4 font-display text-sm font-bold ${i === head.length - 1 ? "bg-brand-600" : ""}`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-line">
                {r.map((c, j) => (
                  <td key={j} className={`px-6 py-4 align-top ${j === r.length - 1 ? "bg-brand-50/70 font-semibold text-ink" : ""}`} dangerouslySetInnerHTML={html(c)} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="grid gap-4 md:hidden">
        {rows.map((r, i) => (
          <li key={i} className="rounded-2xl border border-line bg-white p-5 shadow-card">
            <p className="font-display text-base font-bold text-ink" dangerouslySetInnerHTML={html(r[0])} />
            <dl className="mt-3 space-y-3">
              {r.slice(1).map((c, j) => (
                <div key={j} className={`rounded-xl p-3 ${j === r.length - 2 ? "bg-brand-50" : "bg-tint/60"}`}>
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
            return <p key={i} className={`mx-auto max-w-3xl text-center text-[17px] leading-relaxed text-body ${prose}`} dangerouslySetInnerHTML={html(b.x)} />;
          case "ul":
          case "ol":
            return (
              <ul key={i} className="mx-auto max-w-3xl space-y-2.5">
                {b.items.map((li, j) => (
                  <li key={j} className="relative pl-7 text-[16px] before:absolute before:left-1 before:top-[0.65em] before:size-2 before:rounded-full before:bg-brand-500" dangerouslySetInnerHTML={html(li)} />
                ))}
              </ul>
            );
          case "quote":
            return (
              <Reveal key={i}>
                <figure className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 text-white shadow-lift sm:p-10">
                  <div className="absolute -right-16 -top-16 size-56 rounded-full bg-brand-500/30 blur-[70px]" aria-hidden />
                  <Quote className="relative size-9 fill-brand-400/40 text-brand-400/40" aria-hidden />
                  <blockquote className="relative mt-3 text-lg font-medium leading-relaxed sm:text-xl" dangerouslySetInnerHTML={html(b.x)} />
                  {(b.name || b.role) && (
                    <figcaption className="relative mt-5 text-sm text-white/75">
                      <span className="font-display font-bold text-white">{b.name}</span>
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
              <Reveal key={i} className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-card">
                <Image src={b.src} alt={b.alt} width={1400} height={800} sizes="(min-width: 1024px) 896px, 100vw" className="h-auto w-full rounded-2xl" />
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

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  return (
    <>
      <header className="relative isolate overflow-hidden bg-gradient-to-b from-tint via-[#f2f6fc] to-white pt-[72px]">
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
        <div className="absolute -left-32 top-10 -z-10 size-[420px] rounded-full bg-brand-400/20 blur-[110px]" aria-hidden />
        <div className="absolute -right-24 top-40 -z-10 size-[380px] rounded-full bg-teal-brand/15 blur-[110px]" aria-hidden />
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-24 lg:pt-14">
          <div>
            <Reveal>
              <SmartLink href={routes.caseStudies} className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline">
                <ArrowLeft className="size-4" aria-hidden /> All case studies
              </SmartLink>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-balance text-3xl font-extrabold leading-[1.08] sm:text-4xl lg:text-[3.1rem]">
                <AccentTitle html={c.titleHtml} />
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-body sm:text-lg">{c.sub}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <dl className="mt-8 grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-white/80 shadow-card backdrop-blur sm:grid-cols-4">
                {c.stats.map((s, i) => (
                  <div key={s.lbl} className={`px-5 py-4 ${i > 0 ? "border-l border-line" : ""} ${i > 1 ? "border-t sm:border-t-0" : ""} ${i === 2 ? "border-l-0 sm:border-l" : ""}`}>
                    <dd className="font-display text-xl font-extrabold leading-tight text-ink sm:text-2xl">{s.val}</dd>
                    <dt className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-body">{s.lbl}</dt>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={0.28} className="mt-8">
              <ButtonLink href={links.bookCall} size="lg" arrow>
                Book a Free Strategy Call
              </ButtonLink>
            </Reveal>
          </div>
          {c.heroImage && (
            <Reveal delay={0.2} y={30} className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-400/30 to-teal-brand/20 blur-2xl" aria-hidden />
              <div className="overflow-hidden rounded-3xl border border-white bg-white p-3 shadow-lift ring-1 ring-line">
                <Image src={c.heroImage} alt="" width={800} height={800} priority sizes="(min-width: 1024px) 420px, 90vw" className="h-auto w-full rounded-2xl" />
              </div>
            </Reveal>
          )}
        </div>
      </header>

      <nav aria-label="Case study sections" className="sticky top-[72px] z-30 border-y border-line bg-white/90 backdrop-blur-xl">
        <ul className="mx-auto flex max-w-[1280px] gap-1 overflow-x-auto px-5 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {c.sections.map((s) => (
            <li key={s.id} className="shrink-0">
              <a href={`#${s.id}`} className="block px-4 py-4 text-sm font-semibold text-body transition-colors hover:text-brand-600">
                {navLabels[s.id] ?? s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {c.sections.map((s, i) => (
        <Section key={s.id} id={s.id} tone={i % 2 === 0 ? "white" : "tint"} className="scroll-mt-32">
          <SectionHeading title={s.title} description={s.lead} />
          <div className="mt-12">
            <Blocks id={s.id} blocks={s.blocks} />
          </div>
        </Section>
      ))}

      <Section label="Related case studies">
        <SectionHeading eyebrow="More proof" title="Related Case Studies" />
        <div className="mt-14">
          <CaseGrid exclude={c.slug} />
        </div>
        <Reveal className="mt-10 text-center">
          <ButtonLink href={links.reviews} variant="outline" arrow>
            View All Client Reviews
          </ButtonLink>
        </Reveal>
      </Section>

      <CtaBand
        title={c.cta?.title ?? "Drive Organic Rankings and AI Search Visibility with High-Authority Backlinks"}
        note={c.cta?.desc ? <p>{c.cta.desc}</p> : undefined}
        primary={{ label: "Book a Free Strategy Call", href: links.bookCall }}
        secondary={{ label: "Contact Us", href: links.contact }}
      />
    </>
  );
}
