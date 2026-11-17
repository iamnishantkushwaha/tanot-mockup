import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { V3Header } from "@/components/v3/header";
import { V3Footer } from "@/components/v3/footer";
import { MotionAssets } from "@/components/v3/motion";

const dm = DM_Sans({ variable: "--font-dm", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Tanot Solutions | SEO & Link Building Agency (Version 3)", template: "%s | Tanot Solutions V3" },
  description: "Version 3 design concept for Tanot Solutions: SEO and link building for Google and AI search.",
  robots: { index: false },
};

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`v3 ${dm.variable} relative overflow-x-clip`}>
      <MotionAssets />
      <V3Header />
      <main id="content">{children}</main>
      <V3Footer />
    </div>
  );
}
