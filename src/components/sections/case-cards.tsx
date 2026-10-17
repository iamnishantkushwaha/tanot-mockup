import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/articles";
import { Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { SmartLink } from "@/components/ui/smart-link";

const meta: Record<string, { tag: string; image: string }> = {
  "cpr-certification": { tag: "Healthcare", image: "healthcare.png" },
  "safety-training": { tag: "Safety Training", image: "safety-training.png" },
  "hr-recruitment": { tag: "HR SaaS", image: "hr-saas.png" },
  "crm-saas": { tag: "CRM SaaS", image: "crm-saas.png" },
  "amazon-management-software": { tag: "Amazon Management SaaS", image: "amazon-saas.png" },
  "resume-builder": { tag: "Resume Builder", image: "resume-builder.png" },
};

export function CaseGrid({ exclude, cols = 3 }: { exclude?: string; cols?: 2 | 3 }) {
  const list = caseStudies.filter((c) => c.slug !== exclude);
  return (
    <Stagger className={`grid gap-6 md:grid-cols-2 ${cols === 3 ? "lg:grid-cols-3" : ""}`} stagger={0.08}>
      {list.map((c) => (
        <StaggerItem key={c.slug} className="h-full">
          <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-lift">
            <div className="relative aspect-square overflow-hidden bg-brand-50">
              <Image
                src={`/images/case-studies/${meta[c.slug].image}`}
                alt=""
                fill
                sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-600 shadow">
                {meta[c.slug].tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-bold leading-snug">
                <SmartLink href={`/case-studies/${c.slug}`} className="after:absolute after:inset-0 after:content-[''] group-hover:text-brand-600">
                  {c.title}
                </SmartLink>
              </h3>
              <p className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-600">
                Read case study
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </p>
            </div>
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
