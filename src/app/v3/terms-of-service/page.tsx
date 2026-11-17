import type { Metadata } from "next";
import { terms } from "@/lib/legal";
import { LegalPageV3 } from "@/components/v3/legal";

export const metadata: Metadata = { title: "Terms of Service", description: "The terms that apply to using the Tanot Solutions website and engaging its services." };

export default function V3Terms() {
  return <LegalPageV3 title="Terms of Service" blocks={terms} />;
}
