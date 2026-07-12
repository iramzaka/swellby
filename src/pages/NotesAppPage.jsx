import React from "react";

const notesFeatures = [
  {
    title: "Fast & Easy",
    copy: <>Notes in under<br />2 minutes</>,
    icon: <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />,
  },
  {
    title: "Secure & Compliant",
    copy: <>HIPAA compliant<br />&amp; data protected</>,
    icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="M12 8v8M8 12h8" /></>,
  },
  {
    title: "Access Anywhere",
    copy: <>Works on phone,<br />tablet &amp; desktop</>,
    icon: <><path d="M17.5 19H9a7 7 0 1 1 6.7-9H17a4.5 4.5 0 0 1 .5 9Z" /><path d="M12 12v6M9.5 15l2.5-3 2.5 3" /></>,
  },
];

const notesBenefits = [
  {
    number: "01",
    title: <><span>A great tool </span>for agencies</>,
    copy: "Whether you have 5 or 500 therapists, Swellby lets you organize every note in one simple place. When providers complete a session, the note is shared instantly with your team. Automatic NYEIS bulk batch billing, pre-populated client information, and a caseload-positive app for your team makes growing your business easier than ever.",
    visualLabel: "Therapist working on a laptop while seated inside a clock",
  },
  {
    number: "02",
    title: <><span>An amazing app </span>for therapists working in EI</>,
    copy: "Swellby was designed by therapists, for therapists. Therapists who use our app often save up to 3 hours a week doing paperwork. Create, sign, and submit new notes in under 2 minutes without any end-of-week admin work. Best part yet, we've seen providers who use Swellby fill up their saved time with more cases!",
    visualLabel: "Parent lifting a young child",
  },
  {
    number: "03",
    title: <><span>Better than </span>paper notes</>,
    copy: "Stop lugging around the binder. Swellby works on any phone or tablet and keeps your session notes private and more secure than any plastic briefcase. Agencies and individual providers can access existing notes anytime, as well as print NYS EI notes for their records with ease. It's faster, safer, and more organized than paper. Period.",
    visualLabel: "Digital session notes replacing paper binders",
  },
  {
    number: "04",
    title: <><span>A business boomer </span>for agencies and therapists</>,
    copy: "Swellby is built to help therapists spend less time doing paperwork and more time seeing clients. For agencies and therapists alike, that means growing your business. Even for businesses who use case management software, Swellby is a business-boosting add on like nothing else in the market.",
    visualLabel: "Growing business chart with a professional",
  },
];

function TryStoreBadges() {
  return (
    <div className="notes-store-badges notes-try-store-badges" aria-label="Download the Swellby Session Notes app">
      <span className="store-badge">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.7 12.9c0-2 1.7-3 1.8-3.1a4 4 0 0 0-3.1-1.7c-1.3-.1-2.6.8-3.3.8-.7 0-1.7-.8-2.8-.8a4.2 4.2 0 0 0-3.6 2.2c-1.5 2.7-.4 6.7 1.1 8.8.7 1 1.6 2.2 2.8 2.1 1.1 0 1.5-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-1 2.7-2.1.9-1.2 1.2-2.4 1.2-2.5-.1 0-2.6-1-2.6-3.7ZM14.5 6.7a3.8 3.8 0 0 0 .9-2.7 4 4 0 0 0-2.5 1.3 3.6 3.6 0 0 0-.9 2.6 3.3 3.3 0 0 0 2.5-1.2Z" /></svg>
        <span><small>Download on the</small>App Store</span>
      </span>
      <span className="store-badge">
        <svg className="play-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path className="play-blue" d="M4 3.2 14.7 12 4 20.8V3.2Z" />
          <path className="play-green" d="m4 3.2 12.7 7-2 1.8L4 3.2Z" />
          <path className="play-yellow" d="m14.7 12 2 1.8L4 20.8 14.7 12Z" />
          <path className="play-red" d="m16.7 10.2 2.5 1.4c.5.3.5.6 0 .9l-2.5 1.3-2-1.8 2-1.8Z" />
        </svg>
        <span><small>GET IT ON</small>Google Play</span>
      </span>
    </div>
  );
}

export default function NotesAppPage() {
  return (
    <main className="notes-app-page" id="notes-app-page">
      <section className="notes-app-hero" aria-labelledby="notes-app-title">
        <div className="notes-app-content">

          <h1 id="notes-app-title">Digital session notes<br />for <span>early intervention</span></h1>
          <p className="notes-app-intro">
            Create, sign, and submit error-free session notes in under 2 minutes from your phone or tablet.
          </p>

          <div className="notes-app-features">
            {notesFeatures.map((feature) => (
              <article key={feature.title}>
                <span className="notes-app-feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">{feature.icon}</svg>
                </span>
                <div>
                  <h2>{feature.title}</h2>
                  <p>{feature.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="notes-store-badges" aria-label="Download the Swellby Session Notes app">
            <span className="store-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.7 12.9c0-2 1.7-3 1.8-3.1a4 4 0 0 0-3.1-1.7c-1.3-.1-2.6.8-3.3.8-.7 0-1.7-.8-2.8-.8a4.2 4.2 0 0 0-3.6 2.2c-1.5 2.7-.4 6.7 1.1 8.8.7 1 1.6 2.2 2.8 2.1 1.1 0 1.5-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-1 2.7-2.1.9-1.2 1.2-2.4 1.2-2.5-.1 0-2.6-1-2.6-3.7ZM14.5 6.7a3.8 3.8 0 0 0 .9-2.7 4 4 0 0 0-2.5 1.3 3.6 3.6 0 0 0-.9 2.6 3.3 3.3 0 0 0 2.5-1.2Z" /></svg>
              <span><small>Download on the</small>App Store</span>
            </span>
            <span className="store-badge">
              <svg className="play-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path className="play-blue" d="M4 3.2 14.7 12 4 20.8V3.2Z" />
                <path className="play-green" d="m4 3.2 12.7 7-2 1.8L4 3.2Z" />
                <path className="play-yellow" d="m14.7 12 2 1.8L4 20.8 14.7 12Z" />
                <path className="play-red" d="m16.7 10.2 2.5 1.4c.5.3.5.6 0 .9l-2.5 1.3-2-1.8 2-1.8Z" />
              </svg>
              <span><small>GET IT ON</small>Google Play</span>
            </span>
          </div>
        </div>

        <div className="notes-app-visual">
          <img src="assets/notes-app-hero-reference1.png" alt="Swellby Session Notes app displayed on two mobile phones with a parent and child" />
        </div>
      </section>

       <section className="notes-impact-section" aria-label="Swellby Notes results">
        <div className="notes-impact-grid">
          <article>
            <span className="notes-impact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M4 20V10M10 20v-6M16 20v-9M2 20h20" /><path d="m5 8 5-4 4 3 6-5M16 2h4v4" /></svg>
            </span>
            <strong>33%</strong>
            <p>Average caseload increase<br />after 3 months.</p>
          </article>
          <article>
            <span className="notes-impact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M9 5H6a2 2 0 0 0-2 2v13h13v-3" /><path d="M9 3h6v4H9zM8 11h4M8 15h3" /><circle cx="18" cy="12" r="4" /><path d="m16.5 12 1 1 2-2" /></svg>
            </span>
            <strong>98%</strong>
            <p>Error-free submissions using<br />our 47-point validation algorithm.</p>
          </article>
          <article>
            <span className="notes-impact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M15 14a5 5 0 0 1 6 4v2" /></svg>
            </span>
            <strong>130,000</strong>
            <p>Session notes created in NYS<br />using Swellby.</p>
          </article>
        </div>
      </section>

      <section className="notes-benefits-section" aria-labelledby="notes-benefits-title">
        <header className="notes-benefits-header">
          <h2 id="notes-benefits-title">What are <span>Swellby Notes?</span></h2>
          <p>
            With over 150,000 submitted session notes in NYS, Swellby Notes helps agencies increase caseloads,
            and therapists save time on paperwork, fit more clients in day, and instantly submit error-free notes.
          </p>
        </header>

        <div className="notes-benefits-list">
          {notesBenefits.map((benefit) => (
            <article className="notes-benefit-row" key={benefit.number}>
              <div className="notes-benefit-copy">
                <div className="notes-benefit-meta">
                  <span className="notes-benefit-number">{benefit.number}</span>
                  <h3>{benefit.title}</h3>
                </div>

                <p>{benefit.copy}</p>
              </div>
              <div
                className={`notes-benefit-visual notes-benefit-visual-${benefit.number}`}
                role="img"
                aria-label={benefit.visualLabel}
              ></div>
            </article>
          ))}
        </div>
      </section>



      <section className="notes-testimonial-section" aria-label="Therapist testimonial">
        <div className="notes-testimonial-inner">
          <div className="notes-testimonial-avatar" role="img" aria-label="Liliana, therapist"></div>
          <blockquote>
            <span className="notes-quote-mark" aria-hidden="true">&ldquo;</span>
            <p>
              &ldquo;The Swellby app has been <strong>LIFE CHANGING</strong> for me as a therapist. I can see more kids
              in a day while having my weekends back with less paperwork.&rdquo;
            </p>
            <footer><span aria-hidden="true"></span><strong>Liliana,</strong> Therapist</footer>
          </blockquote>
        </div>
      </section>

      <section className="telehealth-section" aria-labelledby="telehealth-title">
        <div className="telehealth-content">

          <h2 id="telehealth-title">Telehealth <span>ready</span></h2>
          <p className="telehealth-copy">
            Swellby notes have integrated simple COVID-19 emergency declaration language to help therapists quickly
            create session notes delivered using Teletherapy. Swellby delivers the same time-cutting, cost-saving,
            business-boosting results even in the current Telehealth service model.
          </p>

          <div className="telehealth-features">
            <article>
              <span aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 5h18v12H3zM1 20h22" /><path d="M9 14v-1a3 3 0 0 1 6 0v1M12 8a2 2 0 1 0 0 .01" /></svg></span>
              <strong>Easy Teletherapy<br />Workflows</strong>
            </article>
            <article>
              <span aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg></span>
              <strong>COVID-19<br />Compliant</strong>
            </article>
            <article>
              <span aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></span>
              <strong>Save Time &amp;<br />Reduce Costs</strong>
            </article>
          </div>
        </div>

        <div className="telehealth-visual" role="img" aria-label="New York State telehealth coverage illustration"></div>
      </section>

      <section className="notes-try-section" aria-labelledby="notes-try-title">
        <header className="notes-try-header">
          <h2 id="notes-try-title">Ready to give it a try?</h2>
        </header>

        <div className="notes-try-grid">
          <article className="notes-try-card notes-try-agencies">
            <div className="notes-try-visual notes-try-visual-agency" role="img" aria-label="Agency building illustration"></div>
            <div className="notes-try-copy">
              <h3>Agencies</h3>
              <p>
                Agencies can set up a free demo and try it risk free without disrupting what you already do. Reach out
                to get access to the admin dashboard demo and agency-centered provider app.
              </p>
              <a className="notes-demo-button" href="#/join">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18M8 14h2M12 14h2M8 17h2" /></svg>
                Get the Demo
              </a>
            </div>
          </article>

          <article className="notes-try-card notes-try-therapists">
            <div className="notes-try-visual notes-try-visual-therapist" role="img" aria-label="Individual therapist illustration"></div>
            <div className="notes-try-copy">
              <h3>Individual Therapists</h3>
              <p>
                Individual therapists who are approved to bill NYEIS directly can start using Swellby today! Try it
                risk free for 14 days to see if it&apos;s right for you.
              </p>
              <TryStoreBadges />
            </div>
          </article>

          <article className="notes-try-card notes-try-wide">
            <div className="notes-try-visual notes-try-visual-phone" role="img" aria-label="Swellby Session Notes mobile app"></div>
            <div className="notes-try-copy">
              <h3>Just a W2 or 1099 therapist?</h3>
              <p>
                We love getting feedback from therapists! Download the app and create a mock-case to see how it works!
                If you want your agency to use it, let us know! (Over half of our agencies join from therapist requests!)
              </p>
              <TryStoreBadges />
            </div>
          </article>
        </div>
      </section>

    </main>
  );
}
