import React from "react";

export default function Footer() {
  return (
<footer className="site-footer">
      <div className="footer-brand">
        <img src="assets/swellby-logo.png" alt="Swellby" />
        <p>Stronger connections for<br />early intervention teams.</p>
      </div>

      <nav className="footer-column footer-links" aria-label="Footer links">
        <h2>Quick Links</h2>
        <a href="#terms">
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
              <path d="M14 2v6h6M8 13h8M8 17h6" />
            </svg>
          </span>
          Terms
        </a>
        <a href="#privacy">
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-5" />
            </svg>
          </span>
          Privacy
        </a>
        <a href="#hipaa">
          <span className="footer-icon-orange">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="5" y="10" width="14" height="11" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
          </span>
          HIPAA
        </a>
      </nav>

      <div className="footer-column footer-contact">
        <span className="footer-heading-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </span>
        <h2>Contact Us</h2>
        <p>We're here to help!</p>
        <a href="mailto:support@swellby.com">support@swellby.com</a>
      </div>

      <div className="footer-column footer-copyright">
        <span className="footer-heading-icon footer-heading-icon-green">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-5" />
          </svg>
        </span>
        <h2>Copyright</h2>
        <p>&copy;2026 Swellby, Inc.<br />All Rights Reserved</p>
      </div>

      <div className="footer-badge" id="hipaa">
        <img src="assets/accountable.png" alt="HIPAA compliant, powered by Accountable" />
      </div>
    </footer>
  );
}

