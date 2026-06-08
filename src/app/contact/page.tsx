import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a diagnostic call with Jacob Darling. 30 minutes, no commitment.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        headline="BOOK A DIAGNOSTIC CALL."
        lead="30 minutes. No commitment. I map your system, find the gaps, and tell you exactly what to fix first."
        breadcrumb="Darling Martech / Contact"
      />

      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <Eyebrow className="mb-4">GET IN TOUCH</Eyebrow>
              <h2 className="dm-h2 mb-4" style={{ color: "var(--charcoal)" }}>
                Start with a conversation.
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--fg2)" }}>
                Every engagement starts with a diagnostic call. Tell me about your business, what
                you&rsquo;re working on, and what&rsquo;s not working — I&rsquo;ll tell you exactly
                how I&rsquo;d approach it.
              </p>
              <div
                className="mt-8 rounded-[var(--radius-lg)] border p-5"
                style={{ borderColor: "var(--line)", background: "white" }}
              >
                <div
                  className="mb-3 text-xs font-bold tracking-[0.14em] uppercase"
                  style={{ color: "var(--fg3)", fontFamily: "var(--font-mono)" }}
                >
                  WHAT TO EXPECT
                </div>
                {[
                  "30-minute diagnostic call",
                  "I review your current system before we talk",
                  "You get a clear next-step recommendation",
                  "No sales pitch. Just an honest assessment.",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 border-t py-2 text-sm"
                    style={{ borderColor: "var(--line)", color: "var(--charcoal)" }}
                  >
                    <span
                      className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--crimson)" }}
                      aria-hidden="true"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>

      <CTASection
        headline="PREFER TO SKIP THE FORM?"
        lead="Book directly using the calendar link — pick a time that works and I'll confirm within the hour."
        primaryLabel="Book a Call Directly"
        primaryHref="/contact"
        secondaryLabel="Run the Growth Audit First"
        secondaryHref="/tools"
      />
    </>
  );
}
