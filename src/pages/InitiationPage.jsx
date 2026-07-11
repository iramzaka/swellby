import React, { useEffect, useState } from "react";

const legalDocuments = {
  terms: {
    title: "Swellby Terms and Agreement",
    intro: "Please review the subscription agreement below.",
    path: "assets/swellby-terms.txt",
    fallback: "Terms are temporarily unavailable. Please try again later.",
  },
  baa: {
    title: "Business Associate Agreement",
    intro: "Please review the Business Associate Agreement below.",
    path: "assets/swellby-baa.txt",
    fallback: "Business Associate Agreement is temporarily unavailable. Please try again later.",
  },
};

const fields = [
  { id: "firstName", placeholder: "Contact First Name", type: "text" },
  { id: "lastName", placeholder: "Contact Last Name", type: "text" },
  { id: "agencyName", placeholder: "Agency Name", type: "text" },
  { id: "contactEmail", placeholder: "Contact Email", type: "email" },
  { id: "contactPhone", placeholder: "Contact Phone", type: "tel" },
];

export default function InitiationPage() {
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
    <main className="initiation-page" id="initiation-page">
      <section className="initiation-section" aria-labelledby="initiation-title">
        <div className="initiation-form-panel">
          {/* <span className="initiation-form-kicker">Start your agency profile</span> */}
          <h1 id="initiation-title">Create your Account</h1>
          <form className="initiation-form">
            {fields.map((field) => (
              <label className="initiation-field" key={field.id}>
                <span>{field.placeholder}</span>
                <input id={field.id} type={field.type} placeholder={field.placeholder} />
              </label>
            ))}

            <label className="initiation-agreement">
              <input type="checkbox" />
              <span>
                I agree to{" "}
                <button type="button" onClick={() => setActiveLegalDocument("terms")}>Terms</button>
                {" "}and{" "}
                <button type="button" onClick={() => setActiveLegalDocument("baa")}>BAA</button>
              </span>
            </label>

            <button className="initiation-submit" type="button">Join Now</button>
          </form>
        </div>
      </section>

      {activeLegal ? (
        <div className="terms-modal-backdrop" role="presentation" onMouseDown={() => setActiveLegalDocument(null)}>
          <div
            className="terms-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="initiation-legal-title"
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
                <h2 id="initiation-legal-title">{activeLegal.title}</h2>
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
    </main>
  );
}
