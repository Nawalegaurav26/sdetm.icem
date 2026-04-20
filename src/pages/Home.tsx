import React from 'react';
import { ArrowRight, Calendar, MapPin, Award } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              NextGen Technology & AI for a <span className="premium-gradient">Sustainable Future</span>
            </h1>
            <p className="hero-subtitle">
              SDETM ICEM International Conference (NTAI 2025)
            </p>
            
            <div className="hero-info-pills">
              <div className="info-pill glass">
                <Calendar size={18} />
                <span>12th - 13th April 2025</span>
              </div>
              <div className="info-pill glass">
                <MapPin size={18} />
                <span>ICEM, Pune, India</span>
              </div>
            </div>

            <div className="hero-actions">
              <button className="premium-btn premium-btn-primary">
                Register Now <ArrowRight size={18} />
              </button>
              <button className="premium-btn premium-btn-secondary">
                Submit Paper
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glass-card conference-status">
              <div className="status-item">
                <Award size={32} />
                <div className="status-text">
                  <h3>Scopus Indexed</h3>
                  <p>Proceedings Publication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats / Highlights */}
      <section className="highlights-section section-padding">
        <div className="container grid-3">
          <div className="stat-card glass">
            <h2>40+</h2>
            <p>Technical Tracks</p>
          </div>
          <div className="stat-card glass">
            <h2>500+</h2>
            <p>Anticipated Attendees</p>
          </div>
          <div className="stat-card glass">
            <h2>15+</h2>
            <p>Keynote Speakers</p>
          </div>
        </div>
      </section>

      {/* Conference Theme Summary */}
      <section className="theme-summary section-padding">
        <div className="container flex-split">
          <div className="theme-text">
            <h2 className="section-title">Conference Theme</h2>
            <p>
              The NTAI (Next Generation Technology and AI) conference aims to bring together leading academic scientists, researchers, and research scholars to exchange and share their experiences and research results on all aspects of Next Generation Technologies and Artificial Intelligence.
            </p>
            <button className="premium-btn premium-btn-secondary mt-2">Learn More</button>
          </div>
          <div className="theme-image glass">
             {/* Dynamic Theme Image / Iconography */}
             <div className="theme-icon-canvas">AI & Sustainability</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
