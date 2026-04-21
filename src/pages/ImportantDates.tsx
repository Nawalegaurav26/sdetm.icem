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

const statusColors: Record<string, string> = {
  open:       '#43ccd1',   // ICEM Cyan — active/open
  upcoming:   '#94a3b8',   // Neutral grey
  conference: '#003c84',   // ICEM Navy — main event
};

const ImportantDates = () => {
  return (
    <div className="dates-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="dates-header"
        >
          <span className="section-subtitle">Conference Schedule</span>
          <h1 className="section-title">Important Dates</h1>
          <p className="dates-intro">
            Mark your calendar. All deadlines are in Indian Standard Time (IST, UTC+5:30).
          </p>
        </motion.div>

        <div className="dates-timeline">
          {dates.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`timeline-card glass ${item.status === 'conference' ? 'highlight' : ''}`}
            >
              <div className="timeline-connector">
                <div className="tl-dot" style={{ background: statusColors[item.status] }}></div>
                {idx < dates.length - 1 && <div className="tl-line"></div>}
              </div>
              <div className="timeline-body">
                <div className="timeline-top">
                  <h3 className="timeline-label">{item.label}</h3>
                  {item.deadline && (
                    <span className="deadline-badge">
                      <AlertCircle size={13} /> Deadline
                    </span>
                  )}
                </div>
                <div className="timeline-date" style={{ color: statusColors[item.status] }}>
                  <Calendar size={18} /> {item.date}
                </div>
                <p className="timeline-note">{item.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="dates-disclaimer glass"
        >
          <CheckCircle size={20} />
          <p>
            All dates are tentative and subject to change. Check this page regularly or contact the organizing committee for the latest updates.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ImportantDates;
