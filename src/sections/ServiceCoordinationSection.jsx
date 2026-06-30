import React from "react";

const features = [
  "Configurable fields and settings tailored to SC workflows",
  "Auto-calculate units and billing rates",
  "Electronic documentation, records, and signatures",
  "Custom templates and forms",
  "SC payroll calculation",
  "Electronic Billing",
];

export default function ServiceCoordinationSection() {
  return (
    <section
      className="service-coordination-section"
      id="service-coordination"
      aria-labelledby="service-coordination-title"
    >
      <div className="service-coordination-visual">
        <img
          src="assets/service-coordination-laptop.png"
          alt="Swellby service coordination notes dashboard on a laptop"
        />
      </div>

      <div className="service-coordination-content">


        <h2 id="service-coordination-title">
          Service Coordination Notes<br /><span>Digital Session Notes and Electronic Billing</span>
        </h2>
        <p>
          A complete SC module built for the way Early Intervention service coordination actually
          works. Configurable, compliant, and fully electronic.
        </p>

        <ul className="service-coordination-list">
          {features.map((feature) => (
            <li key={feature}>
              <span aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="m5 12 4 4L19 6" />
                </svg>
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <a className="btn btn-primary btn-large service-coordination-button" href="#/join">

          Request Demo
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m13 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
