import React from "react";

export default function Header() {
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
        <a className="btn btn-outline" href="#login" data-scroll="true">Log In</a>
        <a className="btn btn-primary" href="#/join">Sign Up</a>
      </nav>
    </header>
  );
}

