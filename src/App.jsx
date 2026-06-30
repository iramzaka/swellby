import React, { useEffect, useState } from "react";
import { Footer, Header } from "./components/index.js";
import { HomePage, JoinPage, NotesAppPage, PricingPage } from "./pages/index.js";

const getRoute = () => {
  if (window.location.hash === "#/join") return "join";
  if (window.location.hash === "#/pricing") return "pricing";
  if (window.location.hash === "#/notes-app") return "notes-app";
  return "home";
};

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

    if (route !== "home" || hash === "#/home") {
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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let observer;
    const frame = window.requestAnimationFrame(() => {
      const revealItems = Array.from(document.querySelectorAll("main section > *"));

      revealItems.forEach((item, index) => {
        item.classList.remove("is-visible", "reveal-from-left", "reveal-from-right");
        item.classList.add("reveal-on-scroll", index % 2 === 0 ? "reveal-from-left" : "reveal-from-right");
      });

      if (!("IntersectionObserver" in window)) {
        revealItems.forEach((item) => item.classList.add("is-visible"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
      );

      revealItems.forEach((item) => observer.observe(item));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
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
      {route === "join" ? <JoinPage /> : route === "pricing" ? <PricingPage /> : route === "notes-app" ? <NotesAppPage /> : <HomePage />}
      <Footer />
    </>
  );
}
