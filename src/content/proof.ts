import { ShoppingCart, UserPlus, CalendarCheck, HeartPulse, type LucideIcon } from "lucide-react";

export type ProofWin = {
  label: string;
  detail: string;
  who: string;
  Icon: LucideIcon;
};

export type ProofItem = {
  problem: string;
  work: string;
  result: string;
  relatedService: string;
  ctaLabel: string;
  ctaHref: string;
};

export const wins: ProofWin[] = [
  {
    label: "Conversion uplift",
    detail: "Website and offer clarity connected to measurable order growth.",
    who: "Ecommerce",
    Icon: ShoppingCart,
  },
  {
    label: "Lead quality improvement",
    detail: "Clearer positioning and automated follow-up producing stronger qualified leads.",
    who: "Professional Services",
    Icon: UserPlus,
  },
  {
    label: "Booking growth",
    detail: "Streamlined booking paths and CRM follow-up reducing friction to first appointment.",
    who: "Local Services",
    Icon: CalendarCheck,
  },
  {
    label: "Patient acquisition",
    detail: "Connected visibility, website, and intake systems supporting consistent new-patient growth.",
    who: "Healthcare",
    Icon: HeartPulse,
  },
];

export const proofItems: ProofItem[] = [
  {
    problem: "Website traffic with low inquiry conversion",
    work: "Rebuilt page hierarchy, proof blocks, and CTA structure",
    result: "+40% order conversion",
    relatedService: "Build",
    ctaLabel: "Get a Website Conversion Review",
    ctaHref: "/tools",
  },
  {
    problem: "Lead follow-up depended on inbox memory",
    work: "Mapped lifecycle and implemented CRM routing with automated reminders",
    result: "+212% qualified leads",
    relatedService: "Scale",
    ctaLabel: "Map My Follow-Up System",
    ctaHref: "/tools",
  },
  {
    problem: "Weak local visibility and inconsistent booking flow",
    work: "Connected local trust signals, page intent, and booking follow-up",
    result: "+90% online bookings",
    relatedService: "Grow",
    ctaLabel: "Check My Local Visibility",
    ctaHref: "/tools",
  },
  {
    problem: "Disconnected reporting across campaigns and operations",
    work: "Aligned attribution, dashboards, and weekly operating rhythm",
    result: "+45% patient growth",
    relatedService: "Foundation + Grow",
    ctaLabel: "Build My Growth Roadmap",
    ctaHref: "/contact",
  },
];
