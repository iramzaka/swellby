import React, { useEffect, useState } from "react";

const legalDocuments = {
  terms: {
    title: "Swellby Terms and Agreement",
    intro: "Please review the subscription agreement below.",
    path: "assets/swellby-terms.txt",
    fallback: "Terms are temporarily unavailable. Please try again later.",
  },
  privacy: {
    title: "Swellby Privacy Policy",
    intro: "Please review how Swellby uses and safeguards information.",
    path: "assets/swellby-privacy.txt",
    fallback: "Privacy policy is temporarily unavailable. Please try again later.",
  },
  hipaa: {
    title: "Swellby HIPAA Statement",
    intro: "Please review Swellby's HIPAA compliance statement below.",
    path: "assets/swellby-hipaa.txt",
    fallback: "HIPAA statement is temporarily unavailable. Please try again later.",
  },
};

export default function Footer() {
  const [activeLegalDocument, setActiveLegalDocument] = useState(null);
  const [legalTextByType, setLegalTextByType] = useState({});
  const activeLegal = activeLegalDocument ? legalDocuments[activeLegalDocument] : null;
  const activeLegalText = activeLegalDocument ? legalTextByType[activeLegalDocument] : "";

  useEffect(() => {
    if (!activeLegalDocument || !activeLegal) return undefined;

    let isActive = true;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveLegalDocument(null);
    };

    document.body.classList.add("modal-open");
    document.addEventListener("keydown", handleKeyDown);

    if (!activeLegalText) {
      fetch(activeLegal.path)
        .then((response) => (response.ok ? response.text() : ""))
        .then((text) => {
          if (isActive) {
            setLegalTextByType((current) => ({
              ...current,
              [activeLegalDocument]: text,
            }));
          }
        })
        .catch(() => {
          if (isActive) {
            setLegalTextByType((current) => ({
              ...current,
              [activeLegalDocument]: activeLegal.fallback,
            }));
          }
        });
    }

    return () => {
      isActive = false;
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeLegalDocument, activeLegal, activeLegalText]);

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <a class="brand" href="#/home" aria-label="Swellby home">
        <img src="assets/swellby-logo.png" alt="Swellby" />
        </a>
        <p>Stronger connections for<br />early intervention teams.</p>
      </div>

      <nav className="footer-column footer-links" aria-label="Footer links">
        <h2>Quick Links</h2>
        <button className="footer-link-button" type="button" onClick={() => setActiveLegalDocument("terms")}>
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
              <path d="M14 2v6h6M8 13h8M8 17h6" />
            </svg>
          </span>
          Terms
        </button>
        <button className="footer-link-button" type="button" onClick={() => setActiveLegalDocument("privacy")}>
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-5" />
            </svg>
          </span>
          Privacy
        </button>
        <button className="footer-link-button" type="button" onClick={() => setActiveLegalDocument("hipaa")}>
          <span className="footer-icon-orange">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="5" y="10" width="14" height="11" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
          </span>
          HIPAA
        </button>
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
         <a class="" href="https://www.accountablehq.com/" target="_blank" rel="noopener noreferrer" aria-label="Swellby home">
        <img src="assets/accountable.png" alt="HIPAA compliant, powered by Accountable" />
        </a>
      </div>

      {activeLegal ? (
        <div className="terms-modal-backdrop" role="presentation" onMouseDown={() => setActiveLegalDocument(null)}>
          <div
            className="terms-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="terms-modal-close" type="button" onClick={() => setActiveLegalDocument(null)} aria-label="Close legal dialog">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12" />
                <path d="M18 6 6 18" />
              </svg>
            </button>

            <div className="terms-modal-header">
              <span className="terms-modal-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                  <path d="M14 2v6h6M8 13h8M8 17h6" />
                </svg>
              </span>
              <div>
                <h2 id="terms-modal-title">{activeLegal.title}</h2>
                <p>{activeLegal.intro}</p>
              </div>
            </div>

            <div className="terms-modal-body">
              <pre>{activeLegalText || "Loading..."}</pre>
            </div>

            <div className="terms-modal-actions">
              <button type="button" className="globalButtonStyle medium right modal-close modal-ok" onClick={() => setActiveLegalDocument(null)}>
                Ok
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </footer>
  );
}
