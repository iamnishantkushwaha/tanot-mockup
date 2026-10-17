import type { Metadata } from "next";
import { links } from "@/lib/site";
import { reviews } from "@/lib/reviews";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/blocks";
import { CaseGrid } from "@/components/sections/case-cards";
import { CtaBand } from "@/components/sections/company";
import { FaqSection } from "@/components/sections/faq";
import { TestimonialCard } from "@/components/sections/proof";

export const metadata: Metadata = {
  title: "Link Building Case Studies",
  description:
    "Our case studies show exactly how Tanot Solutions has helped clients grow rankings, organic traffic and AI visibility through link building, with the real numbers to back it up.",
};

const covers = [
  "Organic Traffic Growth",
  "The Strategy We Used",
  "Keyword Ranking Movement",
  "AI Search Visibility",
  "Timeline to Results",
];


const results = [
  { ...reviews.tim, headline: "50+ New Top-10 Keywords", quote: "In just six months, they helped us rank for keywords on our highest-converting pages — exactly where we needed visibility.", role: "VP Marketing, IT Staffing Company" },
  { ...reviews.monika, headline: "100 → 6,800 Monthly Visitors", quote: "Over 8 months, DR grew from 1 to 41, keywords in top-10 went from 20 to 983. Professional, transparent, and results-driven throughout.", role: "Outreach Manager, HR Company" },
  { ...reviews.gaming, headline: "5X Increase In Organic Traffic", quote: "Keyword rankings skyrocketed and traffic increased 5X. They kept us updated regularly and addressed every concern promptly." },
  { ...reviews.shailendra, headline: "3X Increase In Organic Traffic", quote: "Renu taught our whole team the process and helped us 3X organic traffic for our clients. Her eagerness to help is impressive." },
];

const faqs = [
  { q: "What does “real” mean in these case studies?", a: "Real means these are actual client campaigns with verified traffic and keyword data. You can see the starting point, strategy, and real results. Every case study shows exactly what was done and how it affected the website’s performance." },
  { q: "How do you check the results in these case studies?", a: "We use SEO tools like Ahrefs, SEMrush, and Google Search Console to track traffic, keyword rankings, and backlinks. This allows us to show before and after results so you can trust that the numbers are accurate and real." },
  { q: "Will my business get the same results?", a: "Not exactly. Results depend on competition, website strength, and content quality. The case studies show that good link building can help improve traffic and rankings, but every website is unique, so results will vary." },
  { q: "How long does it take to see results?", a: "Most campaigns show results in 3 to 6 months, but it can take longer for very competitive industries. Link building is a long-term strategy, and the impact grows over time as your website gains authority." },
  { q: "What kinds of links are built? Are they safe?", a: "All links are editorial and from high-authority websites. They are safe for SEO and follow Google’s guidelines. These links help improve your rankings without risking penalties from search engines." },
  { q: "Why do some campaigns get more growth than others?", a: "Every website starts at a different level. Some have strong content or authority, while others need more work first. The case studies show why results vary and how strategy changes based on the website’s starting point." },
  { q: "How do you choose which pages and keywords to target?", a: "We pick pages and keywords based on search volume, competition, and conversion potential. We focus on pages that can get the most traffic and leads so the links deliver the highest value for your business." },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        formId="cases"
        title={
          <>
            We Build Links That Move Rankings. <span className="text-gradient">Here&apos;s the Proof</span>
          </>
        }
        body="Our case studies show exactly how we’ve helped clients grow rankings and organic traffic and AI visibility through link building with the real numbers to back it up."
        bullets={covers}
        actions={
          <ButtonLink href={links.bookCall} size="lg" arrow>
            Book a Free Strategy Call
          </ButtonLink>
        }
        footnote={<span className="font-semibold text-ink">What each case study covers</span>}
      />

      <Section label="Case studies">
        <SectionHeading eyebrow="Case studies" title="Real campaigns. Real traffic data." />
        <div className="mt-14">
          <CaseGrid />
        </div>
      </Section>

      <Section tone="tint" label="Client results">
        <SectionHeading
          eyebrow="Client results"
          title="Real Businesses. Real Results."
          description="Our clients don’t just see rankings — they see real impact. Here’s what a few of them have said about working with Tanot Solutions."
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2" stagger={0.08}>
          {results.map((t) => (
            <StaggerItem key={t.headline} className="h-full">
              <TestimonialCard t={t} />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 text-center">
          <ButtonLink href={links.reviews} arrow>
            View All Client Reviews
          </ButtonLink>
        </Reveal>
      </Section>

      <FaqSection
        tone="white"
        title="What Clients Ask Before Working With Tanot Solutions"
        items={faqs}
      />

      <CtaBand />
    </>
  );
}
