"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const serviceOptions = [
  "Foundation & Strategy",
  "Website & Conversion",
  "CRM & Automation",
  "AI Workflows",
  "Growth & Demand",
  "General Enquiry",
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
          MESSAGE RECEIVED
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
          htmlFor="company"
          className="text-xs font-bold tracking-[0.12em] uppercase"
          style={{ color: "var(--fg2)", fontFamily: "var(--font-mono)" }}
        >
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Your company name"
          className="rounded-[var(--radius-md)] border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--crimson)]"
          style={{ borderColor: "var(--line)", color: "var(--charcoal)" }}
        />
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label
          htmlFor="service"
          className="text-xs font-bold tracking-[0.12em] uppercase"
          style={{ color: "var(--fg2)", fontFamily: "var(--font-mono)" }}
        >
          Service Interest
        </label>
        <select
          id="service"
          name="service"
          className="rounded-[var(--radius-md)] border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--crimson)]"
          style={{ borderColor: "var(--line)", color: "var(--charcoal)", background: "white" }}
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-xs font-bold tracking-[0.12em] uppercase"
          style={{ color: "var(--fg2)", fontFamily: "var(--font-mono)" }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your business and what you're trying to solve..."
          className="resize-none rounded-[var(--radius-md)] border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--crimson)]"
          style={{ borderColor: "var(--line)", color: "var(--charcoal)" }}
        />
      </div>

      <div className="mt-6">
        <Button type="submit" variant="primary" size="md">
          Send Message
        </Button>
        <p
          className="mt-3 text-xs"
          style={{ color: "var(--fg3)", fontFamily: "var(--font-mono)" }}
        >
          Response within one business day. No spam.
        </p>
      </div>
    </form>
  );
}
