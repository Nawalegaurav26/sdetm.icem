import React from 'react';
import { Mail, Phone, MapPin, Globe, Facebook, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container footer-grid">
        <div className="footer-col brand-col">
          <img src="/sdetm-logo-white.png" alt="SDETM Logo" className="footer-logo" />
          <p className="footer-tagline">
            Innovating Today for a Sustainable Tomorrow. Promoting excellence in NextGen Technology & AI.
          </p>
          <div className="social-links">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">About ICEM</a></li>
            <li><a href="#">Submission Guidelines</a></li>
            <li><a href="#">Important Dates</a></li>
            <li><a href="#">Technical Tracks</a></li>
            <li><a href="#">Registration Fees</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Downloads</h3>
          <ul>
            <li><a href="#">Conference Brochure</a></li>
            <li><a href="#">Paper Template (DOCX)</a></li>
            <li><a href="#">Copyright Form</a></li>
            <li><a href="#">Sponsorship Proposal</a></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <Mail size={16} />
              <span>sdetm.icem@indiraicem.ac.in</span>
            </li>
            <li>
              <Phone size={16} />
              <span>+91 12345 67890</span>
            </li>
            <li>
              <MapPin size={16} />
              <span>Gat No. 276, Tal. Maval, Parandwadi, Pune - 410506</span>
            </li>
            <li>
              <Globe size={16} />
              <span>www.indiraicem.ac.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SDETM ICEM Conference. All Rights Reserved.</p>
          <div className="policy-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
