import { FileText, Shield, Globe, CheckCircle, ChevronRight, Calendar, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import './PaperSubmission.css';

/*
 * IMPORTANT — CMT ACKNOWLEDGMENT REQUIREMENT:
 * The text below MUST remain as a plain <p> element — no bold, italic, or strong tags.
 * It must be visible in rendered HTML per Microsoft CMT guidelines.
 */
const CMT_ACK_TEXT =
  'The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.';

const authorGuidelines = [
  { label: 'Paper Format', detail: 'IEEE or Springer format (template available on the conference website).' },
  { label: 'Page Limit', detail: 'Minimum 6 pages and maximum 8 pages, including figures, tables, and references.' },
  { label: 'Language', detail: 'Papers must be written in English with correct grammar and technical accuracy.' },
  { label: 'Plagiarism Policy', detail: 'Similarity index must be below 20%. Papers failing plagiarism checks will be rejected without review.' },
  { label: 'Originality', detail: 'Manuscripts must be original, unpublished, and not currently under review elsewhere.' },
  { label: 'Registration', detail: 'At least one author of each accepted paper must register and present at the conference.' },
];

const submissionGuidelines = [
  { label: 'File Format', detail: 'Submit manuscripts in PDF format only. MS Word or LaTeX source files used to generate the PDF.' },
  { label: 'Font & Formatting', detail: 'Times New Roman, 12pt, 1.5 line spacing. Include captions for all figures and tables.' },
  { label: 'Blind Review', detail: 'All papers undergo double-blind peer review. Remove all author names, affiliations, and identifying references from the manuscript file.' },
  { label: 'Anonymisation', detail: 'The submitted PDF must not contain author information. Failure to anonymise will result in desk rejection.' },
  { label: 'Figures & Tables', detail: 'All figures must be high-resolution (min 300 DPI). Tables should be formatted and numbered sequentially.' },
];

const importantDates = [
  { label: 'Paper Submission Deadline', date: '31 July 2026', icon: <Calendar size={20} /> },
  { label: 'Acceptance Notification', date: '15 September 2026', icon: <CheckCircle size={20} /> },
  { label: 'Registration Deadline', date: '30 September 2026', icon: <AlertCircle size={20} /> },
];

const faqs = [
  { q: 'What is the maximum file size for submission?', a: 'Maximum file size is 10 MB. Ensure your PDF is optimised for digital distribution.' },
  { q: 'Can multiple papers be submitted by the same author?', a: 'Yes. Each paper must be submitted independently through Microsoft CMT, with a separate registration for each accepted paper.' },
  { q: 'What happens after submission?', a: 'Your paper undergoes double-blind peer review. You will receive a notification of acceptance or rejection by 15 September 2026.' },
  { q: 'Is there a submission fee?', a: 'There is no fee for submitting a paper. Registration fees apply only after acceptance of your paper.' },
];



const PaperSubmission = () => {
  return (
    <div className="sub-page">
      <SEO 
        title="Call for Papers"
        description="Submit your research to ICEM SDETM 2026. Peer-reviewed publication in Scopus-indexed proceedings. Guidelines for Mechanical, AI, IT, and Management tracks."
      />

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
            Call For Papers &amp; <span className="sub-cyan">Submission</span>
          </h1>
          <p className="sub-hero-desc">
            ICEM SDETM 2026 invites researchers, academicians and industry professionals to submit
            original work for review and publication in SCOPUS-indexed proceedings.
          </p>
        </motion.div>
      </section>

      {/* ── WHERE TO SUBMIT (CMT) ── */}
      <section className="sub-cmt-section">
        <div className="sub-container">
          <motion.div
            className="sub-cmt-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="sub-cmt-left">
              <span className="sub-cmt-badge">Where to Submit</span>
              <h2 className="sub-cmt-title">Submission via Microsoft CMT</h2>
              <p className="sub-cmt-desc">
                Submission will be done through Microsoft CMT. The submission link will be
                available soon. Please check back closer to the submission deadline.
              </p>
            </div>
            <div className="sub-cmt-right">
              <div className="sub-cmt-coming-soon">
                <Globe size={22} />
                <span>CMT Link — Coming Soon</span>
              </div>
              <p className="sub-cmt-hint">
                Visit{' '}
                <a href="https://cmt3.research.microsoft.com/" target="_blank" rel="noopener noreferrer">
                  cmt3.research.microsoft.com
                </a>{' '}
                for more information.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── IMPORTANT DATES ── */}
      <section className="sub-dates-section">
        <div className="sub-container">
          <h2 className="sub-section-title">
            <span className="sub-accent-bar"></span>
            Important Dates
          </h2>
          <div className="sub-dates-row">
            {importantDates.map((d, i) => (
              <motion.div
                key={i}
                className="sub-date-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="sub-date-icon">{d.icon}</span>
                <p className="sub-date-label">{d.label}</p>
                <p className="sub-date-value">{d.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUIDELINES (two columns) ── */}
      <section className="sub-body-section">
        <div className="sub-container sub-two-col">

          {/* Author Guidelines */}
          <div>
            <h2 className="sub-section-title">
              <span className="sub-accent-bar"></span>
              Author Guidelines
            </h2>
            {authorGuidelines.map((item, i) => (
              <div key={i} className="sub-guide-item">
                <ChevronRight size={18} className="sub-guide-icon" />
                <div>
                  <strong className="sub-guide-heading">{item.label}</strong>
                  <p className="sub-guide-body">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Submission Guidelines */}
          <div>
            <h2 className="sub-section-title">
              <span className="sub-accent-bar"></span>
              Submission Guidelines
            </h2>
            {submissionGuidelines.map((item, i) => (
              <div key={i} className="sub-guide-item">
                <Shield size={18} className="sub-guide-icon" />
                <div>
                  <strong className="sub-guide-heading">{item.label}</strong>
                  <p className="sub-guide-body">{item.detail}</p>
                </div>
              </div>
            ))}

            {/* Submission checklist */}
            <div className="sub-checklist-card">
              <h3 className="sub-sidebar-title">Pre-Submission Checklist</h3>
              <ul className="sub-checklist">
                {[
                  'Manuscript anonymised (no author info)',
                  'PDF format, ≤ 10 MB',
                  'TNR 12pt · 1.5 line spacing',
                  'Abstract ≤ 300 words',
                  'Keywords listed (3–6 terms)',
                  'All figures with captions',
                  'References formatted (IEEE / Springer)',
                ].map((item, i) => (
                  <li key={i}>
                    <CheckCircle size={15} className="sub-check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ── TRACKS (info cards) ── */}
      <section className="sub-tracks-section">
        <div className="sub-container">
          <h2 className="sub-section-title">
            <span className="sub-accent-bar"></span>
            Conference Tracks
          </h2>
          <div className="sub-tracks-grid">
            {[
              { num: '01', title: 'Mechanical Engineering & Future Mobility', icon: <FileText size={20} /> },
              { num: '02', title: 'Artificial Intelligence & Machine Learning', icon: <FileText size={20} /> },
              { num: '03', title: 'Information Technology & Computing', icon: <FileText size={20} /> },
              { num: '04', title: 'Electronics & Telecommunication Engineering', icon: <FileText size={20} /> },
              { num: '05', title: 'Advanced Computing & Data Science', icon: <FileText size={20} /> },
              { num: '06', title: 'Business Innovation & Management', icon: <FileText size={20} /> },
              { num: '07', title: 'Sustainable Practices & Green Technology', icon: <Globe size={20} /> },
            ].map((t, i) => (
              <motion.div
                key={i}
                className="sub-track-chip"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <span className="sub-track-num">{t.num}</span>
                <span className="sub-track-title">{t.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CMT ACKNOWLEDGMENT (PLAIN TEXT — DO NOT ADD BOLD/ITALIC) ── */}
      <section className="sub-ack-section">
        <div className="sub-container">
          <div className="sub-ack-card">
            <h3 className="sub-ack-label">Acknowledgment</h3>
            {/* ⚠ CMT REQUIREMENT: This paragraph must remain plain text with no formatting tags */}
            <p className="sub-ack-text">{CMT_ACK_TEXT}</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sub-faq-section">
        <div className="sub-container">
          <h2 className="sub-section-title sub-section-title-center">
            <span className="sub-accent-bar"></span>
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

      {/* ── FINAL NOTE ── */}
      <section className="sub-final-cta">
        <div className="sub-container sub-cta-inner">
          <h3 className="sub-final-title">Submission Portal Opening Soon</h3>
          <p className="sub-cta-note">
            The Microsoft CMT submission link will be activated before the deadline.
            Prepare your manuscript as per the guidelines above.
          </p>
        </div>
      </section>

    </div>
  );
};

export default PaperSubmission;
