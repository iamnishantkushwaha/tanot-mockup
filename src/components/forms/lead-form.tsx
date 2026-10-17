"use client";

import * as React from "react";
import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { links } from "@/lib/site";
import { Button } from "@/components/ui/button";

const fields = [
  { name: "firstName", label: "First Name", type: "text", autoComplete: "given-name" },
  { name: "lastName", label: "Last Name", type: "text", autoComplete: "family-name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "website", label: "Website / URL", type: "text", autoComplete: "url" },
  { name: "message", label: "How can we help?", type: "text", autoComplete: "off" },
] as const;

type FieldName = (typeof fields)[number]["name"];

export function LeadForm({ idPrefix = "lead", buttonClassName }: { idPrefix?: string; buttonClassName?: string }) {
  const [errors, setErrors] = React.useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = React.useState<"idle" | "sending" | "done">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<FieldName, string>;
    const next: Partial<Record<FieldName, string>> = {};
    for (const f of fields) {
      if (!data[f.name]?.trim()) next[f.name] = `${f.label} is required`;
    }
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) next.email = "Enter a valid email address";
    setErrors(next);
    if (Object.keys(next).length) {
      (e.currentTarget.querySelector(`[name="${Object.keys(next)[0]}"]`) as HTMLElement | null)?.focus();
      return;
    }
    // Mockup has no backend: hand the enquiry to the visitor's mail client, addressed to the agency.
    setStatus("sending");
    const body = [
      `Name: ${data.firstName} ${data.lastName}`,
      `Email: ${data.email}`,
      `Website: ${data.website}`,
      "",
      data.message,
    ].join("\n");
    window.location.href = `mailto:${links.email}?subject=${encodeURIComponent("Free SEO Strategy request")}&body=${encodeURIComponent(body)}`;
    setTimeout(() => setStatus("done"), 600);
  }

  if (status === "done") {
    return (
      <div role="status" className="grid min-h-[420px] place-items-center text-center">
        <div>
          <span className="mx-auto grid size-14 place-items-center rounded-full bg-leaf/15 text-leaf">
            <CheckCircle2 className="size-7" aria-hidden />
          </span>
          <h3 className="mt-5 text-xl font-bold">Your email draft is ready</h3>
          <p className="mx-auto mt-2 max-w-xs text-sm text-body">
            We opened your mail app with your details addressed to {links.email}. Send it and the team will reply.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm font-semibold text-brand-600 underline-offset-4 hover:underline"
          >
            Edit my details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <h2 className="text-xl font-bold sm:text-2xl">Get Your Free SEO Strategy</h2>
      <p className="mt-2 text-sm leading-relaxed text-body">
        Tell us about your goals and we&apos;ll show you where your organic growth can improve.
      </p>
      <div className="mt-6 space-y-4">
        {fields.map((f) => (
          <div key={f.name}>
            <label htmlFor={`${idPrefix}-${f.name}`} className="mb-1.5 block text-[13px] font-semibold text-ink">
              {f.label} <span className="text-red-500" aria-hidden>*</span>
            </label>
            <input
              id={`${idPrefix}-${f.name}`}
              name={f.name}
              type={f.type}
              autoComplete={f.autoComplete}
              required
              aria-invalid={!!errors[f.name]}
              aria-describedby={errors[f.name] ? `${idPrefix}-${f.name}-err` : undefined}
              className="h-11 w-full rounded-xl border border-line bg-white px-3.5 text-[15px] text-ink outline-none transition-all duration-200 placeholder:text-body/50 hover:border-brand-300 focus:border-brand-500 focus:shadow-[0_0_0_4px_rgb(26_140_208/0.14)] aria-[invalid=true]:border-red-400"
            />
            {errors[f.name] && (
              <p id={`${idPrefix}-${f.name}-err`} className="mt-1 text-xs text-red-600">
                {errors[f.name]}
              </p>
            )}
          </div>
        ))}
      </div>
      <Button type="submit" size="lg" className={`mt-6 w-full uppercase tracking-widest ${buttonClassName ?? ""}`} disabled={status === "sending"}>
        {status === "sending" ? <Loader2 className="size-4 animate-spin" aria-hidden /> : null}
        Submit
      </Button>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-body">
        <ShieldCheck className="size-3.5 text-leaf" aria-hidden /> Sent straight to {links.email}
      </p>
    </form>
  );
}

