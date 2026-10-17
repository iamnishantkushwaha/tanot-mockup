import * as React from "react";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { links, nav } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { SmartLink } from "@/components/ui/smart-link";

type NavItem = (typeof nav)[number];
type Child = { label: string; href: string; external?: boolean };
type Css = React.CSSProperties & Record<`--${string}`, string | number>;

function DesktopItem({ item }: { item: NavItem }) {
  const children = "children" in item ? (item.children as readonly Child[]) : null;
  return (
    <li data-nav-item className="group/nav relative">
      <SmartLink href={item.href} className="relative flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium text-ink transition-colors hover:text-brand-600">
        {item.label}
        {children && <ChevronDown className="size-3.5 transition-transform duration-300 group-hover/nav:rotate-180 group-focus-within/nav:rotate-180" aria-hidden />}
      </SmartLink>
      {children && (
        <div className="invisible absolute left-0 top-full z-50 w-60 translate-y-2 pt-3 opacity-0 transition-all duration-300 ease-out-expo group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100">
          <ul className="rounded-2xl border border-line bg-white p-2 shadow-lift">
            {children.map((c) => (
              <li key={c.label}>
                <SmartLink href={c.href} className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-brand-50 hover:text-brand-600">
                  {c.label}
                  {c.external && <ArrowUpRight className="size-3.5 opacity-50" aria-hidden />}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

/*
 * Plain server-rendered markup. Scroll styling, the sliding hover pill and the slide-in drawer are
 * driven by /public/motion/motion.js + motion.css (data-header, data-nav / data-pill, data-menu="drawer"),
 * and the dropdowns are pure CSS, so this ports to a WordPress header.php unchanged.
 */
export function Header() {
  return (
    <>
      <header
        data-header
        className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-transparent transition-all duration-500 data-[scrolled]:border-line/70 data-[scrolled]:bg-white/85 data-[scrolled]:shadow-[0_8px_30px_-18px_rgb(10_22_40/0.35)] data-[scrolled]:backdrop-blur-xl"
      >
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8">
          <SmartLink href="/" aria-label="Tanot Solutions home" className="shrink-0">
            <Image src="/images/brand/logo-large.png" alt="Tanot Solutions" width={1536} height={370} priority style={{ width: "auto", height: 36 }} />
          </SmartLink>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul data-nav className="relative isolate flex items-center gap-1">
              <span data-pill aria-hidden className="pointer-events-none absolute left-0 top-0 -z-10 rounded-full bg-brand-50 opacity-0" />
              {nav.map((item) => (
                <DesktopItem key={item.label} item={item} />
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <ButtonLink href={links.bookCall} size="sm" arrow className="hidden sm:inline-flex">
              Book a Free Call
            </ButtonLink>
            <button
              type="button"
              data-menu-open
              aria-controls="v1-menu"
              aria-expanded="false"
              aria-label="Open menu"
              className="grid size-11 place-items-center rounded-xl border border-line bg-white text-ink transition-colors hover:border-brand-400 lg:hidden"
            >
              <Menu className="size-5" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer sits outside <header>: the header's backdrop blur would otherwise clip a fixed child. */}
      <div id="v1-menu" data-menu="drawer" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-[60]">
        <div data-menu-overlay data-menu-close className="absolute inset-0 bg-navy-950/50 backdrop-blur-sm" />
        <div data-menu-panel className="absolute inset-y-0 right-0 flex w-[min(88vw,380px)] flex-col bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand-600">Menu</p>
            <button type="button" data-menu-close aria-label="Close menu" className="grid size-11 place-items-center rounded-xl text-ink hover:bg-brand-50">
              <X className="size-5" aria-hidden />
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto px-3 py-4">
            {nav.map((item, i) => {
              const children = "children" in item ? (item.children as readonly Child[]) : null;
              const style: Css = { "--i": i };
              return (
                <li key={item.label} data-menu-item style={style}>
                  <SmartLink href={item.href} className="flex min-h-12 items-center rounded-xl px-3 font-display text-lg font-semibold text-ink hover:bg-brand-50">
                    {item.label}
                  </SmartLink>
                  {children && (
                    <ul className="mb-2 ml-3 border-l border-line pl-3">
                      {children.map((c) => (
                        <li key={c.label}>
                          <SmartLink href={c.href} className="flex min-h-11 items-center rounded-lg px-3 text-[15px] text-body hover:bg-brand-50 hover:text-brand-600">
                            {c.label}
                          </SmartLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="border-t border-line p-5">
            <ButtonLink href={links.bookCall} arrow className="w-full">
              Book a Free Call
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}
