import React, { useEffect, useState } from "react";

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    if (!isLoginOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsLoginOpen(false);
    };

    document.body.classList.add("modal-open");
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLoginOpen]);

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
        {/* <a href="#/notes-app">Session Notes App</a> */}
        <a href="#/pricing">Pricing</a>
        <span className="nav-divider" aria-hidden="true"></span>
        <button className="btn btn-outline login-trigger" type="button" onClick={() => setIsLoginOpen(true)}>Log In</button>
        <a className="btn btn-primary" href="#/join">Sign Up</a>
      </nav>

      {isLoginOpen ? (
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
                  <label className="label" htmlFor="email">* Email:</label>
                  <input type="text" id="email" className="trigger input" placeholder="Your Email" />
                </div>
                <div className="formRow login-field-row">
                  <label className="label" htmlFor="password">* Password:</label>
                  <input type="password" id="password" className="trigger input" placeholder="********" />
                </div>
                <div className="formRow login-submit-row">
                  <a id="forgotPW" className="fSizeS" href="#">forgot password</a>
                  <input id="loginSubmit" type="button" className="globalButtonStyle medium right do-login" value="Log In" />
                </div>
                <div onKeyPress={() => true}></div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
