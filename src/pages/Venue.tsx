import { motion } from 'framer-motion';
import { MapPin, Zap, Globe, Compass, Clock, Bus, Terminal as TerminalIcon, Satellite } from 'lucide-react';
import './Venue.css';

const Venue = () => {
  return (
    <div className="venue-page">
      <div className="container">
        {/* Header HUD */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="venue-hud-header"
        >
          <div className="hud-label">
            <Satellite size={14} className="animate-pulse text-icem-cyan" />
            <span>LOCATION // INTELLIGENCE</span>
          </div>
          <h1 className="hud-title display-lg">CONFERENCE <span className="premium-gradient">VENUE</span></h1>
          <p className="hud-subtitle">
            Experience SDETM 2026 at the Indira College of Engineering and Management (ICEM). 
            A sanctuary of innovation strategically positioned within Pune's high-growth technical corridor.
          </p>
        </motion.div>

        <div className="venue-hud-grid">
          {/* Intelligence Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hud-frame intel-terminal"
          >
            <div className="terminal-header">
              <div className="terminal-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="terminal-title">LOCATION_PROTOCOL_01</div>
            </div>

            <div className="terminal-content">
              <div className="location-badge">
                <MapPin size={32} className="text-icem-cyan" />
                <div>
                  <h3>INDIRA COLLEGE (ICEM)</h3>
                  <p>PARANDWADI // PUNE</p>
                </div>
              </div>

              <div className="hud-divider"></div>

              <address className="venue-address">
                S.No. 64, 65, Gat No. 276, At Post: Parandwadi,<br />
                Near Somatne Phata, Tal: Maval,<br />
                Dist: Pune - 410 506, Maharashtra, India
              </address>

              <div className="metrics-grid">
                {[
                  { icon: <Bus size={18} />, label: "RAIL NODE", value: "25 KM" },
                  { icon: <Globe size={18} />, label: "AIR NODE", value: "35 KM" },
                  { icon: <Compass size={18} />, label: "MUMBAI CBD", value: "110 KM" }
                ].map((metric, i) => (
                  <div key={i} className="metric-row">
                    <span className="metric-label">
                      {metric.icon}
                      {metric.label}
                    </span>
                    <span className="metric-value">{metric.value}</span>
                  </div>
                ))}
              </div>

              <div className="terminal-notice">
                <Clock size={16} className="text-icem-cyan" />
                <div className="notice-text">
                  <strong>REGISTRATION DESK</strong>
                  <p>Active from 08:30 AM | Visvesvaraya Hall Foyer</p>
                </div>
              </div>
            </div>

            <div className="terminal-footer">
              <span className="status">SECURE_LINK // ACTIVE</span>
              <span className="coords">18.6300° N, 73.6961° E</span>
            </div>
          </motion.div>

          {/* Map Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hud-frame map-terminal-frame"
          >
            <div className="terminal-header">
              <div className="terminal-title">SATELLITE_UPLINK // LIVE</div>
              <TerminalIcon size={14} className="text-icem-cyan opacity-50" />
            </div>

            <div className="map-view-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.892019777598!2d73.69611767519308!3d18.630046582457814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbf58145e3f3%3A0x60032f2f4c9c1b4b!2sIndira%20College%20of%20Engineering%20%26%20Management!5e0!3m2!1sen!2sin!4v1713721000000!5m2!1sen!2sin" 
                className="map-iframe"
                allowFullScreen={true} 
                loading="lazy" 
                title="Neural Location HUD"
              ></iframe>

              {/* HUD Overlays */}
              <div className="map-hud-overlay">
                <div className="scan-line-v"></div>
                <div className="hud-corner top-left"></div>
                <div className="hud-corner top-right"></div>
                <div className="hud-corner bottom-left"></div>
                <div className="hud-corner bottom-right"></div>
                
                <div className="hud-coords-badge">
                  <Zap size={10} className="animate-pulse" />
                  <span>SIGNAL_STRENGTH: 98%</span>
                </div>
              </div>
            </div>

            <div className="terminal-footer">
              <span className="status">GPS_LOCK: STABLE</span>
              <span className="zoom-level">ZOOM: 15.4x</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
