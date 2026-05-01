import { Mail, Phone, MapPin, Globe, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* Top Footer Grid */}
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <img src="/icem-logo.png" alt="ICEM Logo" className="footer-logo" />
            <p className="footer-tagline">
              Sustainable Developments in Engineering, Technology & Management, 2026
            </p>
            <p className="footer-host">
              Hosted by <a href="https://www.indiraicem.ac.in" target="_blank" rel="noopener noreferrer" className="host-link">Indira College of Engineering &amp; Management</a>
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about/conference">About Conference</Link></li>
              <li><Link to="/call-for-papers/tracks">Technical Tracks</Link></li>
              <li><Link to="/submission/guidelines">Submission Guidelines</Link></li>
              <li><Link to="/dates">Important Dates</Link></li>
              <li><Link to="/registration">Registration</Link></li>
              <li><Link to="/venue">Venue</Link></li>
            </ul>
          </div>

          {/* Committee */}
          <div className="footer-col">
            <h3>Committee</h3>
            <ul>
              <li><Link to="/committee/chief-patron">Chief Patron</Link></li>
              <li><Link to="/committee/patron">Patron</Link></li>
              <li><Link to="/committee/chair">Conference Chair</Link></li>
              <li><Link to="/committee/convenor">Convenor &amp; Co-Convenor</Link></li>
              <li><Link to="/committee/collegeadvisory">College Advisory Committee</Link></li>
              <li><Link to="/committee/international_advisory_committee">International Advisory Committee</Link></li>
              <li><Link to="/committee/national_advisory_committee">National Advisory Committee</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col contact-col">
            <h3>Contact Us</h3>
            <ul className="contact-list">
              <li>
                <span className="contact-icon"><Mail size={15} /></span>
                <a href="mailto:saurabhgupta@indiraicem.ac.in">saurabhgupta@indiraicem.ac.in</a>
              </li>
              <li>
                <span className="contact-icon"><Phone size={15} /></span>
                <span>Dr. Saurabh Gupta: +91-8380822479</span>
              </li>
              <li>
                <span className="contact-icon"><Phone size={15} /></span>
                <span>Dr. Manjusha Tatiya: +91-9730019882</span>
              </li>
              <li>
                <span className="contact-icon"><MapPin size={15} /></span>
                <span>Gat No. 276, Parandwadi, Tal. Maval, Pune – 410 506</span>
              </li>
              <li>
                <span className="contact-icon"><Globe size={15} /></span>
                <a href="https://www.indiraicem.ac.in" target="_blank" rel="noopener noreferrer">www.indiraicem.ac.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar — matches indiraicem.ac.in footer */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div className="footer-credits">
            <p>© {new Date().getFullYear()} Indira College of Engineering and Management — All Rights Reserved.</p>
            <p className="designed-by">Designed &amp; Developed by CertiOwn team</p>
          </div>
          <div className="policy-links">
            <a href="https://www.indiraicem.ac.in/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <span className="divider-dot">·</span>
            <a href="#">Terms &amp; Conditions</a>
            <span className="divider-dot">·</span>
            <a href="https://www.indiraicem.ac.in" target="_blank" rel="noopener noreferrer">indiraicem.ac.in</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
