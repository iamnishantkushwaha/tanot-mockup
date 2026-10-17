import type { Metadata } from "next";
import Image from "next/image";
import { Mail } from "lucide-react";
import { contact_inquiries, contact_why } from "@/lib/page-data";
import { links } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "@/components/v2/motion";
import { Band, Btn, Head, V2Link } from "@/components/v2/ui";
import { CheckV2, FaqV2, PageHeroV2, Tile, Underlined } from "@/components/v2/shared";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Have a question, need SEO support, or want to explore a partnership? Reach Tanot Solutions, we usually respond within 24 hours.",
};

const faqs = [
  { q: "1. What’s the best way to get in touch with your team?", a: "You can reach us by filling out the contact form on this page or emailing us directly at info@tanotsolutions.com. Both go straight to our team, no bots, no ticket systems. If your message is urgent or you prefer direct communication, email is typically the fastest way to reach us." },
  {
    q: "2. Can I schedule a call instead of using the form?",
    a: (
      <>
        Yes. If you’re looking to discuss a potential project, service inquiry, or partnership, you’re welcome to skip the form and schedule a free strategy call instead. We offer no-obligation calls where we review your needs and help you decide if we’re the right fit. You can{" "}
        <V2Link href={links.bookCall} className="font-semibold text-brand-600 underline underline-offset-4">
          book a call here
        </V2Link>
        .
      </>
    ),
  },
  { q: "3. How quickly will I get a response after contacting you?", a: "We typically respond within 24 hours on business days, sometimes sooner. If you reach out during weekends or holidays, we’ll get back to you the next working day. For urgent issues, emailing us directly ensures the quickest response time." },
  { q: "4. What types of inquiries can I send through this page?", a: "Anything related to our services, including SEO, link building, pricing, partnerships, support, or media inquiries. If you’re unsure what category your question falls under, no worries, just explain your needs briefly, and we’ll make sure it gets to the right person." },
  { q: "5. Do you offer support for existing clients through this page?", a: "Yes. If you’re an existing client and need help with a project, campaign, or report, feel free to use this form or email your account manager directly. Our support team is always here to ensure everything runs smoothly for you." },
  { q: "6. Do I need to prepare anything before contacting you?", a: "Not at all. Just let us know what you’re looking for, whether it’s SEO help, a question about pricing, or a partnership idea. If you’re reaching out about services, including your website URL and goals can help us give you a faster, more relevant response." },
];

const whyTones = ["lime", "forest", "cream", "white"] as const;

export default function V2Contact() {
  return (
    <>
      <PageHeroV2
        formId="v2contact"
        title={
          <>
            Get in Touch with <Underlined>Tanot Solutions</Underlined>
          </>
        }
        body="Have a question, need SEO support, or want to explore a partnership? Reach out, we usually respond within 24 hours."
        actions={
          <>
            <Btn href={links.reviews} variant="outline" arrow={false}>
              Real Client Reviews
            </Btn>
            <Btn href={links.caseStudies} variant="outline" arrow={false}>
              View Case Studies
            </Btn>
          </>
        }
        footnote={
          <span className="flex items-center gap-2 text-base">
            <Mail className="size-4 text-brand-500" aria-hidden /> Prefer email? Contact us at{" "}
            <a href={`mailto:${links.email}`} className="font-semibold text-brand-600 underline underline-offset-4">
              {links.email}
            </a>
          </span>
        }
      />

      <section aria-label="Ways to reach us" className="relative z-10 pb-16">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <ul className="grid gap-4 md:grid-cols-3">
            {contact_inquiries.map(({ icon: Icon, label, text }) => (
              <li key={label} className="flex gap-4 rounded-[2rem] bg-white p-6 ring-1 ring-line">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-lime text-navy-900">
                  <Icon className="size-6" aria-hidden />
                </span>
                <p className="text-[15px] leading-relaxed text-body">
                  <span className="block font-display text-lg font-medium text-ink">{label}</span>
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Band tone="white" label="Why choose us">
        <Head eyebrow="Why choose us" title={<>Why <em>Choose</em> Us</>} />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contact_why.map((w, i) => {
            const tone = whyTones[i];
            const dark = tone === "forest";
            return (
              <StaggerItem key={w.title}>
                <Tile tone={tone} className="h-full min-h-[230px] justify-between">
                  <span className={`grid size-14 place-items-center rounded-2xl ${dark ? "bg-lime text-navy-900" : "bg-navy-900 text-lime"}`}>
                    <w.icon className="size-7" aria-hidden />
                  </span>
                  <div className="mt-8">
                    <h3 className={`text-2xl font-medium ${dark ? "text-white" : "text-navy-900"}`}>{w.title}</h3>
                    <p className={`mt-2 text-[15px] ${dark ? "text-white/80" : "text-body"}`}>{w.body}</p>
                  </div>
                </Tile>
              </StaggerItem>
            );
          })}
        </Stagger>
        <Reveal className="mt-10 text-center">
          <Btn href={links.bookCall}>Book a Call</Btn>
        </Reveal>
      </Band>

      <Band tone="cream" label="Trusted brands">
        <Head title={<>Trusted By <em>150+ Brands</em> Worldwide</>} lead="We help brands earn high-authority, editorial backlinks that improve rankings, increase AI search visibility, and support measurable commercial growth." />
        <Reveal className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] bg-white p-4 ring-1 ring-line sm:p-8">
          <Image src="/images/brand/trusted-brands.png" alt="Logos of brands that trust Tanot Solutions" width={1024} height={332} sizes="(min-width: 1024px) 960px, 100vw" className="h-auto w-full" />
        </Reveal>
        <p className="mt-6 text-center text-sm font-semibold uppercase tracking-[0.18em] text-body">and many more</p>
        <Reveal className="mt-8 text-center">
          <Btn href={links.bookCall}>Book a Call</Btn>
        </Reveal>
      </Band>

      <Band tone="forest" label="Your partner">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Head light align="left" title={<>Your Partner For Scalable, <em>White-Hat Link Building</em></>} lead="If you’re done wasting budget on low-quality links and outdated tactics, it’s time to work with a link building company focused on long-term SEO growth." />
            <Reveal delay={0.1} className="mt-8">
              <CheckV2 light items={["11+ years of combined hands-on SEO and link building experience", "Smooth communication via Email, Slack, WhatsApp, or Teams", "No links on unapproved websites"]} />
            </Reveal>
            <Reveal delay={0.2} className="mt-9">
              <Btn href={links.bookCall} size="lg">
                Book a Call
              </Btn>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="mx-auto">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-[#dfe3e8]">
              <Image src="/images/brand/renu-sharma.webp" alt="Renu Sharma, Founder of Tanot Solutions" fill sizes="384px" className="object-cover object-top" />
            </div>
          </Reveal>
        </div>
      </Band>

      <FaqV2 tone="white" title={<>Frequently Asked <em>Questions</em></>} items={faqs} />
    </>
  );
}
