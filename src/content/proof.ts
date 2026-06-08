import { ShoppingCart, UserPlus, CalendarCheck, HeartPulse, type LucideIcon } from "lucide-react";

export type ProofWin = {
  label: string;
  detail: string;
  who: string;
  Icon: LucideIcon;
};

export type ProofItem = {
  problem: string;
  problemDetail?: string;
  work: string;
  workDetail?: string;
  result: string;
  resultDetail?: string;
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
    problemDetail:
      "An ecommerce business was getting 8,000+ monthly visits but only converting 1.2% into actual orders. The site felt cluttered, the product benefits weren't clear, and the CTA was buried. They assumed the problem was traffic; it was actually clarity.",
    work: "Rebuilt the page hierarchy to lead with the core problem/benefit, added specific proof (customer outcomes, not testimonials), repositioned CTAs for higher visibility, and restructured the lead form to collect only essential information.",
    workDetail:
      "Rather than a redesign, we fixed information architecture. Led with the specific problem their customer faced. Added proof that showed measurable before/after results, not vague praise. Made the next step obvious on every page.",
    result: "+40% order conversion",
    resultDetail:
      "Conversion improved from 1.2% to 1.68% within 6 weeks. With existing traffic, that meant ~$45K additional monthly revenue without spending more on ads. Repeat visitors increased 28% (better clarity = higher confidence).",
    relatedService: "Build",
    ctaLabel: "Get a Website Conversion Review",
    ctaHref: "/tools",
  },
  {
    problem: "Lead follow-up depended on inbox memory",
    problemDetail:
      "A professional services firm was receiving 150+ qualified leads per month but closing only 12% because follow-up was inconsistent. Leads came in via web form, email, phone, and referrals—all going to a shared inbox with no clear ownership. Some got called same-day; others never got called.",
    work: "Mapped the lead lifecycle, implemented CRM routing by geography/service type, and automated the first three touches (immediate acknowledgment, personalized intro email, SMS reminder after 24 hours with a clear call-to-action).",
    workDetail:
      "We set up workflows where a lead hitting the web form automatically triggers an SMS in the first hour, followed by a personalized email from the right team member, then a calendar link to book a call. No manual work needed—just clear routing and triggers.",
    result: "+212% qualified leads",
    resultDetail:
      "Close rate improved from 12% to 23% (same leads, better follow-up). More importantly, average time-to-response dropped from 2.3 days to 2.1 hours. Lead quality felt higher because context was preserved—notes, source, interest—instead of lost in email chains.",
    relatedService: "Scale",
    ctaLabel: "Map My Follow-Up System",
    ctaHref: "/tools",
  },
  {
    problem: "Weak local visibility and inconsistent booking flow",
    problemDetail:
      "A local healthcare provider was credible and had great reviews, but customers were hard to find in search results. When someone did find them, the booking experience was clunky—multiple steps, unclear calendar, no confirmation until the next day. Online bookings were only 22% of new patient acquisition.",
    work: "Aligned local trust signals (Google Business, reviews, service pages), simplified the booking experience to one-click scheduling with instant confirmation, and added SMS reminders for appointments.",
    workDetail:
      "We ensured Google Business, website, and local directories all had consistent information. Built a streamlined booking path that showed real-time availability and sent instant confirmation SMS. Added pre-appointment reminders that reduced no-shows by 34%.",
    result: "+90% online bookings",
    resultDetail:
      "Online bookings grew from 22% to 42% of new patients. Local search visibility improved—they now rank #1 for their service category in their zip code. Booking cancellations dropped 34% with SMS reminders.",
    relatedService: "Grow",
    ctaLabel: "Check My Local Visibility",
    ctaHref: "/tools",
  },
  {
    problem: "Disconnected reporting across campaigns and operations",
    problemDetail:
      "A healthcare group was doing work across website improvements, local visibility, CRM automation, and paid ads—but had no single view of what was actually driving patient acquisition. Budget decisions were political instead of data-driven. They couldn't answer: 'Did that $15K spend on visibility actually work?'",
    work: "Built an integrated dashboard connecting patient source → CRM → appointment → close rate → revenue. Added weekly operating rhythm where the team reviewed metrics, identified what was working, and adjusted priorities.",
    workDetail:
      "We connected data from Google Ads, Google Business, website analytics, CRM, and payment systems into one dashboard. Set up automated weekly reports showing revenue by source, customer acquisition cost by channel, and close rates by source. Held 30-min Monday standups to review and adjust.",
    result: "+45% patient growth",
    resultDetail:
      "With clarity on what actually worked, budget shifted. Local visibility spend stayed high (high ROI). Paid ads were cut by 40% (low ROI at scale). Patient growth accelerated from 8% to 13% YoY. Importantly, they could now make decisions with data instead of intuition.",
    relatedService: "Foundation + Grow",
    ctaLabel: "Build My Growth Roadmap",
    ctaHref: "/contact",
  },
];
