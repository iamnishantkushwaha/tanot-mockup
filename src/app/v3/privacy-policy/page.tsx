import type { Metadata } from "next";
import { privacy } from "@/lib/legal";
import { LegalPageV3 } from "@/components/v3/legal";

export const metadata: Metadata = { title: "Privacy Policy", description: "How Tanot Solutions collects, uses and protects your personal information." };

export default function V3Privacy() {
  return <LegalPageV3 title="Privacy Policy" blocks={privacy} />;
}
