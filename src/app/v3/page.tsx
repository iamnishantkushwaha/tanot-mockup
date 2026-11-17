import { V3Hero } from "@/components/v3/home-hero";
import {
  V3Awards,
  V3CaseStudy,
  V3Faq,
  V3FeaturedOn,
  V3Founder,
  V3Insights,
  V3Reviews,
  V3Services,
  V3Stats,
  V3Team,
  V3TrustedBy,
  V3WhyUs,
} from "@/components/v3/home-sections";
import { CtaV3 } from "@/components/v3/shared";

export default function V3Home() {
  return (
    <>
      <V3Hero />
      <V3Stats />
      <V3TrustedBy />
      <V3Reviews />
      <V3Services />
      <V3CaseStudy />
      <V3WhyUs />
      <V3Awards />
      <V3Founder />
      <V3Team />
      <V3FeaturedOn />
      <V3Faq />
      <V3Insights />
      <CtaV3 />
    </>
  );
}
