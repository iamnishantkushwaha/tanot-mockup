// Client reviews and result headlines, copied from tanotsolutions.com (reviews, case studies, featured-in, lets-talk).
import type { TestimonialData } from "@/components/sections/proof";

const av = (f: string) => `/images/avatars/${f}`;

export const reviews: Record<string, TestimonialData> = {
  alex: {
    quote:
      "Working with Tanot Solutions proved to be a very positive experience. Being able to collaborate and work with leading experts in online marketing and business development, learn from others and share your expertise is definitely a step towards making your online business a successful venture.",
    name: "Alex Botvynko",
    role: "Marketing Manager (marketing automation software)",
    avatar: av("alex-botvynko.webp"),
  },
  shailendra: {
    quote:
      "Renu from Tanot Solutions has helped us build high-quality links for our clients. She taught us the whole process and helped our team increase their productivity by 60%. We were able to 3x the organic traffic of our clients using her high-quality links. Her eagerness to help is impressive.",
    name: "Shailendra Kadulkar",
    role: "Founder, Movinnza",
    avatar: av("shailendra-kadulkar.webp"),
  },
  tim: {
    quote:
      "Since starting work with Tanot Solutions, we’ve seen a shift in the right direction. Comparing our last six months of data, we’ve started ranking for 50+ new keywords in top 10 positions for our highest-converting pages for which we weren’t visible before, which is exactly where we wanted visibility.",
    name: "Tim Welsch",
    role: "VP, Marketing IT Staffing Company",
    avatar: av("tim-welsch.jpg"),
  },
  sandeep: {
    quote:
      "After we started link building with Tanot Solutions, they helped our CRM’s high-converting product page rank higher, moving from #32 to #9, for keywords such as ‘CRM’ and ‘CRM software’. Keyword rankings significantly improved for other terms, such as marketing automation (#12) and HubSpot alternatives (#1), which also became our most profitable keywords. Not just rankings, but we also saw an impressive 80% increase in traffic and an equally exceptional 80% increase in the total number of sign-ups every day.",
    name: "Sandeep Das",
    role: "Marketing Manager, CRM SaaS Company",
    avatar: av("sandeep-das.webp"),
  },
  monika: {
    quote:
      "We partnered with Tanot Solutions to build backlinks for our new website, and the results have been phenomenal so far. Over the past 8 months, our DR has increased from 1 to 41, organic traffic increased from 100 to 6,800 monthly visitors, and the number of keywords we rank for has expanded from 900 to 6,500. Most impressively, the number of keywords we rank in the top 10 grew from 20 to 983. Tanot’s team was professional, transparent, and results-driven throughout the entire campaign. Their strategic approach to link building directly contributed to our quick and successful SEO growth. We highly recommend them to any business looking to scale their organic presence.",
    name: "Monika Kalinova",
    role: "Outreach Manager, HR Company",
    avatar: av("monika-kalinova.jpg"),
  },
  gabriel: {
    quote:
      "Our goal with Link Building was to have exposure in relevant websites from our niche, a giant challenge, since that kind of platform rarely answers emails. With Tanot Solutions customized niche edit link strategy, we could mention our CRM brand in one of the major sites of our niche, with DR 89 and 9 Keywords among the first 10 positions, ensuring a potential traffic of 530 from just one link. If you want to build links and have exposure in relevant platforms and want to improve your rankings, Tanot Solution is the best.",
    name: "Gabriel Motta",
    role: "Marketing Manager, Kommo",
    avatar: av("gabriel-motta.jpeg"),
  },
  gaming: {
    quote:
      "I had the pleasure of partnering with Tanot Solutions for the last one year, and I can confidently say that they are exceptional! Our website’s keyword rankings skyrocketed from 2000 keywords to an impressive 6000+ keywords. It helped us to increase our traffic by 5X. They kept us updated regularly, providing progress reports and addressed any questions or concerns promptly. Their friendly demeanor, positive attitude, and professionalism made our partnership enjoyable and productive. We are still working with Tanot Solutions and looking forward to a long term partnership with them. I highly recommend them to anyone seeking a reliable, skilled, and dedicated partner for their SEO needs.",
    name: "Founder",
    role: "Gaming Company",
    avatar: av("gaming-founder.png"),
  },
  michael: {
    quote:
      "We’ve been impressed by their ability to consistently build high-quality backlinks, which are very challenging to achieve. We work with highly reputed brands, where quality guidelines are stringent and difficult for many agencies to meet. However, Tanot Solutions consistently meets these standards. We track each link using quality scores. Several SEO tools provide link quality scores that estimate the authority and relevance of linking websites. Tracking the average link quality score over time shows that they are acquiring backlinks from high-authority, relevant sources. They have always delivered on time and respond quickly to our changing requirements month to month.",
    name: "Michael Dunlop",
    role: "Director of LinkBuilder.io",
    avatar: av("michael-dunlop.webp"),
  },
  anish: {
    quote:
      "I’ve been working with Tanot Solutions for backlink support for my clients, and it’s been a really good experience. Renu Sharma is super easy to work with, clear in her communication, and actually cares about getting results, not just delivering links. What I really liked is that the links we got were relevant, high quality, and started moving the needle on rankings and traffic in a very natural way. On top of that, they understand how SEO is changing with AI search, so they also keep an eye on things like ChatGPT answers and Google’s AI Overviews, which is a big plus for my clients and me. If you’re looking for someone reliable to handle link building so you can focus on strategy and content, I genuinely recommend Renu and the Tanot Solutions team. It feels less like working with a vendor and more like having an extended part of your own team.",
    name: "Anish Singh Walia",
    role: "Tech Lead @DigitalOcean and Content Strategist",
    avatar: av("anish-singh-walia.jpeg"),
  },
  marko: {
    quote:
      "Since we started working with Tanot Solutions on our link-building efforts, we’ve seen steady increases in our organic traffic MoM over the past 6 months. I can also honestly say that Renu and the team are very responsive and punctual, something I really appreciate from our partners.",
    name: "Marko Spasic",
    role: "Marketing Manager, Hosting company",
    avatar: av("marko-spasic.jpeg"),
  },
  rajat: {
    quote:
      "Tanot Solutions helped our client increase their site traffic by 60% in one year, resulting in a 30% increase in leads. The reliable team consistently delivered on time and was always available to attend to queries and concerns. Their strong understanding of the client’s requirements stood out.",
    name: "Rajat Garg",
    role: "CEO, Digital Marketing Agency",
    avatar: av("rajat-garg.jpeg"),
  },
};
