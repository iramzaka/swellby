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

const caseManagementFeatures = [
  {
    title: "No Setup Fees",
    icon: <><circle cx="12" cy="12" r="8" /><path d="M12 8v8M15 10.5c0-1.2-1.2-2.2-3-2.2s-3 .9-3 2.1c0 3.2 6 1.4 6 4.6 0 1.2-1.2 2.1-3 2.1s-3-.9-3-2.2" /></>,
    theme: "blue",
  },
  {
    title: "No Long-Term Contract",
    icon: <><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M8 10h8M8 14h5" /></>,
    theme: "green",
  },
  {
    title: "Only pay for what you use",
    icon: <><path d="M4 20V10" /><path d="M10 20V6" /><path d="M16 20v-8" /><path d="M2 20h20" /></>,
    theme: "purple",
  },
];

const serviceCoordinationFeatures = [
  {
    title: "No Setup Fees",
    icon: <><circle cx="12" cy="12" r="8" /><path d="M12 8v8M15 10.5c0-1.2-1.2-2.2-3-2.2s-3 .9-3 2.1c0 3.2 6 1.4 6 4.6 0 1.2-1.2 2.1-3 2.1s-3-.9-3-2.2" /></>,
    theme: "blue",
  },
  {
    title: "No Long-Term Contract",
    icon: <><path d="M6 4h12v16H6z" /><path d="M9 9h6M9 13h4" /><path d="m14 18 2 2 4-5" /></>,
    theme: "green",
  },
  {
    title: "Base rate of only $250/mo",
    copy: "if more than 5 SCs, we charge $50/SC/mo",
    icon: <><path d="M4 7h16v10H4z" /><circle cx="12" cy="12" r="2.5" /><path d="M7 10v4M17 10v4" /></>,
    theme: "blue",
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
          <h2 id="notes-pricing-title">Case Management</h2>
          <p className="notes-pricing-subtitle">Digital Session Notes and Electronic Billing</p>

          <div className="notes-pricing-features">
            {caseManagementFeatures.map((feature) => (
              <article key={feature.title}>
                <span className={`notes-pricing-feature-icon notes-pricing-feature-${feature.theme}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24">{feature.icon}</svg>
                </span>
                <div>
                  <h3>{feature.title}</h3>
                  {feature.copy ? <p>{feature.copy}</p> : null}
                </div>
              </article>
            ))}
          </div>

          <p className="notes-pricing-rate">
            Base rate is only $150/mo for up to 300 notes (or $0.50/note)<br />
            - Optional Doc Storage, Sharing, and Signing: $50/mo<br />
            - Optional Electronic Billing: $50/mo
          </p>
        </div>

        <div className="notes-pricing-visual">
          <img src="assets/session-notes-app.png" alt="Swellby Session Notes app shown on three phones" />
        </div>
      </section>

      <section className="notes-pricing-section service-pricing-section" aria-labelledby="service-pricing-title">
        <div className="notes-pricing-visual service-pricing-visual">
          <img src="assets/service-coordination-laptop.png" alt="Swellby service coordination notes dashboard on a laptop" />
        </div>

        <div className="notes-pricing-content">
          <h2 id="service-pricing-title">Service Coordination Notes</h2>
          <p className="notes-pricing-subtitle">SC Notes and Electronic Billing</p>

          <div className="notes-pricing-features">
            {serviceCoordinationFeatures.map((feature) => (
              <article key={feature.title}>
                <span className={`notes-pricing-feature-icon notes-pricing-feature-${feature.theme}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24">{feature.icon}</svg>
                </span>
                <div>
                  <h3>{feature.title}</h3>
                  {feature.copy ? <p>{feature.copy}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
