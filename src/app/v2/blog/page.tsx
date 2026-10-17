import type { Metadata } from "next";
import { BlogIndexV2 } from "@/components/v2/blog-index";

export const metadata: Metadata = {
  title: "SEO and Link Building Blog",
  description: "Guides, comparisons and tactics on SEO, link building and AI search from the Tanot Solutions team.",
};

export default function V2Blog() {
  return <BlogIndexV2 page={1} />;
}
