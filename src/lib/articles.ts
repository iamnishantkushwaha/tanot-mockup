import postsData from "@/data/posts.json";
import casesData from "@/data/cases.json";
import { routes, SITE } from "./site";
import { v2 } from "./v2";

// ---- Blog ----------------------------------------------------------------

export type ArticleBlock =
  | { t: "h2" | "h3" | "h4" | "h5" | "p" | "quote"; x: string }
  | { t: "ul" | "ol"; items: string[] }
  | { t: "img"; src: string; alt: string; w: number; h: number }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "hr" };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  dateLabel: string;
  published: string;
  modified: string;
  image: string;
  thumb: string;
  blocks: ArticleBlock[];
};

export const blogPosts = postsData as unknown as BlogPost[];
export const POSTS_PER_PAGE = 9;
export const blogPageCount = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);

export function relatedPosts(post: BlogPost, n = 3) {
  const same = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const rest = blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category);
  return [...same, ...rest].slice(0, n);
}

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

export const categoryLabel = (c: string) =>
  c === "SEO"
    ? "SEO"
    : c
    .toLowerCase()
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

export const slugify = (t: string) =>
  t
    .replace(/<[^>]+>/g, "")
    .toLowerCase()
    .replace(/&amp;/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Strip tags for plain-text uses (TOC labels, alt text). */
export const stripHtml = (h: string) =>
  h
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();

// ---- Case studies ----------------------------------------------------------

export type CaseCard = { kicker: string; title: string; body: string };
export type CaseBlock =
  | { t: "p"; x: string }
  | { t: "ul" | "ol"; items: string[] }
  | { t: "quote"; x: string; name?: string; role?: string }
  | { t: "cards"; cards: CaseCard[] }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "img"; src: string; alt: string }
  | { t: "faq"; items: { q: string; a: string }[] };

export type CaseStudy = {
  slug: string;
  title: string;
  titleHtml: string;
  sub: string;
  stats: { val: string; lbl: string }[];
  heroImage: string | null;
  description: string;
  ogImage: string | null;
  sections: { id: string; title: string; lead: string; blocks: CaseBlock[] }[];
  cta: { title: string; desc: string } | null;
};

export const caseStudies = casesData as unknown as CaseStudy[];
export const getCase = (slug: string) => caseStudies.find((c) => c.slug === slug);

// ---- Link localisation -----------------------------------------------------

const pagePaths: Record<string, string> = {
  "/": routes.home,
  "/about/": routes.about,
  "/contact/": routes.contact,
  "/lets-talk/": routes.bookCall,
  "/case-studies/": routes.caseStudies,
  "/blog/": routes.blog,
  "/link-building-service-reviews/": routes.reviews,
  "/featured-in/": routes.featuredIn,
  "/services/link-building/": routes.linkBuilding,
  "/privacy-policy/": routes.privacy,
  "/terms-of-service/": routes.terms,
};

/** Maps a tanotsolutions.com URL to its local route when that page exists in this build. */
export function localizeHref(href: string, prefix: "" | "/v2" = ""): { href: string; external: boolean } {
  const out = (h: string) => (prefix ? v2(h) : h);
  if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("/")) return { href, external: false };
  if (!href.startsWith(SITE) && !href.startsWith("http://tanotsolutions.com")) return { href, external: /^https?:/.test(href) };
  let u: URL;
  try {
    u = new URL(href);
  } catch {
    return { href, external: true };
  }
  const path = u.pathname.endsWith("/") ? u.pathname : `${u.pathname}/`;
  const hash = u.hash;
  if (pagePaths[path]) return { href: out(pagePaths[path] + hash), external: false };
  const blog = path.match(/^\/blog\/([^/]+)\/$/);
  if (blog && getPost(blog[1])) return { href: out(`/blog/${blog[1]}${hash}`), external: false };
  const cs = path.match(/^\/case-studies\/([^/]+)\/$/);
  if (cs && getCase(cs[1])) return { href: out(`/case-studies/${cs[1]}${hash}`), external: false };
  const pg = path.match(/^\/blog\/page\/(\d+)\/$/);
  if (pg && Number(pg[1]) <= blogPageCount) return { href: out(Number(pg[1]) === 1 ? "/blog" : `/blog/page/${pg[1]}`), external: false };
  return { href, external: true };
}

/** Rewrites every <a href> inside sanitized article HTML to local routes where possible; external links open in a new tab. */
export function localizeHtml(html: string, prefix: "" | "/v2" = ""): string {
  return html.replace(/<a href="([^"]*)">/g, (_m, href: string) => {
    const decoded = href.replace(/&amp;/g, "&");
    const l = localizeHref(decoded, prefix);
    return l.external ? `<a href="${href}" target="_blank" rel="noopener noreferrer">` : `<a href="${l.href}">`;
  });
}
