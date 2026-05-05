import { motion } from 'framer-motion';
import { PenTool, BrainCircuit, Monitor, RadioTower, Zap, TrendingUp, Leaf } from 'lucide-react';
import SEO from '../components/SEO';
import './ConferenceTracks.css';

const ConferenceTracks = () => {
  const tracks = [
    {
      id: 1,
      title: "Mechanical Engineering",
      icon: <PenTool size={28} strokeWidth={1.5} />,
      description: "Emerging trends in thermal, design, and manufacturing.",
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      icon: <BrainCircuit size={28} strokeWidth={1.5} />,
      description: "Revolutionizing industries with intelligent algorithms and neural networks.",
    },
    {
      id: 3,
      title: "Information Technology",
      icon: <Monitor size={28} strokeWidth={1.5} />,
      description: "Cloud infrastructure, Cybersecurity, and Modern Dev Architectures.",
    },
    {
      id: 4,
      title: "Electronics & Telecom",
      icon: <RadioTower size={28} strokeWidth={1.5} />,
      description: "5G integration, IoT ecosystems, and Next-Gen Signal Processing.",
    },
    {
      id: 5,
      title: "Advanced Computing",
      icon: <Zap size={28} strokeWidth={1.5} />,
      description: "Quantum computation and High-Performance scalable architectures.",
    },
    {
      id: 6,
      title: "Business Innovation",
      icon: <TrendingUp size={28} strokeWidth={1.5} />,
      description: "Evolving management practices and analytics in the digital age.",
    },
    {
      id: 7,
      title: "Sustainable Practices",
      icon: <Leaf size={28} strokeWidth={1.5} />,
      description: "Green technology, sustainable energy, and eco-friendly engineering solutions.",
    }
  ];

  return (
    <div className="tracks-page">
      <SEO 
        title="Conference Tracks & Research Domains" 
        description="Explore the multidisciplinary research tracks of ICEM 2026. From AI and Machine Learning to Sustainable Practices and Business Innovation. View our technical domains." 
      />
      {/* Background Ambience */}
      <div className="tracks-ambient-glow"></div>

      <div className="tracks-container">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="tracks-hero"
        >
          <div className="tracks-eyebrow">
            <Zap size={14} />
            <span>Research Domains</span>
          </div>
          <h1 className="tracks-title">
            Technical <span className="tracks-title-accent">Tracks</span>
          </h1>
          <p className="tracks-desc">
            Explore the diverse domains of research to be presented. Submit your original, 
            unpublished work under one of the following multidisciplinary conference tracks.
          </p>
        </motion.div>

        {/* Tracks Grid */}
        <div className="tracks-grid">
          {tracks.map((track, index) => (
            <motion.div 
              key={track.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="track-glass-card"
            >
              <div className="track-hud-number">TRACK_0{index + 1}</div>
              
              <div className="track-header">
                <div className="track-icon-wrapper">
                  {track.icon}
                </div>
                <h3 className="track-title">{track.title}</h3>
              </div>
              
              <p className="track-desc">{track.description}</p>
              
              <div className="track-footer-hud">
                <div className="track-hud-dot"></div>
                <div className="track-hud-line"></div>
                <div className="track-hud-dot"></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ConferenceTracks;
