import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Globe, Star } from 'lucide-react';
import SEO from '../components/SEO';
import './AboutConference.css';

const AboutConference = () => {
  const highlights = [
    { icon: <Globe size={28} />, title: 'International Scope', desc: 'Researchers from across India and abroad presenting cutting-edge work.' },
    { icon: <BookOpen size={28} />, title: 'Scopus Indexed', desc: 'Accepted papers published in Springer Nature proceedings, Scopus indexed.' },
    { icon: <Users size={28} />, title: '500+ Delegates', desc: 'Academics, industry professionals, students, and researchers under one roof.' },
    { icon: <Award size={28} />, title: 'Double-Blind Review', desc: 'Rigorous peer-review ensuring only the best research is accepted.' },
    { icon: <Star size={28} />, title: 'Second SDETM Edition', desc: 'Building on the success of the first SDETM conference with greater scope.' },
  ];

  return (
    <div className="about-conf-page">
      <SEO 
        title="About ICSDETM 2026" 
        description="Learn more about the International Conference on Sustainable Developments in Engineering, Technology & Management. Discover our objectives, highlights, and Scopus indexed publication opportunities." 
      />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="about-conf-header"
        >
          <span className="section-subtitle">SDETM 2026</span>
          <h1 className="section-title">About the Conference</h1>
        </motion.div>

        <div className="about-conf-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="about-conf-text glass"
          >
            <h2>ICSDETM 2026</h2>
            <p>
              The <strong>International Conference on Sustainable Developments in Engineering, Technology & Management (ICSDETM 2026)</strong> is a premier academic forum hosted by Indira College of Engineering and Management (ICEM), Pune on <strong>4–5 November 2026</strong>.
            </p>
            <p>
              This conference brings together leading researchers, engineers, academics, industry professionals, and students to exchange ideas, present innovations, and foster collaboration in the rapidly evolving landscape of engineering and technology.
            </p>
            <p>
              Following the resounding success of the inaugural SDETM edition, the second conference expands its scope to cover a broader spectrum of themes — from advanced computing and AI to sustainable mechanical engineering and management innovation.
            </p>
            <h2 className="about-conf-objective-title">Objective</h2>
            <p>
              The conference aims to provide a global platform for publishing and disseminating original research, creating networking opportunities for academics and industry leaders, and inspiring the next generation of engineers and innovators. Accepted papers will be published in conference proceedings indexed by <strong>SCOPUS</strong>, published by <strong>Springer Nature – Future Technology</strong>.
            </p>
          </motion.div>

          <div className="about-conf-highlights">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (idx + 1) }}
                className="highlight-card glass"
              >
                <div className="highlight-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutConference;
