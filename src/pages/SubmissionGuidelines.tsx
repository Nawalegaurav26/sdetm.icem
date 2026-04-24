import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Download, CheckCircle, Shield, Globe, Send, HelpCircle } from 'lucide-react';
import './SubmissionGuidelines.css';

const SubmissionGuidelines = () => {
  return (
    <div className="guidelines-page">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="guidelines-header"
        >
          <span className="section-subtitle">Technical Track</span>
          <h1 className="section-title">Submission Guidelines</h1>
          <p className="header-description">
            ICEM SDETM 2026 invites researchers and academicians to submit their original work. 
            All submissions must adhere to the following technical and ethical guidelines.
          </p>
        </motion.div>

        <div className="guidelines-grid">
          <div className="guidelines-main">
            <section className="guide-section">
              <h2 className="guide-title"><FileText size={24} /> Manuscript Preparation</h2>
              <div className="guide-card">
                <ul className="guide-list">
                  <li><strong>Format:</strong> Manuscript should be in LaTex or MS Word (PDF format only).</li>
                  <li><strong>Typography:</strong> Font: Times New Roman (TNR), Size: 12.</li>
                  <li><strong>Spacing:</strong> 1.5 line spacing throughout the document.</li>
                  <li><strong>Visuals:</strong> Include descriptive captions for each figure and table.</li>
                  <li><strong>Originality:</strong> Manuscript should be original and must not have been published elsewhere.</li>
                </ul>
              </div>
            </section>

            <section className="guide-section">
              <h2 className="guide-title"><Shield size={24} /> Review Process</h2>
              <div className="guide-card">
                <p>
                  All manuscripts will undergo a <strong>rigorous double-blind peer review process</strong>. 
                  Identify of the authors will be withheld from the reviewers and vice versa to ensure impartial evaluation.
                </p>
              </div>
            </section>

            <section className="guide-section">
              <h2 className="guide-title"><Globe size={24} /> Publication & Indexing</h2>
              <div className="guide-card accent">
                <p>
                  Accepted papers will be published in the conference proceedings, indexed by <strong>SCOPUS</strong>.
                </p>
                <p className="publication-note">
                  Published by: SPRINGER NATURE, FUTURE TECHNOLOGY (Approval is in process).
                </p>
              </div>
            </section>
          </div>

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
              <h3>Ready to Submit?</h3>
              <ul className="checklist">
                <li><CheckCircle size={16} /> PDF Format</li>
                <li><CheckCircle size={16} /> Double-Blind Ready</li>
                <li><CheckCircle size={16} /> TNR 12 + 1.5 Spacing</li>
                <li><CheckCircle size={16} /> Figures with Captions</li>
              </ul>
              <Link to="/submission/submit" className="submit-portal-link">
                <button className="premium-btn premium-btn-secondary full-width submit-portal-btn">
                  <Send size={16} /> Open Submission Portal
                </button>
              </Link>

              <button 
                className="premium-btn premium-btn-primary full-width"
                onClick={() => window.open('https://cmt3.research.microsoft.com/', '_blank')}
              >
                Go to Microsoft CMT
              </button>
            </div>
          </div>
        </div>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="faq-section"
        >
          <h2 className="icem-gradient-text">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {[
              {
                q: "What is the maximum file size?",
                a: "The maximum file size allowed for manuscript submission is 10MB. Please ensure your PDF is optimized for web viewing."
              },
              {
                q: "Can I submit multiple papers?",
                a: "Yes, authors can submit multiple papers. Each paper must be submitted separately through the portal or via CMT."
              },
              {
                q: "What is the template format?",
                a: "Manuscripts should follow the standard IEEE/ICEM format (Double-column, Times New Roman). Templates are available in the Resources section."
              },
              {
                q: "Is there a submission fee?",
                a: "There is no fee for submitting a paper for review. Registration fees are only applicable after paper acceptance."
              }
            ].map((item, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question">
                  <HelpCircle size={18} />
                  <span>{item.q}</span>
                </div>
                <p className="faq-answer">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="acknowledgement-section"
        >
          <h2>Acknowledgement</h2>
          <p>
            The <a href="https://cmt3.research.microsoft.com/" target="_blank" rel="noopener noreferrer">Microsoft CMT service</a> was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SubmissionGuidelines;
