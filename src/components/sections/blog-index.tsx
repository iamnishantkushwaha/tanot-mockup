import { blogPageCount, blogPosts, POSTS_PER_PAGE } from "@/lib/articles";
import { SectionHeading } from "@/components/ui/section-heading";
import { SmartLink } from "@/components/ui/smart-link";
import { Section } from "@/components/sections/blocks";
import { CtaBand, PostGrid, type Post } from "@/components/sections/company";
import { PageHero } from "@/components/sections/page-hero";

const href = (n: number) => (n === 1 ? "/blog" : `/blog/page/${n}`);

function pageList(current: number, total: number): (number | "gap")[] {
  const set = new Set([1, total, current, current - 1, current + 1]);
  const nums = [...set].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);
  const out: (number | "gap")[] = [];
  nums.forEach((n, i) => {
    if (i > 0 && n - nums[i - 1] > 1) out.push("gap");
    out.push(n);
  });
  return out;
}

export function BlogIndex({ page }: { page: number }) {
  const slice = blogPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
  const posts: Post[] = slice.map((p) => ({
    category: p.category,
    title: p.title,
    href: `/blog/${p.slug}`,
    date: p.dateLabel,
    image: p.thumb,
  }));
  const base = "grid size-11 place-items-center rounded-xl font-display text-sm font-bold transition-colors";
  return (
    <>
      <PageHero
        aside="none"
        eyebrow={page > 1 ? `Blog · Page ${page}` : "Blog"}
        title={
          <>
            Tanot Solutions <span className="text-gradient">SEO and Link Building</span> Blog
          </>
        }
      />
      <Section className="!pt-4" label="Latest articles">
        <SectionHeading align="left" title={`Latest articles, page ${page}`} className="sr-only" />
        <PostGrid posts={posts} priorityFirst />
        <nav aria-label="Blog pages" className="mt-14 flex flex-wrap items-center justify-center gap-2">
          {pageList(page, blogPageCount).map((n, i) =>
            n === "gap" ? (
              <span key={`g${i}`} aria-hidden className="px-1 text-body">
                …
              </span>
            ) : n === page ? (
              <span key={n} aria-current="page" className={`${base} bg-brand-500 text-white`}>
                {n}
              </span>
            ) : (
              <SmartLink key={n} href={href(n)} aria-label={`Page ${n}`} className={`${base} border border-line bg-white text-ink hover:border-brand-400 hover:text-brand-600`}>
                {n}
              </SmartLink>
            ),
          )}
        </nav>
      </Section>
      <CtaBand />
    </>
  );
}
