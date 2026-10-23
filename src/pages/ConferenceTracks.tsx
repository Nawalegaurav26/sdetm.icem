import { motion } from 'framer-motion';
import { BrainCircuit, Monitor, Leaf, RadioTower, TrendingUp, Lightbulb, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import './ConferenceTracks.css';

const ConferenceTracks = () => {
  const tracks = [
    {
      id: 1,
      title: "AI & Machine Learning",
      icon: <BrainCircuit size={28} strokeWidth={1.5} />,
      description: "Intelligent systems, deep learning architectures, neural networks, natural language processing, and computer vision for next-generation intelligence.",
    },
    {
      id: 2,
      title: "Advanced Computing & IT",
      icon: <Monitor size={28} strokeWidth={1.5} />,
      description: "Cloud and edge computing, cybersecurity, distributed systems, quantum computing, big data analytics, and modern software architectures.",
    },
    {
      id: 3,
      title: "Mechanical & Sustainability",
      icon: <Leaf size={28} strokeWidth={1.5} />,
      description: "Advanced manufacturing, smart materials, thermal & fluid dynamics, renewable energy, eco-friendly systems, and circular engineering solutions.",
    },
    {
      id: 4,
      title: "Electrical & Electronics",
      icon: <RadioTower size={28} strokeWidth={1.5} />,
      description: "5G/6G communication, IoT & embedded sensors, VLSI design, smart grid technologies, robotics, and next-generation signal processing.",
    },
    {
      id: 5,
      title: "Management & Innovation",
      icon: <TrendingUp size={28} strokeWidth={1.5} />,
      description: "Digital transformation, sustainable operations management, technology policy, data-driven decision making, and strategic leadership.",
    },
    {
      id: 6,
      title: "Business Innovation & Entrepreneurship",
      icon: <Lightbulb size={28} strokeWidth={1.5} />,
      description: "Startup ecosystems, venture creation, fintech, agile business models, entrepreneurial strategies, and emerging market disruptions.",
    }
  ];

  return (
    <div className="tracks-page">
      <SEO 
        title="Conference Tracks & Research Domains" 
        description="Explore the 6 multidisciplinary research tracks of ICEM SDETM 2026: AI & Machine Learning, Advanced Computing & IT, Mechanical & Sustainability, Electrical & Electronics, Management & Innovation, and Business Innovation & Entrepreneurship." 
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
