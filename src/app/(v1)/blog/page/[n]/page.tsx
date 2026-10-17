import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPageCount } from "@/lib/articles";
import { BlogIndex } from "@/components/sections/blog-index";

export function generateStaticParams() {
  return Array.from({ length: blogPageCount - 1 }, (_, i) => ({ n: String(i + 2) }));
}

export async function generateMetadata({ params }: { params: Promise<{ n: string }> }): Promise<Metadata> {
  const { n } = await params;
  return { title: `SEO and Link Building Blog, Page ${n}` };
}

export default async function BlogPagedPage({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const page = Number(n);
  if (!Number.isInteger(page) || page < 2 || page > blogPageCount) notFound();
  return <BlogIndex page={page} />;
}
