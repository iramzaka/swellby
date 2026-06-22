import React from "react";

export default function HeroSection() {
  return (
<section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-content">
          

          <h1 id="hero-title">
            Connecting coordinators with trusted agencies for{" "}
            <span>early intervention</span>
          </h1>

          <p className="hero-copy">
            Swellby streamlines referrals, boosts billing efficiency, and helps more children get the
            support they need faster.
          </p>

          <div className="hero-actions" aria-label="Primary actions">
            <a className="btn btn-primary btn-large" href="#/join">
              Join Our Directory
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </a>
            <a className="btn btn-outline btn-large" href="#marketplace" data-scroll="true">
              Learn More
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="hero-metrics" id="heroMetrics" aria-label="Swellby benefits">
            <article>
              <span className="metric-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                </svg>
              </span>
              <strong>Vetted Agencies</strong>
              <span>You Can Trust</span>
            </article>
            <article>
              <span className="metric-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 3v18h18" />
                  <path d="m7 16 3-5 4 3 4-8" />
                  <path d="M7 21v-4" />
                  <path d="M12 21v-7" />
                  <path d="M17 21v-9" />
                </svg>
              </span>
              <strong>Streamlined</strong>
              <span>Referrals</span>
            </article>
            <article>
              <span className="metric-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                  <path d="M19 19l3 3" />
                </svg>
              </span>
              <strong>Faster Support,</strong>
              <span>Better Outcomes</span>
            </article>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <img src="assets/hero-team.png" alt="" />
        </div>
      </section>
  );
}

