import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";
import { createMetadata } from "@/lib/metadata";

const pageMetadata = {
  path: "/resources/disconnected-system-problem",
  title: "The Disconnected-System Problem | Darling Martech",
  description:
    "Why most marketing failures aren't traffic or budget problems—and how to diagnose the real disconnection in your marketing system.",
};

export const metadata: Metadata = createMetadata(pageMetadata);

export default function DisconnectedSystemPage() {
  return (
    <>
      <PageHeader
        eyebrow="GUIDE"
        headline="The Disconnected-System Problem"
        lead="Why most marketing failures aren't traffic or budget problems — and how to diagnose the real disconnection."
        breadcrumb="Darling Martech / Resources / Disconnected-System Problem"
      />

      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <Container>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2>The Problem No One Talks About</h2>
            <p>
              Most growing businesses throw money at the symptoms of a deeper problem: disconnected marketing systems.
              They assume growth is slow because they don't have enough traffic, or their budget is too small, or their
              product isn't good enough.
            </p>
            <p>
              But the real issue? Their website doesn't know what their CRM is doing. Their CRM doesn't trigger their
              follow-up system. Their follow-up system doesn't measure what actually matters. And none of it connects to
              visibility, AI positioning, or reporting.
            </p>

            <h2>Why This Happens</h2>
            <p>Growth companies build in layers, not systems.</p>
            <ul>
              <li>
                <strong>Year 1:</strong> Get a website because you need one. It's a brochure.
              </li>
              <li>
                <strong>Year 2:</strong> Add a CRM because leads are coming in and you need to organize them.
              </li>
              <li>
                <strong>Year 3:</strong> Start automating follow-up because manual is impossible at scale.
              </li>
              <li>
                <strong>Year 4:</strong> Suddenly realize that the website doesn't funnel people into the CRM the way
                the CRM expects, so half your leads get lost or re-worked.
              </li>
            </ul>
            <p>
              Each tool does its job in isolation. But they were never designed to work as one system. So they don't.
            </p>

            <h2>The Cascade of Disconnection</h2>
            <p>When systems are disconnected, the impact cascades:</p>

            <h3>Website isolation</h3>
            <p>
              Your website gets traffic, but it doesn't push people into your CRM in a way that preserves their context.
              Or it does, but the lead form doesn't collect the right information. Or the CRM receives the lead but
              there's no automation waiting to respond in the first critical hour.
            </p>

            <h3>CRM black hole</h3>
            <p>
              Leads come in, but follow-up still depends on memory, inbox discipline, or manual reminders. The team
              knows which leads matter, but the system doesn't. So hot prospects wait days while cold ones get worked
              because someone happened to see the email.
            </p>

            <h3>Visibility fragmentation</h3>
            <p>
              Your website says one thing, your Google Business Profile says another, AI search sees something else
              entirely. Customers find you through one channel but the message doesn't match. They land confused.
            </p>

            <h3>Attribution blindness</h3>
            <p>
              You don't know which efforts actually drive revenue. The website feels like it underperforms, but you're
              not measuring the right things. CRM shows the work is happening, but reporting doesn't connect it back to
              investment. Decisions become guesses.
            </p>

            <h2>What Disconnection Costs</h2>
            <p>Every disconnection has a price:</p>
            <ul>
              <li>
                <strong>Lost leads:</strong> Good prospects fall through cracks because systems don't talk.
              </li>
              <li>
                <strong>Slow follow-up:</strong> Automation happens on a schedule instead of a trigger, so the
                first-mover advantage evaporates.
              </li>
              <li>
                <strong>Team friction:</strong> Sales blames marketing for bad leads. Marketing blames sales for not
                closing. The system isn't the problem—but no one sees that.
              </li>
              <li>
                <strong>Invisible ROI:</strong> You spend on visibility, websites, CRM, automation, and have no idea
                which ones actually work. You can't double down on what works or cut what doesn't.
              </li>
              <li>
                <strong>Compound waste:</strong> Every tool you add without connecting it makes the system more broken.
              </li>
            </ul>

            <h2>How to Diagnose Your Disconnection</h2>
            <p>Look for these signals:</p>

            <h3>Website signals</h3>
            <ul>
              <li>Lead form exists but nobody knows if it's converting because it's not connected to CRM tracking.</li>
              <li>Traffic is up but inquiries are flat.</li>
              <li>People abandon at the same point every time (usually the CTA) but nobody's fixed it.</li>
            </ul>

            <h3>CRM signals</h3>
            <ul>
              <li>Leads arrive in batches instead of in real-time, or missing context from the website.</li>
              <li>Follow-up still takes manual effort even though you have "automation."</li>
              <li>Nobody can answer: "How long does a lead stay in the system before response?"</li>
            </ul>

            <h3>Visibility signals</h3>
            <ul>
              <li>
                Search results for your business show different descriptions, pictures, or positioning across Google,
                Google Business, and your website.
              </li>
              <li>People are hard to find unless they already know your name.</li>
              <li>Local competitors show up when you search for what you do.</li>
            </ul>

            <h3>Reporting signals</h3>
            <ul>
              <li>You have data in multiple places but no single picture of what works.</li>
              <li>Nobody can answer: "How much of last month's revenue came from which channel?"</li>
              <li>Budget decisions are political, not data-driven.</li>
            </ul>

            <h2>Why "Add More Traffic" Doesn't Fix It</h2>
            <p>
              Many businesses respond to slow growth by buying more traffic. But if your system is disconnected, more
              traffic just amplifies the waste. You're pouring more water into a bucket with holes in it.
            </p>
            <p>
              A website that converts 2% with a connected system will outperform one that converts 8% but has broken
              follow-up, split visibility, and no measurement.
            </p>

            <h2>What Connected Looks Like</h2>
            <p>A connected system looks like this:</p>
            <ul>
              <li>
                <strong>Website → CRM:</strong> Lead form captures context, triggers immediate acknowledgment, routes to
                the right person, and logs everything.
              </li>
              <li>
                <strong>CRM → Follow-up:</strong> Lead status automatically triggers the next action—email,
                call-reminder, SMS, or re-engagement sequence.
              </li>
              <li>
                <strong>Visibility → Website:</strong> Every channel (search, local, AI) points to the same message
                and positioning. People land knowing who you are and why you're credible.
              </li>
              <li>
                <strong>Everything → Reporting:</strong> Revenue is attributed to the effort that created it. You see
                which services, channels, and campaigns move the needle.
              </li>
            </ul>

            <h2>The Path Forward</h2>
            <p>
              Fixing disconnection doesn't require ripping everything out and starting over. It requires understanding
              what's broken, deciding which disconnections cost the most, and fixing them in sequence.
            </p>
            <p>
              The business that grows fastest isn't the one with the best website, the smartest CRM, or the most traffic.
              It's the one where the website makes the sale, the CRM closes the sale, and the system measures what matters.
            </p>

            <h2>Next Step</h2>
            <p>
              Ready to see where your system is broken? Start with the{" "}
              <strong>Growth Leak Finder diagnostic</strong>—it identifies your specific bottleneck in 20 minutes.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        headline="See where your system is broken"
        lead="The Growth Leak Finder diagnostic identifies the disconnection that's costing you the most."
      />
    </>
  );
}
