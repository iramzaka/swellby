import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (!isLoginOpen && !isContactOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsLoginOpen(false);
        setIsContactOpen(false);
      }
    };

    document.body.classList.add("modal-open");
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLoginOpen, isContactOpen]);

  return (
    <header className="site-header" data-header="true">
      <a className="brand" href="#/home" aria-label="Swellby home">
        <img src="assets/swellby-logo.png" alt="Swellby" />
      </a>

      <button className="nav-toggle" type="button" aria-label="Open navigation" aria-expanded="false" data-menu-toggle="true">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className="site-nav" aria-label="Primary navigation" data-nav="true">
        <button className="nav-link-button nav-menu-item" type="button" onClick={() => setIsContactOpen(true)}>Contact Us</button>
        <a className="nav-menu-item" href="#/pricing">Pricing</a>
        <span className="nav-divider" aria-hidden="true"></span>
        <button className="btn btn-outline login-trigger" type="button" onClick={() => setIsLoginOpen(true)}>Log In</button>
        <a className="btn btn-primary" href="#/join">Sign Up</a>
      </nav>

      {isLoginOpen ? createPortal(
        <div className="login-modal-backdrop" role="presentation" onMouseDown={() => setIsLoginOpen(false)}>
          <div
            className="login-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="login-modal-close" type="button" onClick={() => setIsLoginOpen(false)} aria-label="Close login dialog">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12" />
                <path d="M18 6 6 18" />
              </svg>
            </button>

            <div className="modalContentsWrapper">
              <div className="formBody trigger login-form-body">
                <div id="login-modal-title" className="formRow fSizeXXL fColorSWBlue">Log In</div>
                <div className="formRow login-field-row">
                  <input type="email" id="email" className="trigger input" placeholder="Email address" aria-label="Email address" />
                </div>
                <div className="formRow login-field-row">
                  <input type="password" id="password" className="trigger input" placeholder="Password" aria-label="Password" />
                </div>
                <div className="formRow login-submit-row">
                  <a id="forgotPW" className="fSizeS" href="#">forgot password</a>
                  <input id="loginSubmit" type="button" className="globalButtonStyle medium right do-login" value="Log In" />
                </div>
                <div onKeyPress={() => true}></div>
              </div>
            </div>
          </div>
        </div>,
        document.body,
      ) : null}

      {isContactOpen ? createPortal(
        <div className="login-modal-backdrop" role="presentation" onMouseDown={() => setIsContactOpen(false)}>
          <div
            className="login-modal request-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="login-modal-close" type="button" onClick={() => setIsContactOpen(false)} aria-label="Close contact dialog">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12" />
                <path d="M18 6 6 18" />
              </svg>
            </button>

            <div className="modalContentsWrapper">
              <form className="formBody trigger request-form-body">
                <div id="contact-modal-title" className="formRow fSizeXXL fColorSWBlue">Contact Us</div>
                <input type="text" className="trigger input request-input" placeholder="First Name" />
                <input type="text" className="trigger input request-input" placeholder="Last Name" />
                <input type="text" className="trigger input request-input" placeholder="Agency Name" />
                <input type="email" className="trigger input request-input" placeholder="Email" />
                <input type="tel" className="trigger input request-input" placeholder="Phone" />
                <textarea className="trigger input request-input request-textarea" placeholder="What's on your mind?"></textarea>
                <button type="button" className="globalButtonStyle medium right do-login request-submit" onClick={() => setIsContactOpen(false)}>Send</button>
              </form>
            </div>
          </div>
        </div>,
        document.body,
      ) : null}
    </header>
  );
}
