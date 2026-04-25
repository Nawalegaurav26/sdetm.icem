import { ArrowRight, Calendar, MapPin, Award, Terminal, Cpu, Users, Mic } from 'lucide-react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  const tracks = [
    { id: 1, title: 'Mechanical Engineering', desc: 'Emerging trends in thermal, design, and manufacturing.', icon: '🔧' },
    { id: 2, title: 'AI & Machine Learning', desc: 'Revolutionizing industries with intelligent algorithms.', icon: '🤖' },
    { id: 3, title: 'Information Technology', desc: 'Cloud, Cybersecurity, and Modern Dev Architectures.', icon: '💻' },
    { id: 4, title: 'Electronics & Telecom', desc: '5G, IoT, and Next-Gen Signal Processing.', icon: '📡' },
    { id: 5, title: 'Advanced Computing', desc: 'Quantum and High-Performance Computation.', icon: '⚡' },
    { id: 6, title: 'Business Innovation', desc: 'Evolving management practices in the digital age.', icon: '📈' },
    { id: 7, title: 'Sustainable Practices', desc: 'Green technology and eco-friendly engineering.', icon: '🌿' },
  ];

  const stats = [
    { value: '40+', label: 'Technical Tracks', icon: <Cpu size={24} /> },
    { value: '500+', label: 'Global Attendees', icon: <Users size={24} /> },
    { value: '15+', label: 'Keynote Speakers', icon: <Mic size={24} /> },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid-overlay"></div>
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-eyebrow">
              <Terminal size={14} />
              <span>Session Initialized // 2026</span>
            </div>
            <h1 className="hero-title">
              SDETM <span className="premium-gradient">2026</span>
            </h1>
            <h2 className="hero-subtitle">
              Sustainable Developments in Engineering, Technology & Management
            </h2>
            <p className="hero-description">
              Forging the future at the intersection of AI and Sustainability. Join global visionaries in Pune for the definitive technical summit of 2026.
            </p>
            
            <div className="hero-actions">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="premium-btn premium-btn-primary"
                onClick={() => window.location.href = '/registration'}
              >
                Register Now <ArrowRight size={18} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="premium-btn premium-btn-secondary"
                onClick={() => window.location.href = '/submission'}
              >
                Submit Paper
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="rotating-coin-container mb-8">
              <div className="coin">
                <div className="coin-face coin-front">
                  <img src="/sdetm-logo.png" alt="SDETM 2026" />
                </div>
                <div className="coin-face coin-back">
                  <img src="/icemlogo2.png" alt="ICEM" />
                </div>
              </div>
            </div>

            <div className="status-badge-hud">
              <div className="hud-corner-br"></div>
              <span className="badge-label">System Status</span>
              <div className="flex items-center mb-2">
                <span className="pulse-indicator"></span>
                <span className="badge-value">Active // Call for Papers</span>
              </div>
              <div className="badge-detail font-mono text-xs opacity-60">
                LATEST_UPDATE: 15-SEPT-2026
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Nodes (Stats) */}
      <section className="section-padding">
        <div className="container">
          <motion.div 
            className="data-nodes-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} className="data-node" variants={fadeInUp}>
                <div className="node-ring"></div>
                <div className="node-value">{stat.value}</div>
                <div className="node-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding relative">
        <div className="container">
          <motion.div 
            className="hud-frame"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">About The Conference</h2>
            <p className="text-large font-sub mb-8">
              The International Conference (SDETM, 2026) aims to bring together researchers, academicians, and industry professionals to exchange insights on NextGen Technology & AI for a Sustainable Future. We provide a neural node for knowledge sharing, innovation, and collaborative evolution.
            </p>
            <div className="scopus-hud">
              <div className="scopus-status-icon">
                <Award size={32} />
              </div>
              <div className="scopus-text">
                <h4>INDEXING_PROTOCOL // IN_PROGRESS</h4>
                <p>Conference proceedings are currently under Scopus indexing evaluation. Official proposal transmitted and under review.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conference Tracks */}
      <section className="section-padding">
        <div className="container">
          <div className="flex flex-col items-center mb-16">
            <span className="section-label">01 // TRACKS</span>
            <h2 className="section-title text-center">Research <span className="premium-gradient">Domains</span></h2>
          </div>
          <motion.div 
            className="tracks-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {tracks.map(track => (
              <motion.div key={track.id} className="track-card-hud" variants={fadeInUp}>
                <div className="track-image-wrap">
                  <img src={`/track-${track.id}.png`} alt={track.title} onError={(e) => (e.currentTarget as HTMLImageElement).src = '/icons.svg'} />
                  <div className="track-light-sweep"></div>
                </div>
                <div className="track-content-hud">
                  <span className="track-id">TRK_0{track.id}</span>
                  <h3 className="track-title">{track.title}</h3>
                  <p className="text-sm opacity-70 leading-relaxed">{track.desc}</p>
                </div>
                <div className="hud-corner-br"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Execution Sequence (Timeline) */}
      <section className="section-padding bg-icem-surface/30">
        <div className="container">
          <div className="flex flex-col items-center mb-16">
            <span className="section-label">02 // TIMELINE</span>
            <h2 className="section-title text-center">Execution <span className="premium-gradient">Sequence</span></h2>
          </div>
          <motion.div 
            className="execution-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { date: '31 JULY 2026', task: 'Submission of Full Length Paper' },
              { date: '15 SEPT 2026', task: 'Acceptance Notification', highlight: true },
              { date: '30 SEPT 2026', task: 'Registration Deadline' },
              { date: '04 NOV 2026', task: 'Conference Commencement' },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className={`execution-item ${item.highlight ? 'border-icem-cyan' : ''}`}
                variants={fadeInUp}
              >
                <span className="execution-date">{item.date}</span>
                <h3 className="execution-task">{item.task}</h3>
                <div className="scan-line"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location Intelligence */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <span className="section-label">03 // LOCATION</span>
              <h2 className="section-title mb-8">Ground <span className="premium-gradient">Intelligence</span></h2>
              <div className="hud-frame">
                <h3 className="text-xl text-white mb-4 font-heading">ICEM // PUNE</h3>
                <p className="text-muted mb-8 leading-relaxed">
                  Strategically located in the technical hub of Pune. Parandwadi, Somatne Phata, Maval.
                </p>
                <div className="grid grid-cols-2 gap-8 font-mono text-sm">
                  <div>
                    <span className="text-icem-cyan block mb-1">RAIL_NODE</span>
                    <span className="text-white">25 KM DIST</span>
                  </div>
                  <div>
                    <span className="text-icem-cyan block mb-1">AIR_NODE</span>
                    <span className="text-white">35 KM DIST</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="h-[400px] relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hud-frame h-full p-0 overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.892019777598!2d73.69611767519308!3d18.630046582457814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbf58145e3f3%3A0x60032f2f4c9c1b4b!2sIndira%20College%20of%20Engineering%20%26%20Management!5e0!3m2!1sen!2sin!4v1713721000000!5m2!1sen!2sin" 
                  className="w-full h-full border-0 grayscale invert opacity-80"
                  allowFullScreen={true} 
                  loading="lazy" 
                ></iframe>
                <div className="scan-line"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Help Desk */}
      <section className="section-padding bg-icem-surface/20">
        <div className="container">
          <motion.div 
            className="hud-frame"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <h2 className="section-title mb-4">Command Center</h2>
                <p className="text-muted max-w-xl">
                  Connect with our lead convenors for priority support regarding registrations and technical queries.
                </p>
              </div>
              <button 
                className="premium-btn premium-btn-primary"
                onClick={() => window.location.href = '/contact'}
              >
                Access Help Desk
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
