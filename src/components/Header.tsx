import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: 'HOME', path: '/' },
    { 
      title: 'ABOUT', 
      children: [
        { name: 'About Conference', path: '/about/conference' },
        { name: 'About Institute (ICEM)', path: '/about/institute' },
        { name: 'Vision & Objectives', path: '/about/vision' },
        { name: 'Conference Theme', path: '/about/theme' }
      ] 
    },
    { 
      title: 'COMMITTEE', 
      children: [
        { name: 'Chief Patron', path: '/committee/chief-patron' },
        { name: 'Patron', path: '/committee/patron' },
        { name: 'Conference Chair', path: '/committee/chair' },
        { name: 'Convenor & Co-Convenor', path: '/committee/convenor' },
        { name: 'Advisory Committee', path: '/committee/advisory' },
        { name: 'Organizing Committee', path: '/committee/organizing' }
      ] 
    },
    { 
      title: 'CALL FOR PAPERS', 
      children: [
        { name: 'Tracks / Topics', path: '/call-for-papers/tracks' },
        { name: 'Scope', path: '/call-for-papers/scope' }
      ] 
    },
    { 
      title: 'SUBMISSION', 
      children: [
        { name: 'Submit via CMT', path: '/submission/cmt' },
        { name: 'Guidelines', path: '/submission/guidelines' },
        { name: 'Downloads', path: '/submission/downloads' },
        { name: 'Review Process', path: '/submission/review' }
      ] 
    },
    { title: 'DATES', path: '/dates' },
    { title: 'REGISTRATION', path: '/registration' },
    { title: 'VENUE', path: '/venue' },
    { title: 'MORE', children: [
      { name: 'Program', path: '/program' },
      { name: 'Partners', path: '/partners' },
      { name: 'Downloads', path: '/downloads' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Policies', path: '/policies' }
    ]},
    { title: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="main-header">
      {/* Tier 1: Institution Tier */}
      <div className="top-tier">
        <div className="container header-container">
          <div className="institution-brand">
            <img src="/sdetm-logo.png" alt="SDETM Logo" className="logo-sdetm" />
            <div className="institution-text">
              <span className="inst-name">Indira College of Engineering and Management</span>
              <span className="inst-status">An Autonomous Institute (AICTE Approved)</span>
            </div>
          </div>
          <div className="logo-ntai-placeholder">
             {/* NTAI Logo will go here */}
             <div className="ntai-badge">NTAI 2025</div>
          </div>
        </div>
      </div>

      {/* Tier 2: Navigation Tier */}
      <nav className="nav-tier">
        <div className="container nav-container">
          <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item, idx) => (
              <li key={idx} className={item.children ? 'has-children' : ''}>
                {item.path ? (
                  <Link to={item.path} onClick={() => setIsMenuOpen(false)}>
                    {item.title}
                  </Link>
                ) : (
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {item.title}
                    {item.children && <ChevronDown size={14} className="chevron" />}
                  </a>
                )}
                
                {item.children && (
                  <ul className="dropdown">
                    {item.children.map((child, cIdx) => (
                      <li key={cIdx}>
                        <Link to={child.path} onClick={() => setIsMenuOpen(false)}>
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="auth-btn">
             <button className="premium-btn premium-btn-primary">Login / Register</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
