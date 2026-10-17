import * as React from "react";
import { Check, type LucideIcon } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { cn } from "@/lib/utils";

export function Section({
  tone = "white",
  className,
  children,
  label,
  id,
}: {
  tone?: "white" | "tint" | "navy";
  className?: string;
  children: React.ReactNode;
  label?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn(
        "relative py-20 lg:py-28",
        tone === "white" && "bg-white",
        tone === "tint" && "bg-tint",
        tone === "navy" && "overflow-hidden bg-navy-900 text-white",
        className,
      )}
    >
      {tone === "navy" && (
        <div
          className="absolute inset-0 bg-[radial-gradient(50%_70%_at_85%_10%,rgb(26_140_208/0.3),transparent),radial-gradient(40%_50%_at_0%_100%,rgb(22_176_201/0.18),transparent)]"
          aria-hidden
        />
      )}
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">{children}</div>
    </section>
  );
}

/** Equal-height icon cards. */
export function FeatureGrid({
  items,
  cols = 3,
}: {
  items: { icon: LucideIcon; title: string; body: string }[];
  cols?: 2 | 3 | 4;
}) {
  return (
    <Stagger
      className={cn(
        "grid gap-5",
        cols === 2 && "sm:grid-cols-2",
        cols === 3 && "sm:grid-cols-2 lg:grid-cols-3",
        cols === 4 && "sm:grid-cols-2 lg:grid-cols-4",
      )}
    >
      {items.map(({ icon: Icon, title, body }) => (
        <StaggerItem
          key={title}
          className="group flex flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-lift"
        >
          <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-teal-brand group-hover:text-white">
            <Icon className="size-6" aria-hidden />
          </span>
          <h3 className="mt-5 text-lg font-bold">{title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-body">{body}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function CheckList({ items, className, cols = 1 }: { items: React.ReactNode[]; className?: string; cols?: 1 | 2 }) {
  return (
    <ul className={cn("grid gap-x-8 gap-y-4", cols === 2 && "sm:grid-cols-2", className)}>
      {items.map((p, i) => (
        <li key={i} className="flex items-start gap-3 text-[15px] font-medium text-ink">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-leaf/15 text-leaf">
            <Check className="size-3.5" strokeWidth={3} aria-hidden />
          </span>
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

/** Numbered vertical steps with a connecting line. */
export function Steps({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ol className="relative mx-auto max-w-3xl space-y-5">
      <span className="absolute bottom-6 left-[27px] top-6 w-px bg-gradient-to-b from-brand-300 via-brand-200 to-transparent" aria-hidden />
      {items.map((s, i) => (
        <li key={s.title} className="relative flex gap-5">
          <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 font-display text-lg font-bold text-white shadow-[0_10px_24px_-10px_rgb(26_140_208/0.9)]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <Reveal delay={i * 0.04} className="flex-1 rounded-2xl border border-line bg-white p-6 shadow-card">
            <h3 className="text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-body">{s.body}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
