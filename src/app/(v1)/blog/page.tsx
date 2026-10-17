import type { Metadata } from "next";
import { BlogIndex } from "@/components/sections/blog-index";

export const metadata: Metadata = {
  title: "SEO and Link Building Blog",
  description: "Guides, comparisons and tactics on SEO, link building and AI search from the Tanot Solutions team.",
};

export default function BlogPage() {
  return <BlogIndex page={1} />;
}
