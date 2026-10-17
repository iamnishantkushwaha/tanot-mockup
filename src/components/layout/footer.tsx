import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { footer } from "@/lib/content";
import { links } from "@/lib/site";
import { SmartLink } from "@/components/ui/smart-link";

function LinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}
function Facebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.6c0-.9.3-1.6 1.6-1.6h1.5V4.3c-.3 0-1.2-.1-2.2-.1-2.3 0-3.9 1.4-3.9 4v2.3H8v3h2.5V21h3z" />
    </svg>
  );
}
function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socials = [
  { label: "LinkedIn", href: links.linkedin, Icon: LinkedIn },
  { label: "Facebook", href: links.facebook, Icon: Facebook },
  { label: "Instagram", href: links.instagram, Icon: Instagram },
];

function Column({ title, items }: { title: string; items: readonly (readonly [string, string])[] }) {
  return (
    <div>
      <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">{title}</h3>
      <ul className="space-y-3">
        {items.map(([label, href]) => (
          <li key={label}>
            <SmartLink href={href} className="text-[15px] text-white/65 transition-colors hover:text-white">
              {label}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white">
      <div className="pointer-events-none absolute -top-40 right-0 size-[520px] rounded-full bg-brand-500/15 blur-[120px]" aria-hidden />
      <div className="relative mx-auto max-w-[1280px] px-5 pb-10 pt-16 sm:px-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Image
              src="/images/brand/logo-large.png"
              alt="Tanot Solutions"
              width={1536}
              height={370}
              style={{ width: "auto", height: 40 }} className="brightness-0 invert"
            />
            <p className="mt-5 text-[15px] leading-relaxed text-white/70">{footer.blurb}</p>
            <ul className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-500 hover:text-white"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">Sales Inquiry</p>
              <a href={`mailto:${links.email}`} className="mt-2 inline-flex items-center gap-2 text-[15px] text-white hover:text-brand-300">
                <Mail className="size-4" aria-hidden />
                {links.email}
              </a>
            </div>
          </div>
          <Column title="Company" items={footer.company} />
          <Column title="Services" items={footer.services} />
          <Column title="Resources" items={footer.resources} />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Tanot Solutions. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <MapPin className="size-4" aria-hidden />
            {footer.location}
          </p>
          <ul className="flex gap-6">
            <li>
              <SmartLink href={links.privacy} className="hover:text-white">
                Privacy Policy
              </SmartLink>
            </li>
            <li>
              <SmartLink href={links.terms} className="hover:text-white">
                Terms of Service
              </SmartLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
