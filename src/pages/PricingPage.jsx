import React from "react";

const plans = [
  {
    name: <>Real-time<br />Directory</>,
    description: "For all early intervention agencies and evaluation.",
    theme: "blue",
    icon: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  },
  {
    name: <>Service<br />Coordinators</>,
    description: "For creating, sharing, and managing new case referrals.",
    theme: "teal",
    icon: <><circle cx="9" cy="7" r="4" /><path d="M2 21v-2a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v2" /><path d="M17 4.5a4 4 0 0 1 0 7M22 21v-2a5 5 0 0 0-3-4.6" /></>,
  },
  {
    name: <>Staffing<br />Coordinators</>,
    description: "For receiving, accepting, and managing new case referrals.",
    theme: "green",
    icon: <><circle cx="10" cy="7" r="4" /><path d="M3 20v-2a6 6 0 0 1 6-6h2a6 6 0 0 1 4.5 2" /><circle cx="18" cy="18" r="4" /><path d="m16.5 18 1 1 2-2" /></>,
  },
];

export default function PricingPage() {
  return (
    <main className="pricing-page" id="pricing-page">
      <section className="pricing-hero" aria-labelledby="pricing-page-title">

        <h1 id="pricing-page-title">The Swellby Marketplace is <span>Free!</span></h1>
        <p className="pricing-intro">
          There are no monthly fees, signup fees, or costs of any kind<br />
          for agencies to <strong>create, share, take,</strong> or <strong>manage</strong> referrals on Swellby!
        </p>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={`pricing-card pricing-card-${plan.theme}`} key={plan.theme}>
              <span className="pricing-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">{plan.icon}</svg>
              </span>
              <h2>{plan.name}</h2>
              <div className="pricing-amount" aria-label="Zero dollars, free">
                <span className="pricing-currency">$</span>
                <span className="pricing-zero">0</span>
              </div>
              <strong className="pricing-free">Free</strong>
              <span className="pricing-divider" aria-hidden="true"></span>
              <p>{plan.description}</p>
              <a className="pricing-action" href="#/join">
                Get Started
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></svg>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="notes-pricing-section" aria-labelledby="notes-pricing-title">
        <div className="notes-pricing-content">
          <span className="pricing-kicker">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="8" width="18" height="13" rx="2" />
              <path d="M12 8v13M3 12h18M8.5 8C6 8 6 4 8 4c2.5 0 4 4 4 4M15.5 8C18 8 18 4 16 4c-2.5 0-4 4-4 4" />
            </svg>
            FREE TO TRY
          </span>

          <h2 id="notes-pricing-title">The Swellby<br />Session Notes app<br />is <span>free to try!</span></h2>
          <p className="notes-pricing-intro">
            We&apos;re flexible! Only pay for what you use.<br />
            Or call for a flat monthly rate!
          </p>

          <div className="notes-pricing-features">
            <article>
              <span className="notes-pricing-feature-icon notes-pricing-feature-blue" aria-hidden="true">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /><path d="M12 7v10M15 9.5c0-1.4-1.3-2.5-3-2.5s-3 1-3 2.4c0 3.6 6 1.6 6 5.2 0 1.4-1.3 2.4-3 2.4s-3-1.1-3-2.5" /></svg>
              </span>
              <div><h3>No monthly fees</h3><p>Zero hidden costs.</p></div>
            </article>
            <article>
              <span className="notes-pricing-feature-icon notes-pricing-feature-green" aria-hidden="true">
                <svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 10h18M16 14h2" /></svg>
              </span>
              <div><h3>Pay for what you use</h3><p>Flexible pricing that works for you.</p></div>
            </article>
            <article>
              <span className="notes-pricing-feature-icon notes-pricing-feature-purple" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" /></svg>
              </span>
              <div><h3>Flat monthly rate</h3><p>Call us for enterprise pricing.</p></div>
            </article>
          </div>

          <div className="notes-pricing-trust">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg>
            <strong>Trusted by agencies.<br />Built for professionals.</strong>
          </div>
        </div>

        <div className="notes-pricing-visual">
          <img src="assets/session-notes-app.png" alt="Swellby Session Notes app shown on three phones" />
        </div>
      </section>
    </main>
  );
}
