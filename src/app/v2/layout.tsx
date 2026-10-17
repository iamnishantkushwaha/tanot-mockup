import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { V2Header } from "@/components/v2/header";
import { V2Footer } from "@/components/v2/footer";
import { MotionAssets } from "@/components/v2/motion";

const dm = DM_Sans({ variable: "--font-dm", subsets: ["latin"], display: "swap" });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], display: "swap", axes: ["SOFT", "opsz"] });

export const metadata: Metadata = {
  title: { default: "Tanot Solutions | SEO & Link Building Agency (Version 2)", template: "%s | Tanot Solutions V2" },
  description: "Version 2 design concept for Tanot Solutions: SEO and link building for Google and AI search.",
  robots: { index: false },
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`v2 ${dm.variable} ${fraunces.variable} relative overflow-x-clip`}>
      <MotionAssets />
      <V2Header />
      <main id="content">{children}</main>
      <V2Footer />
    </div>
  );
}
