import { links } from "./site";

// All copy below is taken from https://tanotsolutions.com/home2/ (verified Oct 2026).

export const hero = {
  titleAccent: "Best SEO Services",
  titleRest: "for Google, AI Search, and Revenue Growth",
  body: "Tanot Solutions helps your business rank higher on Google and get recommended by AI tools like ChatGPT, Perplexity, and Google AI Overviews. From technical SEO and content marketing to high-authority link building and local SEO, we handle everything needed to bring you more qualified leads and measurable revenue growth.",
};

export const stats = [
  { value: 150, suffix: "+", label: "Clients Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 11, suffix: "+", label: "Years of SEO Experience" },
  { value: 2, suffix: "+", label: "Years average client retention" },
];

export const clientLogos = Array.from(
  { length: 16 },
  (_, i) => `/images/clients/client-${String(i + 1).padStart(2, "0")}.png`,
);

export const video = {
  id: "888963147",
  poster: "/images/brand/video-poster.jpg",
  caption: "Lisa Warren, Content Manager, HR Company",
};

export const testimonials = [
  {
    quote:
      "After we started link building with Tanot Solutions, they helped our CRM’s high-converting product page rank higher with an impressive 80% increase in traffic and an equally exceptional 80% increase in the total number of sign-ups every day.",
    name: "Sandeep Das",
    role: "Marketing Manager, CRM SaaS Company",
  },
  {
    quote:
      "We’ve been impressed by their ability to consistently build high-quality backlinks, which are very challenging to achieve. We work with highly reputed brands, where quality guidelines are stringent and difficult for many agencies to meet. However, Tanot Solutions consistently meets these standards.",
    name: "Michael Dunlop",
    role: "Director of LinkBuilder.io",
  },
  {
    quote:
      "Since we started working with Tanot Solutions on our link-building efforts, we’ve seen steady increases in our organic traffic MoM over the past 6 months. I can also honestly say that Renu and the team are very responsive and punctual, something I really appreciate from our partners.",
    name: "Marko Spasic",
    role: "Marketing Manager, Hosting company",
  },
];

export const services = [
  {
    id: "link-building",
    title: "Link Building",
    cta: "Get Link Building Plan",
    learnMore: links.linkBuilding,
    body: "We earn high-quality, white-hat backlinks from trusted websites in your industry. These links show Google your business is credible, helping you rank higher and stay there with our link building services.",
    points: [
      "High-authority guest posts",
      "Contextual niche edit links",
      "Industry-relevant websites only",
      "Site approval before placement",
      "White-label agency solutions",
      "Pay for live links",
    ],
  },
  {
    id: "technical-seo",
    title: "Technical SEO",
    cta: "Get Your Free Technical SEO Audit",
    body: "We fix the hidden issues that stop Google and AI from finding, understanding, and ranking your website. A faster, healthier site means better rankings, more AI visibility and a smoother experience that turns visitors into customers.",
    points: [
      "Complete website SEO audits",
      "Faster page load speed",
      "Core Web Vitals optimization",
      "Crawling and indexing fixes",
      "Schema markup implementation",
      "Mobile and AI-ready setup",
    ],
  },
  {
    id: "ai-seo",
    title: "AI SEO",
    cta: "Get Your Free AI SEO Audit",
    body: "Your customers now ask ChatGPT, Perplexity, and Google AI Overviews for recommendations. We optimize your brand so these AI tools mention, cite, and recommend your business when buyers are searching.",
    points: [
      "Google AI Overviews visibility",
      "ChatGPT and Perplexity mentions",
      "Answer engine optimization (AEO)",
      "AI-friendly content structure",
      "AI-ready structured data",
      "AI visibility performance tracking",
    ],
  },
  {
    id: "local-seo",
    title: "Local SEO",
    cta: "Get Your Free Local SEO Audit",
    body: "We help nearby customers find you on Google Search and Maps the moment they need your services. More local visibility means more calls, direction requests, and visits from ready-to-buy customers.",
    points: [
      "Google Business Profile optimization",
      "Higher Google Maps rankings",
      "Local keyword targeting",
      "Consistent directory listings",
      "Local community backlinks",
      "Review and reputation management",
    ],
  },
  {
    id: "saas-seo",
    title: "SaaS SEO",
    cta: "Get Your Free SaaS SEO Audit",
    body: "SaaS growth needs a different SEO playbook. We help software companies rank for the searches buyers make right before choosing a tool, driving more trials, demos, and recurring revenue.",
    points: [
      "More Demo Requests",
      "Steady Monthly Sign-Up Growth",
      "Revenue-Focused SEO Strategy",
      "AI Search Visibility",
      "Topical Authority Building",
      "Links from top SaaS websites",
    ],
  },
  {
    id: "content-marketing",
    title: "Content Marketing Services",
    cta: "Get Your Free Content Marketing Audit",
    body: "We create content that answers your customers' questions, ranks on Google, and guides readers toward becoming buyers. Every piece is planned around what your audience is actually searching for.",
    points: [
      "Keyword and intent research",
      "AI-citation-ready content",
      "Content gap analysis",
      "E-E-A-T content strategy",
      "Conversion-focused SEO copywriting",
      "Content refresh and updates",
    ],
  },
];

export const caseStudy = {
  title: "How an HR company grew from zero to 6200 monthly visitors in 8 months",
  body: "Starting from a domain with almost no authority, we built a steady flow of niche-relevant editorial links with required technical SEO and content changes and the traffic ranked up from zero to 6200 visitors in 8 months.",
  image: "/images/brand/case-study.png",
};

export const whyUs = {
  title: "A growth partner, not another SEO agency.",
  body: "Clients describe working with us as “less like a vendor, more like a partner.” Here’s why they stay for 2+ years on average.",
  items: [
    { icon: "chart", title: "Results, not vanity metrics", body: "Every campaign is tied to rankings, AI visibility, leads, sales and revenue." },
    { icon: "wallet", title: "Performance-based pricing", body: "No upfront payment. Pay only for verified deliverables." },
    { icon: "shield", title: "Enterprise-grade quality", body: "Links and strategy that meet global brand standards, at scale." },
    { icon: "eye", title: "100% transparent process", body: "You approve everything including content, links, technical changes before we go ahead." },
    { icon: "sparkles", title: "AI-first SEO", body: "Visible in AI Overviews, ChatGPT and Perplexity, not just Google." },
    { icon: "users", title: "An extension of your team", body: "Dedicated specialists, clear communication, genuine relationship." },
  ],
} as const;

export const awards = [
  { title: "Rajasthan Women Leaders Award", image: "/images/awards/rajasthan-women-leaders.jpeg" },
  { title: "Most Trusted Global SEO Solutions Provider", image: "/images/awards/sardar-patel-certificate.jpeg" },
  { title: "Best Roi Focused SEO Agency 2026", image: "/images/awards/roi-certificate.png" },
  { title: "Sardar Patel Unity Awards 2026", image: "/images/awards/sardar-patel-trophy.png" },
  { title: "Clutch Awards", image: "/images/awards/clutch-awards.jpeg" },
  { title: "Best Roi Focused SEO Agency 2026", image: "/images/awards/roi-trophy.png" },
];

export const founder = {
  name: "Renu Sharma",
  role: "Founder & Head of SEO Strategy",
  image: "/images/brand/renu-sharma.webp",
  title: "Hi, I'm Renu. I built Tanot Solutions to make SEO accountable.",
  paragraphs: [
    "For over 11 years, I’ve helped brands grow through search, from early-stage startups to global enterprises. Along the way, I saw how easily businesses lose trust in SEO: vague reports, guaranteed #1 rankings that never happen, cheap spammy links that lead to penalties, and agencies that disappear once the contract is signed.",
    "I founded Tanot Solutions in 2020 to change that, with honest strategy, ethical practices, and complete transparency at every step.",
  ],
};

// The reference page shows grey placeholder images for every team member, so no photos are available.
export const team = [
  { name: "Vikas Sharma", role: "Co-Founder and Head of Operations" },
  { name: "Pradeep", role: "Content Manager" },
  { name: "Ravina Jangid", role: "Link Building Expert" },
  { name: "Aniket Mukherjee", role: "Link Building Expert" },
];

export const featuredOn = [
  { name: "Entrepreneur", image: "/images/featured/entrepreneur.png" },
  { name: "HubSpot", image: "/images/featured/hubspot.webp" },
  { name: "Forbes", image: "/images/featured/forbes.png" },
  { name: "GoDaddy", image: "/images/featured/godaddy.png" },
  { name: "The Tribune", image: "/images/featured/tribune.webp" },
];

export const faqs = [
  {
    q: "How will working with Tanot Solutions help grow my business?",
    a: "We focus on what actually moves your business forward: qualified traffic, leads, and revenue, not just rankings. From technical SEO and content strategy to high-authority link building, every campaign is built around your goals and designed to attract real buyers. You’ll always know what we’re doing, why we’re doing it, and how it’s contributing to your growth.",
  },
  {
    q: "Are your link building services safe and Google-friendly?",
    a: "Yes. We never use private blog networks, bulk link packages, or spammy directories. Every link is earned through genuine outreach on relevant, high-quality websites with real audiences and traffic. Our approach follows Google’s guidelines, so you build lasting authority without risking penalties.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "Most businesses start seeing early improvements within 3 to 6 months, with stronger, compounding growth over 6 to 12 months. Timelines depend on your industry, competition, website health, and starting point. We’ll never promise overnight rankings. Instead, we’ll give you a realistic roadmap and keep you updated on progress every step of the way.",
  },
  {
    q: "Do you offer complete SEO services or only link building?",
    a: "We offer end-to-end SEO. That includes technical audits, on-page optimization, keyword research, content strategy, local SEO, and link building. You can work with us for a full SEO strategy or choose specific services based on what your business needs.",
  },
  {
    q: "Will I have visibility into the work being done?",
    a: "Absolutely. Transparency is at the core of how we work. You’ll receive clear, easy-to-understand reports showing the work completed, links built, rankings, traffic, and progress toward your goals. You’ll also have a dedicated point of contact, so you’re never left wondering what’s happening with your campaign.",
  },
  {
    q: "Do you work with agencies on a white-label basis?",
    a: "Yes. We partner with agencies worldwide to deliver white-label SEO and link building under their brand. Our team works quietly in the background while you maintain the client relationship, with unbranded reports, flexible packages, and complete confidentiality.",
  },
];

export const posts = [
  {
    category: "SEO",
    title: "11 Best GEO Agencies Helping B2B Brands Win AI Search",
    href: "/blog/best-geo-agencies",
    date: "October 16, 2026",
    image: "/images/blog/geo-agencies.jpg",
  },
  {
    category: "LINK BUILDING",
    title: "Link Building For Startups: How To Get Quality Backlinks On A Budget",
    href: "/blog/link-building-for-startups",
    date: "October 6, 2026",
    image: "/images/blog/link-building-startups.jpg",
  },
  {
    category: "SEO",
    title: "13 White Hat SEO Techniques: How To Rank Higher On Google & AI Search",
    href: "/blog/white-hat-seo-techniques",
    date: "October 2, 2026",
    image: "/images/blog/white-hat-seo.jpg",
  },
];

export const footer = {
  blurb:
    "We are an SEO and link-building agency that helps global brands 5X their ROI through strategic SEO and high-quality backlink strategies.",
  location: "Jodhpur, Rajasthan, India",
  company: [
    ["Home", "/"],
    ["About Us", links.about],
    ["Blog", links.blog],
    ["Case Studies", links.caseStudies],
    ["Client Reviews", links.reviews],
    ["Contact", links.contact],
  ],
  services: [["Link Building", links.linkBuilding]],
  resources: [
    ["Choose an Agency", "/blog/choose-link-building-agency"],
    ["Link Building Tools", "/blog/link-building-software"],
    ["Contextual Links", "/blog/contextual-link-building"],
    ["Free Backlinks Guide", "/blog/how-to-get-free-backlinks"],
    ["Buy Quality Backlinks", "/blog/buy-high-quality-backlinks"],
    ["SaaS Link Building", "/blog/saas-link-building"],
  ],
} as const;
