import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="contact-header"
        >
          <span className="section-subtitle">Get In Touch</span>
          <h1 className="section-title">Contact Us</h1>
          <p className="contact-intro">
            Have questions about NTAI 2026? Our organizing team is here to help. 
            Reach out to us and we'll respond within 48 hours.
          </p>
        </motion.div>

        <div className="contact-layout">
          {/* Info Cards */}
          <div className="contact-info-grid">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="info-card glass"
            >
              <div className="info-icon"><MapPin size={28} /></div>
              <div>
                <h3>Venue</h3>
                <p>Indira College of Engineering and Management (ICEM)</p>
                <p>Parandwadi Village, Maval Taluka, Pune – 410506, Maharashtra, India</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="info-card glass"
            >
              <div className="info-icon"><Globe size={28} /></div>
              <div>
                <h3>Conference Website</h3>
                <a href="https://www.indiraicem.ac.in" target="_blank" rel="noopener noreferrer">
                  www.indiraicem.ac.in
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="info-card glass"
            >
              <div className="info-icon"><Clock size={28} /></div>
              <div>
                <h3>Conference Date</h3>
                <p>4–5 November 2026</p>
                <p className="muted">Paper Submission Deadline: 31st July 2026</p>
              </div>
            </motion.div>
          </div>

          {/* Convenor Cards */}
          <div className="convenor-section">
            <h2 className="section-title-sm">Organizing Convenors</h2>
            <div className="convenors-grid">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="convenor-card glass"
              >
                <img
                  src="https://ui-avatars.com/api/?name=Saurabh+Gupta&background=00CED1&color=fff&size=200"
                  alt="Dr. Saurabh Gupta"
                />
                <div className="convenor-details">
                  <h3>Dr. Saurabh Gupta</h3>
                  <span className="badge">Convenor</span>
                  <p>HOD – Mechanical Engineering, ICEM</p>
                  <div className="contact-actions">
                    <a href="tel:+918380822479" className="contact-chip">
                      <Phone size={14} /> +91-8380822479
                    </a>
                    <a href="mailto:saurabhgupta@indiraicem.ac.in" className="contact-chip">
                      <Mail size={14} /> saurabhgupta@indiraicem.ac.in
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="convenor-card glass"
              >
                <img
                  src="https://ui-avatars.com/api/?name=Manjusha+Tatiya&background=7c3aed&color=fff&size=200"
                  alt="Dr. Manjusha Tatiya"
                />
                <div className="convenor-details">
                  <h3>Dr. Manjusha Tatiya</h3>
                  <span className="badge badge-purple">Co-Convenor</span>
                  <p>HOD – AI & Data Science, ICEM</p>
                  <div className="contact-actions">
                    <a href="tel:+919730019882" className="contact-chip">
                      <Phone size={14} /> +91-9730019882
                    </a>
                    <a href="mailto:manjusha.tatiya@indiraicem.ac.in" className="contact-chip">
                      <Mail size={14} /> manjusha.tatiya@indiraicem.ac.in
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="contact-form-card glass"
          >
            <h2 className="section-title-sm">Send a Message</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <input type="text" placeholder="Your Full Name" required />
                <input type="email" placeholder="Your Email Address" required />
              </div>
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your message..." rows={5} required></textarea>
              <button type="submit" className="premium-btn premium-btn-primary">
                <Mail size={18} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
