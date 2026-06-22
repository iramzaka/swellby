import React from "react";

export default function DirectorySection() {
  return (
<section className="directory-section" aria-labelledby="directory-title">
        <h2 id="directory-title">The Directory <span>your agency needs</span></h2>
        <p>
          Don't change the way you do coordinating. Supercharge it. We give your agency access to our
          free real-time directory. Keep your contact info, service abilities, and key information up
          to date and boost your presence with service coordinators in NYC Early Intervention.
        </p>

        <div className="directory-grid">
          <article>
            <img src="assets/directory-staff.png" alt="" />
            <h3>Increased billable units<br />&amp; a happier staff</h3>
            <span className="directory-rule" aria-hidden="true"></span>
            <p>Streamline your workflow and reduce admin time so your team can focus on what matters most.</p>
            <span className="directory-index">1</span>
          </article>

          <article>
            <img src="assets/directory-intake.png" alt="" />
            <h3>Supercharged Intake</h3>
            <span className="directory-rule directory-rule-orange" aria-hidden="true"></span>
            <p>Receive more referrals, faster. Our directory connects you with more service coordinators in real-time.</p>
            <span className="directory-index directory-index-orange">2</span>
          </article>

          <article>
            <img className="directory-hipaa-image" src="assets/directory-hipaa.png" alt="HIPAA compliant" />
            <h3>100% Safe and HIPAA Compliant</h3>
            <span className="directory-rule directory-rule-green" aria-hidden="true"></span>
            <p>Your data is protected with enterprise-grade security and fully HIPAA-compliant systems.</p>
            <span className="directory-index directory-index-green">3</span>
          </article>
        </div>
      </section>
  );
}

