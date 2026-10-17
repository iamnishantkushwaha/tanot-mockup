import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { SmartLink } from "@/components/ui/smart-link";
import { Reveal } from "./motion";
import { cn } from "@/lib/utils";
import { v2 } from "@/lib/v2";

/** Link that keeps visitors inside Version 2: local paths are prefixed with /v2, external URLs open in a new tab. */
export function V2Link({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return <SmartLink href={v2(href)} {...props} />;
}

const btn = {
  base: "group/btn inline-flex items-center justify-center gap-3 rounded-full font-sans font-semibold transition-all duration-300 ease-out-expo active:scale-[0.98] focus-visible:outline-2",
  lime: "bg-lime text-navy-900 hover:bg-lime-600 hover:shadow-[0_14px_30px_-12px_rgb(169_219_53/0.9)]",
  dark: "bg-navy-900 text-white hover:bg-brand-600",
  light: "bg-paper text-ink hover:bg-white",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  outlineLight: "border border-white/35 text-white hover:border-white hover:bg-white hover:text-navy-900",
};
const sizes = { md: "h-12 pl-6 pr-2 text-[15px]", lg: "h-14 pl-7 pr-2 text-base", sm: "h-10 pl-5 pr-1.5 text-sm" };
const circle: Record<keyof typeof btn, string> = {
  base: "",
  lime: "bg-navy-900 text-lime",
  dark: "bg-lime text-navy-900",
  light: "bg-navy-900 text-lime",
  outline: "bg-ink text-paper group-hover/btn:bg-paper group-hover/btn:text-ink",
  outlineLight: "bg-white text-navy-900",
};

type Variant = Exclude<keyof typeof btn, "base">;

export function Btn({
  href,
  variant = "lime",
  size = "md",
  arrow = true,
  className,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; variant?: Variant; size?: keyof typeof sizes; arrow?: boolean }) {
  return (
    <V2Link href={href} className={cn(btn.base, btn[variant], arrow ? sizes[size] : "px-7", !arrow && (size === "lg" ? "h-14" : size === "sm" ? "h-10" : "h-12"), className)} {...props}>
      {children}
      {arrow && (
        <span className={cn("grid shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover/btn:rotate-45", size === "sm" ? "size-7" : size === "lg" ? "size-10" : "size-9", circle[variant])}>
          <ArrowUpRight className="size-4" aria-hidden />
        </span>
      )}
    </V2Link>
  );
}

export function Wrap({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-5 sm:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children, light, className }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em]",
        light ? "border-white/20 bg-white/10 text-lime" : "border-brand-500/20 bg-brand-50 text-brand-600",
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full", light ? "bg-lime" : "bg-brand-500")} aria-hidden />
      {children}
    </p>
  );
}

/** Section heading: serif display with optional lead. Wrap emphasised words in <em>. */
export function Head({
  eyebrow,
  title,
  lead,
  align = "center",
  light,
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <Tag
        className={cn(
          "text-balance text-[2.1rem] leading-[1.05] sm:text-5xl lg:text-[3.4rem] [&_em]:font-medium [&_em]:italic",
          eyebrow && "mt-5",
          light ? "text-white [&_em]:text-lime" : "text-ink [&_em]:text-brand-500",
        )}
      >
        {title}
      </Tag>
      {lead && <p className={cn("mt-5 text-pretty text-lg leading-relaxed", light ? "text-white/75" : "text-body")}>{lead}</p>}
    </Reveal>
  );
}

export function Band({
  tone = "paper",
  className,
  children,
  id,
  label,
}: {
  tone?: "paper" | "white" | "cream" | "forest" | "lime";
  className?: string;
  children: React.ReactNode;
  id?: string;
  label?: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn(
        "relative py-20 lg:py-28",
        tone === "paper" && "bg-paper",
        tone === "white" && "bg-white",
        tone === "cream" && "bg-tint",
        tone === "forest" && "overflow-hidden bg-navy-900 text-white",
        tone === "lime" && "bg-lime text-navy-900",
        className,
      )}
    >
      {tone === "forest" && (
        <>
          <div className="pointer-events-none absolute -right-40 -top-40 size-[560px] rounded-full bg-brand-500/30 blur-[120px]" aria-hidden />
          <div className="pointer-events-none absolute -bottom-52 -left-32 size-[460px] rounded-full bg-lime/10 blur-[120px]" aria-hidden />
        </>
      )}
      <Wrap className="relative">{children}</Wrap>
    </section>
  );
}

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("inline-flex rounded-full bg-lime px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-900", className)}>{children}</span>;
}
