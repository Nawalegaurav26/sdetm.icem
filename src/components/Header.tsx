import { useState } from 'react';
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
        { isGroupHeader: true, name: 'Leadership' },
        { name: 'Patrons', path: '/committee/patrons' },
        { isGroupHeader: true, name: 'Core Team' },
        { name: 'Core Team', path: '/committee/core-team' },
        { isGroupHeader: true, name: 'Advisory Board' },
        { name: 'International Advisory Committee', path: '/committee/international-advisory' },
        { name: 'National Advisory Committee', path: '/committee/national-advisory' },
        { name: 'College Advisory Committee', path: '/committee/college-advisory' },
        { isGroupHeader: true, name: 'Organizing' },
        { name: 'Organizing Committee', path: '/committee/organizing' },
        { name: 'Student Committee', path: '/committee/student' }
      ]
    },
    { title: 'CALL FOR PAPERS', path: '/call-for-papers/tracks' },
    { title: 'SUBMISSION', path: '/submission' },
    { title: 'DATES', path: '/dates' },
    { title: 'REGISTRATION', path: '/registration' },
    { title: 'VENUE', path: '/venue' },
    {
      title: 'MORE', children: [
        { name: 'Program', path: '/program' },
        { name: 'Partners', path: '/partners' },
        { name: 'Downloads', path: '/downloads' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Policies', path: '/policies' }
      ]
    },
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

          <div className="institution-text text-center">
            <span className="inst-name">Sustainable Developments in Engineering, Technology &amp; Management, 2026</span>
            <span className="inst-status inst-status-col mt-1">
              <span className="inst-status-highlight header-badge-text">International Conference 2026</span>
            </span>
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
                      <li key={cIdx} className={child.isGroupHeader ? 'dropdown-group-header' : ''}>
                        {child.isGroupHeader ? (
                          <span>{child.name}</span>
                        ) : (
                          <Link to={child.path!} onClick={() => setIsMenuOpen(false)}>
                            {child.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
