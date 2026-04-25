import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User, LogOut, Terminal } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const navItems = [
    { title: 'HOME', path: '/' },
    { 
      title: 'ABOUT', 
      children: [
        { name: 'About Conference', path: '/about/conference' },
        { name: 'About Institute (ICEM)', path: '/about/institute' }
      ] 
    },
    { 
      title: 'COMMITTEE', 
      children: [
        { name: 'Chief Patron', path: '/committee/chief-patron' },
        { name: 'Patron', path: '/committee/patron' },
        { name: 'Conference Chair', path: '/committee/chair' },
        { name: 'Convenor & Co-Convenor', path: '/committee/convenor' },
        { name: 'College Advisory Committee', path: '/committee/collegeadvisory' },
        { name: 'International Advisory Committee', path: '/committee/international_advisory_committee' },
        { name: 'National Advisory Committee', path: '/committee/national_advisory_committee' },
        { name: 'Organizing Committee', path: '/committee/organizing' }
      ] 
    },
    { title: 'TRACKS', path: '/call-for-papers/tracks' },
    { title: 'SUBMISSION', path: '/submission' },
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
          <div className="header-logo-left">
            <img src="/icem-logo.png" alt="ICEM Logo" className="header-icem-logo" />
          </div>
          
          <div className="institution-text">
            <h1 className="inst-name">Sustainable Developments in Engineering, Technology & Management</h1>
            <div className="inst-status-highlight">
              <span className="font-mono text-xs">// INTERNATIONAL CONFERENCE 2026</span>
            </div>
          </div>

          <div className="header-logo-right">
             <img src="/sdetm-logo.png" alt="SDETM Logo" className="header-sdetm-logo" />
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
                    <span className="opacity-40 mr-1">{idx < 9 ? `0${idx + 1}` : idx + 1}</span>
                    {item.title}
                  </Link>
                ) : (
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <span className="opacity-40 mr-1">{idx < 9 ? `0${idx + 1}` : idx + 1}</span>
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
            {isAuthenticated && user ? (
              <div className="flex items-center gap-3">
                <Link to="/dashboard" className="premium-btn premium-btn-primary flex items-center gap-2">
                  <User size={16} /> {user.name?.split(' ')[0] || 'User'}
                </Link>
                <button onClick={logout} className="logout-icon-btn" title="Logout">
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link to="/registration" className="premium-btn premium-btn-primary">
                Join <Terminal size={14} className="ml-2" />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
