import React from 'react';
import { motion } from 'framer-motion';
import './AboutInstitute.css';
import { BookOpen, Target, Award, Users, ShieldCheck, Zap } from 'lucide-react';

const AboutInstitute: React.FC = () => {
  return (
    <div className="about-institute">
      <div className="neural-background"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="institute-header"
      >
        <div className="hud-badge">
          <span className="scan-line"></span>
          <span className="hud-text">PROFILE // ICEM_ACADEMIC</span>
        </div>
        <h1 className="hud-title">Indira College of Engineering & Management</h1>
        <p className="subtitle">Empowering the next generation of engineers with innovation and multidisciplinary research.</p>
      </motion.div>

      <div className="stats-grid-hud">
        {[
          { icon: <Award size={24} />, title: "NAAC 'B+'", desc: "Accredited Excellence" },
          { icon: <ShieldCheck size={24} />, title: "Autonomous", desc: "SPPU Affiliated" },
          { icon: <Users size={24} />, title: "Indira Group", desc: "Legacy of Quality" }
        ].map((stat, idx) => (
          <div key={idx} className="stat-card-hud hud-frame">
            <div className="hud-corner top-left"></div>
            <div className="stat-icon-hud">{stat.icon}</div>
            <h3>{stat.title}</h3>
            <p>{stat.desc}</p>
          </div>
        ))}
      </div>

      <div className="content-section-hud hud-frame main-terminal">
        <div className="hud-corner top-right"></div>
        <div className="hud-corner bottom-left"></div>
        <div className="terminal-header">
          <span className="terminal-title">INSTITUTIONAL_LEGACY</span>
        </div>
        <div className="terminal-content">
          <h2 className="tech-heading">Our Legacy</h2>
          <p className="hud-para">
            Indira College of Engineering and Management (ICEM), Pune is a premier engineering institute 
            established under the prestigious Indira Group of Institutes (IGI). Known for its academic rigor 
            and state-of-the-art infrastructure, ICEM has become a cornerstone of technical education in Maharashtra.
          </p>
          <div className="highlights-hud">
            <div className="highlight-item-hud">
              <Zap size={16} className="highlight-icon" />
              <span>Industry-Focused Curriculum</span>
            </div>
            <div className="highlight-item-hud">
              <Zap size={16} className="highlight-icon" />
              <span>World-Class Infrastructure</span>
            </div>
          </div>
        </div>
      </div>

      <div className="vision-mission-grid-hud">
        <div className="vision-card-hud hud-frame">
          <div className="hud-corner top-left"></div>
          <div className="card-header-hud">
            <Target className="icon" size={20} />
            <h2 className="tech-subheading">VISION_SYSTEM</h2>
          </div>
          <p className="hud-para small">
            To be a globally recognized center of excellence in technical education, 
            nurturing innovative leaders and entrepreneurs who contribute to the 
            sustainable development of society.
          </p>
        </div>
        <div className="mission-card-hud hud-frame">
          <div className="hud-corner bottom-right"></div>
          <div className="card-header-hud">
            <BookOpen className="icon" size={20} />
            <h2 className="tech-subheading">MISSION_PROTOCOL</h2>
          </div>
          <ul className="hud-list mini">
            <li>Innovative teaching-learning processes</li>
            <li>Foster culture of research & innovation</li>
            <li>Strengthen industry-institute partnerships</li>
            <li>Instill ethical values and social responsibility</li>
          </ul>
        </div>
      </div>

      <div className="departments-section-hud hud-frame">
        <h2 className="terminal-title">ACADEMIC_DEPARTMENTS</h2>
        <div className="dept-grid-hud">
          {['Computer Engineering', 'AI & Data Science', 'Information Technology', 'Mechanical Engineering', 'Civil Engineering'].map((dept) => (
            <div key={dept} className="dept-pill-hud">
              {dept}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutInstitute;
