import React from "react";

export default function GrowthStackSection() {
  return (
<section className="growth-section" aria-labelledby="growth-title">
        
        <h2 id="growth-title">The Swellby Growth Stack</h2>
        <p>
          Swellby offers a full stack of products for supercharged case referrals - a powerful online
          directory, supercharged service coordination, and smart referral intake: powerful alone,
          and even better when used together.
        </p>

        <div className="growth-grid">
          <article>
            <div className="growth-card-content">
              <span className="growth-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s-7-4.5-7-11a7 7 0 0 1 14 0c0 6.5-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                  <path d="M5 21h14" />
                </svg>
              </span>
              <div>
                <h3>Real-Time Directory</h3>
                <p>Share services, areas, and key contacts with service coordinators in real-time!</p>
              </div>
            </div>
            <a className="growth-arrow" href="#signup" data-scroll="true" aria-label="Learn about the real-time directory">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </a>
          </article>

          <article>
            <div className="growth-card-content">
              <span className="growth-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="5" cy="5" r="2.5" />
                  <circle cx="19" cy="5" r="2.5" />
                  <circle cx="5" cy="19" r="2.5" />
                  <circle cx="19" cy="19" r="2.5" />
                  <circle cx="12" cy="12" r="2.5" />
                  <path d="m7 7 3 3m4 0 3-3m-7 7-3 3m7-3 3 3" />
                </svg>
              </span>
              <div>
                <h3>Service Coordination</h3>
                <p>Increase billable units while connecting referrals to more agencies in less time!</p>
              </div>
            </div>
            <a className="growth-arrow" href="#signup" data-scroll="true" aria-label="Learn about service coordination">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </a>
          </article>

          <article>
            <div className="growth-card-content">
              <span className="growth-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <div>
                <h3>Staffing Coordination</h3>
                <p>Boost referral flow with cases from more service coordinators than ever!</p>
              </div>
            </div>
            <a className="growth-arrow" href="#signup" data-scroll="true" aria-label="Learn about staffing coordination">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </a>
          </article>
        </div>

      </section>
  );
}

