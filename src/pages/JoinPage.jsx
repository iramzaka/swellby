import React from "react";

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
    number: "01",
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
    number: "02",
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
    number: "03",
  },
];

export default function JoinPage() {
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
            <article className={`join-choice-card join-choice-card-${option.theme}`} key={option.image}>
              <span className="join-choice-number" aria-hidden="true">{option.number}</span>
              <img src={option.image} alt={option.alt} />
              <h2>{option.title}</h2>
              <span className="join-choice-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14" />
                  <path d="m13 5 7 7-7 7" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
