import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";
import { createMetadata } from "@/lib/metadata";

const pageMetadata = {
  path: "/resources/four-stage-system-map",
  title: "The Four-Stage System Map | Darling Martech",
  description:
    "Foundation → Build → Scale → Grow. How each stage connects to the next and why order matters.",
};

export const metadata: Metadata = createMetadata(pageMetadata);

export default function FourStagePage() {
  return (
    <>
      <PageHeader
        eyebrow="FRAMEWORK"
        headline="The Four-Stage System Map"
        lead="Foundation → Build → Scale → Grow. How each stage connects to the next and why order matters."
        breadcrumb="Darling Martech / Resources / Four-Stage System Map"
      />

      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <Container>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2>Why Order Matters</h2>
            <p>
              Most businesses think growth is linear: get more traffic, close more deals, rinse and repeat. But it's not.
              Growth compounds when each stage builds on the previous one. Skip a stage or reverse the order, and the
              whole system breaks.
            </p>
            <p>
              This framework shows you the order that actually works, what each stage does, and how it connects to the
              next one.
            </p>

            <h2>Stage 1: Foundation — Understand Before You Build</h2>
            <p>
              <strong>What it is:</strong> Diagnosis, positioning, and strategy clarity before any execution.
            </p>
            <p>
              Most businesses skip this. They want to fix the website or launch a CRM immediately. But without clarity
              on the real bottleneck, you're guessing. You might fix the wrong thing and leave the real problem in place.
            </p>

            <h3>Foundation work includes:</h3>
            <ul>
              <li>
                <strong>Bottleneck diagnosis:</strong> Is the problem traffic, conversion, follow-up, visibility, or
                measurement?
              </li>
              <li>
                <strong>Positioning clarity:</strong> What do you do, who needs it, and why do you do it better? Can
                your ideal customer understand this in 10 seconds?
              </li>
              <li>
                <strong>System roadmap:</strong> If you had to connect everything—website, CRM, automation, visibility,
                reporting—in what order would you do it?
              </li>
              <li>
                <strong>Offer clarity:</strong> What are you actually selling? Is the offer clear enough that a stranger
                knows what to do next?
              </li>
            </ul>

            <h3>Why it matters:</h3>
            <p>
              Foundation work is unsexy. It produces no revenue immediately. But it saves you from building on sand. A
              business with crystal-clear positioning and strategy can execute a simple website, CRM, and follow-up
              better than a business that skips to execution without clarity.
            </p>

            <h3>Foundation mistakes:</h3>
            <ul>
              <li>Positioning is vague ("we help businesses grow")</li>
              <li>Target audience is too broad ("our ideal customer is any business")</li>
              <li>Offer doesn't match positioning (website talks about services, CRM is set up for productized work)</li>
              <li>Strategy assumes more traffic is the answer, when the real problem is website clarity or CRM follow-up</li>
            </ul>

            <h2>Stage 2: Build — Website That Converts, Not Just Ranks</h2>
            <p>
              <strong>What it is:</strong> A website structured and positioned to move visitors toward the next step—a
              call, inquiry, booking, or purchase.
            </p>
            <p>
              A website's job is not to "look good" or "rank for keywords." It's to take a visitor with a problem,
              show them you understand it, prove you can solve it, and make it obvious what to do next.
            </p>

            <h3>Build work includes:</h3>
            <ul>
              <li>
                <strong>Page hierarchy:</strong> Homepage, problem-aware pages, proof, offer, CTA. Not a portfolio, not
                a blog. A system.
              </li>
              <li>
                <strong>Clarity over cleverness:</strong> Can a visitor in 30 seconds understand who you help and what
                changes for them?
              </li>
              <li>
                <strong>Proof structure:</strong> Not testimonials. Specific outcomes—"30% faster onboarding for legal
                teams" beats "great company."
              </li>
              <li>
                <strong>Lead capture:</strong> Forms that collect the right context. If a form asks for 10 fields, you
                lose 80% of submitters.
              </li>
              <li>
                <strong>CTA clarity:</strong> What happens after they click? Is it obvious?
              </li>
            </ul>

            <h3>Why it matters:</h3>
            <p>
              Most websites are built in isolation from what happens next. You get leads, but they're low-quality
              because the website didn't pre-qualify them. Or leads come in fast but your follow-up isn't ready. Build
              stage assumes that Stage 1 (Foundation) is done and that Stage 3 (CRM + automation) is waiting in the wings.
            </p>

            <h3>Build mistakes:</h3>
            <ul>
              <li>Website is designed before positioning is clear</li>
              <li>Form collects the wrong information for your CRM to route properly</li>
              <li>No clear path from "interested" to "contacted"—no CTA, no follow-up step</li>
              <li>Proof is generic ("trusted by 500+ companies") instead of specific</li>
              <li>Website drives traffic but CRM has no automation waiting for those leads</li>
            </ul>

            <h2>Stage 3: Scale — CRM + Automation That Doesn't Drop Leads</h2>
            <p>
              <strong>What it is:</strong> Systems that catch leads from the website, route them correctly, and follow
              up automatically without manual work.
            </p>
            <p>
              Scale stage is where speed meets consistency. A lead comes in, the system acknowledges them immediately,
              routes them to the right person or sequence, and follows up on a trigger, not a schedule.
            </p>

            <h3>Scale work includes:</h3>
            <ul>
              <li>
                <strong>CRM setup:</strong> Fields, lifecycle stages, and routing that match how you actually close
                business.
              </li>
              <li>
                <strong>Lead routing:</strong> Website form → right CRM owner → right queue → right next step. Not
                everyone in one inbox.
              </li>
              <li>
                <strong>Automation:</strong> When a lead hits "interested," the system sends acknowledgment, creates a
                task, and schedules follow-up. No manual work.
              </li>
              <li>
                <strong>Follow-up sequences:</strong> If they don't respond to email, try SMS. If they're radio silent
                for a week, try LinkedIn. Escalate after 3 touches.
              </li>
              <li>
                <strong>Measurement:</strong> Time-to-response, response rate, lead quality—so you know what's working.
              </li>
            </ul>

            <h3>Why it matters:</h3>
            <p>
              Scale stage assumes your website is already converting and you know what "good leads" look like. Now you
              need systems that don't lose them. A great website with broken follow-up will never scale. Automation
              without clear routing will confuse customers. You need both, connected.
            </p>

            <h3>Scale mistakes:</h3>
            <ul>
              <li>CRM is implemented but follow-up still depends on inbox discipline</li>
              <li>Automation exists but fires on schedule (emails on Tuesdays) instead of triggers (someone filled out
              the form)</li>
              <li>Website leads go to a shared inbox instead of being routed by geography, product, or interest</li>
              <li>Nobody knows how long it takes to respond to a lead</li>
            </ul>

            <h2>Stage 4: Grow — Visibility, Reporting, and Operator Support</h2>
            <p>
              <strong>What it is:</strong> Making sure customers can find you, understand what you do, and that you can
              measure what actually drives revenue.
            </p>
            <p>
              Grow stage is the connective layer. It ties everything back together and makes sure the whole system is
              visible—to search engines, to AI systems, and to your team.
            </p>

            <h3>Grow work includes:</h3>
            <ul>
              <li>
                <strong>Visibility:</strong> Local search, organic search, and AI discovery. If customers are looking
                for what you do, they should find you.
              </li>
              <li>
                <strong>Trust signals:</strong> Reviews, credentials, content, and positioning that tell search engines
                (and customers) why you're credible.
              </li>
              <li>
                <strong>AI positioning:</strong> How do ChatGPT, Gemini, and Perplexity understand your business? Your
                website should tell them.
              </li>
              <li>
                <strong>Reporting:</strong> Dashboard that shows revenue, customer source, lead quality, and cost per
                acquisition. Not vanity metrics.
              </li>
              <li>
                <strong>Operating rhythm:</strong> Weekly or monthly check-in that ties strategy to execution—what's
                working, what's not, what changes.
              </li>
            </ul>

            <h3>Why it matters:</h3>
            <p>
              Grow stage assumes that Stages 1-3 are working. You have a clear offer, a converting website, and
              automated follow-up. Now the question is: how do we make sure the right customers find us, and how do we
              know what's actually moving revenue?
            </p>

            <h3>Grow mistakes:</h3>
            <ul>
              <li>Visibility work happens without understanding positioning (hard to rank for something vague)</li>
              <li>Reporting exists but doesn't connect to business decisions</li>
              <li>There's no operating rhythm—nobody checks progress or adjusts course</li>
              <li>Google Business profile, website, and Google Search show different information</li>
            </ul>

            <h2>How the Stages Connect</h2>

            <h3>Foundation → Build</h3>
            <p>
              If Foundation is clear ("we help mid-market SaaS companies reduce customer churn"), then Build has a
              direction. Website can show specific proof, attract the right visitors, and lead form can collect the
              context you actually need.
            </p>
            <p>
              If Foundation is vague ("we help companies"), the website has no spine. It tries to be everything to
              everyone and converts nothing.
            </p>

            <h3>Build → Scale</h3>
            <p>
              If Build is converting (qualified leads arriving), then Scale systems actually work. CRM setup matches
              the reality of how leads come in. Automation makes sense because you know what "good" looks like.
            </p>
            <p>
              If Build is broken (no leads or bad leads), scaling will waste time. You'll automate the wrong thing.
            </p>

            <h3>Scale → Grow</h3>
            <p>
              If Scale is working (leads come in, automated follow-up happens, qualified deals happen), then Grow work
              pays off. You know which source brings the best leads, so you double down on visibility in that channel.
              Reporting connects effort to revenue.
            </p>
            <p>
              If Scale is broken, Grow work is speculative. You buy visibility and don't know if it matters because you
              can't attribute leads to source.
            </p>

            <h2>When Order Gets Reversed</h2>
            <p>What happens if you skip a stage or reverse them?</p>

            <h3>Foundation + Build + Scale + Random Visibility</h3>
            <p>
              Many businesses do this: they skip positioning, build a generic website, launch a CRM, then suddenly buy
              ads or pay for visibility. The visibility brings traffic, but it's not qualified because the positioning
              was never clear. The website wasn't built for that audience. Follow-up is decent so some convert, but the
              CAC is terrible. Then they blame visibility.
            </p>

            <h3>Scale without Build</h3>
            <p>
              A company installs a "sophisticated" CRM and automation but the website is weak. Leads come in but they're
              not pre-qualified. The automation works, but half the leads are tire-kickers. The ROI is bad. They blame
              the CRM.
            </p>

            <h3>Grow without Foundation</h3>
            <p>
              Visibility work tries to rank for 20 different keywords because positioning is unclear. Ads run but the
              landing page doesn't match the ad. They've spent thousands on visibility but nobody knows what they're
              actually visible for. Reporting shows traffic but not revenue attribution.
            </p>

            <h2>How to Know Which Stage You're In</h2>

            <h3>You're in Foundation if:</h3>
            <ul>
              <li>Your positioning is vague or changing constantly</li>
              <li>You're not sure whether your bottleneck is awareness, conversion, or follow-up</li>
              <li>Different team members describe the business differently</li>
            </ul>

            <h3>You're in Build if:</h3>
            <ul>
              <li>Positioning is clear but traffic is low or conversion is weak</li>
              <li>Website feels like it underperforms compared to your sales ability</li>
              <li>You're not sure if the problem is the website or what comes after it</li>
            </ul>

            <h3>You're in Scale if:</h3>
            <ul>
              <li>Website is converting but follow-up is manual and slow</li>
              <li>You have a CRM but it doesn't connect cleanly to the website</li>
              <li>You're losing qualified leads because follow-up isn't fast enough</li>
            </ul>

            <h3>You're in Grow if:</h3>
            <ul>
              <li>Stages 1-3 are working but customers are hard to find</li>
              <li>You can't measure which efforts actually create revenue</li>
              <li>You want to scale visibility but don't know where to invest</li>
            </ul>

            <h2>The Power of the Right Order</h2>
            <p>
              A business with crystal-clear positioning, a converting website, automated follow-up, and visible
              positioning will outperform a business with 10x the budget that's built everything in the wrong order.
            </p>
            <p>
              The four stages aren't optional steps. They're the order that compounds growth. Skip one and you're leaving
              revenue on the table. Reverse them and you're wasting money. Execute them in order and each one sets up the
              next one to succeed.
            </p>

            <h2>Next Step</h2>
            <p>
              Ready to see which stage your business is actually in? The <strong>Growth Leak Finder diagnostic</strong>
              {" "}
              maps your system against these four stages and shows you where the biggest opportunity is.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        headline="Map your system against the four stages"
        lead="Find out which stage you're in and what's holding the next stage back."
      />
    </>
  );
}
