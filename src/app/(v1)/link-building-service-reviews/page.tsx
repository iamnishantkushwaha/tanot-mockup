import type { Metadata } from "next";
import { links } from "@/lib/site";
import { reviews } from "@/lib/reviews";
import { posts } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/motion-primitives";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/blocks";
import { CtaBand, PostGrid } from "@/components/sections/company";
import { TestimonialCard, VideoCard } from "@/components/sections/proof";

export const metadata: Metadata = {
  title: "Link Building Reviews & Client Results",
  description:
    "Reviews from the businesses Tanot Solutions has worked with, from startups to enterprise teams: organic traffic growth, page 1 rankings and a fully transparent process.",
};

// Source order on the live page; the masonry columns below keep it readable top to bottom.
const wall = [
  reviews.alex,
  reviews.shailendra,
  reviews.tim,
  reviews.sandeep,
  reviews.monika,
  reviews.gabriel,
  reviews.gaming,
  reviews.michael,
  reviews.anish,
  reviews.marko,
  reviews.rajat,
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        formId="reviews"
        title={
          <>
            Tanot Solutions <span className="text-gradient">Link Building Reviews</span> &amp; Client Results
          </>
        }
        body="These reviews come directly from businesses we’ve worked with, from startups to enterprise teams."
        bullets={[
          "Organic traffic growth of up to 800%, plus stronger AI visibility",
          "Page 1 rankings for keywords that bring real buyers",
          "100% transparent process — site approval before every placement",
          "No upfront charges — pay only for live links delivered at the end of the month",
        ]}
        actions={
          <ButtonLink href={links.bookCall} size="lg" arrow>
            Book a Free Strategy Call
          </ButtonLink>
        }
      />

      <Section tone="tint" label="Client reviews">
        <SectionHeading eyebrow="Client reviews" title="Real Growth From Strategic, White-Hat Link Building" />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <VideoCard />
          </Reveal>
          <Reveal delay={0.1}>
            <VideoCard id="888989433" poster="/images/brand/video-poster-2.jpg" caption="Gabriel Motta, Marketing Manager at Kommo" />
          </Reveal>
        </div>
        <div className="mt-6 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {wall.map((t, i) => (
            <Reveal key={t.name + i} delay={(i % 3) * 0.06}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6 text-center">
          <ButtonLink href={links.caseStudies} arrow>
            Read Our Case Studies
          </ButtonLink>
        </Reveal>
      </Section>

      <Section label="Recent blog posts">
        <SectionHeading eyebrow="Blog" title="Recent Blog Posts" />
        <PostGrid posts={posts} className="mt-14" />
        <Reveal className="mt-10 text-center">
          <ButtonLink href={links.blog} variant="outline" arrow>
            Read More SEO Articles
          </ButtonLink>
        </Reveal>
      </Section>

      <CtaBand
        title="Ready to elevate your visibility in the search engines with meaningful backlinks?"
        primary={{ label: "Get In Touch", href: links.contact }}
        secondary={{ label: "Book a Call", href: links.bookCall }}
      />
    </>
  );
}
