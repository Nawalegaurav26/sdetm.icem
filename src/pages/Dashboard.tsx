import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  FileText,
  Plus,
  CheckCircle,
  Clock,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  LogOut,
  Building,
  Mail,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

interface Paper {
  id: string;
  title: string;
  status: string;
  createdAt: string;
  fileUrl: string;
}

const statusConfig: Record<string, { icon: React.ReactElement; label: string; className: string }> = {
  accepted: {
    icon: <CheckCircle size={16} />,
    label: 'Accepted',
    className: 'status-accepted',
  },
  rejected: {
    icon: <AlertCircle size={16} />,
    label: 'Rejected',
    className: 'status-rejected',
  },
  pending: {
    icon: <Clock size={16} />,
    label: 'Under Review',
    className: 'status-pending',
  },
};

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [papers, setPapers] = useState<Paper[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user?.email) return;
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/papers/${user.email}`);
        if (response.ok) {
          const data = await response.json();
          setPapers(data);
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDashboardData();
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getStatus = (status: string) =>
    statusConfig[status.toLowerCase()] || statusConfig.pending;

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="dashboard-header"
        >
          <div>
            <h1 className="dashboard-title">
              Welcome,{' '}
              <span className="text-gradient">
                {user?.name || 'Delegate'}
              </span>
            </h1>
            <p className="dashboard-subtitle">
              Delegate Dashboard — ICEM 2026 | Track your submission progress
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="dashboard-logout-btn"
          >
            <LogOut size={16} /> Log Out
          </button>
        </motion.div>

        {/* Grid */}
        <div className="dashboard-grid">

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card dashboard-profile-card"
          >
            {/* Avatar */}
            <div className="dashboard-profile-header">
              <div className="dashboard-profile-avatar">
                <User size={28} color="#fff" />
              </div>
              <div>
                <h2 className="dashboard-profile-name">
                  {user?.name || 'Delegate'}
                </h2>
                <span className="dashboard-profile-role">
                  {user?.role || 'Delegate'}
                </span>
              </div>
            </div>

            {/* Info rows */}
            <div className="dashboard-profile-info">
              {user?.institution && (
                <div className="dashboard-info-row">
                  <Building size={16} color="#43ccd1" className="dashboard-info-icon" />
                  <span>{user.institution}</span>
                </div>
              )}
              <div className="dashboard-info-row">
                <Mail size={16} color="#43ccd1" className="dashboard-info-icon" />
                <span className="dashboard-info-text">{user?.email}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="dashboard-profile-stats">
              <div className="dashboard-stat-box">
                <div className="dashboard-stat-value primary">{papers.length}</div>
                <div className="dashboard-stat-label">Submitted</div>
              </div>
              <div className="dashboard-stat-box">
                <div className="dashboard-stat-value success">
                  {papers.filter(p => p.status.toLowerCase() === 'accepted').length}
                </div>
                <div className="dashboard-stat-label">Accepted</div>
              </div>
            </div>

            <div>
              <Link to="/registration" className="dashboard-edit-link">
                Edit Profile Details <ChevronRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Submissions Panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="dashboard-submissions-panel"
          >
            {/* Section header */}
            <div className="dashboard-submissions-header">
              <h2 className="dashboard-submissions-title">
                <FileText size={20} color="#43ccd1" /> My Submissions
              </h2>
              <Link to="/submission/submit" className="dashboard-new-btn btn-primary">
                <Plus size={16} /> New Submission
              </Link>
            </div>

            {/* Content */}
            {isLoading ? (
              <div className="dashboard-loading">
                <div className="dashboard-spinner" />
                <p className="dashboard-loading-text">Loading submissions…</p>
              </div>
            ) : papers.length > 0 ? (
              papers.map((paper, idx) => {
                const st = getStatus(paper.status);
                return (
                  <motion.div
                    key={paper.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="dashboard-paper-card"
                  >
                    <div className="dashboard-paper-info">
                      <h3 className="dashboard-paper-title">
                        {paper.title}
                      </h3>
                      <p className="dashboard-paper-date">
                        Submitted on {new Date(paper.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                    </div>

                    <div className="dashboard-paper-actions">
                      <span className={`dashboard-status-badge ${st.className}`}>
                        {st.icon} {st.label}
                      </span>

                      <a
                        href={paper.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dashboard-external-link"
                        title="View Manuscript"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="dashboard-empty-state">
                <FileText size={44} color="rgba(67,204,209,0.3)" className="dashboard-empty-icon" />
                <h3 className="dashboard-empty-title">
                  No Submissions Yet
                </h3>
                <p className="dashboard-empty-text">
                  You haven't submitted any manuscripts yet.
                </p>
                <Link to="/submission/submit" className="dashboard-empty-link">
                  Start your first submission →
                </Link>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
