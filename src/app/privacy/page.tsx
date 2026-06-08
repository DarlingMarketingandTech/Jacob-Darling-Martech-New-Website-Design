import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/layout/Container";
import { createMetadata } from "@/lib/metadata";
import { seoPages } from "@/content/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createMetadata(seoPages.privacy);

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        headline="Privacy Policy"
        lead={`Last updated: June 2025`}
        breadcrumb="Darling Martech / Privacy"
      />

      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <Container>
          <div className="prose prose-sm max-w-2xl" style={{ color: "var(--fg2)" }}>
            <h2 className="dm-h3 mb-4" style={{ color: "var(--charcoal)" }}>
              Who we are
            </h2>
            <p className="mb-6 text-sm leading-relaxed">
              {site.legalName} is operated by {site.founder}, based in {site.location.city},{" "}
              {site.location.region}. Our website address is{" "}
              <a href={site.url} className="text-[var(--crimson)] hover:underline">
                {site.url}
              </a>
              .
            </p>

            <h2 className="dm-h3 mb-4" style={{ color: "var(--charcoal)" }}>
              Information we collect
            </h2>
            <p className="mb-4 text-sm leading-relaxed">
              When you use the contact or booking form on this site, we collect the information
              you provide, including your name, email address, and any message content. This
              information is used solely to respond to your inquiry and to provide the services
              you request.
            </p>
            <p className="mb-6 text-sm leading-relaxed">
              We do not sell, rent, or share your personal information with third parties for
              marketing purposes.
            </p>

            <h2 className="dm-h3 mb-4" style={{ color: "var(--charcoal)" }}>
              Analytics and cookies
            </h2>
            <p className="mb-6 text-sm leading-relaxed">
              This site may use analytics tools to understand how visitors use the site. These
              tools may use cookies or similar technologies. No personally identifiable
              information is collected through analytics.
            </p>

            <h2 className="dm-h3 mb-4" style={{ color: "var(--charcoal)" }}>
              Third-party services
            </h2>
            <p className="mb-6 text-sm leading-relaxed">
              This site may use third-party services for scheduling, form handling, or
              communication. Each third-party service has its own privacy policy. We encourage
              you to review those policies when interacting with third-party tools.
            </p>

            <h2 className="dm-h3 mb-4" style={{ color: "var(--charcoal)" }}>
              Data retention
            </h2>
            <p className="mb-6 text-sm leading-relaxed">
              We retain contact information only as long as necessary to provide the services
              you requested or as required by applicable law.
            </p>

            <h2 className="dm-h3 mb-4" style={{ color: "var(--charcoal)" }}>
              Your rights
            </h2>
            <p className="mb-6 text-sm leading-relaxed">
              You may request access to, correction of, or deletion of your personal information
              at any time by contacting us at{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-[var(--crimson)] hover:underline"
              >
                {site.email}
              </a>
              .
            </p>

            <h2 className="dm-h3 mb-4" style={{ color: "var(--charcoal)" }}>
              Contact
            </h2>
            <p className="text-sm leading-relaxed">
              Questions about this privacy policy? Email{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-[var(--crimson)] hover:underline"
              >
                {site.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
