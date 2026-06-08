export type SeoPage = {
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  image?: string;
  noIndex?: boolean;
};

export const seoPages: Record<string, SeoPage> = {
  home: {
    path: "/",
    title: "Darling Martech | Marketing Systems, Websites & AI Automation",
    description:
      "Darling Martech helps growing businesses connect strategy, websites, CRM, automation, AI, visibility, and reporting into one measurable growth system.",
  },
  services: {
    path: "/services",
    title: "Services Built Around the Growth Bottleneck | Darling Martech",
    description:
      "Explore Darling Martech services across strategy, website conversion, CRM, AI automation, visibility, and reporting, built around the bottleneck that matters most.",
  },
  websitesSystems: {
    path: "/websites-systems",
    title: "Website Conversion Systems for Growing Businesses | Darling Martech",
    description:
      "Website strategy, page architecture, conversion copy, proof structure, and lead capture systems for businesses whose websites need to create more qualified action.",
  },
  aiAutomation: {
    path: "/ai-automation",
    title: "CRM, AI Automation & Follow-Up Systems | Darling Martech",
    description:
      "CRM setup, lifecycle automation, AI-assisted workflows, lead routing, reminders, and follow-up systems that reduce manual work and improve consistency.",
  },
  growthStrategy: {
    path: "/growth-strategy",
    title: "Growth Strategy & Operator Support | Darling Martech",
    description:
      "Strategic marketing direction, offer clarity, roadmap planning, reporting rhythm, and operator support for businesses that need execution tied to strategy.",
  },
  tools: {
    path: "/tools",
    title: "Diagnostics for Website, CRM, Automation & Visibility Gaps | Darling Martech",
    description:
      "Start with the diagnostic that matches the bottleneck: website conversion, follow-up, visibility, automation ROI, or growth system planning.",
  },
  proof: {
    path: "/proof",
    title: "Proof That Connected Marketing Systems Work | Darling Martech",
    description:
      "Selected proof from Darling Martech projects showing measurable outcomes across website conversion, automation, visibility, follow-up, and reporting.",
  },
  resources: {
    path: "/resources",
    title: "Marketing Systems Resources & Guides | Darling Martech",
    description:
      "Practical resources, guides, frameworks, and checklists for improving website conversion, CRM follow-up, automation, visibility, and growth systems.",
    noIndex: true,
  },
  about: {
    path: "/about",
    title: "About Jacob Darling & Darling Martech",
    description:
      "Learn about Jacob Darling, the operator behind Darling Martech, and the direct, systems-first approach to connecting marketing strategy and implementation.",
  },
  contact: {
    path: "/contact",
    title: "Book a Diagnostic Call | Darling Martech",
    description:
      "Book a diagnostic call with Darling Martech to identify the bottleneck across your website, CRM, automation, visibility, reporting, or growth system.",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | Darling Martech",
    description: "Privacy policy for Darling Martech.",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use | Darling Martech",
    description: "Terms of use for Darling Martech.",
  },
};
