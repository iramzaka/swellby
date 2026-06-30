import React from "react";

export default function SessionNotesSection() {
  return (
<section className="notes-section" id="session-notes" aria-labelledby="notes-title">
        <div className="notes-content">
          
          <h2 id="notes-title">
            Case Management <br /><span>Digital Session Notes and Electronic Billing</span>
          </h2>
          <p className="notes-lead">
            Therapists quickly create, sign, and submit error-free session notes from any phone or
            tablet.
          </p>
          <p className="notes-lead">
            With <strong>&gt;150,000 session notes</strong> submitted on <strong>Swellby</strong>, the
            Session Notes app is trusted and safe.
          </p>

          <div className="notes-features">
            <article>
              <span className="notes-feature-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                </svg>
              </span>
              <div>
                <h3>Therapists</h3>
                <p>
                  The Session Notes app allows you to write notes faster and stay incredibly
                  organized. The built-in validation ensures quality notes. And we have a telehealth
                  option that allows you to print pre-populated Service Logs. Easy to use and saves
                  you time. Take more cases, earn more money!
                </p>
              </div>
            </article>

            <article>
              <span className="notes-feature-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 21h18" />
                  <path d="M5 21V7l7-4v18" />
                  <path d="M12 9h7v12" />
                  <path d="M8 9h1M8 13h1M8 17h1M15 13h1M15 17h1" />
                </svg>
              </span>
              <div>
                <h3>Agencies</h3>
                <p>
                  Grow your agency by giving more cases to your therapists. Our validation algorithm
                  ensures notes are 98% error-free, meaning fewer rejections. And therapists take 33%
                  more cases within 3 months of using the app.
                </p>
              </div>
            </article>
          </div>

          <a className="btn btn-primary btn-large notes-button" href="#signup" data-scroll="true">
            Request Demo
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m13 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="notes-visual">
          <img
            src="assets/session-notes-app.png"
            alt="Swellby Session Notes app displayed across three mobile phones"
          />
        </div>
      </section>
  );
}

