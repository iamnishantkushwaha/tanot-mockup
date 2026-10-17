import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, FolderOpen, History, User } from "lucide-react";
import { blogPosts, categoryLabel, formatDate, getPost, relatedPosts } from "@/lib/articles";
import { links, routes } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/motion-primitives";
import { SectionHeading } from "@/components/ui/section-heading";
import { SmartLink } from "@/components/ui/smart-link";
import { ArticleBody, buildToc } from "@/components/sections/article-body";
import { Section } from "@/components/sections/blocks";
import { CtaBand, PostGrid } from "@/components/sections/company";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { title: post.title, description: post.description, images: [post.image], type: "article" },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { toc, ids } = buildToc(post.blocks);
  const related = relatedPosts(post).map((p) => ({
    category: p.category,
    title: p.title,
    href: `/blog/${p.slug}`,
    date: p.dateLabel,
    image: p.thumb,
  }));

  const chip = "inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-4 py-2 text-sm font-medium text-ink backdrop-blur";

  return (
    <>
      <header className="relative isolate overflow-hidden bg-gradient-to-b from-tint via-[#f2f6fc] to-white pt-[72px]">
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
        <div className="absolute -left-32 top-10 -z-10 size-[420px] rounded-full bg-brand-400/20 blur-[110px]" aria-hidden />
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 pb-14 pt-12 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:pb-20 lg:pt-16">
          <div>
            <Reveal>
              <nav aria-label="Breadcrumb" className="mb-5 text-sm text-body">
                <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <li>
                    <SmartLink href={routes.home} className="font-medium text-brand-600 hover:underline">
                      Home
                    </SmartLink>
                  </li>
                  <li aria-hidden>»</li>
                  <li>
                    <SmartLink href={routes.blog} className="font-medium text-brand-600 hover:underline">
                      {categoryLabel(post.category)}
                    </SmartLink>
                  </li>
                  <li aria-hidden>»</li>
                  <li aria-current="page" className="line-clamp-1 max-w-[28ch] sm:max-w-none">
                    {post.title}
                  </li>
                </ol>
              </nav>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-balance text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-[2.9rem]">{post.title}</h1>
            </Reveal>
            <Reveal delay={0.15} className="mt-7 flex flex-wrap gap-3">
              <span className={chip}>
                <User className="size-4 text-brand-500" aria-hidden /> {post.author}
              </span>
              <span className={chip}>
                <FolderOpen className="size-4 text-brand-500" aria-hidden /> {categoryLabel(post.category)}
              </span>
              <span className={chip}>
                <CalendarDays className="size-4 text-brand-500" aria-hidden /> Posted: <time dateTime={post.published}>{formatDate(post.published)}</time>
              </span>
              {post.modified && post.modified !== post.published && (
                <span className={chip}>
                  <History className="size-4 text-brand-500" aria-hidden /> Updated: <time dateTime={post.modified}>{formatDate(post.modified)}</time>
                </span>
              )}
            </Reveal>
          </div>
          <Reveal delay={0.2} y={30} className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-3xl border border-white bg-white p-3 shadow-lift ring-1 ring-line">
              <Image src={post.image} alt="" width={640} height={640} priority sizes="(min-width: 1024px) 380px, 90vw" className="h-auto w-full rounded-2xl object-cover" />
            </div>
          </Reveal>
        </div>
      </header>

      <Section className="!pt-6 lg:!pt-10" label="Article">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
          <article className="min-w-0 max-w-[780px]">
            {toc.length > 1 && (
              <details className="mb-8 rounded-2xl border border-brand-100 bg-brand-50/60 p-5 lg:hidden">
                <summary className="cursor-pointer font-display text-base font-bold text-ink">Table of Contents</summary>
                <ol className="mt-4 space-y-2.5">
                  {toc.map((t, i) => (
                    <li key={t.id} className="flex gap-3 text-[15px]">
                      <span className="font-display text-xs font-bold text-leaf">{String(i + 1).padStart(2, "0")}</span>
                      <a href={`#${t.id}`} className="text-ink hover:text-brand-600">
                        {t.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>
            )}
            <ArticleBody blocks={post.blocks} ids={ids} />
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-5">
              {toc.length > 1 && (
                <nav aria-label="Table of contents" className="max-h-[60vh] overflow-y-auto rounded-3xl border border-brand-100 bg-brand-50/60 p-6">
                  <h2 className="font-display text-xl font-bold text-ink">Table of Contents</h2>
                  <ol className="mt-4 divide-y divide-brand-100">
                    {toc.map((t, i) => (
                      <li key={t.id}>
                        <a href={`#${t.id}`} className="group flex gap-4 py-3 text-[15px] leading-snug text-ink transition-colors hover:text-brand-600">
                          <span className="font-display text-xs font-bold leading-5 text-leaf">{String(i + 1).padStart(2, "0")}</span>
                          <span>{t.text}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
              <div className="rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 p-6 text-white shadow-lift">
                <p className="font-display text-lg font-bold">Get Your Free SEO Strategy</p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">A free, no-obligation look at your site and the links you actually need to rank.</p>
                <ButtonLink href={links.bookCall} variant="white" arrow className="mt-5 w-full">
                  Book a Free Call
                </ButtonLink>
              </div>
            </div>
          </aside>
        </div>

        <div className="mx-auto mt-16 flex max-w-[780px] flex-col items-start gap-5 rounded-3xl border border-line bg-white p-6 shadow-card sm:flex-row sm:items-center lg:ml-0">
          <Image src="/images/brand/renu-small.jpg" alt={post.author} width={92} height={92} className="size-20 shrink-0 rounded-2xl object-cover ring-4 ring-brand-50" />
          <div>
            <p className="font-display text-lg font-bold text-ink">Written by {post.author}</p>
            <p className="mt-1 text-[15px] leading-relaxed text-body">
              Co-Founder &amp; Head of SEO at Tanot Solutions. 11+ years helping brands grow through white-hat link building and AI search visibility.
            </p>
            <SmartLink href={routes.featuredIn} className="mt-2 inline-block text-sm font-semibold text-brand-600 hover:underline">
              More about Renu
            </SmartLink>
          </div>
        </div>
      </Section>

      <Section tone="tint" label="Related articles">
        <SectionHeading eyebrow="Keep reading" title="Related articles" />
        <PostGrid posts={related} className="mt-14" />
      </Section>

      <CtaBand />
    </>
  );
}
