import type { Metadata } from "next";
import { terms } from "@/lib/legal";
import { LegalPage } from "@/components/sections/legal";

export const metadata: Metadata = { title: "Terms of Service", description: "The terms that apply to using the Tanot Solutions website and engaging its services." };

export default function TermsPage() {
  return <LegalPage title="Terms of Service" blocks={terms} />;
}
