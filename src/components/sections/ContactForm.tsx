"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const nextStepOptions = [
  "Website conversion",
  "Follow-up / CRM",
  "Automation / AI",
  "Local visibility / SEO",
  "Growth roadmap",
  "Not sure yet",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="rounded-[var(--radius-lg)] border p-8 text-center"
        style={{ borderColor: "var(--line)", background: "white" }}
      >
        <div
          className="mb-3 text-sm font-bold tracking-[0.14em] uppercase"
          style={{ color: "var(--crimson)", fontFamily: "var(--font-mono)" }}
        >
          REQUEST RECEIVED
        </div>
        <h3 className="dm-h3 mb-2" style={{ color: "var(--charcoal)" }}>
          I&rsquo;ll be in touch shortly.
        </h3>
        <p className="text-sm" style={{ color: "var(--fg2)" }}>
          Expect a response within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[var(--radius-lg)] border bg-white p-8"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-xs font-bold tracking-[0.12em] uppercase"
            style={{ color: "var(--fg2)", fontFamily: "var(--font-mono)" }}
          >
            Name
          </label>
          <input
            id="name"
            aria-required="true"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="rounded-[var(--radius-md)] border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--crimson)]"
            style={{ borderColor: "var(--line)", color: "var(--charcoal)" }}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-xs font-bold tracking-[0.12em] uppercase"
            style={{ color: "var(--fg2)", fontFamily: "var(--font-mono)" }}
          >
            Email
          </label>
          <input
            id="email"
            aria-required="true"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="rounded-[var(--radius-md)] border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--crimson)]"
            style={{ borderColor: "var(--line)", color: "var(--charcoal)" }}
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label
          htmlFor="websiteUrl"
          className="text-xs font-bold tracking-[0.12em] uppercase"
          style={{ color: "var(--fg2)", fontFamily: "var(--font-mono)" }}
        >
          Website URL (required)
        </label>
        <input
          id="websiteUrl"
            aria-required="true"
          name="websiteUrl"
          type="url"
          required
          placeholder="https://yourwebsite.com"
          className="rounded-[var(--radius-md)] border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--crimson)]"
          style={{ borderColor: "var(--line)", color: "var(--charcoal)" }}
        />
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label
          htmlFor="broken"
          className="text-xs font-bold tracking-[0.12em] uppercase"
          style={{ color: "var(--fg2)", fontFamily: "var(--font-mono)" }}
        >
          What feels broken? (required)
        </label>
        <textarea
          id="broken"
          aria-required="true"
          name="broken"
          required
          rows={4}
          placeholder="Share where conversion, follow-up, visibility, or reporting feels disconnected."
          className="resize-none rounded-[var(--radius-md)] border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--crimson)]"
          style={{ borderColor: "var(--line)", color: "var(--charcoal)" }}
        />
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label
          htmlFor="improve"
          className="text-xs font-bold tracking-[0.12em] uppercase"
          style={{ color: "var(--fg2)", fontFamily: "var(--font-mono)" }}
        >
          What are you trying to improve? (required)
        </label>
        <textarea
          id="improve"
            aria-required="true"
          name="improve"
          required
          rows={3}
          placeholder="Example: better qualified leads, faster follow-up, stronger local visibility."
          className="resize-none rounded-[var(--radius-md)] border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--crimson)]"
          style={{ borderColor: "var(--line)", color: "var(--charcoal)" }}
        />
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label
          htmlFor="nextStep"
          className="text-xs font-bold tracking-[0.12em] uppercase"
          style={{ color: "var(--fg2)", fontFamily: "var(--font-mono)" }}
        >
          Best next step
        </label>
        <select
          id="nextStep"
          name="nextStep"
          className="rounded-[var(--radius-md)] border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--crimson)]"
          style={{ borderColor: "var(--line)", color: "var(--charcoal)", background: "white" }}
        >
          <option value="">Select one...</option>
          {nextStepOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <Button type="submit" variant="primary" size="md">
          Request Diagnostic
        </Button>
        <p className="mt-3 text-xs" style={{ color: "var(--fg3)", fontFamily: "var(--font-mono)" }}>
          Response within one business day. No pressure.
        </p>
      </div>
    </form>
  );
}
