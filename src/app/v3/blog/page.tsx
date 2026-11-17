import type { Metadata } from "next";
import { BlogIndexV3 } from "@/components/v3/blog-index";

export const metadata: Metadata = {
  title: "SEO and Link Building Blog",
  description: "Guides, comparisons and tactics on SEO, link building and AI search from the Tanot Solutions team.",
};

export default function V3Blog() {
  return <BlogIndexV3 page={1} />;
}
