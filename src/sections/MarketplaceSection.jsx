import React from "react";

export default function MarketplaceSection() {
  return (
<section className="marketplace-section" id="marketplace" aria-labelledby="marketplace-title">
        
        <h2 id="marketplace-title">
          Referrals Marketplace<br /><span>The Marketplace is the tool coordinators need</span>
        </h2>
        <p className="section-copy">
          Whether you're a service coordinator sharing cases, or a staffing coordinator receiving them,
          Swellby helps you do your job. Keep the same workflow you know and trust while making it
          easier to send, receive, and manage case referrals with more agencies in less time.
        </p>

        <div className="marketplace-grid">
          <article className="coordinator-card card-left">
            <span className="floating-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </span>
            <h3>Service coordinators</h3>
            <p>
              Make a new referral in under a minute. Filter and share with as many agencies as you
              choose. When agencies are interested they let you know. Call, chat, and find the right
              agency, all while boosting your billable time.
            </p>
            <ul className="feature-list">
              <li>
                <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="9" /></svg></span>
                Create referrals in minutes
              </li>
              <li>
                <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></svg></span>
                Share with multiple agencies
              </li>
              <li>
                <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" /></svg></span>
                Chat &amp; connect seamlessly
              </li>
            </ul>
          </article>

          <div className="device-preview" aria-label="Swellby dashboard preview">
            <img src="assets/marketplace-device.png" alt="Swellby referral marketplace dashboard shown on laptop and phone" />
          </div>

          <article className="coordinator-card card-right">
            <span className="floating-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              </svg>
            </span>
            <h3>Staffing coordinators</h3>
            <p>
              View available referrals in real-time that reflect your staffing needs. Supplement your
              current solution by adding extra case flow and increasing your presence to service
              coordinators - Connect and accept new cases at the click of a button.
            </p>
            <ul className="feature-list">
              <li>
                <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13 2-8 12h7l-1 8 8-12h-7Z" /></svg></span>
                Real-time referral notifications
              </li>
              <li>
                <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14" /><path d="M5 12h14" /></svg></span>
                Add more case flow instantly
              </li>
              <li>
                <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /><circle cx="12" cy="12" r="9" /></svg></span>
                Accept &amp; manage cases easily
              </li>
            </ul>
          </article>
        </div>

        <div className="stats-band" id="marketStats" aria-label="Marketplace statistics">
          <article>
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></svg></span>
            <div><strong>Thousands</strong><small>of active agencies</small></div>
          </article>
          <article>
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg></span>
            <div><strong>Faster Referrals</strong><small>less time, better results</small></div>
          </article>
          <article>
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></span>
            <div><strong>Real-time Updates</strong><small>stay informed instantly</small></div>
          </article>
          <article>
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-5" /></svg></span>
            <div><strong>Secure &amp; Compliant</strong><small>HIPAA-compliant platform</small></div>
          </article>
        </div>
      </section>
  );
}

