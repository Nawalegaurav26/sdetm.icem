import { Mail, Phone, MapPin, Globe, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-glow"></div>
      
      <div className="container footer-content">
        <div className="footer-main-grid">
          {/* 1. Brand & HUD Identity */}
          <div className="footer-brand">
            <div className="footer-logos">
              <img src="/icem-logo.png" alt="ICEM" className="footer-logo-small" />
              <img src="/sdetm-logo.png" alt="SDETM" className="footer-logo-small" />
            </div>
            <h2 className="footer-title">SDETM // ICEM 2026</h2>
            <p className="footer-desc">
              Advanced Neural Interface for the International Conference on Sustainable Developments in Engineering, Technology & Management.
            </p>
            <div className="tech-status">
              <span className="status-dot animate-pulse"></span>
              <span className="status-text">SYSTEMS_NOMINAL // V2.0.4</span>
            </div>
            <div className="social-nodes">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="social-node">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Sitemap: CONFERENCE */}
          <div className="footer-sitemap-col">
            <h4 className="sitemap-heading">CONFERENCE</h4>
            <ul className="sitemap-links">
              <li><Link to="/">Home Terminal</Link></li>
              <li><Link to="/about/conference">About SDETM</Link></li>
              <li><Link to="/about/institute">About ICEM</Link></li>
              <li><Link to="/venue">Geospatial Venue</Link></li>
              <li><Link to="/dates">Temporal Uplink</Link></li>
              <li><Link to="/contact">Comm Terminal</Link></li>
            </ul>
          </div>

          {/* 3. Sitemap: PARTICIPATION */}
          <div className="footer-sitemap-col">
            <h4 className="sitemap-heading">PARTICIPATION</h4>
            <ul className="sitemap-links">
              <li><Link to="/call-for-papers/tracks">Technical Tracks</Link></li>
              <li><Link to="/submission">Paper Submission</Link></li>
              <li><Link to="/registration">Registration Portal</Link></li>
              <li><Link to="/program">Event Schedule</Link></li>
              <li><Link to="/partners">Global Partners</Link></li>
              <li><Link to="/downloads">Resource Hub</Link></li>
            </ul>
          </div>

          {/* 4. Sitemap: COMMITTEE */}
          <div className="footer-sitemap-col">
            <h4 className="sitemap-heading">COMMITTEE</h4>
            <ul className="sitemap-links">
              <li><Link to="/committee/chief-patron">Chief Patron</Link></li>
              <li><Link to="/committee/patron">Patrons</Link></li>
              <li><Link to="/committee/chair">Conference Chairs</Link></li>
              <li><Link to="/committee/convenor">Convenors</Link></li>
              <li><Link to="/committee/international_advisory_committee">International Advisory</Link></li>
              <li><Link to="/committee/national_advisory_committee">National Advisory</Link></li>
            </ul>
          </div>

          {/* 5. CONTACT INTEL */}
          <div className="footer-contact-col">
            <h4 className="sitemap-heading">CONTACT_INTEL</h4>
            <div className="contact-intel-box">
              <div className="intel-item">
                <Mail size={14} className="text-icem-cyan" />
                <a href="mailto:saurabhgupta@indiraicem.ac.in">saurabhgupta@indiraicem.ac.in</a>
              </div>
              <div className="intel-item">
                <Phone size={14} className="text-icem-cyan" />
                <span>+91-8380822479 (Dr. Saurabh)</span>
              </div>
              <div className="intel-item">
                <MapPin size={14} className="text-icem-cyan" />
                <span>Parandwadi, Pune - 410 506</span>
              </div>
            </div>
            <div className="footer-badge">
              <Globe size={14} />
              <span>IND // MH // PUNE</span>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-legal">
          <div className="legal-left">
            <p>© {new Date().getFullYear()} Indira College of Engineering and Management. All Rights Reserved.</p>
            <div className="legal-links">
              <Link to="/policies">Privacy Policy</Link>
              <Link to="/policies">Terms of Use</Link>
              <a href="https://indiraicem.ac.in" target="_blank" rel="noreferrer">Official Site</a>
            </div>
          </div>
          <div className="legal-right">
             <div className="dev-credit">
                <span className="opacity-50">DESIGNED_BY:</span>
                <span className="text-icem-cyan ml-1">CertiOwn_TECH</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
