import React, { useEffect, useState } from "react";
import { Footer, Header } from "./components/index.js";
import { HomePage, JoinPage } from "./pages/index.js";

const getRoute = () => (window.location.hash === "#/join" ? "join" : "home");

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;

    if (route === "join" || hash === "#/home") {
      const frame = window.requestAnimationFrame(() => window.scrollTo({ top: 0 }));
      const timeout = window.setTimeout(() => window.scrollTo({ top: 0 }), 120);
      return () => {
        window.cancelAnimationFrame(frame);
        window.clearTimeout(timeout);
      };
    }

    if (route === "home" && hash.startsWith("#") && !hash.startsWith("#/")) {
      window.requestAnimationFrame(() => {
        const target = document.querySelector(hash);
        if (target) {
          window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 82 });
        }
      });
    }
  }, [route]);

  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const nav = document.querySelector("[data-nav]");
    const toggle = document.querySelector("[data-menu-toggle]");

    const syncHeader = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 8);
    };

    const closeMenu = () => {
      nav?.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    };

    const handleToggle = () => {
      if (!nav || !toggle) return;
      const isOpen = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    };

    const handleScrollLink = (event) => {
      const link = event.target.closest("[data-scroll]");
      if (!link) return;

      const targetId = link.getAttribute("href");
      const target = targetId ? document.querySelector(targetId) : null;
      if (!target) return;

      event.preventDefault();
      closeMenu();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 82,
        behavior: "smooth",
      });
    };

    const handleKeyUp = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
    toggle?.addEventListener("click", handleToggle);
    document.addEventListener("click", handleScrollLink);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("scroll", syncHeader);
      toggle?.removeEventListener("click", handleToggle);
      document.removeEventListener("click", handleScrollLink);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <>
      <Header />
      {route === "join" ? <JoinPage /> : <HomePage />}
      <Footer />
    </>
  );
}
