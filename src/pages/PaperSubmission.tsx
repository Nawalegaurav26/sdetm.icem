import { FileText, Shield, Globe, Download, CheckCircle, ExternalLink, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import './PaperSubmission.css';

const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdgBVkHNhNqFHN9AJa8-pB_6vQZ9k0rHXLdmA_OaFkNpMUJIQ/viewform?embedded=true';
const GOOGLE_FORM_DIRECT_URL = 'https://forms.gle/c9gtHqSeiwB8kGsM6';

const PaperSubmission = () => {
  return (
    <div className="submission-container">
      <div className="neural-background"></div>

      {/* ── Page Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="submission-header"
      >
        <span className="section-subtitle">SDETM 2026 — INTERNATIONAL CONFERENCE</span>
        <h1 className="section-title">Paper Submission</h1>
        <p className="header-description">
          ICEM SDETM 2026 invites researchers and academicians to submit their original work.
          All submissions must adhere to the following technical and ethical guidelines.
        </p>
      </motion.div>

      {/* ── Guidelines Section ── */}
      <div className="guidelines-grid">

        {/* Main guidelines content */}
        <div className="guidelines-main">

          <section className="guide-section">
            <h2 className="guide-title"><FileText size={24} /> Manuscript Preparation</h2>
            <div className="guide-card">
              <ul className="guide-list">
                <li><strong>Format:</strong> Manuscript should be in LaTeX or MS Word (PDF format only).</li>
                <li><strong>Typography:</strong> Font: Times New Roman (TNR), Size: 12.</li>
                <li><strong>Spacing:</strong> 1.5 line spacing throughout the document.</li>
                <li><strong>Visuals:</strong> Include descriptive captions for each figure and table.</li>
                <li><strong>Originality:</strong> Manuscript should be original and must not have been published elsewhere.</li>
                <li><strong>Anonymity:</strong> Remove all author names and affiliations for double-blind review.</li>
              </ul>
            </div>
          </section>

          <section className="guide-section">
            <h2 className="guide-title"><Shield size={24} /> Review Process</h2>
            <div className="guide-card">
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                All manuscripts will undergo a <strong style={{ color: '#fff' }}>rigorous double-blind peer review process</strong>.
                Identity of the authors will be withheld from the reviewers and vice versa to ensure impartial evaluation.
              </p>
            </div>
          </section>

          <section className="guide-section">
            <h2 className="guide-title"><Globe size={24} /> Publication &amp; Indexing</h2>
            <div className="guide-card accent">
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                Accepted papers will be published in the conference proceedings, indexed by <strong style={{ color: '#43ccd1' }}>SCOPUS</strong>.
              </p>
              <p className="publication-note">
                Published by: SPRINGER NATURE, FUTURE TECHNOLOGY (Approval is in process).
              </p>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="guidelines-sidebar">
          <div className="sidebar-card download-card">
            <h3>Resources</h3>
            <p>Download the official templates to ensure your manuscript meets the formatting criteria.</p>
            <div className="download-actions">
              <button className="premium-btn premium-btn-primary full-width">
                <Download size={18} /> MS Word Template
              </button>
              <button className="premium-btn premium-btn-secondary full-width">
                <Download size={18} /> LaTeX Template
              </button>
            </div>
          </div>

          <div className="sidebar-card checklist-card">
            <h3>Submission Checklist</h3>
            <ul className="checklist">
              <li><CheckCircle size={16} /> PDF Format</li>
              <li><CheckCircle size={16} /> Double-Blind Ready</li>
              <li><CheckCircle size={16} /> TNR 12 + 1.5 Spacing</li>
              <li><CheckCircle size={16} /> Figures with Captions</li>
              <li><CheckCircle size={16} /> No Author Details in File</li>
            </ul>
          </div>

          <div className="sidebar-card">
            <h3>Tracks</h3>
            <ul className="guide-list">
              <li>Track 1: Mechanical &amp; Future Mobility</li>
              <li>Track 2: AI &amp; Machine Learning</li>
              <li>Track 3: Information Technology</li>
              <li>Track 4: Electronics &amp; Telecom</li>
              <li>Track 5: Advanced Computing</li>
              <li>Track 6: Business Innovation</li>
              <li>Track 7: Sustainable Practices</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Submission Form ── */}
      <div className="submission-form-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="form-section-header"
        >
          <h2 className="guide-title" style={{ justifyContent: 'center' }}>
            <FileText size={24} /> Submit Your Manuscript
          </h2>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Fill in the form below to submit your research paper for SDETM 2026.
            Your data is securely stored in our private conference database.
          </p>
        </motion.div>

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

            <div className="form-fallback">
              <p className="hud-para small">
                Form not loading?{' '}
                <a href={GOOGLE_FORM_DIRECT_URL} target="_blank" rel="noopener noreferrer" className="highlight-link">
                  Open in new tab <ExternalLink size={12} style={{ display: 'inline', marginLeft: '4px' }} />
                </a>
              </p>
            </div>
          </div>

          {/* Form Sidebar */}
          <aside className="submission-sidebar">
            <div className="sidebar-card hud-frame">
              <div className="hud-corner top-left"></div>
              <h3 className="hud-card-title"><Info size={16} /> QUICK GUIDE</h3>
              <ul className="hud-list mini">
                <li>MAX SIZE: 10MB</li>
                <li>FORMAT: PDF ONLY</li>
                <li>ANONYMITY: REQUIRED</li>
                <li>REVIEW: DOUBLE-BLIND</li>
              </ul>
            </div>

            <div className="sidebar-card security-card hud-frame">
              <div className="hud-corner bottom-right"></div>
              <div className="status-pulse"></div>
              <h3 className="hud-card-title">SECURE SUBMISSION</h3>
              <p className="hud-para small">
                Your data is encrypted and stored in our private conference database via Google Forms.
              </p>
            </div>

            <a
              href={GOOGLE_FORM_DIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-btn premium-btn-primary full-width"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none', marginTop: '0.5rem' }}
            >
              Open Full Form <ExternalLink size={14} />
            </a>
          </aside>
        </div>
      </div>

      {/* ── CMT Acknowledgement ── */}
      <div className="acknowledgement-section hud-frame">
        <div className="hud-corner top-left"></div>
        <div className="hud-corner bottom-right"></div>
        <h2 className="hud-card-title">ACKNOWLEDGEMENT</h2>
        <div className="cmt-integration">
          <p className="hud-para">
            The{' '}
            <a href="https://cmt3.research.microsoft.com/" target="_blank" rel="noopener noreferrer" className="highlight-link">
              Microsoft CMT service
            </a>{' '}
            was used for managing the peer-reviewing process for this conference. This service was provided for free
            by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software
            development and support.
          </p>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section className="faq-section-hud hud-frame">
        <div className="hud-corner top-right"></div>
        <div className="hud-corner bottom-left"></div>
        <div className="terminal-header">
          <span className="terminal-title">SUBMISSION_FAQ</span>
        </div>
        <div className="faq-grid">
          {[
            { q: 'What is the maximum file size?', a: 'The maximum file size for manuscript submission is 10MB. Ensure your PDF is optimised for web viewing.' },
            { q: 'Can I submit multiple papers?', a: 'Yes, each paper must be submitted separately through this form.' },
            { q: 'What is the template format?', a: 'MS Word / LaTeX (PDF export). Times New Roman 12pt, 1.5 line spacing.' },
            { q: 'Is there a submission fee?', a: 'No fee for submitting. Registration fees apply only after paper acceptance.' },
          ].map((item, i) => (
            <div key={i} className="faq-item-hud">
              <div className="faq-question">
                <span className="highlight">Q{i + 1} //</span>
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
