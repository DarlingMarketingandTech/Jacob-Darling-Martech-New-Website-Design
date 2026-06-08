export type ProblemCard = {
  code: string;
  title: string;
  description: string;
  cost: string;
};

export type Breakdown = {
  id: string;
  tag: string;
  title: string;
  description: string;
  points: string[];
};

export const problemCards: ProblemCard[] = [
  {
    code: "LEAK-01",
    title: "Website is not converting",
    description: "People visit, but the offer, proof, and next step do not make action obvious.",
    cost: "Intent leaks before it becomes a lead.",
  },
  {
    code: "LEAK-02",
    title: "Follow-up depends on memory",
    description: "Leads arrive, but routing, reminders, ownership, and timing are still manual.",
    cost: "Good leads go quiet.",
  },
  {
    code: "LEAK-03",
    title: "Tools do not connect",
    description:
      "The website, CRM, forms, inbox, automations, and reports each tell a different story.",
    cost: "The team works around the system instead of through it.",
  },
  {
    code: "LEAK-04",
    title: "Visibility is too weak",
    description:
      "The business is stronger than what search, local pages, and AI systems can understand.",
    cost: "Good work stays hard to find.",
  },
];

export const breakdowns: Breakdown[] = [
  {
    id: "conversion-gap",
    tag: "Conversion gap",
    title: "Not more traffic. Better conversion.",
    description:
      "The website may look polished, but if the offer is unclear and the CTA is buried, qualified visitors leave without acting.",
    points: [
      "Offer clarity arrives too late",
      "Proof exists but is not decision-ready",
      "The next step is generic or hidden",
    ],
  },
  {
    id: "follow-up-gap",
    tag: "Follow-up gap",
    title: "Not more leads. Better follow-up.",
    description:
      "When ownership, timing, and reminders depend on memory, speed drops and lead quality decays before sales conversations start.",
    points: [
      "Routing rules are unclear",
      "Follow-up timing changes by person",
      "CRM activity and inbox activity do not match",
    ],
  },
  {
    id: "system-gap",
    tag: "System gap",
    title: "Not more tools. A system that connects.",
    description:
      "Disconnected software creates rework, blind spots, and reporting noise. The real fix is the connective layer underneath the stack.",
    points: [
      "Tools are deployed but not orchestrated",
      "Manual work blocks consistency",
      "Reporting does not guide the next decision",
    ],
  },
];
