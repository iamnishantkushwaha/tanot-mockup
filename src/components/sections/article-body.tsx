import * as React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { localizeHtml, slugify, stripHtml, type ArticleBlock } from "@/lib/articles";
import { cn } from "@/lib/utils";

export type TocItem = { id: string; text: string };

/** Heading ids are derived once so the table of contents and the body always agree. */
export function buildToc(blocks: ArticleBlock[]): { toc: TocItem[]; ids: Map<number, string> } {
  const used = new Map<string, number>();
  const ids = new Map<number, string>();
  const toc: TocItem[] = [];
  blocks.forEach((b, i) => {
    if (b.t !== "h2" && b.t !== "h3" && b.t !== "h4") return;
    const base = slugify(b.x) || `section-${i}`;
    const n = used.get(base) ?? 0;
    used.set(base, n + 1);
    const id = n ? `${base}-${n}` : base;
    ids.set(i, id);
    if (b.t === "h2") toc.push({ id, text: stripHtml(b.x) });
  });
  return { toc, ids };
}


const proseLinks =
  "[&_a]:font-medium [&_a]:text-brand-600 [&_a]:underline [&_a]:decoration-brand-300 [&_a]:underline-offset-4 [&_a]:transition-colors hover:[&_a]:decoration-brand-600 [&_strong]:font-semibold [&_strong]:text-ink";

export function ArticleBody({ blocks, ids, prefix = "" }: { blocks: ArticleBlock[]; ids: Map<number, string>; prefix?: "" | "/v2" }) {
  const html = (h: string) => ({ __html: localizeHtml(h, prefix) });
  return (
    <div className={cn("text-[17px] leading-[1.8] text-body", proseLinks)}>
      {blocks.map((b, i) => {
        switch (b.t) {
          case "h2":
            return (
              <h2 key={i} id={ids.get(i)} className="mt-14 scroll-mt-28 text-balance text-2xl font-bold leading-tight sm:text-[1.9rem]" dangerouslySetInnerHTML={html(b.x)} />
            );
          case "h3":
            return (
              <h3 key={i} id={ids.get(i)} className="mt-10 scroll-mt-28 text-balance text-xl font-bold leading-snug sm:text-2xl" dangerouslySetInnerHTML={html(b.x)} />
            );
          case "h4":
          case "h5":
            return <h4 key={i} id={ids.get(i)} className="mt-8 scroll-mt-28 text-lg font-bold" dangerouslySetInnerHTML={html(b.x)} />;
          case "p":
            if (stripHtml(b.x) === "Key Takeaways")
              return (
                <p key={i} className="mt-8 inline-flex rounded-full bg-brand-50 px-4 py-1.5 font-display text-sm font-bold uppercase tracking-wider text-brand-600">
                  Key Takeaways
                </p>
              );
            return <p key={i} className="mt-5 [&_br]:block" dangerouslySetInnerHTML={html(b.x)} />;
          case "ul":
            return (
              <ul key={i} className="mt-5 space-y-2.5 pl-1">
                {b.items.map((li, j) => (
                  <li key={j} className="relative pl-7 before:absolute before:left-1 before:top-[0.8em] before:size-2 before:rounded-full before:bg-gradient-to-br before:from-brand-500 before:to-teal-brand [&_ul]:mt-2 [&_ul]:space-y-2" dangerouslySetInnerHTML={html(li)} />
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mt-5 list-decimal space-y-2.5 pl-7 marker:font-semibold marker:text-brand-600">
                {b.items.map((li, j) => (
                  <li key={j} className="pl-1" dangerouslySetInnerHTML={html(li)} />
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={i} className="relative mt-8 rounded-2xl border border-brand-100 bg-brand-50/60 p-6 pl-8 text-lg italic text-ink">
                <Quote className="absolute left-2 top-3 size-5 text-brand-300" aria-hidden />
                <span dangerouslySetInnerHTML={html(b.x)} />
              </blockquote>
            );
          case "img":
            return (
              <figure key={i} className="mt-8">
                <Image
                  src={b.src}
                  alt={b.alt}
                  width={b.w}
                  height={b.h}
                  sizes="(min-width: 1024px) 760px, 100vw"
                  className="h-auto w-full rounded-2xl border border-line bg-white"
                />
              </figure>
            );
          case "table":
            return (
              <div key={i} className="mt-8 overflow-x-auto rounded-2xl border border-line shadow-card" tabIndex={0} role="region" aria-label="Table">
                <table className="w-full min-w-[560px] border-collapse text-left text-[15px] leading-relaxed">
                  <thead className="bg-brand-50 text-ink">
                    <tr>
                      {b.head.map((h, j) => (
                        <th key={j} scope="col" className="whitespace-nowrap px-4 py-3 font-display text-sm font-bold" dangerouslySetInnerHTML={html(h)} />
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j} className="border-t border-line odd:bg-white even:bg-brand-50/30">
                        {r.map((c, k) => (
                          <td key={k} className="px-4 py-3 align-top" dangerouslySetInnerHTML={html(c)} />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "hr":
            return <hr key={i} className="my-10 border-line" />;
        }
      })}
    </div>
  );
}
