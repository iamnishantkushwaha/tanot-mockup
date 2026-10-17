import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/articles";
import { Stagger, StaggerItem } from "@/components/v2/motion";
import { cn } from "@/lib/utils";
import { Tag, V2Link } from "./ui";

const meta: Record<string, { tag: string; image: string }> = {
  "cpr-certification": { tag: "Healthcare", image: "healthcare.png" },
  "safety-training": { tag: "Safety Training", image: "safety-training.png" },
  "hr-recruitment": { tag: "HR SaaS", image: "hr-saas.png" },
  "crm-saas": { tag: "CRM SaaS", image: "crm-saas.png" },
  "amazon-management-software": { tag: "Amazon Management SaaS", image: "amazon-saas.png" },
  "resume-builder": { tag: "Resume Builder", image: "resume-builder.png" },
};

export function CaseGridV2({ exclude, className }: { exclude?: string; className?: string }) {
  const list = caseStudies.filter((c) => c.slug !== exclude);
  return (
    <Stagger className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", className)} stagger={0.08}>
      {list.map((c) => (
        <StaggerItem key={c.slug} className="h-full">
          <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white ring-1 ring-line transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
            <div className="relative m-3 aspect-square overflow-hidden rounded-[1.4rem] bg-brand-50">
              <Image src={`/images/case-studies/${meta[c.slug].image}`} alt="" fill sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105" />
              <Tag className="absolute left-3 top-3">{meta[c.slug].tag}</Tag>
            </div>
            <div className="flex flex-1 flex-col px-6 pb-6 pt-2">
              <h3 className="text-balance font-display text-xl font-medium leading-snug text-ink">
                <V2Link href={`/case-studies/${c.slug}`} className="after:absolute after:inset-0 after:content-[''] group-hover:text-brand-500">
                  {c.title}
                </V2Link>
              </h3>
              <p className="mt-auto flex items-center justify-between pt-6 text-sm font-bold uppercase tracking-wider text-brand-500">
                Read case study
                <span className="grid size-9 place-items-center rounded-full bg-navy-900 text-lime transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="size-4" aria-hidden />
                </span>
              </p>
            </div>
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
