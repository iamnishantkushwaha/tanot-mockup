export const SITE = "https://tanotsolutions.com";

/** Pages that exist in this Next.js build. */
export const routes = {
  home: "/",
  bookCall: "/lets-talk",
  caseStudies: "/case-studies",
  reviews: "/link-building-service-reviews",
  linkBuilding: "/services/link-building",
  about: "/about",
  featuredIn: "/featured-in",
  contact: "/contact",
  blog: "/blog",
  privacy: "/privacy-policy",
  terms: "/terms-of-service",
};

/** Content not rebuilt here (articles, individual case studies, pricing) stays on the live site. */
export const live = (path: string) => `${SITE}${path}`;

export const links = {
  ...routes,
  pricing: live("/pricing/"),
  clutch: "https://clutch.co/profile/tanot-solutions",
  goodfirms: "https://www.goodfirms.co/company/tanot-solutions",
  manifest: "https://themanifest.com/company/tanot-solutions",
  designrush: "https://www.designrush.com/agency/profile/tanot-solutions",
  othlist: "https://www.othlist.com/agencies/tanot-solutions",
  linkedin: "https://www.linkedin.com/company/tanot-solutions",
  facebook: "https://www.facebook.com/tanotsolutions",
  instagram: "https://www.instagram.com/thetanotsolutions/",
  calendly: "https://calendly.com/renusharma-1/30min",
  email: "info@tanotsolutions.com",
};

export const nav = [
  { label: "Case Studies", href: routes.caseStudies },
  { label: "Reviews", href: routes.reviews },
  {
    label: "Services",
    href: "/#services",
    children: [
      { label: "Link Building", href: routes.linkBuilding },
      { label: "Technical SEO", href: "/#services" },
      { label: "AI SEO", href: "/#services" },
      { label: "Local SEO", href: "/#services" },
      { label: "SaaS SEO", href: "/#services" },
      { label: "Content Marketing", href: "/#services" },
    ],
  },
  {
    label: "Company",
    href: routes.about,
    children: [
      { label: "About Us", href: routes.about },
      { label: "Featured In", href: routes.featuredIn },
      { label: "Contact", href: routes.contact },
    ],
  },
  { label: "Blog", href: routes.blog },
] as const;
