import { motion } from 'framer-motion';
import { MapPin, Zap, Globe, Compass, Clock, Bus } from 'lucide-react';
import './Venue.css';

const Venue = () => {
  return (
    <div className="venue-page overflow-hidden">
      <section className="venue-hero relative pt-32 pb-20">
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="venue-header mb-16"
          >
            <div className="label-hud mb-6">
              <Zap size={14} className="animate-pulse" />
              <span>LOCATION // INTELLIGENCE</span>
            </div>
            <h1 className="display-lg mb-6 leading-tight">
              Conference <span className="premium-gradient">Venue</span>
            </h1>
            <p className="body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Experience SDETM 2026 at the Indira College of Engineering and Management (ICEM). 
              A sanctuary of innovation strategically positioned within Pune's high-growth technical corridor.
            </p>
          </motion.div>

          <div className="venue-grid grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left: Venue Intelligence */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="venue-intel-card glass-card p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-primary to-transparent"></div>
                
                <div className="flex items-start gap-5 mb-10">
                  <div className="icon-badge p-4 bg-brand-primary/10 rounded-xl text-brand-primary border border-brand-primary/20">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="title-lg text-white mb-1">Indira College</h3>
                    <p className="label-sm text-brand-primary tracking-widest">GATEWAY / PUNE</p>
                  </div>
                </div>

                <address className="not-italic text-on-surface-variant body-md leading-relaxed mb-10">
                  S.No. 64, 65, Gat No. 276, At Post: Parandwadi,<br />
                  Near Somatne Phata, Tal: Maval,<br />
                  Dist: Pune - 410 506, Maharashtra, India
                </address>

                <div className="hud-separator mb-10"></div>

                <div className="metrics-grid space-y-6">
                  {[
                    { icon: <Bus size={18} />, label: "Lonavala Station", value: "25 KM" },
                    { icon: <Globe size={18} />, label: "Pune Int. Airport", value: "35 KM" },
                    { icon: <Compass size={18} />, label: "Mumbai CBD", value: "110 KM" }
                  ].map((metric, i) => (
                    <div key={i} className="metric-item flex justify-between items-center group">
                      <span className="flex items-center gap-3 text-on-surface-variant group-hover:text-white transition-colors">
                        <span className="text-brand-primary/60">{metric.icon}</span>
                        {metric.label}
                      </span>
                      <span className="font-mono text-white text-lg">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-8 flex items-center gap-6"
              >
                <div className="p-3 bg-brand-primary/5 rounded-full">
                  <Clock size={24} className="text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Registration Portal</h4>
                  <p className="text-sm text-on-surface-variant">
                    Operational from 08:30 AM | Visvesvaraya Hall Foyer
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right: Map Terminal */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="map-terminal h-full min-h-[600px] relative rounded-3xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-primary/5 animate-pulse-slow"></div>
                
                <div className="map-wrapper h-full relative z-10 glass-card p-2">
                  <div className="relative h-full w-full rounded-2xl overflow-hidden bg-surface-dim">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.892019777598!2d73.69611767519308!3d18.630046582457814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbf58145e3f3%3A0x60032f2f4c9c1b4b!2sIndira%20College%20of%20Engineering%20%26%20Management!5e0!3m2!1sen!2sin!4v1713721000000!5m2!1sen!2sin" 
                      className="w-full h-full grayscale-[0.3] invert-[0.9] hue-rotate-[180deg] brightness-[0.8]"
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Neural Location HUD"
                    ></iframe>
                    
                    {/* HUD Overlays */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="scanner-line"></div>
                      <div className="hud-corner top-4 left-4 border-t-2 border-l-2 w-8 h-8 border-brand-primary/40"></div>
                      <div className="hud-corner top-4 right-4 border-t-2 border-r-2 w-8 h-8 border-brand-primary/40"></div>
                      <div className="hud-corner bottom-4 left-4 border-b-2 border-l-2 w-8 h-8 border-brand-primary/40"></div>
                      <div className="hud-corner bottom-4 right-4 border-b-2 border-r-2 w-8 h-8 border-brand-primary/40"></div>
                      
                      {/* Technical Readout */}
                      <div className="absolute bottom-6 left-6 bg-surface-dim/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/5">
                        <div className="flex items-center gap-3 text-[10px] font-mono text-brand-primary">
                          <span className="animate-pulse">● LIVE STREAM</span>
                          <span>COORD: 18.6300° N, 73.6961° E</span>
                        </div>
                      </div>
                    </div>
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
