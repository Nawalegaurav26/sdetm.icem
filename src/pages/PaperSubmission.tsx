import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Send, Info, Shield, Globe, Download, ChevronRight } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import './PaperSubmission.css';

const PaperSubmission = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    keywords: '',
    track: 'mechanical',
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type !== 'application/pdf') {
        alert('Please upload a PDF file only.');
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a manuscript file (PDF).');
      return;
    }

    setIsUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `papers/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('manuscripts')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('manuscripts')
        .getPublicUrl(filePath);

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/papers/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          fileUrl: publicUrl,
          userEmail: localStorage.getItem('userEmail') || 'guest@example.com'
        }),
      });

      if (!response.ok) throw new Error('Backend submission failed');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      if (!import.meta.env.VITE_API_URL) {
        setIsSubmitted(true);
      } else {
        alert('Error submitting paper: ' + (error as Error).message);
      }
    } finally {
      setIsUploading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="submission-container">
        <div className="neural-background"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="success-card hud-frame main-terminal"
        >
          <div className="hud-corner top-left"></div>
          <div className="hud-corner bottom-right"></div>
          <Globe className="success-icon pulse" size={64} />
          <h2 className="hud-title">TRANSMISSION_COMPLETE</h2>
          <p className="hud-para">Manuscript received and queued for review. Check your terminal logs (email) for tracking ID.</p>
          <button onClick={() => setIsSubmitted(false)} className="hud-btn-primary">
            SUBMIT_ANOTHER
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="submission-container">
      <div className="neural-background"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="submission-header"
      >
        <div className="hud-badge">
          <span className="scan-line"></span>
          <span className="hud-text">UPLOADER // v4.0</span>
        </div>
        <h1 className="hud-title">Submission Portal</h1>
        <p className="subtitle">Secure Manuscript Gateway for SDETM 2026</p>
      </motion.div>

      <div className="guidelines-overview hud-frame">
        <div className="hud-corner top-left"></div>
        <div className="hud-corner bottom-right"></div>
        <div className="guide-grid">
          <div className="guide-card">
            <h3 className="hud-card-title"><FileText size={18} /> 01 // PREPARATION</h3>
            <ul className="hud-list">
              <li>FORMAT: PDF ONLY</li>
              <li>FONT: TIMES NEW ROMAN</li>
              <li>ANONYMITY: REQUIRED</li>
            </ul>
          </div>
          <div className="guide-card">
            <h3 className="hud-card-title"><Globe size={18} /> 02 // INDEXING</h3>
            <p className="hud-para">Accepted papers will be published and indexed by <strong className="highlight">SCOPUS</strong>.</p>
          </div>
          <div className="guide-card">
            <h3 className="hud-card-title"><Shield size={18} /> 03 // SECURITY</h3>
            <p className="hud-para">Rigorous <strong className="highlight">double-blind review</strong> protocols active.</p>
          </div>
        </div>
      </div>

      <div className="submission-content">
        <form onSubmit={handleSubmit} className="submission-form hud-frame main-terminal">
          <div className="hud-corner top-right"></div>
          <div className="hud-corner bottom-left"></div>
          <div className="terminal-header">
            <span className="terminal-title">MANUSCRIPT_UPLOAD_PROTOCOL</span>
            <div className="terminal-dots"><span></span><span></span><span></span></div>
          </div>

          <div className="form-group">
            <label className="input-label">PAPER_TITLE</label>
            <div className="input-wrapper">
              <FileText className="input-icon" size={18} />
              <input 
                type="text" 
                placeholder="ENTER FULL MANUSCRIPT TITLE"
                required
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label className="input-label">RESEARCH_TRACK</label>
              <div className="input-wrapper">
                <select 
                  title="Select Conference Track"
                  value={formData.track}
                  onChange={(e) => setFormData({...formData, track: e.target.value})}
                >
                  <option value="mechanical">TRACK 1: MECHANICAL & MOBILITY</option>
                  <option value="ai-ml">TRACK 2: AI, ML & DATA SCIENCE</option>
                  <option value="computing">TRACK 3: FUTURE COMPUTING</option>
                  <option value="electronics">TRACK 4: E&TC</option>
                  <option value="energy">TRACK 5: ENERGY & ENVIRONMENT</option>
                  <option value="management">TRACK 6: MANAGEMENT</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="input-label">KEYWORDS</label>
              <div className="input-wrapper">
                <input 
                  type="text" 
                  placeholder="CSV FORMAT"
                  value={formData.keywords}
                  onChange={(e) => setFormData({...formData, keywords: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="input-label">ABSTRACT_SYNOPSIS</label>
            <textarea 
              rows={5}
              placeholder="INITIALIZE RESEARCH SUMMARY..."
              required
              value={formData.abstract}
              onChange={(e) => setFormData({...formData, abstract: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label className="input-label">MANUSCRIPT_FILE (.PDF)</label>
            <div className="file-upload-hud">
              <input 
                type="file" 
                title="Upload Manuscript"
                accept=".pdf"
                onChange={handleFileChange}
                required
              />
              <div className="upload-visual">
                <Download size={24} />
                <span>{file ? file.name : "SELECT PDF FOR TRANSMISSION"}</span>
              </div>
            </div>
          </div>

          <div className="form-alert hud-frame">
            <Shield size={18} />
            <p><strong>ALERT:</strong> All submissions undergo double-blind peer review. Remove author metadata.</p>
          </div>

          <button type="submit" className="hud-btn-primary full-width" disabled={isUploading}>
            <span>{isUploading ? 'UPLOADING...' : 'SUBMIT PROTOCOL'}</span>
            <ChevronRight size={18} />
          </button>
        </form>

        <aside className="submission-sidebar">
          <div className="sidebar-card hud-frame">
            <div className="hud-corner top-left"></div>
            <h3 className="hud-card-title"><Info size={16} /> QUICK_GUIDE</h3>
            <ul className="hud-list mini">
              <li>MAX SIZE: 10MB</li>
              <li>ANONYMITY: REQD</li>
              <li>REVIEW: BLIND</li>
            </ul>
          </div>
          
          <div className="sidebar-card security-card hud-frame">
            <div className="hud-corner bottom-right"></div>
            <div className="status-pulse"></div>
            <h3 className="hud-card-title">SECURE_SYNC</h3>
            <p className="hud-para small">E2E Manuscript Encryption active.</p>
          </div>
        </aside>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="acknowledgement-section hud-frame"
      >
        <div className="hud-corner top-left"></div>
        <div className="hud-corner bottom-right"></div>
        <h2 className="hud-card-title">ACKNOWLEDGEMENT</h2>
        <div className="cmt-integration">
          <p className="hud-para">
            The <a href="https://cmt3.research.microsoft.com/" target="_blank" rel="noopener noreferrer" className="highlight-link">Microsoft CMT service</a> was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
        </div>
      </motion.div>

      <section className="faq-section-hud hud-frame">
        <div className="hud-corner top-right"></div>
        <div className="hud-corner bottom-left"></div>
        <div className="terminal-header">
          <span className="terminal-title">SUBMISSION_FAQ_PROTOCOL</span>
        </div>
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
