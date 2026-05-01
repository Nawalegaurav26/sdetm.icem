import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Award, Users, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import './AboutInstitute.css';

const AboutInstitute: React.FC = () => {
  return (
    <div className="about-page">
      {/* Background Ambience */}
      <div className="about-ambient-glow"></div>
      <div className="about-ambient-glow-2"></div>

      <div className="about-container">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="about-hero"
        >
          <div className="about-eyebrow">
            <Zap size={14} />
            <span>Academic Excellence</span>
          </div>
          <h1 className="about-title">
            Indira College of Engineering &amp; <span className="about-title-accent">Management</span>
          </h1>
          <p className="about-desc">
            Empowering the next generation of engineers with innovation, cutting-edge technology, and multidisciplinary research.
          </p>
        </motion.div>

        {/* Stats Strip */}
        <div className="about-stats-grid">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="about-stat-card"
          >
            <Award className="about-stat-icon" size={32} />
            <div>
              <p className="about-stat-val">NAAC B+</p>
              <p className="about-stat-label">Accredited Excellence</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="about-stat-card"
          >
            <ShieldCheck className="about-stat-icon" size={32} />
            <div>
              <p className="about-stat-val">Autonomous</p>
              <p className="about-stat-label">SPPU Affiliated</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="about-stat-card"
          >
            <Users className="about-stat-icon" size={32} />
            <div>
              <p className="about-stat-val">Indira Group</p>
              <p className="about-stat-label">Legacy of Quality</p>
            </div>
          </motion.div>
        </div>

        {/* Legacy Section */}
        <div className="about-legacy-section">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="about-legacy-glass"
          >
            <h2 className="about-section-heading">
              <span className="about-heading-accent"></span>
              Our Legacy
            </h2>
            <p className="about-legacy-text">
              Indira College of Engineering and Management (ICEM), Pune is a premier engineering institute established under the prestigious Indira Group of Institutes (IGI). Known for its academic rigor and state-of-the-art infrastructure, ICEM has become a cornerstone of technical education in Maharashtra.
            </p>
            <div className="about-highlights">
              <div className="about-highlight-item">
                <ArrowRight className="about-stat-icon" size={18} />
                <span>Industry-Focused Curriculum</span>
              </div>
              <div className="about-highlight-item">
                <ArrowRight className="about-stat-icon" size={18} />
                <span>World-Class Infrastructure & Labs</span>
              </div>
            </div>
          </motion.div>
          
          {/* Decorative graphic or image placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            style={{ position: 'relative', height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
             {/* A subtle glowing geometric representation */}
             <div style={{
               width: '250px', height: '250px', borderRadius: '50%',
               background: 'conic-gradient(from 180deg at 50% 50%, rgba(0,229,255,0.1) 0deg, rgba(0,229,255,0.02) 360deg)',
               border: '1px solid rgba(0,229,255,0.2)',
               boxShadow: '0 0 40px rgba(0,229,255,0.05)',
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               position: 'relative'
             }}>
                <div style={{
                  width: '150px', height: '150px', borderRadius: '50%',
                  border: '1px solid rgba(0,229,255,0.4)',
                  boxShadow: 'inset 0 0 20px rgba(0,229,255,0.2)'
                }}></div>
             </div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="about-vm-grid">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="about-vm-card highlight"
          >
            <div className="about-vm-header">
              <div className="about-vm-icon">
                <Target size={24} />
              </div>
              <h2 className="about-vm-title">Vision</h2>
            </div>
            <p className="about-vm-text">
              To be a globally recognized center of excellence in technical education, nurturing innovative leaders and entrepreneurs who contribute to the sustainable development of society and the advancement of global technology.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="about-vm-card"
          >
            <div className="about-vm-header">
              <div className="about-vm-icon">
                <BookOpen size={24} />
              </div>
              <h2 className="about-vm-title">Mission</h2>
            </div>
            <ul className="about-vm-list">
              <li>To provide high-quality engineering education through innovative teaching-learning processes.</li>
              <li>To foster a culture of research, innovation, and multidisciplinary collaboration.</li>
              <li>To strengthen industry-institute partnerships for real-world problem-solving.</li>
              <li>To instill ethical values and social responsibility in our students.</li>
            </ul>
          </motion.div>
        </div>

        {/* Academic Departments */}
        <div className="about-depts-section">
          <h2 className="about-section-heading">
            <span className="about-heading-accent"></span>
            Academic Departments
          </h2>
          <div className="about-depts-grid">
            {['Computer Engineering', 'AI & Data Science', 'Information Technology', 'Mechanical Engineering', 'Civil Engineering'].map((dept, index) => (
              <motion.div 
                key={dept} 
                className="about-dept-chip"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + (index * 0.05) }}
              >
                {dept}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutInstitute;
