import { V2Hero } from "@/components/v2/home-hero";
import {
  V2Awards,
  V2CaseStudy,
  V2Faq,
  V2FeaturedOn,
  V2Founder,
  V2Insights,
  V2Reviews,
  V2Services,
  V2Stats,
  V2Team,
  V2TrustedBy,
  V2WhyUs,
} from "@/components/v2/home-sections";
import { CtaV2 } from "@/components/v2/shared";

export default function V2Home() {
  return (
    <>
      <V2Hero />
      <V2Stats />
      <V2TrustedBy />
      <V2Reviews />
      <V2Services />
      <V2CaseStudy />
      <V2WhyUs />
      <V2Awards />
      <V2Founder />
      <V2Team />
      <V2FeaturedOn />
      <V2Faq />
      <V2Insights />
      <CtaV2 />
    </>
  );
}
