import React from 'react';
import './AboutInstitute.css';
import { BookOpen, Target, Award, Users, ShieldCheck, Zap } from 'lucide-react';

const AboutInstitute: React.FC = () => {
  return (
    <div className="about-institute">
      <div className="institute-hero">
        <div className="hero-content">
          <span className="badge">Academic Excellence</span>
          <h1>Indira College of Engineering & Management</h1>
          <p className="subtitle">Empowering the next generation of engineers with innovation and multidisciplinary research.</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <Award className="icon" />
          <h3>NAAC 'B+'</h3>
          <p>Accredited Excellence</p>
        </div>
        <div className="stat-card">
          <ShieldCheck className="icon" />
          <h3>Autonomous</h3>
          <p>SPPU Affiliated</p>
        </div>
        <div className="stat-card">
          <Users className="icon" />
          <h3>Indira Group</h3>
          <p>Legacy of Quality</p>
        </div>
      </div>

      <div className="content-section glass-card">
        <div className="text-content">
          <h2>Our Legacy</h2>
          <p>
            Indira College of Engineering and Management (ICEM), Pune is a premier engineering institute 
            established under the prestigious Indira Group of Institutes (IGI). Known for its academic rigor 
            and state-of-the-art infrastructure, ICEM has become a cornerstone of technical education in Maharashtra.
          </p>
          <div className="highlights">
            <div className="highlight-item">
              <Zap className="highlight-icon" />
              <span>Industry-Focused Curriculum</span>
            </div>
            <div className="highlight-item">
              <Zap className="highlight-icon" />
              <span>World-Class Infrastructure</span>
            </div>
          </div>
        </div>
      </div>

      <div className="vision-mission-grid">
        <div className="vision-card glass-card">
          <div className="card-header">
            <Target className="icon" />
            <h2>Vision</h2>
          </div>
          <p>
            To be a globally recognized center of excellence in technical education, 
            nurturing innovative leaders and entrepreneurs who contribute to the 
            sustainable development of society.
          </p>
        </div>
        <div className="mission-card glass-card">
          <div className="card-header">
            <BookOpen className="icon" />
            <h2>Mission</h2>
          </div>
          <ul>
            <li>To provide high-quality engineering education through innovative teaching-learning processes.</li>
            <li>To foster a culture of research, innovation, and multidisciplinary collaboration.</li>
            <li>To strengthen industry-institute partnerships for real-world problem-solving.</li>
            <li>To instill ethical values and social responsibility in our students.</li>
          </ul>
        </div>
      </div>

      <div className="departments-section">
        <h2 className="section-title">Academic Departments</h2>
        <div className="dept-grid">
          {['Computer Engineering', 'AI & Data Science', 'Information Technology', 'Mechanical Engineering', 'Civil Engineering'].map((dept) => (
            <div key={dept} className="dept-pill">
              {dept}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutInstitute;
