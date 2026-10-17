import * as React from "react";
import { faqs } from "@/lib/content";
import { links } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/motion-primitives";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqList } from "@/components/ui/faq-list";

export type FaqItem = { q: string; a: React.ReactNode };

export function FaqSection({
  id,
  eyebrow = "FAQ",
  title,
  description,
  items,
  aside,
  tone = "tint",
}: {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  items: FaqItem[];
  aside?: React.ReactNode;
  tone?: "tint" | "white";
}) {
  const uid = React.useId();
  return (
    <section id={id} aria-labelledby={`${uid}-h`} className={tone === "tint" ? "bg-tint py-20 lg:py-28" : "bg-white py-20 lg:py-28"}>
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow={eyebrow}
            title={<span id={`${uid}-h`}>{title}</span>}
            description={description}
          />
          {aside}
        </div>
        <Reveal delay={0.1}>
          <FaqList items={items} />
        </Reveal>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <FaqSection
      id="faq"
      title="Questions to ask before hiring an SEO agency"
      description="Can’t find your answer? We’re happy to walk you through it on a quick call."
      items={faqs.map((f) => ({ q: f.q, a: f.a }))}
      aside={
        <Reveal delay={0.15} className="mt-8 rounded-3xl border border-brand-100 bg-white p-7 shadow-card">
          <p className="font-display text-lg font-bold text-ink">Still deciding?</p>
          <p className="mt-2 text-[15px] leading-relaxed text-body">
            Get a free, no-obligation audit showing your website’s current position and a step-by-step roadmap to 2X your traffic and leads.
          </p>
          <ButtonLink href={links.bookCall} arrow className="mt-5 w-full sm:w-auto">
            Claim your free SEO growth plan
          </ButtonLink>
        </Reveal>
      }
    />
  );
}
