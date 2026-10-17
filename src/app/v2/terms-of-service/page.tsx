import type { Metadata } from "next";
import { terms } from "@/lib/legal";
import { LegalPageV2 } from "@/components/v2/legal";

export const metadata: Metadata = { title: "Terms of Service", description: "The terms that apply to using the Tanot Solutions website and engaging its services." };

export default function V2Terms() {
  return <LegalPageV2 title="Terms of Service" blocks={terms} />;
}
