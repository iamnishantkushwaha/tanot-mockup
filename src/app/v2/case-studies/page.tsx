import type { Metadata } from "next";
import { cases_covers, cases_faqs, cases_results } from "@/lib/page-data";
import { links } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "@/components/v2/motion";
import { Band, Btn, Head } from "@/components/v2/ui";
import { CaseGridV2 } from "@/components/v2/case-grid";
import { CtaV2, FaqV2, PageHeroV2, QuoteTile, Underlined } from "@/components/v2/shared";

export const metadata: Metadata = {
  title: "Link Building Case Studies",
  description: "Our case studies show exactly how Tanot Solutions has helped clients grow rankings, organic traffic and AI visibility through link building.",
};

const tones = ["lime", "forest", "white", "cream"] as const;

export default function V2CaseStudies() {
  return (
    <>
      <PageHeroV2
        formId="v2cases"
        title={
          <>
            We Build Links That Move Rankings. <Underlined>Here&apos;s the Proof</Underlined>
          </>
        }
        body="Our case studies show exactly how we’ve helped clients grow rankings and organic traffic and AI visibility through link building with the real numbers to back it up."
        bullets={cases_covers}
        actions={
          <Btn href={links.bookCall} size="lg">
            Book a Free Strategy Call
          </Btn>
        }
        footnote={<span className="font-semibold text-ink">What each case study covers</span>}
      />

      <Band tone="white" label="Case studies">
        <Head eyebrow="Case studies" title={<>Real campaigns. <em>Real traffic data.</em></>} />
        <CaseGridV2 className="mt-14" />
      </Band>

      <Band tone="cream" label="Client results">
        <Head eyebrow="Client results" title={<>Real Businesses. <em>Real Results.</em></>} lead="Our clients don’t just see rankings — they see real impact. Here’s what a few of them have said about working with Tanot Solutions." />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2" stagger={0.08}>
          {cases_results.map((t, i) => (
            <StaggerItem key={t.headline} className="h-full">
              <QuoteTile t={t} tone={tones[i]} />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 text-center">
          <Btn href={links.reviews}>View All Client Reviews</Btn>
        </Reveal>
      </Band>

      <FaqV2 tone="white" title={<>What Clients Ask Before <em>Working With Tanot Solutions</em></>} items={cases_faqs} />
      <CtaV2 />
    </>
  );
}
