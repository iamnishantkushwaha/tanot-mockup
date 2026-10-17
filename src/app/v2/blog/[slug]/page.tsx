import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, FolderOpen, History, User } from "lucide-react";
import { blogPosts, categoryLabel, formatDate, getPost, relatedPosts } from "@/lib/articles";
import { links, routes } from "@/lib/site";
import { Rise } from "@/components/v2/motion";
import { ArticleBody, buildToc } from "@/components/sections/article-body";
import { Band, Btn, Head, V2Link, Wrap } from "@/components/v2/ui";
import { CtaV2, PostGridV2 } from "@/components/v2/shared";
import { LinkChain, Sparkle } from "@/components/v2/graphics";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function V2BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { toc, ids } = buildToc(post.blocks);
  const related = relatedPosts(post).map((p) => ({ category: p.category, title: p.title, href: `/blog/${p.slug}`, date: p.dateLabel, image: p.thumb }));
  const chip = "inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-medium text-ink";

  return (
    <>
      <header className="relative isolate overflow-hidden pt-28 sm:pt-32">
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
        <LinkChain className="absolute -left-10 top-44 -z-10 w-52 -rotate-12 text-brand-100" />
        <Sparkle className="absolute right-[7%] top-36 -z-10 size-9 text-lime-600/70" />
        <Wrap className="grid items-center gap-10 pb-14 pt-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:pb-20">
          <div>
            <Rise>
              <nav aria-label="Breadcrumb" className="mb-5 text-sm text-body">
                <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <li><V2Link href={routes.home} className="font-semibold text-brand-600 hover:underline">Home</V2Link></li>
                  <li aria-hidden>»</li>
                  <li><V2Link href={routes.blog} className="font-semibold text-brand-600 hover:underline">{categoryLabel(post.category)}</V2Link></li>
                  <li aria-hidden>»</li>
                  <li aria-current="page" className="line-clamp-1 max-w-[26ch] sm:max-w-none">{post.title}</li>
                </ol>
              </nav>
            </Rise>
            <Rise delay={0.05}>
              <h1 className="text-balance text-[2.1rem] leading-[1.05] sm:text-5xl lg:text-[3.5rem]">{post.title}</h1>
            </Rise>
            <Rise delay={0.15} className="mt-7 flex flex-wrap gap-2.5">
              <span className={chip}><User className="size-4 text-brand-500" aria-hidden /> {post.author}</span>
              <span className={chip}><FolderOpen className="size-4 text-brand-500" aria-hidden /> {categoryLabel(post.category)}</span>
              <span className={chip}><CalendarDays className="size-4 text-brand-500" aria-hidden /> Posted: <time dateTime={post.published}>{formatDate(post.published)}</time></span>
              {post.modified && post.modified !== post.published && (
                <span className={chip}><History className="size-4 text-brand-500" aria-hidden /> Updated: <time dateTime={post.modified}>{formatDate(post.modified)}</time></span>
              )}
            </Rise>
          </div>
          <Rise delay={0.2} y={30} className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-lime" aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-lift ring-1 ring-line">
              <Image src={post.image} alt="" width={640} height={640} priority sizes="(min-width: 1024px) 380px, 90vw" className="h-auto w-full rounded-[1.5rem] object-cover" />
            </div>
          </Rise>
        </Wrap>
      </header>

      <Band tone="white" className="!pt-10 lg:!pt-14" label="Article">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
          <article className="min-w-0 max-w-[780px]">
            {toc.length > 1 && (
              <details className="mb-8 rounded-3xl bg-tint p-5 lg:hidden">
                <summary className="cursor-pointer font-display text-lg font-medium text-ink">Table of Contents</summary>
                <ol className="mt-4 space-y-2.5">
                  {toc.map((t, i) => (
                    <li key={t.id} className="flex gap-3 text-[15px]">
                      <span className="text-xs font-bold leading-6 text-brand-500">{String(i + 1).padStart(2, "0")}</span>
                      <a href={`#${t.id}`} className="text-ink hover:text-brand-600">{t.text}</a>
                    </li>
                  ))}
                </ol>
              </details>
            )}
            <ArticleBody blocks={post.blocks} ids={ids} prefix="/v2" />
          </article>
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-5">
              {toc.length > 1 && (
                <nav aria-label="Table of contents" className="max-h-[60vh] overflow-y-auto rounded-[2rem] bg-tint p-7">
                  <h2 className="text-2xl font-medium text-ink">Table of Contents</h2>
                  <ol className="mt-4 divide-y divide-ink/10">
                    {toc.map((t, i) => (
                      <li key={t.id}>
                        <a href={`#${t.id}`} className="flex gap-4 py-3 text-[15px] leading-snug text-ink transition-colors hover:text-brand-600">
                          <span className="text-xs font-bold leading-5 text-brand-500">{String(i + 1).padStart(2, "0")}</span>
                          <span>{t.text}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
              <div className="relative overflow-hidden rounded-[2rem] bg-navy-900 p-7 text-white">
                <Sparkle className="absolute right-5 top-5 size-7 text-lime" />
                <p className="font-display text-2xl font-medium">Get Your Free SEO Strategy</p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">A free, no-obligation look at your site and the links you actually need to rank.</p>
                <Btn href={links.bookCall} className="mt-5 w-full justify-between">Book a Free Call</Btn>
              </div>
            </div>
          </aside>
        </div>
        <div className="mt-16 flex max-w-[780px] flex-col items-start gap-5 rounded-[2rem] bg-paper p-6 ring-1 ring-line sm:flex-row sm:items-center">
          <Image src="/images/brand/renu-small.jpg" alt={post.author} width={92} height={92} className="size-20 shrink-0 rounded-full object-cover ring-4 ring-lime" />
          <div>
            <p className="font-display text-xl font-medium text-ink">Written by {post.author}</p>
            <p className="mt-1 text-[15px] leading-relaxed text-body">Co-Founder &amp; Head of SEO at Tanot Solutions. 11+ years helping brands grow through white-hat link building and AI search visibility.</p>
            <V2Link href={routes.featuredIn} className="mt-2 inline-block text-sm font-bold text-brand-600 hover:underline">More about Renu</V2Link>
          </div>
        </div>
      </Band>

      <Band tone="cream" label="Related articles">
        <Head eyebrow="Keep reading" title={<>Related <em>articles</em></>} />
        <PostGridV2 className="mt-14" posts={related} />
      </Band>
      <CtaV2 />
    </>
  );
}
