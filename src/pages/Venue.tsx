import { motion } from 'framer-motion';
import { MapPin, Zap, Globe, Compass, Clock, Bus } from 'lucide-react';
import './Venue.css';

const Venue = () => {
  return (
    <div className="venue-page relative">
      {/* Background Ambience */}
      <div className="venue-ambient-glow"></div>
      <div className="venue-ambient-glow-2"></div>

      <div className="venue-container">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="venue-hero"
        >
          <div className="venue-eyebrow">
            <Zap size={14} />
            <span>Location // Intelligence</span>
          </div>
          <h1 className="venue-title">
            Conference <span className="venue-title-accent">Venue</span>
          </h1>
          <p className="venue-desc">
            Experience the SDETM 2026 conference at the cutting-edge Indira College of Engineering and Management (ICEM), strategically located in Pune's technical corridor.
          </p>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="venue-grid">
          
          {/* Left Column: Data Cards */}
          <div className="venue-info-stack">
            
            {/* Primary Address Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="venue-glass-card highlight"
            >
              <div className="venue-card-header">
                <div className="venue-icon-box">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="venue-card-title">Base Coordinates</h3>
                  <p className="venue-card-subtitle">Corporate Node / Pune</p>
                </div>
              </div>
              
              <address className="venue-address">
                Indira College of Engineering and Management (ICEM)<br />
                S.No. 64, 65, Gat No. 276, At Post: Parandwadi,<br />
                Near Somatne Phata, Tal: Maval,<br />
                Dist: Pune - 410 506, Maharashtra
              </address>

              <div className="venue-metrics">
                <div className="venue-metric-row">
                  <span className="venue-metric-label"><Bus size={14} /> Lonavala Station</span>
                  <span className="venue-metric-val">25 KM</span>
                </div>
                <div className="venue-metric-row">
                  <span className="venue-metric-label"><Globe size={14} /> Pune Airport</span>
                  <span className="venue-metric-val">35 KM</span>
                </div>
                <div className="venue-metric-row">
                  <span className="venue-metric-label"><Compass size={14} /> Mumbai (CBD)</span>
                  <span className="venue-metric-val">110 KM</span>
                </div>
              </div>
            </motion.div>

            {/* Registration Desk Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="venue-glass-card"
            >
              <div className="venue-card-header venue-card-header-mb">
                <div className="venue-icon-box venue-icon-box-small">
                  <Clock size={18} />
                </div>
                <div>
                  <h3 className="venue-card-title venue-card-title-small">Registration Desk</h3>
                </div>
              </div>
              <p className="venue-desk-text">
                Open from 08:30 AM on conference days at the Visvesvaraya Hall Foyer. Proceed here upon arrival for your badge and kit.
              </p>
            </motion.div>
          </div>

          {/* Right Column: HUD Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="venue-map-wrapper"
          >
            <iframe 
              className="venue-map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.892019777598!2d73.69611767519308!3d18.630046582457814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbf58145e3f3%3A0x60032f2f4c9c1b4b!2sIndira%20College%20of%20Engineering%20%26%20Management!5e0!3m2!1sen!2sin!4v1713721000000!5m2!1sen!2sin" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Conference Venue Map"
            ></iframe>
            
            {/* Map Decorative Overlays */}
            <div className="venue-map-hud">
              <div className="venue-map-scanner"></div>
              <div className="venue-map-corner venue-map-tl"></div>
              <div className="venue-map-corner venue-map-tr"></div>
              <div className="venue-map-corner venue-map-bl"></div>
              <div className="venue-map-corner venue-map-br"></div>
              <div className="venue-map-label">
                <MapPin size={12} />
                LIVE_FEED_ONLINE
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Venue;
