import * as React from "react";
import Script from "next/script";

/**
 * WordPress-portable motion helpers, shared by Version 1 and Version 2.
 *
 * These render plain elements with data-attributes. The behaviour lives in
 * /public/motion/motion.css + motion.js (no React-only libraries), so the same markup
 * and the same two files work unchanged in a WordPress theme.
 */

type Css = React.CSSProperties & Record<`--${string}`, string | number>;

/** Scroll-triggered fade + rise. Only transform/opacity animate, so there is no layout shift. */
export function Reveal({
  delay = 0,
  y = 24,
  className,
  children,
  ...rest
}: { delay?: number; y?: number } & React.HTMLAttributes<HTMLDivElement>) {
  const style: Css = { "--m-delay": `${delay}s`, "--m-y": `${y}px` };
  return (
    <div data-reveal className={className} style={style} {...rest}>
      {children}
    </div>
  );
}

/** Above-the-fold entrance: pure CSS (data-rise), so it never waits for JavaScript. */
export function Rise({
  delay = 0,
  className,
  children,
  as: Tag = "div",
  card,
  ...rest
}: { delay?: number; y?: number; as?: "div" | "p" | "a" | "span"; card?: boolean } & React.HTMLAttributes<HTMLElement>) {
  const style: Css = { "--m-delay": `${delay}s` };
  delete (rest as { y?: number }).y; // entrance distance is fixed in CSS
  const Comp = Tag as React.ElementType;
  return (
    <Comp data-rise={card ? "card" : ""} className={className} style={style} {...rest}>
      {children}
    </Comp>
  );
}

/** Container that staggers its `StaggerItem` children as it enters the viewport. */
export function Stagger({ stagger = 0.08, className, children }: { stagger?: number; className?: string; children: React.ReactNode }) {
  return (
    <div data-stagger={stagger} className={className}>
      {children}
    </div>
  );
}

export function StaggerItem({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div data-stagger-item className={className}>
      {children}
    </div>
  );
}

/** Counts from 0 to `to` once, when scrolled into view. The final value is also exposed via aria-label. */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const final = `${prefix}${to.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`;
  const initial = `${prefix}${(0).toFixed(decimals)}${suffix}`;
  return (
    <span className={className} data-count={to} data-count-prefix={prefix} data-count-suffix={suffix} data-count-decimals={decimals} aria-label={final}>
      {initial}
    </span>
  );
}

/** Stylesheet + script of the motion kit. Mounted once per layout. */
export function MotionAssets() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link rel="stylesheet" href="/motion/motion.css" precedence="default" />
      <Script src="/motion/motion.js" strategy="lazyOnload" />
    </>
  );
}
