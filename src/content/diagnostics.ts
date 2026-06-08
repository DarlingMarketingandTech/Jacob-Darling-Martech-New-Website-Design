export type DiagnosticTool = {
  id: string;
  label: string;
  shortLabel?: string;
  audience: string;
  problem: string;
  description: string;
  outputs: string[];
  ctaLabel: string;
  href: string;
  relatedService?: string;
};

export const diagnostics: DiagnosticTool[] = [
  {
    id: "growth-leak-finder",
    label: "Growth Leak Finder",
    shortLabel: "Growth Leak",
    audience: "Owners who know something is off but can't see the bottleneck yet",
    problem: "Not sure what is broken",
    description:
      "For owners who know growth feels harder than it should, but are not sure whether the issue is the website, follow-up, visibility, or measurement.",
    outputs: ["Bottleneck snapshot", "Priority fix list", "Recommended next step"],
    ctaLabel: "Start the Diagnostic",
    href: "/tools",
    relatedService: "Foundation",
  },
  {
    id: "website-conversion-review",
    label: "Website Conversion Review",
    audience: "Businesses getting traffic but not enough calls, bookings, or qualified leads",
    problem: "Website is not converting",
    description:
      "For businesses whose website gets traffic but does not create enough calls, bookings, inquiries, or qualified leads.",
    outputs: ["Clarity review", "Proof and CTA gaps", "Conversion priority list"],
    ctaLabel: "Review My Website",
    href: "/tools",
    relatedService: "Build",
  },
  {
    id: "follow-up-system-map",
    label: "Follow-Up System Map",
    audience: "Teams with leads coming in but manual follow-up and weak ownership",
    problem: "Follow-up is inconsistent",
    description:
      "For teams losing time or leads because follow-up still depends on inboxes, memory, manual reminders, or disconnected tools.",
    outputs: ["Lead flow map", "Follow-up gap list", "Automation opportunities"],
    ctaLabel: "Map My Follow-Up",
    href: "/tools",
    relatedService: "Scale",
  },
  {
    id: "local-ai-visibility-scan",
    label: "Local + AI Visibility Scan",
    audience: "Businesses that are credible in real life but hard to find in search",
    problem: "Visibility is weak",
    description:
      "For businesses that need search engines, local buyers, and AI systems to understand what they do and why they are credible.",
    outputs: [
      "Visibility snapshot",
      "Local trust gaps",
      "Content structure recommendations",
    ],
    ctaLabel: "Check Visibility",
    href: "/tools",
    relatedService: "Grow",
  },
  {
    id: "automation-roi-estimate",
    label: "Automation ROI Estimate",
    audience: "Businesses carrying too much manual work and delayed response time",
    problem: "Manual work is slowing growth",
    description:
      "For businesses that want to understand how much time and revenue may be lost to manual handoffs, delayed replies, and inconsistent follow-up.",
    outputs: ["Time-savings estimate", "Revenue opportunity range", "Workflow priority list"],
    ctaLabel: "Estimate ROI",
    href: "/tools",
    relatedService: "Scale",
  },
  {
    id: "revenue-system-roadmap",
    label: "Revenue System Roadmap",
    audience: "Serious prospects who need execution priorities in sequence",
    problem: "Need a roadmap",
    description:
      "For serious prospects who need a sequenced plan across website, CRM, automation, visibility, AI, and reporting.",
    outputs: ["System roadmap", "Build priorities", "Next-phase recommendation"],
    ctaLabel: "Build My Roadmap",
    href: "/contact",
    relatedService: "Foundation",
  },
];

export const diagnosticsByProblem = [
  "Not sure what is broken",
  "Website is not converting",
  "Follow-up is inconsistent",
  "Visibility is weak",
  "Manual work is slowing growth",
  "Need a roadmap",
].map((problem) => ({
  problem,
  tools: diagnostics.filter((tool) => tool.problem === problem),
}));

