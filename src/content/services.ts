import { type CTA, segmentCtas } from "@/content/ctas";

export type ServiceStage = "Foundation" | "Build" | "Scale" | "Grow";

export type ServicePath = {
  id: string;
  stage: ServiceStage;
  title: string;
  problem: string;
  outcome: string;
  includes: string[];
  bestFit: string;
  href: string;
  relatedAsset: { label: string; href: string };
  primaryCta: CTA;
  secondaryCta?: CTA;
};

export const servicePaths: ServicePath[] = [
  {
    id: "foundation",
    stage: "Foundation",
    title: "Diagnose the bottleneck and set direction",
    problem: "You know growth is leaking, but the root cause is unclear.",
    outcome: "A prioritized roadmap built around the highest-leverage fix first.",
    includes: [
      "Growth system diagnosis",
      "Positioning and message clarity",
      "Prioritized roadmap",
    ],
    bestFit: "Owners who need clarity before committing to builds or campaigns",
    href: "/services",
    relatedAsset: { label: "Growth Leak Finder", href: "/tools" },
    primaryCta: segmentCtas.unsure.primary,
    secondaryCta: segmentCtas.unsure.secondary,
  },
  {
    id: "build",
    stage: "Build",
    title: "Turn the website into a conversion path",
    problem: "Traffic is arriving, but proof, structure, and CTAs are not converting intent.",
    outcome: "A clearer path from attention to action tied to lead capture.",
    includes: ["Page architecture", "Conversion copy", "Proof and CTA structure"],
    bestFit: "Businesses with a site that looks fine but underperforms",
    href: "/websites-systems",
    relatedAsset: { label: "View Website Work", href: "/proof" },
    primaryCta: segmentCtas.website.primary,
    secondaryCta: segmentCtas.website.secondary,
  },
  {
    id: "scale",
    stage: "Scale",
    title: "Connect CRM, follow-up, automation, and AI workflows",
    problem: "Leads are arriving, but follow-up depends on memory and manual handoffs.",
    outcome: "A connected follow-up system that is easier to run and measure.",
    includes: [
      "CRM and lifecycle setup",
      "Automated follow-up",
      "AI-assisted operations",
    ],
    bestFit: "Teams dealing with operational drag and inconsistent handoffs",
    href: "/ai-automation",
    relatedAsset: { label: "See Automation Proof", href: "/proof" },
    primaryCta: segmentCtas.automation.primary,
    secondaryCta: segmentCtas.automation.secondary,
  },
  {
    id: "grow",
    stage: "Grow",
    title: "Improve visibility and compounding measurement",
    problem: "Good work is hard to find and reporting does not guide decisions.",
    outcome: "Better visibility, cleaner demand support, and reporting that drives action.",
    includes: [
      "Local and AI search signals",
      "Content and demand support",
      "Attribution and reporting",
    ],
    bestFit: "Founders who want strategy and execution to stay connected over time",
    href: "/growth-strategy",
    relatedAsset: { label: "View Visibility Wins", href: "/proof" },
    primaryCta: segmentCtas.visibility.primary,
    secondaryCta: segmentCtas.visibility.secondary,
  },
];
