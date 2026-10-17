import * as React from "react";
import { cn } from "@/lib/utils";

/*
 * Decorative SVG for Version 2. All motion is plain CSS (see /public/v2/motion.css):
 * .m-draw animates stroke-dashoffset (paths carry pathLength="1"), .m-pop and .m-fade
 * handle entrances. Nothing here needs JavaScript, so the markup ports to WordPress as-is.
 */

type Css = React.CSSProperties & Record<`--${string}`, string | number>;
const delay = (s: number, dur?: number): Css => ({ "--m-delay": `${s}s`, ...(dur ? { "--m-dur": `${dur}s` } : {}) });

/** Hand-drawn underline that draws itself in. */
export function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 24" fill="none" className={cn("h-[0.28em] w-full", className)} aria-hidden preserveAspectRatio="none">
      <path
        className="m-draw"
        style={delay(0.7, 1.1)}
        pathLength={1}
        d="M3 15c25-14 45 12 70-1s45-12 70 1 45 12 70-1 45-12 70 1 25 5 34-1"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden fill="currentColor">
      <path d="M20 0c1.6 10.6 8.4 17.4 20 20-11.6 2.6-18.4 9.4-20 20C18.4 29.4 11.6 22.6 0 20 11.6 17.4 18.4 10.6 20 0Z" />
    </svg>
  );
}

/** Decorative composition for the home hero: a rising rank chart wired to a link network, with the platforms named in the copy. */
export function HeroGraphic() {
  const chip =
    "m-pop absolute flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3.5 py-2 text-[13px] font-semibold text-ink shadow-[0_10px_30px_-12px_rgb(7_33_26/0.35)] backdrop-blur";
  const nodes: [number, number, number][] = [
    [110, 150, 9],
    [205, 110, 13],
    [300, 165, 10],
    [350, 105, 15],
    [180, 215, 8],
  ];
  return (
    <div className="relative mx-auto aspect-[1/1.02] w-full max-w-[520px]">
      <div className="absolute inset-[6%] rotate-[4deg] rounded-[2.2rem] bg-lime" aria-hidden />
      <div className="absolute inset-[3%] -rotate-[3deg] rounded-[2.2rem] bg-brand-100" aria-hidden />
      <div className="grain absolute inset-0 overflow-hidden rounded-[2.2rem] bg-navy-900 shadow-lift">
        <svg viewBox="0 0 500 510" className="absolute inset-0 size-full" fill="none" aria-hidden>
          <defs>
            <linearGradient id="v2area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#c6f25a" stopOpacity="0.38" />
              <stop offset="1" stopColor="#c6f25a" stopOpacity="0" />
            </linearGradient>
            <pattern id="v2grid" width="42" height="42" patternUnits="userSpaceOnUse">
              <path d="M42 0H0V42" stroke="white" strokeOpacity="0.07" />
            </pattern>
          </defs>
          <rect width="500" height="510" fill="url(#v2grid)" />
          <path className="m-fade" style={delay(0.9)} d="M40 410 C110 395 150 360 205 345 S300 270 350 215 S430 110 462 82 V470 H40Z" fill="url(#v2area)" />
          <path
            className="m-draw"
            style={delay(0.5, 1.8)}
            pathLength={1}
            d="M40 410 C110 395 150 360 205 345 S300 270 350 215 S430 110 462 82"
            stroke="#c6f25a"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* link network */}
          <path className="m-fade" style={delay(1.0)} d="M110 150 L205 110 L300 165 L350 105" stroke="white" strokeOpacity="0.55" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" />
          <path className="m-fade" style={delay(1.2)} d="M205 110 L180 215 L300 165" stroke="white" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" />
          {nodes.map(([x, y, r], i) => (
            <g key={i} className="m-pop" style={delay(1.1 + i * 0.12)}>
              <circle cx={x} cy={y} r={r + 8} fill="#c6f25a" fillOpacity="0.14" />
              <circle cx={x} cy={y} r={r} fill={i === 3 ? "#c6f25a" : "white"} />
            </g>
          ))}
          <g className="m-pop" style={delay(2.0)}>
            <circle cx="462" cy="82" r="17" fill="#c6f25a" />
            <circle cx="462" cy="82" r="30" stroke="#c6f25a" strokeOpacity="0.4" />
          </g>
        </svg>
        <p className="absolute left-6 top-6 text-[11px] font-bold uppercase tracking-[0.2em] text-lime/90">Organic growth</p>
      </div>
      <div className={cn(chip, "-left-3 top-[16%] sm:-left-8")} style={delay(1.5)}>
        <span className="size-2.5 rounded-full bg-[#4285f4]" aria-hidden /> Google
      </div>
      <div className={cn(chip, "-right-2 top-[34%] sm:-right-7")} style={delay(1.7)}>
        <span className="size-2.5 rounded-full bg-leaf" aria-hidden /> ChatGPT
      </div>
      <div className={cn(chip, "-left-2 bottom-[24%] sm:-left-9")} style={delay(1.9)}>
        <span className="size-2.5 rounded-full bg-[#20b8cd]" aria-hidden /> Perplexity
      </div>
      <div className={cn(chip, "-right-1 bottom-[8%] sm:-right-5")} style={delay(2.1)}>
        <Sparkle className="size-3.5 text-brand-500" /> Google AI Overviews
      </div>
    </div>
  );
}

/** Section divider: a soft scalloped edge. `fill` is a CSS color or var(). */
export function Scallop({ fill, flip, className }: { fill: string; flip?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className={cn("block h-8 w-full sm:h-12", flip && "rotate-180", className)} aria-hidden>
      <path d="M0 48V24C60 4 120 4 180 24s120 20 180 0 120-20 180 0 120 20 180 0 120-20 180 0 120 20 180 0 120-20 180 0V48Z" fill={fill} />
    </svg>
  );
}

/** Abstract chain of links used as a background motif. */
export function LinkChain({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 120" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" className={className} aria-hidden>
      <rect x="10" y="30" width="90" height="60" rx="30" />
      <rect x="70" y="30" width="90" height="60" rx="30" />
      <rect x="130" y="30" width="80" height="60" rx="30" />
    </svg>
  );
}

/** Circular sticker with text on a path (static). */
export function Sticker({ text, className }: { text: string; className?: string }) {
  const id = React.useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <defs>
        <path id={id} d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
      </defs>
      <circle cx="60" cy="60" r="58" fill="#c6f25a" />
      <text fontSize="9" fontWeight="700" letterSpacing="2" fill="#07211a" fontFamily="var(--font-dm)">
        <textPath href={`#${id}`}>{text}</textPath>
      </text>
      <path d="M60 40l5.5 14.5L80 60l-14.5 5.5L60 80l-5.5-14.5L40 60l14.5-5.5Z" fill="#07211a" />
    </svg>
  );
}
