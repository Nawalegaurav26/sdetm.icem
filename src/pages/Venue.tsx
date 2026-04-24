import { motion } from 'framer-motion';
import { MapPin, Zap, Globe, Compass, Clock, Bus } from 'lucide-react';
import './Venue.css';

const Venue = () => {
  return (
    <div className="venue-page">
      <section className="venue-hero hero-section relative overflow-hidden">
        <div className="container hero-container pt-32 pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="venue-header mb-12"
          >
            <div className="label-hud mb-4">
              <Zap size={14} />
              <span>Location // Intelligence</span>
            </div>
            <h1 className="hero-title display-lg mb-6">
              Conference <span className="premium-gradient">Venue</span>
            </h1>
            <p className="hero-description max-w-2xl">
              Experience the SDETM 2026 conference at the cutting-edge Indira College of Engineering and Management (ICEM), strategically located in Pune's technical corridor.
            </p>
          </motion.div>

          <div className="venue-grid grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Venue Intel */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8 border-l-4 border-brand-primary"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-badge p-3 bg-brand-primary/10 rounded-full text-brand-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Full Address</h3>
                    <p className="text-sm text-brand-primary">Corporate Node / Pune</p>
                  </div>
                </div>
                <address className="not-italic text-muted leading-relaxed mb-6">
                  Indira College of Engineering and Management (ICEM)<br />
                  S.No. 64, 65, Gat No. 276, At Post: Parandwadi,<br />
                  Near Somatne Phata, Tal: Maval,<br />
                  Dist: Pune - 410 506, Maharashtra
                </address>
                <div className="hud-line mb-6"></div>
                <div className="venue-metrics-stack space-y-4">
                  <div className="metric-row flex justify-between items-center text-sm">
                    <span className="text-muted flex items-center gap-2"><Bus size={14} /> Lonavala Station</span>
                    <span className="text-white font-mono">25 KM</span>
                  </div>
                  <div className="metric-row flex justify-between items-center text-sm">
                    <span className="text-muted flex items-center gap-2"><Globe size={14} /> Pune Airport</span>
                    <span className="text-white font-mono">35 KM</span>
                  </div>
                  <div className="metric-row flex justify-between items-center text-sm">
                    <span className="text-muted flex items-center gap-2"><Compass size={14} /> Mumbai (CBD)</span>
                    <span className="text-white font-mono">110 KM</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Clock size={20} className="text-brand-primary" />
                  <h4 className="text-white font-bold">Registration Desk</h4>
                </div>
                <p className="text-sm text-muted">
                  Open from 08:30 AM on conference days at the Visvesvaraya Hall Foyer.
                </p>
              </motion.div>
            </div>

            {/* Right: Interactive HUD Map */}
            <div className="lg:col-span-7 h-full min-h-[500px]">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="map-container-hud h-full relative"
              >
                <div className="map-frame-hud h-full glass-card overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.892019777598!2d73.69611767519308!3d18.630046582457814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbf58145e3f3%3A0x60032f2f4c9c1b4b!2sIndira%20College%20of%20Engineering%20%26%20Management!5e0!3m2!1sen!2sin!4v1713721000000!5m2!1sen!2sin" 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Conference Venue Map"
                  ></iframe>
                  <div className="map-overlay-hud">
                    <div className="scanner-line"></div>
                    <div className="corner cor-tl"></div>
                    <div className="corner cor-tr"></div>
                    <div className="corner cor-bl"></div>
                    <div className="corner cor-br"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Venue;
