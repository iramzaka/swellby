import React from "react";

export default function HeroSection() {
  return (
<section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-content">
          

          <h1 id="hero-title">
            An All-in-one EI Platform<br />
            <span>Built for your Agency</span>
          </h1>

          <p className="hero-copy">
            Empowering Early Intervention Agencies Across New York.Powerful, Easy-to-Use, Affordable.

          </p>

          <div className="hero-actions" aria-label="Primary actions">
            <a className="btn btn-primary btn-large" href="#/join">
              Sign Up
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="hero-metrics" id="heroMetrics" aria-label="Swellby benefits">
            <a href="#session-notes" data-scroll="true">
              <span className="metric-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="5" y="3" width="14" height="18" rx="2" />
                  <path d="M9 7h6" />
                  <path d="M12 7v10" />
                  <circle cx="12" cy="11" r="2.2" />
                  <path d="M9 17h6" />
                </svg>
              </span>
              <strong>Case Management</strong>
            </a>
            <a href="#service-coordination" data-scroll="true">
              <span className="metric-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="5" y="3" width="14" height="18" rx="2" />
                  <path d="M9 8h6" />
                  <path d="M9 12h4" />
                  <path d="m14 17 2 2 4-5" />
                </svg>
              </span>
              <strong>SC Notes</strong>
            </a>
            <a href="#marketplace" data-scroll="true">
              <span className="metric-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="6" cy="7" r="3" />
                  <circle cx="18" cy="7" r="3" />
                  <circle cx="12" cy="18" r="3" />
                  <path d="m8.4 9.2 2.4 5.7" />
                  <path d="m15.6 9.2-2.4 5.7" />
                  <path d="M9 7h6" />
                </svg>
              </span>
              <strong>Case Referrals</strong>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <img src="assets/hero-team.png" alt="" />
        </div>
      </section>
  );
}
