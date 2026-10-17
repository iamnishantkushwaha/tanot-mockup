import type { Metadata } from "next";
import Image from "next/image";
import { Handshake, HeartHandshake, Mail, MessageCircle, Gauge, ShieldCheck, Link2, SlidersHorizontal } from "lucide-react";
import { links } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/motion-primitives";
import { SectionHeading } from "@/components/ui/section-heading";
import { SmartLink } from "@/components/ui/smart-link";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid, Section } from "@/components/sections/blocks";
import { FaqSection } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have a question, need SEO support, or want to explore a partnership? Reach Tanot Solutions, we usually respond within 24 hours.",
};

const inquiries = [
  { icon: MessageCircle, label: "Sales Inquiries", text: "Want to grow with SEO or link building? Fill out the form to get started." },
  { icon: HeartHandshake, label: "General Questions", text: "Need more info? We’re happy to help." },
  { icon: Handshake, label: "Partnerships", text: "Open to collaborations? Let’s explore opportunities." },
];

const why = [
  { icon: ShieldCheck, title: "Google-Safe Tactics", body: "100% white-hat link building." },
  { icon: Link2, title: "Quality Backlinks", body: "Niche-relevant, high-authority sites." },
  { icon: SlidersHorizontal, title: "Custom Strategies", body: "Tailored to your SEO goals." },
  { icon: Gauge, title: "Clear Reporting", body: "Full transparency, real results." },
];

const faqs = [
  { q: "1. What’s the best way to get in touch with your team?", a: "You can reach us by filling out the contact form on this page or emailing us directly at info@tanotsolutions.com. Both go straight to our team, no bots, no ticket systems. If your message is urgent or you prefer direct communication, email is typically the fastest way to reach us." },
  {
    q: "2. Can I schedule a call instead of using the form?",
    a: (
      <>
        Yes. If you’re looking to discuss a potential project, service inquiry, or partnership, you’re welcome to skip the form and schedule a free strategy call instead. We offer no-obligation calls where we review your needs and help you decide if we’re the right fit. You can{" "}
        <SmartLink href={links.bookCall} className="font-semibold text-brand-600 underline underline-offset-4">
          book a call here
        </SmartLink>
        .
      </>
    ),
  },
  { q: "3. How quickly will I get a response after contacting you?", a: "We typically respond within 24 hours on business days, sometimes sooner. If you reach out during weekends or holidays, we’ll get back to you the next working day. For urgent issues, emailing us directly ensures the quickest response time." },
  { q: "4. What types of inquiries can I send through this page?", a: "Anything related to our services, including SEO, link building, pricing, partnerships, support, or media inquiries. If you’re unsure what category your question falls under, no worries, just explain your needs briefly, and we’ll make sure it gets to the right person." },
  { q: "5. Do you offer support for existing clients through this page?", a: "Yes. If you’re an existing client and need help with a project, campaign, or report, feel free to use this form or email your account manager directly. Our support team is always here to ensure everything runs smoothly for you." },
  { q: "6. Do I need to prepare anything before contacting you?", a: "Not at all. Just let us know what you’re looking for, whether it’s SEO help, a question about pricing, or a partnership idea. If you’re reaching out about services, including your website URL and goals can help us give you a faster, more relevant response." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        formId="contact"
        title={
          <>
            Get in Touch with <span className="text-gradient">Tanot Solutions</span>
          </>
        }
        body="Have a question, need SEO support, or want to explore a partnership? Reach out, we usually respond within 24 hours."
        actions={
          <>
            <ButtonLink href={links.reviews} variant="outline">
              Real Client Reviews
            </ButtonLink>
            <ButtonLink href={links.caseStudies} variant="outline">
              View Case Studies
            </ButtonLink>
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

      <Section tone="white" className="!py-0 -mt-4 lg:-mt-10" label="Ways to reach us">
        <ul className="grid gap-4 md:grid-cols-3">
          {inquiries.map(({ icon: Icon, label, text }) => (
            <li key={label} className="flex gap-4 rounded-3xl border border-line bg-white p-6 shadow-card">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <Icon className="size-6" aria-hidden />
              </span>
              <p className="text-[15px] leading-relaxed text-body">
                <span className="block font-display text-base font-bold text-ink">{label}</span>
                {text}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Why choose us">
        <SectionHeading eyebrow="Why choose us" title="Why Choose Us" />
        <div className="mt-14">
          <FeatureGrid items={why} cols={4} />
        </div>
        <Reveal className="mt-10 text-center">
          <ButtonLink href={links.bookCall} arrow>
            Book a Call
          </ButtonLink>
        </Reveal>
      </Section>

      <Section tone="tint" label="Trusted brands">
        <SectionHeading
          title="Trusted By 150+ Brands Worldwide"
          description="We help brands earn high-authority, editorial backlinks that improve rankings, increase AI search visibility, and support measurable commercial growth."
        />
        <Reveal className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-line bg-white p-4 shadow-card sm:p-8">
          <Image src="/images/brand/trusted-brands.png" alt="Logos of brands that trust Tanot Solutions" width={1024} height={332} sizes="(min-width: 1024px) 960px, 100vw" className="h-auto w-full" />
        </Reveal>
        <p className="mt-6 text-center text-sm font-medium text-body">and many more</p>
        <Reveal className="mt-8 text-center">
          <ButtonLink href={links.bookCall} arrow>
            Book a Call
          </ButtonLink>
        </Reveal>
      </Section>

      <Section tone="navy" label="Your partner">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading light align="left" title="Your Partner For Scalable, White-Hat Link Building" description="If you’re done wasting budget on low-quality links and outdated tactics, it’s time to work with a link building company focused on long-term SEO growth." />
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-4 text-[15px] font-medium text-white">
                {[
                  "11+ years of combined hands-on SEO and link building experience",
                  "Smooth communication via Email, Slack, WhatsApp, or Teams",
                  "No links on unapproved websites",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-leaf text-white">
                      <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3.5" aria-hidden>
                        <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2} className="mt-9">
              <ButtonLink href={links.bookCall} variant="white" size="lg" arrow>
                Book a Call
              </ButtonLink>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="mx-auto">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-400/40 to-teal-brand/30 blur-2xl" aria-hidden />
              <Image src="/images/brand/renu-sharma.webp" alt="Renu Sharma, Founder of Tanot Solutions" width={420} height={520} className="relative h-auto w-full max-w-sm rounded-3xl bg-[#dfe3e8] object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <FaqSection tone="white" title="Frequently Asked Questions" items={faqs} />
    </>
  );
}
