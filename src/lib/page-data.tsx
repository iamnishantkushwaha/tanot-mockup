// Page content shared by the Version 2 pages. Copied verbatim from the V1 page files (all copy originates from tanotsolutions.com).
import { Award, BarChart3, Brain, ClipboardList, Compass, Eye, FileEdit, Gauge, Handshake, HeartHandshake, Headset, Layers, Link2, LineChart, Medal, MessageCircle, Newspaper, PenLine, Route, ShieldCheck, SlidersHorizontal, Star, Trophy } from "lucide-react";
import { links } from "./site";
import { reviews } from "./reviews";

export const about_values = [
  { icon: Layers, title: "Quality Over Volume", body: "We would rather build 10 genuinely relevant, editorially placed links than 100 that look fine in a spreadsheet and do nothing for your rankings." },
  { icon: Eye, title: "Full Transparency", body: "You approve every site before outreach begins. Every delivered link comes with a live URL, DR, estimated traffic, and anchor text. No black boxes, ever." },
  { icon: ShieldCheck, title: "White-Hat Always", body: "No PBNs, link farms, or manipulative schemes. Every method we use is one we would publicly defend in front of any SEO professional or Google reviewer." },
  { icon: BarChart3, title: "Outcomes, Not Optics", body: "We measure success in rankings, organic traffic, and ROI. Not link counts or domain rating scores alone. Your growth is our report card." },
  { icon: Handshake, title: "Long-Term Partnership", body: "We do not disappear after delivery. We work as an extension of your team, thinking about your SEO goals the way a trusted in-house strategist would." },
  { icon: Compass, title: "Relevance First", body: "Every placement is matched to your niche and audience. We never chase domain rating numbers on sites that have nothing to do with your industry." },
];

export const about_timeline = [
  {
    year: "2020",
    label: "Founded",
    title: "Tanot Solutions launches as a white-hat link building agency in Jodhpur, Rajasthan",
    body: "Founded with a single mandate: deliver high-authority editorial backlinks with full client transparency and zero shortcuts. First clients onboarded in SaaS and B2B. The client-approval workflow and publisher vetting process were built from day one.",
    chip: "Year 1 of operations",
  },
  {
    year: "2022",
    label: "Scaling Up",
    title: "50+ brands served and white-label link building launched for agencies worldwide",
    body: "Crossed 50+ active brand partnerships. Launched white-label services for digital agencies. Publisher network grew to 500+ vetted sites across 15+ countries. Client retention surpassed 80%.",
    chip: "50+ brands served",
  },
  {
    year: "2026",
    label: "Today",
    title: "Clutch Top Link Building Agency 2026 serving 150+ brands across 20+ countries",
    body: "Named Clutch Top Link Building Agency 2026. 15+ specialists. A publisher network of 1,000+ vetted sites. Full services covering editorial link building, niche edits, guest posts, technical SEO, and AI search visibility. 5,000+ editorial backlinks delivered.",
    chip: "150+ brands worldwide",
  },
];

export const about_recognition = [
  { icon: Trophy, title: "Top Link Building Agency 2026", body: "Clutch, Global Leader, verified by client reviews", href: links.clutch },
  { icon: Medal, title: "Global Leader in SEO Services 2025", body: "Clutch, independently verified client reviews", href: links.clutch },
  { icon: Star, title: "5.0 Star Rating on Clutch", body: "Verified reviews with consistent 5-star scores across all engagements", href: links.clutch },
  { icon: Award, title: "Top SEO Agency on DesignRush", body: "Listed and verified as a top-performing SEO and link-building agency", href: links.designrush },
];

export const about_industries = [
  "SaaS and Software",
  "B2B and Enterprise",
  "eCommerce",
  "Legal and Law Firms",
  "Healthcare",
  "Education and EdTech",
  "iGaming and Casino",
  "AI and Technology",
  "Marketing Agencies",
];

export const cases_covers = [
  "Organic Traffic Growth",
  "The Strategy We Used",
  "Keyword Ranking Movement",
  "AI Search Visibility",
  "Timeline to Results",
];

export const cases_results = [
  { ...reviews.tim, headline: "50+ New Top-10 Keywords", quote: "In just six months, they helped us rank for keywords on our highest-converting pages — exactly where we needed visibility.", role: "VP Marketing, IT Staffing Company" },
  { ...reviews.monika, headline: "100 → 6,800 Monthly Visitors", quote: "Over 8 months, DR grew from 1 to 41, keywords in top-10 went from 20 to 983. Professional, transparent, and results-driven throughout.", role: "Outreach Manager, HR Company" },
  { ...reviews.gaming, headline: "5X Increase In Organic Traffic", quote: "Keyword rankings skyrocketed and traffic increased 5X. They kept us updated regularly and addressed every concern promptly." },
  { ...reviews.shailendra, headline: "3X Increase In Organic Traffic", quote: "Renu taught our whole team the process and helped us 3X organic traffic for our clients. Her eagerness to help is impressive." },
];

export const cases_faqs = [
  { q: "What does “real” mean in these case studies?", a: "Real means these are actual client campaigns with verified traffic and keyword data. You can see the starting point, strategy, and real results. Every case study shows exactly what was done and how it affected the website’s performance." },
  { q: "How do you check the results in these case studies?", a: "We use SEO tools like Ahrefs, SEMrush, and Google Search Console to track traffic, keyword rankings, and backlinks. This allows us to show before and after results so you can trust that the numbers are accurate and real." },
  { q: "Will my business get the same results?", a: "Not exactly. Results depend on competition, website strength, and content quality. The case studies show that good link building can help improve traffic and rankings, but every website is unique, so results will vary." },
  { q: "How long does it take to see results?", a: "Most campaigns show results in 3 to 6 months, but it can take longer for very competitive industries. Link building is a long-term strategy, and the impact grows over time as your website gains authority." },
  { q: "What kinds of links are built? Are they safe?", a: "All links are editorial and from high-authority websites. They are safe for SEO and follow Google’s guidelines. These links help improve your rankings without risking penalties from search engines." },
  { q: "Why do some campaigns get more growth than others?", a: "Every website starts at a different level. Some have strong content or authority, while others need more work first. The case studies show why results vary and how strategy changes based on the website’s starting point." },
  { q: "How do you choose which pages and keywords to target?", a: "We pick pages and keywords based on search volume, competition, and conversion potential. We focus on pages that can get the most traffic and leads so the links deliver the highest value for your business." },
];

export const lb_stats = [
  { value: 5000, suffix: "+", label: "Links Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 11, suffix: "+", label: "Years of experience" },
];

export const lb_strategies = [
  { icon: Brain, title: "Authority Citations for AI Visibility", body: "We prioritize backlinks from trusted publications that AI search platforms like ChatGPT, Perplexity, and Gemini, reference as reliable sources. This improves your brand’s chances of appearing when buyers use AI search systems to explore products, services, and vendors." },
  { icon: Link2, title: "Link Insertions", body: "We place contextual links inside existing, high-performing content that already ranks and attracts traffic. This allows your pages to benefit from established authority and demand, accelerating rankings without waiting months for new content to gain traction." },
  { icon: FileEdit, title: "Niche Edit Link Building", body: "We don’t place links in loosely related articles. Each niche edit is secured within tightly aligned content to reinforce topical relevance and avoid diluted link equity." },
  { icon: PenLine, title: "Guest Posting", body: "Unlike mass guest posting, our approach prioritizes editorial integrity. We publish guest content on trusted publications with real audiences, avoiding networks that dilute authority and put rankings at risk." },
  { icon: Newspaper, title: "Brand Mentions", body: "We secure contextual brand mentions within authoritative articles and listicles, building referral traffic and brand authority recognized across evolving search environments." },
];

export const lb_vanity = [
  "Domain Authority (DA) or Domain Rating (DR) alone",
  "Irrelevant referral traffic",
  "Raw backlink volume",
  "Short-term ranking spikes",
];

export const lb_kpis = [
  "Organic traffic growth on conversion-focused pages",
  "Keyword movement for BOFU and commercial queries",
  "Leads, demo requests, or sales from organic traffic",
  "Assisted conversions influenced by backlinks",
  "Overall organic visibility across priority pages",
];

export const lb_process = [
  { title: "Audit & Goal Alignment", body: "We audit your existing backlink profile and align on target pages, anchor strategy, DR, and traffic benchmarks, and your overall SEO goals." },
  { title: "Website Research & Shortlisting", body: "Using competitor backlink analysis and niche research, we curate a list of relevant, high-quality websites that meet your criteria and share them in a transparent tracking sheet." },
  { title: "Website Approval", body: "We move forward only with the domains you approve — no substitutions, no exceptions." },
  { title: "Link Placement & Final Review", body: "Links are placed contextually within approved content, and shared with you for final review before going live." },
  { title: "Links Go Live & Performance Tracking", body: "Once approved, links are published and tracked with clean reporting, focused on visibility, traffic, and commercial impact." },
];

export const lb_impact = [
  "Growth in organic traffic to high-intent pages",
  "Improved traditional search and AI visibility for commercial keywords",
  "Leads and conversions attributed to organic search",
  "Sustainable ranking improvements in competitive SERPs",
];

export const lb_faqs = [
  { q: "Are your link building services white-hat?", a: "Yes. All links are editorial, contextual, and comply fully with Google’s ethical SEO guidelines. We don’t use PBNs, link marketplaces, or manipulative link schemes." },
  { q: "Do you guarantee rankings?", a: "We don’t guarantee rankings. Instead, we guarantee quality, transparency, and link building focused on measurable organic growth — not short-term spikes." },
  { q: "Does your link building service support AI search visibility?", a: "Yes. We build high-authority, editorial backlinks from trusted sources that search engines and AI systems rely on. This strengthens your brand’s eligibility and visibility when buyers research solutions through AI search systems like ChatGPT, Perplexity, and Gemini, without shortcuts or manipulation." },
  { q: "How do you report backlinks?", a: "We provide clear backlink reporting and tracking, including live URLs, anchor text, placement status, and relevant traffic signals." },
  { q: "Can I approve every website before link placement?", a: "Absolutely. Every website is shared for approval before outreach, and no backlink goes live without your sign-off. And if a link is removed within one year, we replace it at no additional cost." },
  { q: "Who are these backlink building services best suited for?", a: "Our link building services are best suited for B2B brands, SaaS companies, and agencies targeting competitive markets with long-term SEO goals." },
  { q: "How is pricing structured for your link building services?", a: "Our pricing is pay-per-link, tailored to your goals. You pay only for live, approved backlinks, billed at the end of each month." },
];

export const featured_listings = [
  { name: "Clutch", note: "B2B REVIEWS · NO.1 RANKED", href: links.clutch },
  { name: "GoodFirms", note: "AGENCY DIRECTORY", href: links.goodfirms },
  { name: "The Manifest", note: "AGENCY DIRECTORY", href: links.manifest },
  { name: "DesignRush", note: "AGENCY RANKINGS", href: links.designrush },
  { name: "Othlist", note: "AGENCY DIRECTORY", href: links.othlist },
];

export const featured_stats = [
  { value: 5000, suffix: "+", label: "Editorial Backlinks" },
  { value: 150, suffix: "+", label: "Brands Across the World" },
  { value: 11, suffix: "+", label: "Years of Combined SEO Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction Rate" },
  { value: 85, suffix: "%+", label: "Client Retention Rate" },
];

export const contact_inquiries = [
  { icon: MessageCircle, label: "Sales Inquiries", text: "Want to grow with SEO or link building? Fill out the form to get started." },
  { icon: HeartHandshake, label: "General Questions", text: "Need more info? We’re happy to help." },
  { icon: Handshake, label: "Partnerships", text: "Open to collaborations? Let’s explore opportunities." },
];

export const contact_why = [
  { icon: ShieldCheck, title: "Google-Safe Tactics", body: "100% white-hat link building." },
  { icon: Link2, title: "Quality Backlinks", body: "Niche-relevant, high-authority sites." },
  { icon: SlidersHorizontal, title: "Custom Strategies", body: "Tailored to your SEO goals." },
  { icon: Gauge, title: "Clear Reporting", body: "Full transparency, real results." },
];

export const talk_happens = [
  { icon: ClipboardList, title: "Site & Strategy Review", body: "We start by reviewing your site and backlink profile to identify gaps, missed opportunities, and issues. You’ll get clear, actionable insights to help you build a stronger SEO foundation." },
  { icon: Route, title: "Custom Link Plan", body: "We create a tailored link-building strategy based on your goals, niche, and competitors including link types, target pages, and outreach methods designed for long-term SEO results." },
  { icon: LineChart, title: "Results Tracking & Optimization", body: "After links go live, we track performance and provide clear reports. Based on the results, we refine your strategy to keep improving rankings and driving sustainable SEO growth." },
  { icon: Headset, title: "Ongoing Support & Delivery", body: "Once approved, we handle outreach, placements, and content creation. You’ll get transparent timelines, full reporting, and a dedicated team to support you throughout the process." },
];

export const talk_why = [
  { icon: ShieldCheck, title: "Google-Safe Tactics", body: "100% white-hat link building." },
  { icon: Link2, title: "Quality Backlinks", body: "Niche-relevant, high-authority sites." },
  { icon: SlidersHorizontal, title: "Custom Strategies", body: "Tailored to your SEO goals." },
  { icon: Gauge, title: "Clear Reporting", body: "Full transparency, real results." },
];

export const talk_cases = [
  {
    title: "Resume Building Software",
    image: "/images/pages/call-1.png",
    alt: "Ahrefs dashboard for the resume building software campaign",
    facts: [
      ["Links Built", "250+"],
      ["Timeframe", "14 months (ongoing)"],
      ["Results", "700K+ traffic, 35K+ new keywords in #10"],
    ],
  },
  {
    title: "Amazon Management Software",
    image: "/images/pages/call-2.png",
    alt: "Ahrefs dashboard for the Amazon management software campaign",
    facts: [
      ["Links Built", "35+"],
      ["Timeframe", "4 months"],
      ["Results", "100% Increase in organic traffic"],
    ],
  },
];

export const talk_faqs = [
  { q: "What happens on the call?", a: "We’ll take a quick look at your website, backlink profile, and SEO goals. Then we’ll walk you through what kind of links you actually need to improve rankings, no sales pitch, just real advice." },
  { q: "Is the call really free?", a: "Yes, 100% free. This is a value-first call to help you understand your current SEO situation and how we can help, no commitment required." },
  { q: "Who will I be speaking with?", a: "You’ll speak directly with Renu Sharma, Co-founder of Tanot Solutions, not a salesperson. Her goal is to give you honest, actionable SEO insights, whether you decide to work with us or not." },
  { q: "How long does the call take?", a: "Most calls take about 20–30 minutes, depending on your site and goals. If you need more time, we’re happy to dig deeper, we’re here to help." },
  { q: "Do I need to prepare anything?", a: "No prep needed. Just share your website URL when booking. If you have specific goals or challenges in mind, feel free to mention them, but we’ll guide everything." },
  { q: "What kind of websites do you work with?", a: "We work with SaaS, agencies, ecommerce, B2B, and content-driven businesses. If you’re serious about growing your organic traffic, we’ll likely be a good fit." },
  { q: "Will you try to sell me something on the call?", a: "No hard selling ever. If we think we can help, we’ll explain how. But the call is about giving you clarity and honest recommendations first." },
  { q: "What happens after the call?", a: "If you’re interested in working with us, we’ll send a custom proposal. If not, you’ll still leave with real insights and a better understanding of your link-building needs." },
  { q: "Do you guarantee results?", a: "We don’t promise rankings, no one ethical can. But we do guarantee transparency, safe practices, and a clear plan tailored to your goals and timeline." },
  { q: "Can I reschedule or cancel if needed?", a: "Of course. You’ll receive a confirmation email with reschedule and cancellation options. We respect your time and appreciate the same in return." },
];

export const lb_proof = [1, 2, 3, 4, 5].map((n) => ({ src: `/images/proof/proof-${n}.png`, alt: `Client feedback screenshot ${n} of 5` }));
