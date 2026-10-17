import type { Metadata } from "next";
import { privacy } from "@/lib/legal";
import { LegalPageV2 } from "@/components/v2/legal";

export const metadata: Metadata = { title: "Privacy Policy", description: "How Tanot Solutions collects, uses and protects your personal information." };

export default function V2Privacy() {
  return <LegalPageV2 title="Privacy Policy" blocks={privacy} />;
}
