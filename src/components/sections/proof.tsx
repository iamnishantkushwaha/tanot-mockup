import Image from "next/image";
import { Play, Quote, Star } from "lucide-react";
import { Link2, Smile, CalendarCheck, Repeat } from "lucide-react";
import { clientLogos, stats, testimonials, video } from "@/lib/content";
import { links } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { CountUp, Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { SectionHeading } from "@/components/ui/section-heading";

const statIcons = [Link2, Smile, CalendarCheck, Repeat];

export function Stats() {
  return (
    <section aria-label="Tanot Solutions in numbers" className="relative bg-navy-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_120%_at_20%_0%,rgb(26_140_208/0.28),transparent)]" aria-hidden />
      <Stagger className="relative mx-auto grid max-w-[1280px] grid-cols-2 gap-x-6 gap-y-10 px-5 py-12 sm:px-8 lg:grid-cols-4 lg:py-14">
        {stats.map((s, i) => {
          const Icon = statIcons[i];
          return (
            <StaggerItem key={s.label} className="flex items-center gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-teal-brand shadow-[0_10px_24px_-10px_rgb(26_140_208/0.9)]">
                <Icon className="size-6 text-white" aria-hidden />
              </span>
              <div>
                <p className="font-display text-3xl font-extrabold leading-none tracking-tight sm:text-4xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1.5 text-sm text-white/70">{s.label}</p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}

export function TrustedBy({ title = "Trusted By 150+ Brands Across SaaS, Healthcare, Marketing, B2B And Enterprise", description }: { title?: string; description?: string }) {
  return (
    <section aria-labelledby="trusted-heading" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionHeading
          title={<span id="trusted-heading">{title}</span>}
          description={description}
        />
        <Stagger stagger={0.04} className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {clientLogos.map((src, i) => (
            <StaggerItem
              key={src}
              className="group grid h-24 place-items-center rounded-2xl border border-line/70 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift"
            >
              <Image
                src={src}
                alt={`Client logo ${i + 1}`}
                width={160}
                height={56}
                className="max-h-12 w-auto max-w-full object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-8 text-center text-sm font-medium text-body">and many more.</Reveal>
      </div>
    </section>
  );
}

/** Click-to-load video, driven by /public/motion/motion.js (data-video-src / data-video-play). */
export function VideoCard({ id = video.id, poster = video.poster, caption = video.caption }: { id?: string; poster?: string; caption?: string }) {
  return (
    <figure className="group flex h-full flex-col overflow-hidden rounded-3xl bg-navy-900 shadow-lift ring-1 ring-navy-800">
      <div
        data-video-src={`https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0`}
        data-video-title={`Client testimonial video: ${caption}`}
        className="relative aspect-video w-full overflow-hidden bg-navy-950"
      >
        <button type="button" data-video-play className="absolute inset-0 size-full" aria-label={`Play testimonial video: ${caption}`}>
          <Image src={poster} alt="" fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105" />
          <span className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" aria-hidden />
          <span className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-brand-600 shadow-2xl transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-1 size-8 fill-current" aria-hidden />
          </span>
        </button>
      </div>
      <figcaption className="px-6 py-4 text-center text-sm font-medium text-white/85">{caption}</figcaption>
    </figure>
  );
}

export type TestimonialData = { quote: string; name: string; role: string; avatar?: string; headline?: string };

export function TestimonialCard({ t, large }: { t: TestimonialData; large?: boolean }) {
  return (
    <figure className="relative flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift sm:p-8">
      <Quote className="absolute right-6 top-6 size-10 fill-brand-100 text-brand-100" aria-hidden />
      <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-star text-star" aria-hidden />
        ))}
      </div>
      {t.headline && <p className="mt-5 font-display text-xl font-bold text-brand-600">{t.headline}</p>}
      <blockquote className={`${t.headline ? "mt-2" : "mt-5"} flex-1 leading-relaxed text-ink/90 ${large ? "text-lg" : "text-[15px]"}`}>{t.quote}</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        {t.avatar ? (
          <Image src={t.avatar} alt="" width={44} height={44} className="size-11 rounded-full object-cover ring-2 ring-brand-100" />
        ) : (
          <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-teal-brand font-display text-sm font-bold text-white" aria-hidden>
            {t.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
          </span>
        )}
        <span>
          <span className="block font-display text-[15px] font-bold text-ink">{t.name}</span>
          <span className="block text-sm text-body">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="relative bg-gradient-to-b from-white via-tint/60 to-tint py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client reviews"
          title={<span id="reviews-heading">Reviews From Businesses We&apos;ve Helped Grow</span>}
          description="Don’t take our word for it. Here’s what clients say about working with Tanot Solutions."
        />
        <Stagger className="mt-14 grid gap-6 lg:grid-cols-2">
          <StaggerItem><VideoCard /></StaggerItem>
          <StaggerItem><TestimonialCard t={testimonials[0]} large /></StaggerItem>
          <StaggerItem><TestimonialCard t={testimonials[1]} /></StaggerItem>
          <StaggerItem><TestimonialCard t={testimonials[2]} /></StaggerItem>
        </Stagger>
        <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href={links.reviews} arrow>
            View All Client Reviews
          </ButtonLink>
          <ButtonLink href={links.clutch} variant="outline">
            See us on Clutch
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
