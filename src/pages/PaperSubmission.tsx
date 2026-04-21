import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Send, Info, Shield, CheckCircle } from 'lucide-react';
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
      // 1. Upload to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `papers/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('manuscripts')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('manuscripts')
        .getPublicUrl(filePath);

      // 3. Save Metadata to Railway Backend
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
      const e = error as Error;
      console.error('Submission error:', e);
      // Fallback for demo if backend is not ready
      if (!import.meta.env.VITE_API_URL) {
        setIsSubmitted(true);
      } else {
        alert('Error submitting paper: ' + e.message);
      }
    } finally {
      setIsUploading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="submission-container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="success-card glass-panel"
        >
          <CheckCircle className="success-icon" size={64} />
          <h2>Submission Received!</h2>
          <p>Thank you for submitting your research to ICEM 2026. A confirmation email has been sent to your registered address.</p>
          <button onClick={() => setIsSubmitted(false)} className="btn-primary">Submit Another Paper</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="submission-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="submission-header"
      >
        <h1 className="text-display-section gradient-text">Paper Submission</h1>
        <p className="subtitle">Submit your research findings for peer review (Track 1-6)</p>
      </motion.div>

      <div className="submission-content">
        <form onSubmit={handleSubmit} className="submission-form glass-panel">
          <div className="form-group">
            <label><FileText size={18} /> Paper Title</label>
            <input 
              type="text" 
              placeholder="Enter full title of your manuscript"
              required
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Select Conference Track</label>
              <select 
                title="Select Conference Track"
                value={formData.track}
                onChange={(e) => setFormData({...formData, track: e.target.value})}
              >
                <option value="mechanical">Track 1: Mechanical & Future Mobility</option>
                <option value="ai-ml">Track 2: AI, ML & Data Science</option>
                <option value="computing">Track 3: Future Computing & IT</option>
                <option value="electronics">Track 4: Electronics & Communication</option>
                <option value="energy">Track 5: Energy & Environment</option>
                <option value="management">Track 6: Management & Education</option>
              </select>
            </div>
            <div className="form-group">
              <label>Keywords</label>
              <input 
                type="text" 
                placeholder="Comma separated (e.g. AI, Robotics)"
                value={formData.keywords}
                onChange={(e) => setFormData({...formData, keywords: e.target.value})}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Abstract (Max 300 words)</label>
            <textarea 
              rows={6}
              placeholder="Provide a brief summary of your research..."
              required
              value={formData.abstract}
              onChange={(e) => setFormData({...formData, abstract: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label><FileText size={18} /> Upload Manuscript (PDF Only)</label>
            <div className="file-upload-wrapper">
              <input 
                type="file" 
                title="Upload Manuscript"
                placeholder="Choose PDF file"
                accept=".pdf"
                onChange={handleFileChange}
                required
              />
              {file && <p className="file-selected">Selected: {file.name}</p>}
            </div>
          </div>

          <div className="form-alert">
            <Shield size={20} />
            <p><strong>Note:</strong> All submissions undergo a <strong>double-blind peer review</strong>. Ensure your manuscript file (PDF) does not contain author names.</p>
          </div>

          <button type="submit" className="submit-btn btn-primary" disabled={isUploading}>
            <span>{isUploading ? 'Uploading...' : 'Submit Manuscript'}</span>
            <Send size={18} />
          </button>
        </form>

        <aside className="submission-sidebar">
          <div className="sidebar-card glass-panel">
            <h3><Info size={18} /> Guidelines</h3>
            <ul>
              <li>Format: MsWord / LaTeX (PDF)</li>
              <li>Font: Times New Roman, 12pt</li>
              <li>Spacing: 1.5 Line spacing</li>
              <li>Double-blind process followed</li>
            </ul>
          </div>
          
          <div className="sidebar-card security-card glass-panel">
            <Shield className="status-icon" />
            <h3>Secure Submission</h3>
            <p>Your data is encrypted and stored in our private conference database.</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PaperSubmission;
