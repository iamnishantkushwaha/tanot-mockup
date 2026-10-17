import { cn } from "@/lib/utils";
import { Reveal } from "./motion-primitives";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light,
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]",
            light ? "text-brand-300" : "text-brand-500",
          )}
        >
          <span className="h-px w-6 bg-current" aria-hidden />
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "text-balance text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
          light && "text-white",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className={cn("mt-4 text-pretty text-base leading-relaxed sm:text-lg", light ? "text-white/75" : "text-body")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
