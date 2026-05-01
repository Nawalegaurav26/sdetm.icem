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
              Sustainable Developments in Engineering, Technology & Management, <span className="premium-gradient">2026</span>
            </h1>
            <h2 className="hero-subtitle">
              Next-Gen Technology and AI for a Sustainable Future
            </h2>
            <p className="hero-description">
              SDETM 2026 brings together global pioneers and innovators to explore the intersection of next-generation technology and AI. Join us as we forge actionable solutions for a sustainable, resilient, and forward-thinking future across engineering and management disciplines.
            </p>
            
            <div className="hero-info-pills">
              <div className="info-pill glass">
                <Calendar size={18} />
                <span>4-5 November 2026</span>
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
            <div className="rotating-coin-container mb-6">
              <div className="coin">
                <div className="coin-face coin-front">
                  <img src="/sdetm-logo.png" alt="SDETM 2026" />
                </div>
                <div className="coin-face coin-back">
                  <img src="/icemlogo2.png" alt="ICEM" />
                </div>
              </div>
            </div>

            <div className="glass-card conference-status">
              <div className="status-item">
                <Award size={32} />
                <div className="status-text">
                  <h3>*Scopus Indexed</h3>
                  <p>(In process not done yet) Proposal send)</p>
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

      {/* About The Conference */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="glass-card p-4">
            <h2 className="section-title">About The Conference</h2>
            <p className="text-large">
              The International Conference (ICSDETM, 2026) aims to bring together researchers, academicians, industry professionals, and students to exchange insights on NextGen Technology & AI for a Sustainable Future. It provides a platform for knowledge sharing, innovation, and collaborative learning, enabling participants to explore the latest trends in the engineering and management domains.
            </p>
          </div>
        </div>
      </section>

      {/* Conference Tracks */}
      <section className="tracks-section section-padding">
        <div className="container">
          <h2 className="section-title text-center mb-4">Conference Tracks</h2>
          <div className="tracks-grid">
            {[
              { id: 1, title: 'Mechanical Engineering', desc: 'Emerging trends in thermal, design, and manufacturing.', icon: '🔧' },
              { id: 2, title: 'AI & Machine Learning', desc: 'Revolutionizing industries with intelligent algorithms.', icon: '🤖' },
              { id: 3, title: 'Information Technology', desc: 'Cloud, Cybersecurity, and Modern Dev Architectures.', icon: '💻' },
              { id: 4, title: 'Electronics & Telecom', desc: '5G, IoT, and Next-Gen Signal Processing.', icon: '📡' },
              { id: 5, title: 'Advanced Computing', desc: 'Quantum and High-Performance Computation.', icon: '⚡' },
              { id: 6, title: 'Business Innovation', desc: 'Evolving management practices in the digital age.', icon: '📈' },
              { id: 7, title: 'Sustainable Practices', desc: 'Green technology and eco-friendly engineering.', icon: '🌿' },
            ].map(track => (
              <div key={track.id} className="track-card glass-glow">
                <div className="track-image-container">
                  <img src={`/track-${track.id}.png`} alt={track.title} onError={(e) => (e.currentTarget as HTMLImageElement).src = '/icons.svg'} />
                </div>
                <div className="track-content">
                  <span className="track-icon">{track.icon}</span>
                  <h3>{track.title}</h3>
                  <p>{track.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Institute (ICEM) */}
      <section className="institute-section section-padding">
        <div className="container flex-split">
          <div className="institute-text">
            <h2 className="section-title">Indira College of Engineering and Management (ICEM), Pune</h2>
            <p>
              Established in 2007 under the esteemed Indira Group of Institutes, ICEM is a premier autonomous institution recognized for its commitment to academic excellence, innovation, and holistic student development. Approved by AICTE, affiliated with SPPU, and NAAC-accredited.
            </p>
            <p>
              Situated in the scenic surroundings of Parandwadi Village, ICEM hosts a diverse student body of over 1500 learners, serving as a catalyst for academic, economic, and social empowerment in the region.
            </p>
            <button 
              className="premium-btn premium-btn-secondary mt-2"
              onClick={() => window.open('https://indiraicem.ac.in', '_blank')}
            >
              Visit ICEM Website
            </button>
          </div>
          <div className="theme-image glass">
             <div className="theme-icon-canvas">
               <img src="/icem-logo.png" alt="ICEM Large" className="floating-logo" />
             </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="dates-section section-padding">
        <div className="container">
          <h2 className="section-title text-center mb-4">Important Dates</h2>
          <div className="timeline-grid">
            <div className="timeline-item glass">
              <div className="date-icon"><Calendar size={24} /></div>
              <div className="date-content">
                <h3>31st July, 2026</h3>
                <p>Submission of Full Length Paper</p>
              </div>
            </div>
            <div className="timeline-item glass highlight">
              <div className="date-icon"><Calendar size={24} /></div>
              <div className="date-content">
                <h3>15th Sept, 2026</h3>
                <p>Acceptance of Paper</p>
              </div>
            </div>
            <div className="timeline-item glass">
              <div className="date-icon"><Calendar size={24} /></div>
              <div className="date-content">
                <h3>30th Sept, 2026</h3>
                <p>Conference Registration (Last Date)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue & Location */}
      <section className="venue-section section-padding">
        <div className="container">
          <div className="venue-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="venue-info">
              <div className="label-hud mb-4">
                <MapPin size={14} className="text-brand-primary" />
                <span>Ground Intelligence</span>
              </div>
              <h2 className="section-title display-md mb-6">Venue & <span className="premium-gradient">Location</span></h2>
              <div className="glass-card p-6 border-l-4 border-brand-primary">
                <h3 className="text-xl font-bold text-white mb-2">Indira College of Engineering and Management</h3>
                <p className="text-muted mb-6">
                  Parandwadi, Near Somatne Phata, Maval, Pune - 410 506.
                </p>
                <div className="venue-metrics-minimal grid grid-cols-2 gap-4">
                  <div className="metric">
                    <span className="text-xs uppercase text-brand-primary block mb-1">Station</span>
                    <span className="text-white font-bold">25 KM</span>
                  </div>
                  <div className="metric">
                    <span className="text-xs uppercase text-brand-primary block mb-1">Airport</span>
                    <span className="text-white font-bold">35 KM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="venue-map-preview h-[400px]">
              <div className="map-frame-hud h-full glass-card overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.892019777598!2d73.69611767519308!3d18.630046582457814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbf58145e3f3%3A0x60032f2f4c9c1b4b!2sIndira%20College%20of%20Engineering%20%26%20Management!5e0!3m2!1sen!2sin!4v1713721000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  title="Home Venue Map"
                ></iframe>
                <div className="map-overlay-hud">
                  <div className="scanner-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="home-contact-section section-padding">
        <div className="container">
          <div className="glass-card contact-grid">
            <div className="contact-info-main">
              <h2 className="section-title">Conference Help Desk</h2>
              <p className="mb-2">For any queries regarding the conference, registration, or submission, please contact our convenors.</p>
              <div className="contact-links">
                 <div className="contact-card">
                   <h4>Dr. Saurabh Gupta</h4>
                   <p>Convenor | HOD Mechanical</p>
                   <a href="mailto:saurabhgupta@indiraicem.ac.in">saurabhgupta@indiraicem.ac.in</a>
                   <p>(+91-8380822479)</p>
                 </div>
                 <div className="contact-card">
                   <h4>Dr. Manjusha Tatiya</h4>
                   <p>Co-Convenor | HOD AI-DS</p>
                   <a href="mailto:manjusha.tatiya@indiraicem.ac.in">manjusha.tatiya@indiraicem.ac.in</a>
                   <p>(+91-9730019882)</p>
                 </div>
              </div>
            </div>
            <div className="contact-cta">
               <h3>Quick Connect</h3>
               <button 
                 className="premium-btn premium-btn-primary full-width"
                 onClick={() => window.location.href = '/contact'}
               >
                 Go to Help Desk
               </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
