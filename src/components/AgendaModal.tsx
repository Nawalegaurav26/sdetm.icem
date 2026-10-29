import React, { useState, useEffect } from 'react';
import { 
  X, 
  Clock, 
  MapPin, 
  User, 
  Printer, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  CalendarDays,
  Video
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './AgendaModal.css';

interface InauguralItem {
  time: string;
  activity: string;
  person: string;
  isKeynote?: boolean;
}

const inauguralSchedule: InauguralItem[] = [
  { time: '10:30 AM – 10:35 AM', activity: 'Welcome by Anchor', person: 'Anchor' },
  { time: '10:35 AM – 10:40 AM', activity: 'Saraswati Pooja & Lamp Lighting', person: 'Dignitaries on Dais' },
  { time: '10:40 AM – 10:45 AM', activity: 'National Anthem', person: 'All Attendees' },
  { time: '10:45 AM – 10:50 AM', activity: 'Display of IGI EV', person: 'Innovation Showcase Team' },
  { time: '10:50 AM – 11:00 AM', activity: 'Introduction of Conference', person: 'Dr. Saurabh Gupta, Convenor' },
  { time: '11:00 AM – 11:05 AM', activity: 'Address by Principal', person: 'Dr. Nilesh Uke, Principal, ICEM' },
  { 
    time: '11:05 AM – 11:15 AM', 
    activity: 'Introduction & Felicitation of Chief Guest', 
    person: 'Mr. Yoshitaka Taguchi (CEO, Abeam 66 Consulting, Japan)' 
  },
  { 
    time: '11:15 AM – 12:10 PM', 
    activity: 'Keynote Speech by Chief Guest', 
    person: 'Mr. Yoshitaka Taguchi (CEO, Abeam 66 Consulting, Japan)',
    isKeynote: true 
  },
  { time: '12:10 PM – 12:15 PM', activity: 'Vote of Thanks', person: 'Dr. Manjusha Tatiya, Co-Convenor' }
];

const AgendaModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'day1' | 'day2' | 'both'>('day1');

  useEffect(() => {
    // Show automatically on page visit
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-agenda-modal', handleOpen);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('open-agenda-modal', handleOpen);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Floating Pill Trigger */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="icem-agenda-pill"
          aria-label="Open Conference Agenda"
          title="View Conference Agenda"
        >
          <span className="pill-dot"></span>
          <CalendarDays size={16} className="text-cyan" />
          <span className="pill-title">Conference Agenda</span>
          <span className="pill-tag">Nov 2–3</span>
        </button>
      )}

      {/* Main Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="icem-modal-overlay" onClick={() => setIsOpen(false)}>
            <motion.div 
              className="icem-agenda-window"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Institution Header with Official Logos */}
              <div className="icem-modal-header">
                <div className="header-logos-row">
                  <div className="inst-brand-left">
                    <img src="/icem-logo.png" alt="ICEM Logo" className="modal-logo-icem" />
                  </div>

                  <div className="inst-title-center">
                    <span className="inst-college-label">Indira College of Engineering and Management (ICEM), Pune</span>
                    <h2 className="modal-main-title">
                      SDETM 2026 <span className="highlight-cyan">CONFERENCE AGENDA</span>
                    </h2>
                    <p className="inst-conference-name">
                      International Conference on Sustainable Developments in Engineering, Technology &amp; Management
                    </p>
                    <div className="header-meta-chips">
                      <span className="meta-chip">🗓️ 2nd &amp; 3rd November 2026</span>
                      <span className="meta-chip">📍 MPH Hall &amp; Track Venues</span>
                    </div>
                  </div>

                  <div className="inst-brand-right">
                    <img src="/sdetm-logo.png" alt="SDETM Logo" className="modal-logo-sdetm" />
                  </div>
                </div>

                <div className="header-action-controls no-print">
                  <button 
                    onClick={handlePrint}
                    className="modal-ctrl-btn print-ctrl"
                    title="Print Conference Agenda"
                  >
                    <Printer size={15} />
                    <span>Print Agenda</span>
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="modal-ctrl-btn close-ctrl"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Dignitaries & Keynote Speakers Banner */}
              <div className="icem-speakers-strip">
                <div className="speaker-box chief-guest-box">
                  <div className="speaker-badge gold-badge">
                    <Sparkles size={12} />
                    <span>CHIEF GUEST &amp; KEYNOTE SPEAKER</span>
                  </div>
                  <h4 className="speaker-name">Mr. Yoshitaka Taguchi</h4>
                  <p className="speaker-desc">CEO, Abeam 66 Consulting, Japan 🇯🇵</p>
                  <div className="speaker-schedule-note">
                    <Clock size={12} />
                    <span>Keynote Speech: Day 1 (11:15 AM – 12:10 PM) • MPH Hall</span>
                  </div>
                </div>

                <div className="speaker-box keynote-box">
                  <div className="speaker-badge cyan-badge">
                    <Video size={12} />
                    <span>INTERNATIONAL KEYNOTE SPEAKER (ONLINE)</span>
                  </div>
                  <h4 className="speaker-name">Dr. Celestino Ruivo</h4>
                  <p className="speaker-desc">Professor, University of Algarve, Portugal 🇵🇹</p>
                  <div className="speaker-schedule-note">
                    <Clock size={12} />
                    <span>Keynote Speech: Day 1 (04:00 PM – 05:00 PM) • Online Stream</span>
                  </div>
                </div>
              </div>

              {/* Day Switcher Tab Bar */}
              <div className="icem-tabs-nav no-print">
                <button
                  type="button"
                  className={`icem-tab-btn ${activeTab === 'day1' ? 'active' : ''}`}
                  onClick={() => setActiveTab('day1')}
                >
                  <span className="tab-pill">DAY 1</span>
                  <div className="tab-text">
                    <strong>Monday, 2nd November 2026</strong>
                    <span>Inauguration, Keynotes &amp; Technical Sessions (MPH Hall)</span>
                  </div>
                </button>

                <button
                  type="button"
                  className={`icem-tab-btn ${activeTab === 'day2' ? 'active' : ''}`}
                  onClick={() => setActiveTab('day2')}
                >
                  <span className="tab-pill">DAY 2</span>
                  <div className="tab-text">
                    <strong>Tuesday, 3rd November 2026</strong>
                    <span>Technical Paper Presentations &amp; Concluding Ceremony</span>
                  </div>
                </button>

                <button
                  type="button"
                  className={`icem-tab-btn tab-both ${activeTab === 'both' ? 'active' : ''}`}
                  onClick={() => setActiveTab('both')}
                >
                  <span className="tab-pill">FULL</span>
                  <div className="tab-text">
                    <strong>Complete 2-Day Programme</strong>
                    <span>All Sessions Overview</span>
                  </div>
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div className="icem-modal-body">
                {/* DAY 1 PROGRAMME */}
                {(activeTab === 'day1' || activeTab === 'both') && (
                  <div className="day-section">
                    <div className="day-section-title">
                      <div className="day-badge-primary">Day 1: 2nd Nov, 2026</div>
                      <div className="venue-tag">
                        <MapPin size={14} /> Main Venue: MPH Hall, ICEM Pune
                      </div>
                    </div>

                    <div className="table-wrapper">
                      <table className="icem-schedule-table">
                        <thead>
                          <tr>
                            <th className="col-time">Time</th>
                            <th className="col-event">Session / Activity</th>
                            <th className="col-dignitary">Speaker / Dignitary / Anchor</th>
                            <th className="col-venue">Venue &amp; Mode</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* 1. Registration */}
                          <tr>
                            <td className="col-time">
                              <span className="time-text">09:30 AM – 10:30 AM</span>
                            </td>
                            <td className="col-event">
                              <div className="event-heading">Registration &amp; Breakfast</div>
                              <span className="badge-tag cyan">Registration</span>
                            </td>
                            <td className="col-dignitary">
                              <div className="person-text">
                                <User size={13} />
                                <span>Organizing Committee &amp; Registration Desk</span>
                              </div>
                            </td>
                            <td className="col-venue">
                              <div className="venue-text">
                                <MapPin size={13} />
                                <span>MPH Hall Foyer</span>
                              </div>
                            </td>
                          </tr>

                          {/* 2. Inauguration Ceremony & Detailed Breakdown */}
                          <tr className="row-inauguration-parent">
                            <td className="col-time">
                              <span className="time-text highlight-gold">10:30 AM – 12:15 PM</span>
                              <span className="duration-pill">1 hr 45 min</span>
                            </td>
                            <td className="col-event">
                              <div className="event-heading gold-text">Inauguration of Conference</div>
                              <span className="badge-tag gold">Inaugural Ceremony</span>
                            </td>
                            <td className="col-dignitary">
                              <div className="person-text">
                                <User size={13} />
                                <span>Chief Guest, Principal &amp; Convenors</span>
                              </div>
                            </td>
                            <td className="col-venue">
                              <div className="venue-text">
                                <MapPin size={13} />
                                <span>MPH Hall</span>
                              </div>
                            </td>
                          </tr>

                          {/* Nested Breakdown Rows */}
                          <tr className="row-subschedule-container">
                            <td colSpan={4} className="cell-subschedule">
                              <div className="subschedule-card">
                                <div className="subschedule-header">
                                  <Sparkles size={14} className="text-gold" />
                                  <span>Inaugural Session — Chronological Order of Events</span>
                                </div>

                                <div className="subschedule-table-wrap">
                                  <table className="subschedule-table">
                                    <thead>
                                      <tr>
                                        <th style={{ width: '25%' }}>Time Slot</th>
                                        <th style={{ width: '40%' }}>Event / Protocol</th>
                                        <th style={{ width: '35%' }}>Dignitary / Anchor</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {inauguralSchedule.map((item, idx) => (
                                        <tr key={idx} className={item.isKeynote ? 'keynote-subrow' : ''}>
                                          <td className="subrow-time">
                                            <Clock size={12} className="inline mr-1 text-cyan" />
                                            <span>{item.time}</span>
                                          </td>
                                          <td className="subrow-event">
                                            <strong className={item.isKeynote ? 'text-gold' : ''}>{item.activity}</strong>
                                          </td>
                                          <td className="subrow-person">
                                            <span>{item.person}</span>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </td>
                          </tr>

                          {/* 3. Lunch */}
                          <tr>
                            <td className="col-time">
                              <span className="time-text">12:30 PM – 01:30 PM</span>
                            </td>
                            <td className="col-event">
                              <div className="event-heading">Lunch Break</div>
                              <span className="badge-tag green">Hospitality</span>
                            </td>
                            <td className="col-dignitary">
                              <div className="person-text">
                                <span>All Delegates, Authors &amp; Guests</span>
                              </div>
                            </td>
                            <td className="col-venue">
                              <div className="venue-text">
                                <MapPin size={13} />
                                <span>Dining Hall / Cafeteria</span>
                              </div>
                            </td>
                          </tr>

                          {/* 4. Technical Paper Presentation Sessions */}
                          <tr>
                            <td className="col-time">
                              <span className="time-text">01:30 PM – 04:00 PM</span>
                              <span className="duration-pill">2 hr 30 min</span>
                            </td>
                            <td className="col-event">
                              <div className="event-heading">Technical Paper Presentation Sessions (Track wise)</div>
                              <span className="badge-tag blue">Track Presentations</span>
                            </td>
                            <td className="col-dignitary">
                              <div className="person-text">
                                <User size={13} />
                                <span>Track Session Chairs &amp; Presenting Authors</span>
                              </div>
                            </td>
                            <td className="col-venue">
                              <div className="venue-text">
                                <MapPin size={13} />
                                <span>Respective Department Track Venues</span>
                              </div>
                            </td>
                          </tr>

                          {/* 5. Online Keynote Speech */}
                          <tr className="row-online-keynote">
                            <td className="col-time">
                              <span className="time-text highlight-cyan">04:00 PM – 05:00 PM</span>
                              <span className="duration-pill online-pill">Virtual Session</span>
                            </td>
                            <td className="col-event">
                              <div className="event-heading highlight-cyan">Keynote Speech (Online Session)</div>
                              <span className="badge-tag cyan">International Keynote</span>
                            </td>
                            <td className="col-dignitary">
                              <div className="person-text font-semibold text-white">
                                <User size={13} />
                                <span>Dr. Celestino Ruivo, Professor, University of Algarve, Portugal</span>
                              </div>
                            </td>
                            <td className="col-venue">
                              <div className="venue-text">
                                <Video size={13} className="text-cyan" />
                                <span>MPH Hall Live Stream &amp; Online Portal</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* DAY 2 PROGRAMME */}
                {(activeTab === 'day2' || activeTab === 'both') && (
                  <div className="day-section mt-6">
                    <div className="day-section-title">
                      <div className="day-badge-secondary">Day 2: 3rd Nov, 2026</div>
                      <div className="venue-tag">
                        <MapPin size={14} /> Venue: Respective Track Presentation Venues
                      </div>
                    </div>

                    <div className="table-wrapper">
                      <table className="icem-schedule-table">
                        <thead>
                          <tr>
                            <th className="col-time">Time</th>
                            <th className="col-event">Session / Activity</th>
                            <th className="col-dignitary">Speaker / Incharge</th>
                            <th className="col-venue">Venue &amp; Mode</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* 1. Track Presentations */}
                          <tr>
                            <td className="col-time">
                              <span className="time-text">10:00 AM – 12:00 PM</span>
                              <span className="duration-pill">2 Hours</span>
                            </td>
                            <td className="col-event">
                              <div className="event-heading">Technical Paper Presentation Sessions (Track wise)</div>
                              <span className="badge-tag blue">Track Evaluations</span>
                            </td>
                            <td className="col-dignitary">
                              <div className="person-text">
                                <User size={13} />
                                <span>Track Chairs, Evaluators &amp; Registered Presenters</span>
                              </div>
                            </td>
                            <td className="col-venue">
                              <div className="venue-text">
                                <MapPin size={13} />
                                <span>Respective Department Presentation Venues</span>
                              </div>
                            </td>
                          </tr>

                          {/* 2. Vote of Thanks & Concluding */}
                          <tr className="row-inauguration-parent">
                            <td className="col-time">
                              <span className="time-text highlight-gold">12:00 PM Onwards</span>
                            </td>
                            <td className="col-event">
                              <div className="event-heading gold-text">Vote of Thanks &amp; Concluding Ceremony</div>
                              <span className="badge-tag gold">Concluding Session</span>
                            </td>
                            <td className="col-dignitary">
                              <div className="person-text">
                                <User size={13} />
                                <span>Track Incharge / Heads of Departments (HoDs)</span>
                              </div>
                            </td>
                            <td className="col-venue">
                              <div className="venue-text">
                                <MapPin size={13} />
                                <span>Respective Track Venues</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer Bar */}
              <div className="icem-modal-footer no-print">
                <div className="footer-notice">
                  <span>Presenters are requested to report 15 minutes before their scheduled session. For inquiries: </span>
                  <a href="mailto:sdetm2026@indiraicem.ac.in" className="footer-mail">sdetm2026@indiraicem.ac.in</a>
                </div>

                <div className="footer-btns">
                  <a 
                    href="/call-for-papers/tracks" 
                    className="btn-icem-secondary"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>View Conference Tracks</span>
                    <ExternalLink size={13} />
                  </a>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="btn-icem-primary"
                  >
                    <span>Proceed to Website</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AgendaModal;
