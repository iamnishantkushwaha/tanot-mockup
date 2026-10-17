import * as React from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav, routes } from "@/lib/site";
import { Btn, V2Link } from "./ui";

type Child = { label: string; href: string };
type Css = React.CSSProperties & Record<`--${string}`, string | number>;

/*
 * Plain, server-rendered markup. Scroll styling and the circle-reveal menu are driven by
 * /public/v2/motion.js + motion.css (data-header, data-menu-open, data-menu), and the
 * dropdowns are pure CSS, so this ports to a WordPress header.php unchanged.
 */
export function V2Header() {
  return (
    <header data-header className="group fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-lime focus:px-4 focus:py-2">
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-4 rounded-full border border-transparent bg-transparent pl-5 pr-2 transition-all duration-500 group-data-[scrolled]:border-line group-data-[scrolled]:bg-paper/85 group-data-[scrolled]:shadow-[0_14px_40px_-18px_rgb(7_33_26/0.45)] group-data-[scrolled]:backdrop-blur-xl">
        <V2Link href="/" aria-label="Tanot Solutions home" className="shrink-0">
          <Image src="/images/brand/logo-large.png" alt="Tanot Solutions" width={1536} height={370} priority style={{ width: "auto", height: 34 }} />
        </V2Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {nav.map((item) => {
              const children = "children" in item ? (item.children as readonly Child[]) : null;
              return (
                <li key={item.label} className="group/nav relative">
                  <V2Link href={item.href} className="flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium text-ink transition-colors hover:bg-brand-50 hover:text-brand-600">
                    {item.label}
                    {children && <ChevronDown className="size-3.5 transition-transform duration-300 group-hover/nav:rotate-180 group-focus-within/nav:rotate-180" aria-hidden />}
                  </V2Link>
                  {children && (
                    <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 ease-out-expo group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100">
                      <ul className="rounded-3xl border border-line bg-paper p-2 shadow-lift">
                        {children.map((c) => (
                          <li key={c.label}>
                            <V2Link href={c.href} className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-lime hover:text-navy-900">
                              {c.label}
                            </V2Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Btn href={routes.bookCall} size="sm" className="hidden sm:inline-flex">
            Book a Free Call
          </Btn>
          <button type="button" data-menu-open aria-controls="v2-menu" aria-expanded="false" aria-label="Open menu" className="grid size-11 place-items-center rounded-full bg-navy-900 text-lime transition-colors hover:bg-brand-600 lg:hidden">
            <Menu className="size-5" aria-hidden />
          </button>
        </div>
      </div>

      <div id="v2-menu" data-menu="circle" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-navy-900 px-6 pb-8 pt-5 text-white">
        <div className="flex items-center justify-between">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-lime">Menu</p>
          <button type="button" data-menu-close aria-label="Close menu" className="grid size-11 place-items-center rounded-full bg-lime text-navy-900">
            <X className="size-5" aria-hidden />
          </button>
        </div>
        <ul className="mt-8 flex-1">
          {nav.map((item, i) => {
            const children = "children" in item ? (item.children as readonly Child[]) : null;
            const style: Css = { "--i": i };
            return (
              <li key={item.label} data-menu-item style={style} className="border-b border-white/10 py-3">
                <V2Link href={item.href} className="block font-display text-4xl font-semibold leading-tight text-white">
                  {item.label}
                </V2Link>
                {children && (
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {children.map((c) => (
                      <li key={c.label}>
                        <V2Link href={c.href} className="inline-flex min-h-10 items-center rounded-full border border-white/20 px-4 text-sm text-white/85">
                          {c.label}
                        </V2Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <Btn href={routes.bookCall} size="lg" className="mt-8 w-full justify-between">
          Book a Free Call
        </Btn>
      </div>
    </header>
  );
}
