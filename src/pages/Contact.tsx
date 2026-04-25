import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Globe, ShieldAlert, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page-hud relative z-10 pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <header className="contact-header-hud text-center mb-16">
          <div className="tech-subheading">COMMUNICATION_UPLINK</div>
          <h1 className="hud-title mt-4">
            Contact <span className="text-icem-cyan">Us</span>
          </h1>
          <div className="header-line mx-auto mt-6"></div>
          <p className="hud-para max-w-2xl mx-auto mt-8 opacity-80">
            Establish a secure connection with the SDETM 2026 organizing team. 
            All queries are processed through high-priority channels.
          </p>
        </header>

        <div className="contact-layout-hud grid lg:grid-cols-2 gap-12">
          {/* Left Column: Communication Nodes */}
          <div className="space-y-8">
            <div className="hud-frame p-8 communication-node-hud">
              <div className="hud-corner top-left"></div>
              <div className="hud-corner bottom-right"></div>
              
              <div className="flex items-start gap-6">
                <div className="node-icon-hud bg-icem-cyan/10 p-4 rounded border border-icem-cyan/20">
                  <MapPin size={24} className="text-icem-cyan" />
                </div>
                <div>
                  <h3 className="tech-heading text-lg mb-2">Central Hub</h3>
                  <p className="hud-para text-sm opacity-70">
                    Indira College of Engineering and Management (ICEM)<br />
                    Parandwadi Village, Maval Taluka,<br />
                    Pune – 410506, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="hud-frame p-6 communication-node-hud">
                <div className="hud-corner top-left"></div>
                <div className="flex items-center gap-4">
                  <Globe size={20} className="text-icem-cyan" />
                  <div>
                    <h4 className="tech-heading text-sm">Web Portal</h4>
                    <a href="https://www.indiraicem.ac.in" className="text-xs text-icem-cyan hover:underline">indiraicem.ac.in</a>
                  </div>
                </div>
              </div>
              <div className="hud-frame p-6 communication-node-hud">
                <div className="hud-corner top-right"></div>
                <div className="flex items-center gap-4">
                  <Clock size={20} className="text-icem-cyan" />
                  <div>
                    <h4 className="tech-heading text-sm">Response Time</h4>
                    <p className="text-xs opacity-60">Within 24-48 Cycles</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hud-frame p-8 convenors-terminal-hud">
              <h3 className="tech-heading mb-8 flex items-center gap-2">
                <ShieldAlert size={18} className="text-icem-cyan" />
                DIRECT_CONVENOR_ACCESS
              </h3>
              
              <div className="space-y-8">
                <div className="convenor-node flex items-center gap-6">
                  <img src="https://ui-avatars.com/api/?name=Saurabh+Gupta&background=060f1e&color=43ccd1&size=200" alt="Saurabh Gupta" className="w-16 h-16 rounded-full border-2 border-icem-cyan/30" />
                  <div>
                    <h4 className="tech-heading text-base">Dr. Saurabh Gupta</h4>
                    <div className="flex gap-4 mt-2">
                      <a href="tel:+918380822479" className="text-[10px] font-mono text-icem-cyan hover:bg-icem-cyan/10 px-2 py-1 border border-icem-cyan/20">VOICE: +91-8380822479</a>
                      <a href="mailto:saurabhgupta@indiraicem.ac.in" className="text-[10px] font-mono text-icem-cyan hover:bg-icem-cyan/10 px-2 py-1 border border-icem-cyan/20">MAIL</a>
                    </div>
                  </div>
                </div>

                <div className="convenor-node flex items-center gap-6">
                  <img src="https://ui-avatars.com/api/?name=Manjusha+Tatiya&background=060f1e&color=43ccd1&size=200" alt="Manjusha Tatiya" className="w-16 h-16 rounded-full border-2 border-icem-cyan/30" />
                  <div>
                    <h4 className="tech-heading text-base">Dr. Manjusha Tatiya</h4>
                    <div className="flex gap-4 mt-2">
                      <a href="tel:+919730019882" className="text-[10px] font-mono text-icem-cyan hover:bg-icem-cyan/10 px-2 py-1 border border-icem-cyan/20">VOICE: +91-9730019882</a>
                      <a href="mailto:manjusha.tatiya@indiraicem.ac.in" className="text-[10px] font-mono text-icem-cyan hover:bg-icem-cyan/10 px-2 py-1 border border-icem-cyan/20">MAIL</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Input */}
          <div className="hud-frame p-10 message-terminal-hud bg-icem-cyan/5">
            <div className="hud-corner top-left"></div>
            <div className="hud-corner top-right"></div>
            <div className="hud-corner bottom-left"></div>
            <div className="hud-corner bottom-right"></div>
            
            <h2 className="tech-heading text-xl mb-8 border-b border-icem-cyan/20 pb-4">INITIATE_MESSAGE_PROTOCOL</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="terminal-input-group">
                  <label className="text-[10px] font-mono opacity-50 mb-2 block">USER_IDENTIFICATION</label>
                  <input type="text" placeholder="FULL_NAME" className="w-full bg-icem-dark/50 border border-icem-cyan/20 p-4 text-sm focus:border-icem-cyan outline-none font-mono" />
                </div>
                <div className="terminal-input-group">
                  <label className="text-[10px] font-mono opacity-50 mb-2 block">RETURN_UPLINK</label>
                  <input type="email" placeholder="EMAIL_ADDRESS" className="w-full bg-icem-dark/50 border border-icem-cyan/20 p-4 text-sm focus:border-icem-cyan outline-none font-mono" />
                </div>
              </div>
              
              <div className="terminal-input-group">
                <label className="text-[10px] font-mono opacity-50 mb-2 block">PROTOCOL_SUBJECT</label>
                <input type="text" placeholder="MESSAGE_TOPIC" className="w-full bg-icem-dark/50 border border-icem-cyan/20 p-4 text-sm focus:border-icem-cyan outline-none font-mono" />
              </div>
              
              <div className="terminal-input-group">
                <label className="text-[10px] font-mono opacity-50 mb-2 block">TRANSMISSION_DATA</label>
                <textarea rows={6} placeholder="ENTER_MESSAGE_CONTENTS..." className="w-full bg-icem-dark/50 border border-icem-cyan/20 p-4 text-sm focus:border-icem-cyan outline-none font-mono resize-none"></textarea>
              </div>

              <button type="submit" className="hud-btn w-full flex items-center justify-center gap-3 py-4 bg-icem-cyan text-icem-dark font-bold hover:bg-white transition-colors">
                <Send size={18} />
                EXECUTE_TRANSMISSION
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-icem-cyan/10">
              <div className="flex items-center gap-2 text-[9px] font-mono opacity-40">
                <div className="w-2 h-2 bg-icem-cyan animate-pulse"></div>
                ENCRYPTION_PROTOCOL_ACTIVE: AES-256-GCM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
