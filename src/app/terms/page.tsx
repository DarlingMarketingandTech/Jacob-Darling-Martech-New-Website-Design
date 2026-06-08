import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/layout/Container";
import { createMetadata } from "@/lib/metadata";
import { seoPages } from "@/content/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createMetadata(seoPages.terms);

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        headline="Terms of Use"
        lead={`Last updated: June 2025`}
        breadcrumb="Darling Martech / Terms"
      />

      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <Container>
          <div className="prose prose-sm max-w-2xl" style={{ color: "var(--fg2)" }}>
            <h2 className="dm-h3 mb-4" style={{ color: "var(--charcoal)" }}>
              Acceptance of terms
            </h2>
            <p className="mb-6 text-sm leading-relaxed">
              By accessing or using the {site.legalName} website at{" "}
              <a href={site.url} className="text-[var(--crimson)] hover:underline">
                {site.url}
              </a>
              , you agree to these terms of use. If you do not agree, please do not use this
              site.
            </p>

            <h2 className="dm-h3 mb-4" style={{ color: "var(--charcoal)" }}>
              Use of content
            </h2>
            <p className="mb-6 text-sm leading-relaxed">
              All content on this site — including text, frameworks, guides, and diagnostic
              materials — is the intellectual property of {site.legalName}. You may not
              reproduce, distribute, or repurpose any content without written permission.
            </p>

            <h2 className="dm-h3 mb-4" style={{ color: "var(--charcoal)" }}>
              Services and engagement
            </h2>
            <p className="mb-6 text-sm leading-relaxed">
              The information on this site is for general informational purposes. Nothing on
              this site constitutes a contract, guarantee, or promise of specific results.
              Formal engagement is established only through a signed agreement or statement
              of work.
            </p>

            <h2 className="dm-h3 mb-4" style={{ color: "var(--charcoal)" }}>
              Limitation of liability
            </h2>
            <p className="mb-6 text-sm leading-relaxed">
              {site.legalName} is not liable for any direct, indirect, incidental, or
              consequential damages arising from your use of this website or reliance on any
              information presented here.
            </p>

            <h2 className="dm-h3 mb-4" style={{ color: "var(--charcoal)" }}>
              External links
            </h2>
            <p className="mb-6 text-sm leading-relaxed">
              This site may contain links to third-party websites. We are not responsible for
              the content, privacy practices, or accuracy of information on those sites.
            </p>

            <h2 className="dm-h3 mb-4" style={{ color: "var(--charcoal)" }}>
              Changes to these terms
            </h2>
            <p className="mb-6 text-sm leading-relaxed">
              We may update these terms from time to time. Continued use of the site after any
              changes constitutes your acceptance of the updated terms.
            </p>

            <h2 className="dm-h3 mb-4" style={{ color: "var(--charcoal)" }}>
              Contact
            </h2>
            <p className="text-sm leading-relaxed">
              Questions about these terms? Email{" "}
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
