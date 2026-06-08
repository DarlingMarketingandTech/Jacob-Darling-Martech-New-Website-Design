export type CTAAudience =
  | "unsure"
  | "website"
  | "automation"
  | "visibility"
  | "strategy"
  | "ready";

export type CTAIntent = "primary" | "secondary" | "soft";

export type CTA = {
  label: string;
  href: string;
  intent: CTAIntent;
  audience?: CTAAudience;
};

export const globalCtas = {
  findGrowthLeak: {
    label: "Find the Growth Leak",
    href: "/tools",
    intent: "primary",
  } satisfies CTA,
  bookDiagnosticCall: {
    label: "Book a Diagnostic Call",
    href: "/contact",
    intent: "primary",
  } satisfies CTA,
  buildGrowthRoadmap: {
    label: "Build My Growth Roadmap",
    href: "/contact",
    intent: "primary",
  } satisfies CTA,
  seeProofInAction: {
    label: "See Proof in Action",
    href: "/proof",
    intent: "secondary",
  } satisfies CTA,
  exploreOperatorLayer: {
    label: "Explore the Operator Layer",
    href: "/services",
    intent: "secondary",
  } satisfies CTA,
  viewWork: {
    label: "View the Work",
    href: "/proof",
    intent: "secondary",
  } satisfies CTA,
  chooseStartingPoint: {
    label: "Choose My Starting Point",
    href: "/tools",
    intent: "secondary",
  } satisfies CTA,
};

export const segmentCtas: Record<CTAAudience, { primary: CTA; secondary: CTA }> = {
  unsure: {
    primary: {
      label: "Find the Growth Leak",
      href: "/tools",
      intent: "primary",
      audience: "unsure",
    },
    secondary: {
      label: "See Proof in Action",
      href: "/proof",
      intent: "secondary",
      audience: "unsure",
    },
  },
  website: {
    primary: {
      label: "Get a Website Conversion Review",
      href: "/tools",
      intent: "primary",
      audience: "website",
    },
    secondary: {
      label: "View Website Work",
      href: "/proof",
      intent: "secondary",
      audience: "website",
    },
  },
  automation: {
    primary: {
      label: "Map My Follow-Up System",
      href: "/tools",
      intent: "primary",
      audience: "automation",
    },
    secondary: {
      label: "See Automation Proof",
      href: "/proof",
      intent: "secondary",
      audience: "automation",
    },
  },
  visibility: {
    primary: {
      label: "Check My Local Visibility",
      href: "/tools",
      intent: "primary",
      audience: "visibility",
    },
    secondary: {
      label: "View Visibility Wins",
      href: "/proof",
      intent: "secondary",
      audience: "visibility",
    },
  },
  strategy: {
    primary: {
      label: "Build My Growth Roadmap",
      href: "/contact",
      intent: "primary",
      audience: "strategy",
    },
    secondary: {
      label: "Find the Growth Leak",
      href: "/tools",
      intent: "secondary",
      audience: "strategy",
    },
  },
  ready: {
    primary: {
      label: "Book a Diagnostic Call",
      href: "/contact",
      intent: "primary",
      audience: "ready",
    },
    secondary: {
      label: "See the Process",
      href: "/services",
      intent: "secondary",
      audience: "ready",
    },
  },
};
