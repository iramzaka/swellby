import React, { useEffect, useState } from "react";

const joinOptions = [
  {
    title: (
      <>
        I am a <strong>therapist</strong> and
        <br />
        want to use the digital
        <br />
        <strong>session notes app</strong>
      </>
    ),
    image: "assets/join-therapist-modern.png",
    alt: "Therapist using the Swellby digital session notes app",
    theme: "blue",
    modal: {
      title: "Get Session Notes App",
      message:
        "First, your agency needs to send you an invitation to use the app. Then go to the Apple App Store or Google Play Store on your mobile device and download the Session Notes app.",
    },
  },
  {
    title: (
      <>
        I am an <strong>OSC or Staffer</strong> -
        <br />
        I work at an agency that
        <br />
        is <strong>already on Swellby</strong>
      </>
    ),
    image: "assets/join-staffer-modern.png",
    alt: "Agency staff member using Swellby",
    theme: "orange",
    modal: {
      title: "Join Existing Agency",
      message:
        "Find a Swellby Admin at your agency (usually an owner or manager) and ask them to go to Settings and send you an invitation.",
    },
  },
  {
    title: (
      <>
        I <strong>own/manage an agency</strong> -
        <br />
        We are not yet on Swellby
        <br />
        but we <strong>wish to join</strong>
      </>
    ),
    image: "assets/join-agency-modern.png",
    alt: "Agency joining Swellby",
    theme: "green",
    requestForm: true,
  },
];

export default function JoinPage() {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    if (!activeModal) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveModal(null);
    };

    document.body.classList.add("modal-open");
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);

  return (
    <main className="join-page" id="join-page">
      <section className="join-choice-section" aria-labelledby="join-choice-title">

        <h1 id="join-choice-title">
          Which best describes <span>how you wish to join?</span>
        </h1>
        <p className="join-choice-copy">Choose the option that fits you best. We&apos;ll guide you from there.</p>
        <span className="join-choice-rule" aria-hidden="true"></span>

        <div className="join-choice-grid">
          {joinOptions.map((option) => (
            <article className={`join-choice-card join-choice-card-${option.theme}${option.modal || option.requestForm ? " join-choice-card-clickable" : ""}`} key={option.image}>
              {option.modal ? (
                <button
                  className="join-choice-card-action"
                  type="button"
                  onClick={() => setActiveModal(option.modal)}
                  aria-haspopup="dialog"
                >
                  <img src={option.image} alt={option.alt} />
                  <h2>{option.title}</h2>
                  <span className="join-choice-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M5 12h14" />
                      <path d="m13 5 7 7-7 7" />
                    </svg>
                  </span>
                </button>
              ) : option.requestForm ? (
                <button
                  className="join-choice-card-action"
                  type="button"
                  onClick={() => setActiveModal({ title: "Sign Up/Demo Request", requestForm: true })}
                  aria-haspopup="dialog"
                >
                  <img src={option.image} alt={option.alt} />
                  <h2>{option.title}</h2>
                  <span className="join-choice-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M5 12h14" />
                      <path d="m13 5 7 7-7 7" />
                    </svg>
                  </span>
                </button>
              ) : (
                <>
                  <img src={option.image} alt={option.alt} />
                  <h2>{option.title}</h2>
                  <span className="join-choice-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M5 12h14" />
                      <path d="m13 5 7 7-7 7" />
                    </svg>
                  </span>
                </>
              )}
            </article>
          ))}
        </div>
      </section>

      {activeModal ? (
        <div className="join-modal-backdrop" role="presentation" onMouseDown={() => setActiveModal(null)}>
          <div
            className="join-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="alertTitle"
            aria-describedby={activeModal.requestForm ? undefined : "alertMessage"}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="join-modal-close" type="button" onClick={() => setActiveModal(null)} aria-label="Close dialog">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12" />
                <path d="M18 6 6 18" />
              </svg>
            </button>

            <div className="modalContentsWrapper">
              <div className="formBody">
                {activeModal.requestForm ? (
                  <>
                    <div id="alertTitle" className="formRow fSizeXXL fColorSWBlue signup-request-title">Sign Up/Demo Request</div>
                    <form className="request-form-body">
                      <input type="text" className="trigger input request-input" placeholder="First Name" />
                      <input type="text" className="trigger input request-input" placeholder="Last Name" />
                      <input type="text" className="trigger input request-input" placeholder="Agency Name" />
                      <input type="email" className="trigger input request-input" placeholder="Email" />
                      <input type="tel" className="trigger input request-input" placeholder="Phone" />
                      <button type="button" className="globalButtonStyle medium right do-login request-submit" onClick={() => setActiveModal(null)}>Send</button>
                    </form>
                  </>
                ) : (
                  <>
                    <span className="join-modal-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      </svg>
                    </span>
                    <div id="alertTitle" className="formRow fSizeXXL fColorSWBlue">{activeModal.title}</div>
                    <div id="alertMessage" className="formRow">
                      {activeModal.message}
                    </div>
                    <div className="formRowSubmit">
                      <button id="modalInfoOkButton" type="button" className="globalButtonStyle medium right modal-close modal-ok" onClick={() => setActiveModal(null)}>
                        Ok
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
