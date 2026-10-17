import { Hero } from "@/components/sections/hero";
import { Reviews, Stats, TrustedBy } from "@/components/sections/proof";
import { CaseStudy, Services } from "@/components/sections/services";
import { Awards, CtaBand, FeaturedOn, Founder, Insights, Team, WhyUs } from "@/components/sections/company";
import { Faq } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
        <Hero />
        <Stats />
        <TrustedBy />
        <Reviews />
        <Services />
        <CaseStudy />
        <WhyUs />
        <Awards />
        <Founder />
        <Team />
        <FeaturedOn />
        <Faq />
        <Insights />
        <CtaBand />
    </>
  );
}
