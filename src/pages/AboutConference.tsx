import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Globe, Star } from 'lucide-react';
import './AboutConference.css';

const AboutConference = () => {
  const highlights = [
    { icon: <Globe size={24} />, title: 'International Scope', desc: 'Researchers from across India and abroad presenting cutting-edge work.' },
    { icon: <BookOpen size={24} />, title: 'Scopus Indexed', desc: 'Accepted papers published in Springer Nature proceedings, Scopus indexed.' },
    { icon: <Users size={24} />, title: '500+ Delegates', desc: 'Academics, industry professionals, students, and researchers under one roof.' },
    { icon: <Award size={24} />, title: 'Double-Blind Review', desc: 'Rigorous peer-review ensuring only the best research is accepted.' },
    { icon: <Star size={24} />, title: 'Second SDETM Edition', desc: 'Building on the success of the first SDETM conference with greater scope.' },
  ];

  return (
    <div className="about-conf-page">
      <div className="neural-background"></div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="about-conf-header"
        >
          <div className="hud-badge">
            <span className="scan-line"></span>
            <span className="hud-text">DOSSIER // SDETM_2026</span>
          </div>
          <h1 className="hud-title">About the Conference</h1>
        </motion.div>

        <div className="about-conf-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="about-conf-text hud-frame main-terminal"
          >
            <div className="hud-corner top-left"></div>
            <div className="hud-corner bottom-right"></div>
            <div className="terminal-header">
              <span className="terminal-title">CONFERENCE_OVERVIEW</span>
              <div className="terminal-dots"><span></span><span></span><span></span></div>
            </div>
            <div className="terminal-content">
              <h2 className="tech-heading">ICSDETM 2026</h2>
              <p className="hud-para">
                The <strong>International Conference on Sustainable Developments in Engineering, Technology & Management (ICSDETM 2026)</strong> is a premier academic forum hosted by Indira College of Engineering and Management (ICEM), Pune on <strong>4–5 November 2026</strong>.
              </p>
              <p className="hud-para">
                This conference brings together leading researchers, engineers, academics, industry professionals, and students to exchange ideas, present innovations, and foster collaboration in the rapidly evolving landscape of engineering and technology.
              </p>
              <p className="hud-para">
                Following the resounding success of the inaugural SDETM edition, the second conference expands its scope to cover a broader spectrum of themes — from advanced computing and AI to sustainable mechanical engineering and management innovation.
              </p>
              
              <div className="objective-box hud-frame mini">
                <h3 className="tech-subheading">CORE_OBJECTIVE</h3>
                <p className="hud-para small">
                  Provide a global platform for publishing and disseminating original research, creating networking opportunities, and inspiring the next generation of engineers. Accepted papers will be published by <strong>Springer Nature – Future Technology</strong> and indexed by <strong>SCOPUS</strong>.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="about-conf-highlights">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (idx + 1) }}
                className="highlight-card-hud hud-frame"
              >
                <div className="hud-corner top-right"></div>
                <div className="highlight-icon-wrapper">
                  {item.icon}
                </div>
                <div className="highlight-text">
                  <h3 className="highlight-title">{item.title}</h3>
                  <p className="highlight-desc">{item.desc}</p>
                </div>
                <div className="card-scan-line"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutConference;
