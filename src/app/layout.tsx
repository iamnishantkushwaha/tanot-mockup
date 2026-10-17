import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Tanot Solutions | SEO & Link Building Agency for Google and AI Search", template: "%s | Tanot Solutions" },
  description:
    "Tanot Solutions helps your business rank higher on Google and get recommended by AI tools like ChatGPT, Perplexity, and Google AI Overviews. Design mockup of the homepage.",
};

export const viewport: Viewport = { themeColor: "#0a1628", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
