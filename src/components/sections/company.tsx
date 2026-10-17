import * as React from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  Eye,
  HandCoins,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { awards, founder, featuredOn, posts, team, whyUs } from "@/lib/content";
import { links } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { SmartLink } from "@/components/ui/smart-link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { SectionHeading } from "@/components/ui/section-heading";

const icons: Record<(typeof whyUs.items)[number]["icon"], LucideIcon> = {
  chart: BarChart3,
  wallet: HandCoins,
  shield: ShieldCheck,
  eye: Eye,
  sparkles: Sparkles,
  users: Users,
};

export function WhyUs() {
  return (
    <section aria-labelledby="why-heading" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Why Tanot"
            title={<span id="why-heading">{whyUs.title}</span>}
            description={whyUs.body}
          />
          <Reveal delay={0.15} className="mt-8">
            <ButtonLink href={links.bookCall} arrow>
              Talk to our team
            </ButtonLink>
          </Reveal>
        </div>
        <Stagger className="grid gap-4 sm:grid-cols-2">
          {whyUs.items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <StaggerItem
                key={item.title}
                className="group flex flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-lift"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-teal-brand group-hover:text-white">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-body">{item.body}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

export function Awards({
  title = <>The Industry&apos;s <span className="whitespace-nowrap">Top-Rated</span> SEO Agency</>,
  tone = "tint",
}: { title?: React.ReactNode; tone?: "tint" | "white" } = {}) {
  return (
    <section aria-labelledby="awards-heading" className={tone === "tint" ? "bg-tint py-20 lg:py-28" : "bg-white py-20 lg:py-28"}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionHeading eyebrow="Recognition" title={<span id="awards-heading">{title}</span>} />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {awards.map((a, i) => (
            <StaggerItem
              key={`${a.title}-${i}`}
              className="group flex h-[200px] items-center gap-5 rounded-2xl bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="relative h-full w-[46%] shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  sizes="(min-width: 1024px) 180px, 40vw"
                  className="object-contain transition-transform duration-500 ease-out-expo group-hover:scale-110"
                />
              </div>
              <h3 className="text-[17px] font-semibold leading-snug text-ink">{a.title}</h3>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function Founder() {
  return (
    <section aria-labelledby="founder-heading" className="bg-tint pb-20 lg:pb-28">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 -z-0 size-full rounded-3xl bg-gradient-to-br from-brand-400 to-teal-brand opacity-30" aria-hidden />
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#dfe3e8] shadow-lift">
              <Image
                src={founder.image}
                alt={`${founder.name}, ${founder.role}`}
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/85 to-transparent p-6 pt-16 text-white">
                <p className="font-display text-lg font-bold">{founder.name}</p>
                <p className="text-sm text-white/80">{founder.role}</p>
              </div>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading align="left" as="h2" title={<span id="founder-heading">{founder.title}</span>} />
          <Reveal delay={0.1} className="mt-6 space-y-4 text-[17px] leading-relaxed text-body">
            {founder.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={links.bookCall} arrow>
              Book a call with Renu
            </ButtonLink>
            <ButtonLink href={links.linkedin} variant="outline">
              Connect on LinkedIn
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section aria-labelledby="team-heading" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionHeading eyebrow="Our people" title={<span id="team-heading">The team behind your results</span>} />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {team.map((m) => (
            <StaggerItem
              key={m.name}
              className="group rounded-3xl border border-line bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-lift"
            >
              {/* No team photos are available on the reference page; initials are a stand-in. */}
              <div className="mx-auto grid size-28 place-items-center rounded-full bg-gradient-to-br from-brand-100 to-brand-50 ring-4 ring-white transition-transform duration-500 ease-out-expo group-hover:scale-105">
                <span className="font-display text-3xl font-bold text-brand-600" aria-hidden>
                  {m.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{m.name}</h3>
              <p className="mt-1 text-sm text-body">{m.role}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function FeaturedOn() {
  return (
    <section aria-labelledby="featured-heading" className="border-y border-line/70 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionHeading eyebrow="In the press" title={<span id="featured-heading">As Featured On</span>} />
        <Stagger className="mt-12 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5" stagger={0.07}>
          {featuredOn.map((f) => (
            <StaggerItem key={f.name} className="flex h-16 items-center justify-center">
              <Image
                src={f.image}
                alt={f.name}
                width={200}
                height={64}
                className="max-h-14 w-auto max-w-[170px] object-contain opacity-60 grayscale transition-all duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0"
              />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 text-center text-sm font-medium text-body">and many more.</Reveal>
      </div>
    </section>
  );
}

export type Post = { category: string; title: string; href: string; date: string; image: string };

export function Insights() {
  return (
    <section id="insights" aria-labelledby="insights-heading" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionHeading eyebrow="Blog" title={<span id="insights-heading">Latest SEO &amp; link building insights</span>} />
        <PostGrid posts={posts} className="mt-14" />
      </div>
    </section>
  );
}

export function PostGrid({ posts, className, priorityFirst }: { posts: Post[]; className?: string; priorityFirst?: boolean }) {
  return (
        <Stagger className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${className ?? ""}`} stagger={0.1}>
          {posts.map((p, idx) => (
            <StaggerItem key={p.href} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-50">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    priority={priorityFirst && idx === 0}
                    sizes="(min-width: 768px) 400px, 100vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-600 shadow">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold leading-snug">
                    <SmartLink
                      href={p.href}
                      className="after:absolute after:inset-0 after:content-[''] group-hover:text-brand-600"
                    >
                      {p.title}
                    </SmartLink>
                  </h3>
                  <div className="mt-auto flex items-center justify-between pt-6 text-sm text-body">
                    <span>
                      Renu Sharma <span aria-hidden>·</span> <time>{p.date}</time>
                    </span>
                    <ArrowUpRight className="size-5 text-brand-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
  );
}

export function CtaBand({
  title = "Try Our SEO and Link Building Service for 30 Days - Then Choose to Stay",
  primary = { label: "Book a Call", href: links.bookCall },
  secondary = { label: "Contact Us", href: links.contact },
  note,
}: {
  title?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
  note?: React.ReactNode;
}) {
  return (
    <section aria-labelledby="cta-heading" className="bg-white px-5 pb-20 pt-4 sm:px-8 lg:pb-28">
      <Reveal className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-500 via-brand-600 to-navy-800 px-6 py-14 text-center text-white shadow-lift sm:px-12 lg:py-20">
        <div className="bg-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" aria-hidden />
        <div className="absolute -right-20 -top-24 size-80 rounded-full bg-teal-brand/40 blur-[90px]" aria-hidden />
        <div className="relative">
          <h2 id="cta-heading" className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {note && <div className="mx-auto mt-5 max-w-2xl text-white/85">{note}</div>}
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href={primary.href} variant="white" size="lg" arrow>
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} variant="ghostLight" size="lg">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
