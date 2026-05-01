import { FileText, Globe, Shield, Info, ExternalLink } from 'lucide-react';
import './PaperSubmission.css';

const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdgBVkHNhNqFHN9AJa8-pB_6vQZ9k0rHXLdmA_OaFkNpMUJIQ/viewform?embedded=true';

const GOOGLE_FORM_DIRECT_URL = 'https://forms.gle/c9gtHqSeiwB8kGsM6';

const PaperSubmission = () => {
  return (
    <div className="submission-container">
      <div className="neural-background"></div>

      {/* Page Header */}
      <div className="submission-header">
        <div className="hud-badge">
          <span className="hud-text">PAPER SUBMISSION // SDETM 2026</span>
        </div>
        <h1 className="hud-title">Submit Your Manuscript</h1>
        <p className="subtitle">
          Secure submission portal for SDETM 2026 — powered by Google Forms
        </p>
      </div>

      {/* Info cards */}
      <div className="guidelines-overview hud-frame">
        <div className="hud-corner top-left"></div>
        <div className="hud-corner bottom-right"></div>
        <div className="guide-grid">
          <div className="guide-card">
            <h3 className="hud-card-title"><FileText size={18} /> 01 // PREPARATION</h3>
            <ul className="hud-list">
              <li>FORMAT: MS WORD / LaTeX (PDF)</li>
              <li>FONT: TIMES NEW ROMAN, 12PT</li>
              <li>SPACING: 1.5 LINE SPACING</li>
              <li>ANONYMITY: REQUIRED</li>
            </ul>
          </div>
          <div className="guide-card">
            <h3 className="hud-card-title"><Globe size={18} /> 02 // INDEXING</h3>
            <p className="hud-para">
              Accepted papers will be published and indexed by{' '}
              <strong className="highlight">SCOPUS</strong>.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="hud-card-title"><Shield size={18} /> 03 // SECURITY</h3>
            <p className="hud-para">
              Your data is encrypted and stored in our{' '}
              <strong className="highlight">private conference database</strong>.
              Rigorous double-blind review protocols active.
            </p>
          </div>
        </div>
      </div>

      {/* Main content: Form + Sidebar */}
      <div className="submission-content">

        {/* Google Form Embed */}
        <div className="google-form-wrapper hud-frame main-terminal">
          <div className="hud-corner top-right"></div>
          <div className="hud-corner bottom-left"></div>
          <div className="terminal-header">
            <span className="terminal-title">MANUSCRIPT_UPLOAD_PROTOCOL</span>
            <div className="terminal-dots"><span></span><span></span><span></span></div>
          </div>

          <div className="form-embed-container">
            <iframe
              src={GOOGLE_FORM_EMBED_URL}
              title="SDETM 2026 Paper Submission Form"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="google-form-iframe"
              allowFullScreen
            >
              Loading form...
            </iframe>
          </div>

          {/* Fallback direct link */}
          <div className="form-fallback">
            <p className="hud-para small">
              Form not loading?{' '}
              <a
                href={GOOGLE_FORM_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                Open in new tab <ExternalLink size={12} style={{ display: 'inline', marginLeft: '4px' }} />
              </a>
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="submission-sidebar">
          <div className="sidebar-card hud-frame">
            <div className="hud-corner top-left"></div>
            <h3 className="hud-card-title"><Info size={16} /> QUICK_GUIDE</h3>
            <ul className="hud-list mini">
              <li>MAX SIZE: 10MB</li>
              <li>FORMAT: PDF ONLY</li>
              <li>ANONYMITY: REQD</li>
              <li>REVIEW: DOUBLE-BLIND</li>
            </ul>
          </div>

          <div className="sidebar-card hud-frame">
            <div className="hud-corner top-right"></div>
            <h3 className="hud-card-title"><FileText size={16} /> TRACKS</h3>
            <ul className="hud-list mini">
              <li>Track 1: Mechanical Engg</li>
              <li>Track 2: AI & Machine Learning</li>
              <li>Track 3: Information Technology</li>
              <li>Track 4: Electronics & Telecom</li>
              <li>Track 5: Advanced Computing</li>
              <li>Track 6: Business Innovation</li>
              <li>Track 7: Sustainable Practices</li>
            </ul>
          </div>

          <div className="sidebar-card security-card hud-frame">
            <div className="hud-corner bottom-right"></div>
            <div className="status-pulse"></div>
            <h3 className="hud-card-title">SECURE_SYNC</h3>
            <p className="hud-para small">
              Submissions are securely stored in our private conference database via Google Forms.
            </p>
          </div>

          <a
            href={GOOGLE_FORM_DIRECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hud-btn-primary full-width text-center"
            style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}
          >
            Open Full Form <ExternalLink size={14} style={{ display: 'inline', marginLeft: '6px' }} />
          </a>
        </aside>
      </div>

      {/* CMT Acknowledgement */}
      <div className="acknowledgement-section hud-frame">
        <div className="hud-corner top-left"></div>
        <div className="hud-corner bottom-right"></div>
        <h2 className="hud-card-title">ACKNOWLEDGEMENT</h2>
        <div className="cmt-integration">
          <p className="hud-para">
            The{' '}
            <a
              href="https://cmt3.research.microsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              Microsoft CMT service
            </a>{' '}
            was used for managing the peer-reviewing process for this conference. This service was
            provided for free by Microsoft and they bore all expenses, including costs for Azure
            cloud services as well as for software development and support.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <section className="faq-section-hud hud-frame">
        <div className="hud-corner top-right"></div>
        <div className="hud-corner bottom-left"></div>
        <div className="terminal-header">
          <span className="terminal-title">SUBMISSION_FAQ_PROTOCOL</span>
        </div>
        <div className="faq-grid">
          {[
            {
              q: 'What is the maximum file size?',
              a: 'The maximum file size for manuscript submission is 10MB. Please ensure your PDF is optimized for web viewing.'
            },
            {
              q: 'Can I submit multiple papers?',
              a: 'Yes, authors can submit multiple papers. Each paper must be submitted separately through this form.'
            },
            {
              q: 'What is the template format?',
              a: 'Manuscripts should follow MS Word / LaTeX format (PDF export). Font: Times New Roman 12pt, 1.5 line spacing.'
            },
            {
              q: 'Is there a submission fee?',
              a: 'There is no fee for submitting a paper for review. Registration fees are only applicable after paper acceptance.'
            }
          ].map((item, index) => (
            <div key={index} className="faq-item-hud">
              <div className="faq-question">
                <span className="highlight">Q{index + 1} //</span>
                <span>{item.q}</span>
              </div>
              <p className="faq-answer">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PaperSubmission;
