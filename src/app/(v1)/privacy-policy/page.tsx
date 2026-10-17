import type { Metadata } from "next";
import { privacy } from "@/lib/legal";
import { LegalPage } from "@/components/sections/legal";

export const metadata: Metadata = { title: "Privacy Policy", description: "How Tanot Solutions collects, uses and protects your personal information." };

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" blocks={privacy} />;
}
