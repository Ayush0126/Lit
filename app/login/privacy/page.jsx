import React from 'react'
import './privacy.css';

export default function Privacy() {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>

      <section className="privacy-section">
        <h2>1. Introduction</h2>
        <p>
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your personal information when
          you use our application.
        </p>
      </section>

      <section className="privacy-section">
        <h2>2. Information We Collect</h2>
        <ul>
          <li><strong>Personal Data:</strong> Name, email address, company name, contact number.</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent on each page, device and browser information.</li>
          <li><strong>Cookies & Tracking:</strong> We use cookies and similar technologies to improve your experience and analyze site traffic.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li><strong>To Provide Services:</strong> Account creation, authentication, and user support.</li>
          <li><strong>To Communicate:</strong> Respond to inquiries, send announcements, and updates.</li>
          <li><strong>To Improve Our App:</strong> Analyze usage patterns and optimize features.</li>
          <li><strong>For Compliance:</strong> Meet legal and regulatory requirements (e.g., invoicing, tax filings).</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>4. Data Sharing & Disclosure</h2>
        <ul>
          <li><strong>Service Providers:</strong> We engage third parties (e.g., hosting, analytics) under strict confidentiality.</li>
          <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights.</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your information may be transferred to the new owner.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>5. Data Security</h2>
        <p>
          We implement industry-standard security measures (encryption, access
          controls) to protect your data from unauthorized access, disclosure,
          alteration, or destruction.
        </p>
      </section>

      <section className="privacy-section">
        <h2>6. Your Rights</h2>
        <ul>
          <li><strong>Access & Correction:</strong> You may review and correct your personal information.</li>
          <li><strong>Deletion:</strong> You can request deletion of your account and personal data.</li>
          <li><strong>Objections:</strong> You have the right to object to certain processing activities.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>7. Retention</h2>
        <p>
          We retain personal data only as long as necessary for the purposes
          outlined above or as required by law (e.g., for tax recordkeeping).
        </p>
      </section>

      <section className="privacy-section">
        <h2>8. Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, please
          email us at <a href="mailto:privacy@example.com">privacy@example.com</a>.
        </p>
      </section>

      <p className="privacy-footer">Last updated: June 27, 2025</p>
    </div>
  )
}
