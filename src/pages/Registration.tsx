import { CreditCard, Info, Mail, Phone } from 'lucide-react';
import './Registration.css';

const Registration = () => {
  return (
    <div className="registration-page">
      <div className="neural-background"></div>
      <div className="container registration-grid">

        {/* Left Column: Fees & Payment */}
        <div className="registration-info">

          {/* Fee Table */}
          <section className="info-section hud-frame">
            <div className="hud-corner top-left"></div>
            <div className="hud-corner bottom-right"></div>
            <h2 className="hud-section-title">01 // REGISTRATION FEES</h2>
            <div className="fee-table-container">
              <table className="fee-table">
                <thead>
                  <tr>
                    <th>CATEGORY</th>
                    <th>INDIAN (₹)</th>
                    <th>FOREIGN ($)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Students / Research Scholars</td>
                    <td className="fee-value">2000</td>
                    <td className="fee-value">50</td>
                  </tr>
                  <tr>
                    <td>Faculty / Academicians</td>
                    <td className="fee-value">2500</td>
                    <td className="fee-value">65</td>
                  </tr>
                  <tr>
                    <td>Industry Professionals</td>
                    <td className="fee-value">5000</td>
                    <td className="fee-value">75</td>
                  </tr>
                  <tr>
                    <td>Co-Author Registration</td>
                    <td className="fee-value">1000</td>
                    <td className="fee-value">30</td>
                  </tr>
                </tbody>
              </table>
              <div className="hud-divider"></div>
              <p className="fee-note">** Additional fee will be applicable for SCOPUS publication (T&amp;C Apply)</p>
            </div>
          </section>

          {/* Bank Details */}
          <section className="info-section bank-details hud-frame">
            <div className="hud-corner top-right"></div>
            <div className="hud-corner bottom-left"></div>
            <h2 className="hud-section-title"><CreditCard size={18} /> 02 // PAYMENT PROTOCOL</h2>
            <div className="bank-card">
              <div className="bank-row"><span>ACCOUNT:</span> <strong>Indira College of Engineering &amp; Management</strong></div>
              <div className="bank-row"><span>BANK:</span> <strong>INDUSIND BANK LTD</strong></div>
              <div className="bank-row"><span>BRANCH:</span> <strong>Wakad, Pune</strong></div>
              <div className="bank-row"><span>IFSC:</span> <strong className="tech-code">INDB0000999</strong></div>
              <div className="bank-row"><span>ACCOUNT NO:</span> <strong className="tech-code">201025452641</strong></div>
              <div className="bank-row"><span>TYPE:</span> <strong>Current Account</strong></div>
            </div>
          </section>

          {/* Terms & Conditions */}
          <section className="info-section notes hud-frame">
            <div className="hud-corner top-left"></div>
            <h2 className="hud-section-title"><Info size={18} /> 03 // TERMS &amp; CONDITIONS</h2>
            <ul className="notes-list">
              <li>Registration fees shall not be refundable in case of any cancellation.</li>
              <li>Fees includes conference kit and food coupons for one author.</li>
              <li>Lodging &amp; boarding will be arranged by participants themselves.</li>
              <li>Local transport from Somatane can be arranged on prior request.</li>
              <li>No TA/DA will be provided to attend conference.</li>
            </ul>
          </section>
        </div>

        {/* Right Column: Contact & How to Register */}
        <div className="registration-form-wrapper">
          <div className="registration-glass hud-frame main-terminal">
            <div className="hud-corner top-left"></div>
            <div className="hud-corner top-right"></div>
            <div className="hud-corner bottom-left"></div>
            <div className="hud-corner bottom-right"></div>
            <div className="terminal-header">
              <span className="terminal-title">HOW_TO_REGISTER</span>
              <div className="terminal-dots"><span></span><span></span><span></span></div>
            </div>

            <div className="reg-step" style={{ padding: '2rem' }}>
              <div className="step-indicator">REGISTRATION PROCESS</div>
              <h2 className="hud-form-title">Registration Steps</h2>
              <p className="reg-description">Follow these steps to complete your conference registration.</p>

              <ol className="registration-steps-list">
                <li>
                  <span className="step-num">01</span>
                  <div>
                    <strong>Submit Your Paper</strong>
                    <p>First submit your manuscript via our <a href="/submission/submit" className="highlight-link">Submission Portal</a>.</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">02</span>
                  <div>
                    <strong>Receive Acceptance Letter</strong>
                    <p>Upon paper acceptance, you will receive a confirmation email with payment instructions.</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">03</span>
                  <div>
                    <strong>Make Payment</strong>
                    <p>Transfer the applicable fee to the IndusInd Bank account shown on the left.</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">04</span>
                  <div>
                    <strong>Send Payment Proof</strong>
                    <p>Email the payment screenshot / transaction ID to the convenors below.</p>
                  </div>
                </li>
              </ol>

              {/* Contact convenors */}
              <div className="convenor-contact-box">
                <h3 className="hud-card-title" style={{ marginBottom: '1rem' }}>CONTACT CONVENORS</h3>
                <div className="convenor-item">
                  <strong>Dr. Saurabh Gupta</strong>
                  <span>Convenor | HOD Mechanical</span>
                  <a href="mailto:saurabhgupta@indiraicem.ac.in" className="highlight-link">
                    <Mail size={14} /> saurabhgupta@indiraicem.ac.in
                  </a>
                  <a href="tel:+918380822479" className="highlight-link">
                    <Phone size={14} /> +91-8380822479
                  </a>
                </div>
                <div className="convenor-item">
                  <strong>Dr. Manjusha Tatiya</strong>
                  <span>Co-Convenor | HOD AI-DS</span>
                  <a href="mailto:manjusha.tatiya@indiraicem.ac.in" className="highlight-link">
                    <Mail size={14} /> manjusha.tatiya@indiraicem.ac.in
                  </a>
                  <a href="tel:+919730019882" className="highlight-link">
                    <Phone size={14} /> +91-9730019882
                  </a>
                </div>
              </div>
            </div>

            <div className="terminal-footer">
              <span className="terminal-status">REGISTRATION: OPEN</span>
              <span className="terminal-encoding">SDETM 2026</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Registration;
