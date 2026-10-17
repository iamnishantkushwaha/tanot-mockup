import * as React from "react";
import type { LegalBlock } from "@/lib/legal";
import { links } from "@/lib/site";
import { PageHero } from "./page-hero";

const slug = (t: string) =>
  t
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Renders verbatim policy copy with a sticky table of contents built from the h2 headings. */
export function LegalPage({ title, blocks }: { title: string; blocks: LegalBlock[] }) {
  const body = blocks.filter(([t]) => t !== "h1");
  const toc = body.filter(([t]) => t === "h2").map(([, text]) => ({ text, id: slug(text) }));
  // A leading paragraph that starts with "Last updated" is shown as a meta line under the hero.
  const meta = body[0]?.[0] === "p" && /^last updated/i.test(body[0][1]) ? body[0][1] : null;
  const content = meta ? body.slice(1) : body;

  const nodes: React.ReactNode[] = [];
  let list: string[] = [];
  const flush = (key: string) => {
    if (!list.length) return;
    nodes.push(
      <ul key={key} className="my-4 list-disc space-y-2 pl-6 marker:text-brand-500">
        {list.map((li, i) => (
          <li key={i}>{linkify(li)}</li>
        ))}
      </ul>,
    );
    list = [];
  };
  content.forEach(([tag, text], i) => {
    if (tag === "li") {
      list.push(text);
      return;
    }
    flush(`ul-${i}`);
    if (tag === "h2")
      nodes.push(
        <h2 key={i} id={slug(text)} className="mt-14 scroll-mt-28 border-t border-line pt-10 text-2xl font-bold first:mt-0 first:border-0 first:pt-0">
          {text}
        </h2>,
      );
    else if (tag === "h3" || tag === "h4")
      nodes.push(
        <h3 key={i} className="mt-8 text-lg font-bold">
          {text}
        </h3>,
      );
    else
      nodes.push(
        <p key={i} className="mt-4 leading-relaxed">
          {linkify(text)}
        </p>,
      );
  });
  flush("ul-end");

  return (
    <>
      <PageHero aside="none" eyebrow="Legal" title={title} body={meta ? <p className="text-base">{meta}</p> : undefined} />
      <section className="bg-white pb-24 pt-4 lg:pb-32">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[280px_1fr] lg:gap-16">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand-500">On this page</p>
            <ol className="space-y-1 border-l border-line">
              {toc.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-body transition-colors hover:border-brand-500 hover:text-brand-600"
                  >
                    {t.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <article className="max-w-3xl text-[16px] text-body">{nodes}</article>
        </div>
      </section>
    </>
  );
}

/** Turns the agency email into a mailto link; everything else stays plain text. */
function linkify(text: string): React.ReactNode {
  const parts = text.split(links.email);
  if (parts.length === 1) return text;
  return parts.flatMap((p, i) =>
    i < parts.length - 1
      ? [
          p,
          <a key={i} href={`mailto:${links.email}`} className="font-semibold text-brand-600 underline underline-offset-4">
            {links.email}
          </a>,
        ]
      : [p],
  );
}
