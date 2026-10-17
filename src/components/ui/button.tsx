import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SmartLink } from "./smart-link";

const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-xl text-center font-sans font-semibold transition-all duration-300 ease-out-expo focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-60 active:scale-[0.98] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-[0_8px_20px_-8px_rgb(26_140_208/0.7)] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-10px_rgb(26_140_208/0.8)]",
        outline:
          "border border-line bg-white text-ink hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 hover:shadow-card",
        white:
          "bg-white text-navy-900 shadow-card hover:-translate-y-0.5 hover:bg-brand-50",
        ghostLight:
          "border border-white/30 bg-white/5 text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/15",
        soft: "bg-brand-50 text-brand-600 hover:bg-brand-100",
      },
      size: {
        md: "min-h-12 px-6 py-2.5 text-[15px]",
        lg: "min-h-14 px-7 py-3 text-base",
        sm: "min-h-10 px-4 py-2 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  arrow?: boolean;
}

export function Button({ className, variant, size, arrow, children, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden />}
    </button>
  );
}

/** Link styled as a button, with an optional sliding arrow. Internal hrefs use client navigation. */
export function ButtonLink({
  className,
  variant,
  size,
  arrow,
  children,
  href,
  ...props
}: Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  VariantProps<typeof buttonVariants> & { arrow?: boolean; href: string }) {
  return (
    <SmartLink href={href} className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden />}
    </SmartLink>
  );
}

export { buttonVariants };
