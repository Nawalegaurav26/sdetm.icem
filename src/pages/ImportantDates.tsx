import { motion } from 'framer-motion';
import { Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import './ImportantDates.css';

const dates = [
  {
    label: 'Full Paper Submission',
    date: '31st July 2026',
    deadline: true,
    status: 'open',
    note: 'Submit via Microsoft CMT portal'
  },
  {
    label: 'Paper Acceptance Notification',
    date: '15th September 2026',
    deadline: false,
    status: 'upcoming',
    note: 'Authors will be notified via email'
  },
  {
    label: 'Camera Ready Submission',
    date: '22nd September 2026',
    deadline: true,
    status: 'upcoming',
    note: 'Final version with review corrections'
  },
  {
    label: 'Conference Registration (Last Date)',
    date: '30th September 2026',
    deadline: true,
    status: 'upcoming',
    note: 'Fees non-refundable after registration'
  },
  {
    label: 'Conference Date',
    date: '4–5 November 2026',
    deadline: false,
    status: 'conference',
    note: 'Indira College of Engineering and Management, Pune'
  },
];


const ImportantDates = () => {
  return (
    <div className="dates-page-hud">
      <div className="neural-grid-bg"></div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="dates-header-hud"
        >
          <div className="tech-badge-hud">
            <span className="pulse-dot"></span>
            <span className="badge-text">TEMPORAL_UPLINK // 2026.1</span>
          </div>
          <h1 className="hud-title-main">Important Dates</h1>
          <p className="dates-intro-hud">
            Synchronizing administrative milestones. All sequences calibrated to <span className="highlight-cyan">IST [UTC+5:30]</span>.
          </p>
        </motion.div>

        <div className="dates-grid-hud">
          {dates.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`date-card-hud hud-frame ${item.status}`}
            >
              <div className="hud-corner top-left"></div>
              <div className="hud-corner top-right"></div>
              <div className="hud-corner bottom-left"></div>
              <div className="hud-corner bottom-right"></div>
              
              <div className="terminal-header-hud">
                <div className="terminal-id">MILESTONE_0{idx + 1}</div>
                {item.deadline && <div className="critical-tag">CRITICAL_PATH</div>}
              </div>

              <div className="date-content-hud">
                <div className="label-wrapper-hud">
                  <h3 className="date-label-hud">{item.label}</h3>
                  <div className="status-indicator">
                    <span className={`status-pill ${item.status}`}>{item.status.toUpperCase()}</span>
                  </div>
                </div>

                <div className="main-date-display">
                  <Calendar size={24} className="date-icon-hud" />
                  <span className="date-value">{item.date}</span>
                </div>

                <div className="tech-divider-hud">
                  <div className="divider-line"></div>
                  <div className="divider-bit"></div>
                </div>

                <p className="date-description-hud">{item.note}</p>
              </div>

              <div className="card-footer-hud">
                <div className="metadata-bits">
                  <span>SECURED_UPLINK</span>
                  <span>AUT_LOG_26</span>
                </div>
              </div>

              <div className="scan-line-hud"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="protocol-notice-hud hud-frame"
        >
          <div className="hud-corner top-left"></div>
          <AlertCircle size={20} className="notice-icon" />
          <p>
            PROTOCOL NOTICE: Timeline parameters are subject to orbital administrative drift. Authors are advised to maintain active uplink monitors.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ImportantDates;
