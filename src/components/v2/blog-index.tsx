import { blogPageCount, blogPosts, POSTS_PER_PAGE } from "@/lib/articles";
import { Band } from "./ui";
import { CtaV2, PageHeroV2, PostGridV2, Underlined } from "./shared";
import { V2Link } from "./ui";

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

export function BlogIndexV2({ page }: { page: number }) {
  const slice = blogPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
  const base = "grid size-12 place-items-center rounded-full font-sans text-sm font-bold transition-colors";
  return (
    <>
      <PageHeroV2
        aside="none"
        eyebrow={page > 1 ? `Blog · Page ${page}` : "Blog"}
        title={
          <>
            Tanot Solutions <Underlined>SEO and Link Building</Underlined> Blog
          </>
        }
      />
      <Band tone="paper" className="!pt-4" label="Latest articles">
        <PostGridV2
          priorityFirst
          posts={slice.map((p) => ({ category: p.category, title: p.title, href: `/blog/${p.slug}`, date: p.dateLabel, image: p.thumb }))}
        />
        <nav aria-label="Blog pages" className="mt-14 flex flex-wrap items-center justify-center gap-2">
          {pageList(page, blogPageCount).map((n, i) =>
            n === "gap" ? (
              <span key={`g${i}`} aria-hidden className="px-1 text-body">
                …
              </span>
            ) : n === page ? (
              <span key={n} aria-current="page" className={`${base} bg-lime text-navy-900`}>
                {n}
              </span>
            ) : (
              <V2Link key={n} href={href(n)} aria-label={`Page ${n}`} className={`${base} border border-ink/20 text-ink hover:bg-ink hover:text-paper`}>
                {n}
              </V2Link>
            ),
          )}
        </nav>
      </Band>
      <CtaV2 />
    </>
  );
}
