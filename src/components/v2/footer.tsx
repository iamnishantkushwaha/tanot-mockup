import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { footer } from "@/lib/content";
import { links } from "@/lib/site";
import { Sparkle } from "./graphics";
import { V2Link, Wrap } from "./ui";

function Col({ title, items }: { title: string; items: readonly (readonly [string, string])[] }) {
  return (
    <div>
      <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-lime">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map(([label, href]) => (
          <li key={label}>
            <V2Link href={href} className="text-[15px] text-white/70 transition-colors hover:text-white">
              {label}
            </V2Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const social = [
  ["LinkedIn", links.linkedin],
  ["Facebook", links.facebook],
  ["Instagram", links.instagram],
] as const;

export function V2Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <Sparkle className="absolute right-[8%] top-12 size-10 text-lime/70" />
      <Sparkle className="absolute right-[18%] top-28 size-5 text-white/30" />
      <Wrap className="relative pt-20">
        <p className="max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-6xl">
          SEO that earns trust, <em className="text-lime">one editorial link</em> at a time.
        </p>
        <div className="mt-16 grid gap-12 border-t border-white/10 pt-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Image src="/images/brand/logo-large.png" alt="Tanot Solutions" width={1536} height={370} style={{ width: "auto", height: 38 }} className="brightness-0 invert" />
            <p className="mt-5 text-[15px] leading-relaxed text-white/70">{footer.blurb}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {social.map(([label, href]) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center rounded-full border border-white/20 px-4 text-sm text-white/85 transition-colors hover:bg-lime hover:text-navy-900">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-lime">Sales Inquiry</p>
            <a href={`mailto:${links.email}`} className="mt-2 inline-flex items-center gap-2 text-[15px] text-white hover:text-lime">
              <Mail className="size-4" aria-hidden />
              {links.email}
            </a>
          </div>
          <Col title="Company" items={footer.company} />
          <Col title="Services" items={footer.services} />
          <Col title="Resources" items={footer.resources} />
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Tanot Solutions. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <MapPin className="size-4" aria-hidden />
            {footer.location}
          </p>
          <ul className="flex gap-6">
            <li>
              <V2Link href={links.privacy} className="hover:text-white">
                Privacy Policy
              </V2Link>
            </li>
            <li>
              <V2Link href={links.terms} className="hover:text-white">
                Terms of Service
              </V2Link>
            </li>
          </ul>
        </div>
      </Wrap>
    </footer>
  );
}
