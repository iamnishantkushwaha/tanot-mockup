import type { Metadata } from "next";
import { posts } from "@/lib/content";
import { reviews } from "@/lib/reviews";
import { links } from "@/lib/site";
import { Reveal } from "@/components/v2/motion";
import { V2VideoCard } from "@/components/v2/embeds";
import { video } from "@/lib/content";
import { Band, Btn, Head } from "@/components/v2/ui";
import { CtaV2, PageHeroV2, PostGridV2, QuoteTile, Underlined, type QuoteTone } from "@/components/v2/shared";

export const metadata: Metadata = {
  title: "Link Building Reviews & Client Results",
  description: "Reviews from the businesses Tanot Solutions has worked with, from startups to enterprise teams.",
};

const wall = [reviews.alex, reviews.shailendra, reviews.tim, reviews.sandeep, reviews.monika, reviews.gabriel, reviews.gaming, reviews.michael, reviews.anish, reviews.marko, reviews.rajat];
const toneCycle: QuoteTone[] = ["white", "lime", "forest", "cream", "white", "forest"];

export default function V2Reviews() {
  return (
    <>
      <PageHeroV2
        formId="v2reviews"
        title={
          <>
            Tanot Solutions <Underlined>Link Building Reviews</Underlined> &amp; Client Results
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
          <Btn href={links.bookCall} size="lg">
            Book a Free Strategy Call
          </Btn>
        }
      />

      <Band tone="cream" label="Client reviews">
        <Head eyebrow="Client reviews" title={<>Real Growth From <em>Strategic, White-Hat</em> Link Building</>} />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <V2VideoCard id={video.id} poster={video.poster} caption={video.caption} />
          </Reveal>
          <Reveal delay={0.1}>
            <V2VideoCard id="888989433" poster="/images/brand/video-poster-2.jpg" caption="Gabriel Motta, Marketing Manager at Kommo" />
          </Reveal>
        </div>
        <div className="mt-5 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
          {wall.map((t, i) => (
            <Reveal key={t.name + i} delay={(i % 3) * 0.06}>
              <QuoteTile t={t} tone={toneCycle[i % toneCycle.length]} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6 text-center">
          <Btn href={links.caseStudies}>Read Our Case Studies</Btn>
        </Reveal>
      </Band>

      <Band tone="paper" label="Recent blog posts">
        <Head eyebrow="Blog" title={<>Recent <em>Blog Posts</em></>} />
        <PostGridV2 className="mt-14" posts={posts} />
        <Reveal className="mt-10 text-center">
          <Btn href={links.blog} variant="outline">
            Read More SEO Articles
          </Btn>
        </Reveal>
      </Band>

      <CtaV2
        title="Ready to elevate your visibility in the search engines with meaningful backlinks?"
        primary={{ label: "Get In Touch", href: links.contact }}
        secondary={{ label: "Book a Call", href: links.bookCall }}
      />
    </>
  );
}
