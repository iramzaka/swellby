import React from "react";

export default function JoinSection() {
  return (
<section className="join-section" id="pricing" aria-labelledby="pricing-title">
        <div className="join-copy">
          <span id="signup" className="anchor-target" aria-hidden="true"></span>
          
          <h2 id="pricing-title">Join <span>Today!</span></h2>
          <p>Try Swellby for free and experience smarter coordination, better outcomes.</p>

          <ul className="join-benefits">
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 12 3 3 7-7" /><circle cx="12" cy="12" r="9" /></svg>
              Quick and easy setup
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 12 3 3 7-7" /><circle cx="12" cy="12" r="9" /></svg>
              No credit card required
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 12 3 3 7-7" /><circle cx="12" cy="12" r="9" /></svg>
              Cancel anytime
            </li>
          </ul>

          <div className="join-actions">
            <a className="btn btn-primary btn-large" href="mailto:hello@swellby.com">
              Sign Up Free
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </a>
          </div>
          <p className="join-assurance">Easy setup <span>|</span> Try for free <span>|</span> Cancel anytime</p>

          <svg className="join-plane" viewBox="0 0 64 64" aria-hidden="true">
            <path d="m8 28 48-20-19 48-8-18-21-10Z" />
            <path d="M29 38 56 8" />
          </svg>
        </div>

        <div className="join-visual">
          <img src="assets/marketplace-device.png" alt="Swellby marketplace dashboard on laptop and phone" />
        </div>
      </section>
  );
}

