import { FileText, Shield, Globe, Download, CheckCircle, ExternalLink, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './PaperSubmission.css';

const GOOGLE_FORM_URL = 'https://forms.gle/c9gtHqSeiwB8kGsM6';

const faqs = [
  { q: 'What is the maximum file size?', a: 'Maximum file size is 10MB. Ensure your PDF is optimised for web.' },
  { q: 'Can I submit multiple papers?', a: 'Yes. Each paper must be submitted separately via the Google Form.' },
  { q: 'What template format is required?', a: 'MS Word or LaTeX, exported to PDF. Times New Roman 12pt, 1.5 line spacing.' },
  { q: 'Is there a submission fee?', a: 'No fee for submitting. Registration fees apply only after paper acceptance.' },
];

const PaperSubmission = () => {
  return (
    <div className="sub-page">

      {/* ── Hero ── */}
      <section className="sub-hero">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="sub-hero-inner"
        >
          <span className="sub-eyebrow">SDETM 2026 · International Conference</span>
          <h1 className="sub-hero-title">
            Paper <span className="sub-cyan">Submission</span>
          </h1>
          <p className="sub-hero-desc">
            Join global scholars at SDETM 2026. Submit your original research for review and
            publication in our SCOPUS-indexed international proceedings.
          </p>
        </motion.div>
      </section>

      {/* ── 3 Info Cards ── */}
      <section className="sub-cards-section">
        <div className="sub-container">
          <div className="sub-cards-row">
            {[
              {
                icon: <FileText size={28} />,
                title: 'Manuscript Format',
                desc: 'Submit in PDF format using Times New Roman 12pt with 1.5 line spacing for optimal readability. LaTeX or MS Word source accepted.',
              },
              {
                icon: <Shield size={28} />,
                title: 'Review Process',
                desc: 'Our double-blind peer review ensures scholarly integrity. Authors must remove all identifying information from manuscripts.',
              },
              {
                icon: <Globe size={28} />,
                title: 'Publication',
                desc: 'All accepted and presented papers will be published in the SDETM 2026 SCOPUS-indexed conference proceedings via Springer Nature.',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="sub-info-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="sub-card-icon">{card.icon}</span>
                <h3 className="sub-card-title">{card.title}</h3>
                <p className="sub-card-desc">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Submit Button ── */}
      <section className="sub-cta-section">
        <div className="sub-container sub-cta-inner">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="sub-cta-btn"
          >
            Submit via Google Form <ExternalLink size={18} />
          </a>
          <p className="sub-cta-note">Final Deadline: 31 July 2026</p>
        </div>
      </section>

      {/* ── Guidelines + Checklist ── */}
      <section className="sub-body-section">
        <div className="sub-container sub-two-col">

          {/* Left: Submission Guidelines */}
          <div className="sub-guidelines">
            <h2 className="sub-section-title">
              <span className="sub-accent-bar"></span>
              Submission Guidelines
            </h2>

            {[
              {
                heading: 'Originality Requirement',
                body: 'Submitted work must be original and not currently under review by any other conference or journal.',
              },
              {
                heading: 'Language',
                body: 'All manuscripts must be written in English with correct grammar and clear technical language.',
              },
              {
                heading: 'Formatting Standards',
                body: 'Font: Times New Roman 12pt · Line spacing: 1.5 · Format: PDF only (LaTeX / MS Word source). Include descriptive captions for all figures and tables.',
              },
              {
                heading: 'Anonymity for Double-Blind Review',
                body: 'Remove all author names, affiliations, acknowledgements and any self-identifying references from the submitted manuscript.',
              },
              {
                heading: 'Data Ethics',
                body: 'Authors are responsible for the ethical collection and use of data. Include any required ethics approval or declarations in a supplementary document.',
              },
            ].map((item, i) => (
              <div key={i} className="sub-guide-item">
                <ChevronRight size={18} className="sub-guide-icon" />
                <div>
                  <strong className="sub-guide-heading">{item.heading}</strong>
                  <p className="sub-guide-body">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Checklist + Downloads */}
          <div className="sub-sidebar">
            {/* Checklist */}
            <div className="sub-sidebar-card">
              <h3 className="sub-sidebar-title">Submission Checklist</h3>
              <ul className="sub-checklist">
                {[
                  'Anonymised PDF manuscript',
                  'High-resolution figures embedded',
                  'TNR 12pt · 1.5 line spacing',
                  'All references formatted correctly',
                  'Abstract ≤ 300 words',
                  'Keywords listed (3–6)',
                  'No self-identifying information',
                ].map((item, i) => (
                  <li key={i}>
                    <CheckCircle size={16} className="sub-check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Templates */}
            <div className="sub-sidebar-card">
              <h3 className="sub-sidebar-title">Templates</h3>
              <p className="sub-sidebar-desc">
                Download the official templates to ensure your manuscript meets formatting requirements.
              </p>
              <div className="sub-download-btns">
                <button className="sub-dl-btn sub-dl-primary">
                  <Download size={16} /> MS Word Template
                </button>
                <button className="sub-dl-btn sub-dl-secondary">
                  <Download size={16} /> LaTeX Template
                </button>
              </div>
            </div>

            {/* Tracks */}
            <div className="sub-sidebar-card">
              <h3 className="sub-sidebar-title">Conference Tracks</h3>
              <ul className="sub-tracks-list">
                {[
                  'Track 1: Mechanical & Future Mobility',
                  'Track 2: AI & Machine Learning',
                  'Track 3: Information Technology',
                  'Track 4: Electronics & Telecom',
                  'Track 5: Advanced Computing',
                  'Track 6: Business Innovation',
                  'Track 7: Sustainable Practices',
                ].map((t, i) => (
                  <li key={i}><ChevronRight size={13} />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CMT Acknowledgement ── */}
      <section className="sub-ack-section">
        <div className="sub-container">
          <div className="sub-ack-card">
            <p>
              The{' '}
              <a href="https://cmt3.research.microsoft.com/" target="_blank" rel="noopener noreferrer">
                Microsoft CMT service
              </a>{' '}
              was used for managing the peer-reviewing process for this conference. This service was provided
              for free by Microsoft and they bore all expenses, including costs for Azure cloud services as
              well as for software development and support.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sub-faq-section">
        <div className="sub-container">
          <h2 className="sub-section-title centered">
            <span className="sub-accent-bar centered-bar"></span>
            Frequently Asked Questions
          </h2>
          <div className="sub-faq-grid">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                className="sub-faq-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <p className="sub-faq-q">Q{i + 1}. {item.q}</p>
                <p className="sub-faq-a">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="sub-final-cta">
        <div className="sub-container sub-cta-inner">
          <h3 className="sub-final-title">Ready to Submit?</h3>
          <p className="sub-cta-note" style={{ marginBottom: '1.5rem' }}>
            Make sure you have reviewed all guidelines and your manuscript is properly anonymised.
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="sub-cta-btn"
          >
            Open Submission Form <ExternalLink size={18} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default PaperSubmission;
