import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Plus, Quote } from "lucide-react";
import { LeadForm } from "@/components/forms/lead-form";
import { Reveal, Rise, Stagger, StaggerItem } from "./motion";
import type { TestimonialData } from "@/components/sections/proof";
import { cn } from "@/lib/utils";
import { v2 } from "@/lib/v2";
import { LinkChain, Sparkle, Squiggle } from "./graphics";
import { Band, Btn, Eyebrow, Head, Tag, V2Link, Wrap } from "./ui";

const formBtn = "!bg-lime !bg-none !text-navy-900 hover:!bg-lime-600 !shadow-none rounded-full";

/** Lead form on a paper card, styled for V2. */
export function FormCard({ id, className }: { id: string; className?: string }) {
  return (
    <div className={cn("rounded-[2rem] bg-paper p-6 text-body shadow-lift sm:p-9", className)}>
      <LeadForm idPrefix={id} buttonClassName={formBtn} />
    </div>
  );
}

/** Inner-page hero: oversized serif headline, lime motifs, and a form / custom card on the right. */
export function PageHeroV2({
  eyebrow,
  title,
  body,
  bullets,
  actions,
  footnote,
  aside = "form",
  formId = "v2page",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  bullets?: React.ReactNode[];
  actions?: React.ReactNode;
  footnote?: React.ReactNode;
  aside?: "form" | "none" | React.ReactNode;
  formId?: string;
}) {
  const has = aside !== "none";
  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
      <LinkChain className="absolute -left-10 top-40 -z-10 w-56 -rotate-12 text-brand-100" />
      <Sparkle className="absolute right-[6%] top-32 -z-10 size-10 text-lime-600/70" />
      <Wrap className={cn("grid items-center gap-12 pb-16 pt-6 lg:gap-16 lg:pb-24 lg:pt-10", has ? "lg:grid-cols-[1.1fr_0.9fr]" : "")}>
        <div className={has ? "" : "max-w-4xl"}>
          {eyebrow && (
            <Rise>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Rise>
          )}
          <Rise delay={0.05}>
            <h1 className="mt-5 text-balance text-[2.5rem] leading-[1.02] sm:text-6xl lg:text-[4.2rem] [&_em]:font-medium [&_em]:italic [&_em]:text-brand-500">{title}</h1>
          </Rise>
          {body && (
            <Rise delay={0.15}>
              <div className="mt-6 max-w-xl space-y-4 text-pretty text-lg leading-relaxed text-body">{body}</div>
            </Rise>
          )}
          {bullets && (
            <Rise delay={0.2}>
              <ul className="mt-7 space-y-3">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] font-medium text-ink">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-lime text-navy-900">
                      <Check className="size-3.5" strokeWidth={3.5} aria-hidden />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Rise>
          )}
          {actions && (
            <Rise delay={0.28} className="mt-9 flex flex-wrap items-center gap-3">
              {actions}
            </Rise>
          )}
          {footnote && (
            <Rise delay={0.34} className="mt-5 text-sm text-body">
              {footnote}
            </Rise>
          )}
        </div>
        {has && (
          <Rise delay={0.2} y={36} className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-lime" aria-hidden />
            <div className="relative">{aside === "form" ? <FormCard id={formId} /> : <div className="rounded-[2rem] bg-paper p-6 shadow-lift ring-1 ring-line sm:p-9">{aside}</div>}</div>
          </Rise>
        )}
      </Wrap>
    </section>
  );
}

export type QuoteTone = "lime" | "forest" | "white" | "cream";

export function QuoteTile({ t, tone = "white", className, big }: { t: TestimonialData; tone?: QuoteTone; className?: string; big?: boolean }) {
  const dark = tone === "forest";
  return (
    <figure
      className={cn(
        "relative flex h-full flex-col rounded-[2rem] p-7 sm:p-9",
        tone === "lime" && "bg-lime text-navy-900",
        tone === "forest" && "bg-navy-800 text-white",
        tone === "white" && "bg-white text-body shadow-card ring-1 ring-line",
        tone === "cream" && "bg-tint text-body",
        className,
      )}
    >
      <Quote className={cn("size-9", dark ? "fill-lime text-lime" : tone === "lime" ? "fill-navy-900 text-navy-900" : "fill-brand-200 text-brand-200")} aria-hidden />
      {t.headline && <p className={cn("mt-4 font-display text-2xl font-semibold", dark ? "text-lime" : "text-brand-500")}>{t.headline}</p>}
      <blockquote className={cn("mt-4 flex-1 leading-relaxed", big ? "text-xl sm:text-2xl" : "text-[16px]", dark ? "text-white/90" : tone === "lime" ? "text-navy-900" : "text-ink/85")}>{t.quote}</blockquote>
      <figcaption className="mt-7 flex items-center gap-3">
        {t.avatar ? (
          <Image src={t.avatar} alt="" width={48} height={48} className={cn("size-12 rounded-full object-cover ring-2", dark ? "ring-lime" : "ring-navy-900/10")} />
        ) : (
          <span className={cn("grid size-12 place-items-center rounded-full font-display text-lg font-semibold", dark ? "bg-lime text-navy-900" : "bg-navy-900 text-lime")} aria-hidden>
            {t.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
          </span>
        )}
        <span>
          <span className={cn("block font-display text-lg font-semibold", dark ? "text-white" : "text-ink")}>{t.name}</span>
          <span className={cn("block text-sm", dark ? "text-white/65" : tone === "lime" ? "text-navy-900/70" : "text-body")}>{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export type PostV2 = { category: string; title: string; href: string; date: string; image: string };

export function PostGridV2({ posts, priorityFirst, className }: { posts: PostV2[]; priorityFirst?: boolean; className?: string }) {
  return (
    <Stagger className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", className)} stagger={0.08}>
      {posts.map((p, i) => (
        <StaggerItem key={p.href} className="h-full">
          <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white ring-1 ring-line transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
            <div className="relative m-3 aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-brand-50">
              <Image src={p.image} alt="" fill priority={priorityFirst && i === 0} sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105" />
              <Tag className="absolute left-3 top-3">{p.category}</Tag>
            </div>
            <div className="flex flex-1 flex-col px-6 pb-6 pt-2">
              <h3 className="text-balance font-display text-xl font-semibold leading-snug text-ink">
                <V2Link href={p.href} className="after:absolute after:inset-0 after:content-[''] group-hover:text-brand-500">
                  {p.title}
                </V2Link>
              </h3>
              <div className="mt-auto flex items-center justify-between pt-6 text-sm text-body">
                <span>
                  Renu Sharma · <time>{p.date}</time>
                </span>
                <span className="grid size-9 place-items-center rounded-full bg-navy-900 text-lime transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="size-4" aria-hidden />
                </span>
              </div>
            </div>
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function CtaV2({
  title = "Try Our SEO and Link Building Service for 30 Days - Then Choose to Stay",
  primary = { label: "Book a Call", href: "/lets-talk" },
  secondary = { label: "Contact Us", href: "/contact" },
  note,
}: {
  title?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
  note?: React.ReactNode;
}) {
  return (
    <section aria-labelledby="v2-cta" className="bg-paper px-3 pb-6 pt-4 sm:px-6">
      <Reveal className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[2.5rem] bg-lime px-6 py-16 text-center text-navy-900 sm:px-12 lg:py-24 grain">
        <LinkChain className="absolute -left-12 bottom-6 w-64 rotate-12 text-navy-900/10" />
        <LinkChain className="absolute -right-16 top-4 w-72 -rotate-12 text-navy-900/10" />
        <Sparkle className="absolute left-[12%] top-10 size-8 text-navy-900" />
        <Sparkle className="absolute bottom-12 right-[14%] size-12 text-navy-900" />
        <div className="relative">
          <h2 id="v2-cta" className="mx-auto max-w-4xl text-balance text-4xl leading-[1.02] text-navy-900 sm:text-6xl lg:text-7xl">
            {title}
          </h2>
          {note && <div className="mx-auto mt-6 max-w-2xl text-lg text-navy-900/80">{note}</div>}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Btn href={primary.href} variant="dark" size="lg">
              {primary.label}
            </Btn>
            {secondary && (
              <Btn href={secondary.href} variant="outline" size="lg" className="!border-navy-900/40 !text-navy-900 hover:!bg-navy-900 hover:!text-lime">
                {secondary.label}
              </Btn>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/** FAQ list on native <details> (exclusive group, animated by /public/v2/motion.js). Portable to WordPress as plain HTML. */
export function FaqList({ items, group = "faq" }: { items: { q: string; a: React.ReactNode }[]; group?: string }) {
  return (
    <div className="space-y-3">
      {items.map((f, i) => (
        <details key={f.q} data-acc data-acc-group={group} open={i === 0} className="group/faq overflow-hidden rounded-3xl border border-line bg-white transition-[border-color,box-shadow] duration-300 open:border-brand-500 open:shadow-lift">
          <summary className="flex items-center justify-between gap-4 px-5 py-5 text-left font-display text-xl font-semibold text-ink transition-colors hover:text-brand-600 sm:px-7">
            {f.q}
            <span className="acc-icon grid size-9 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 group-open/faq:bg-lime group-open/faq:text-navy-900">
              <Plus className="size-4" aria-hidden />
            </span>
          </summary>
          <div className="px-5 pb-6 pr-14 text-[15px] leading-relaxed text-body sm:px-7">{f.a}</div>
        </details>
      ))}
    </div>
  );
}

export function FaqV2({
  eyebrow = "FAQ",
  title,
  lead,
  items,
  aside,
  tone = "white",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  items: { q: string; a: React.ReactNode }[];
  aside?: React.ReactNode;
  tone?: "white" | "cream" | "paper";
}) {
  return (
    <Band tone={tone}>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Head align="left" eyebrow={eyebrow} title={title} lead={lead} />
          {aside}
        </div>
        <Reveal delay={0.1}>
          <FaqList items={items} />
        </Reveal>
      </div>
    </Band>
  );
}

/** Square-cornered bento tile used across inner pages. */
export function Tile({ className, children, tone = "white" }: { className?: string; children: React.ReactNode; tone?: "white" | "forest" | "lime" | "cream" | "brand" }) {
  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-[2rem] p-7 transition-all duration-500 hover:-translate-y-1 sm:p-9",
        tone === "white" && "bg-white ring-1 ring-line hover:shadow-lift",
        tone === "cream" && "bg-tint hover:shadow-card",
        tone === "forest" && "bg-navy-800 text-white",
        tone === "lime" && "bg-lime text-navy-900",
        tone === "brand" && "bg-brand-500 text-white",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CheckV2({ items, cols = 1, light }: { items: React.ReactNode[]; cols?: 1 | 2; light?: boolean }) {
  return (
    <ul className={cn("grid gap-x-8 gap-y-3.5", cols === 2 && "sm:grid-cols-2")}>
      {items.map((p, i) => (
        <li key={i} className={cn("flex items-start gap-3 text-[15px] font-medium", light ? "text-white" : "text-ink")}>
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-lime text-navy-900">
            <Check className="size-3.5" strokeWidth={3.5} aria-hidden />
          </span>
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

export function Underlined({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block italic text-brand-500">
      {children}
      <Squiggle className="absolute -bottom-[0.12em] left-0 text-lime-600" />
    </span>
  );
}

export { v2 };
