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

const statusConfig: Record<string, { icon: React.ReactElement; label: string; color: string; bg: string }> = {
  accepted: {
    icon: <CheckCircle size={16} />,
    label: 'Accepted',
    color: '#16a34a',
    bg: 'rgba(22,163,74,0.1)',
  },
  rejected: {
    icon: <AlertCircle size={16} />,
    label: 'Rejected',
    color: '#dc2626',
    bg: 'rgba(220,38,38,0.1)',
  },
  pending: {
    icon: <Clock size={16} />,
    label: 'Under Review',
    color: '#d97706',
    bg: 'rgba(217,119,6,0.1)',
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
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.35rem' }}>
              Welcome,{' '}
              <span style={{
                background: 'linear-gradient(135deg, #43ccd1, #6edde1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {user?.name || 'Delegate'}
              </span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Delegate Dashboard — ICEM 2026 | Track your submission progress
            </p>
          </div>

          <button
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.55rem 1.1rem',
              background: 'rgba(220,38,38,0.08)',
              color: '#f87171',
              border: '1px solid rgba(220,38,38,0.2)',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.87rem',
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(220,38,38,0.15)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(220,38,38,0.08)')}
          >
            <LogOut size={16} /> Log Out
          </button>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem', alignItems: 'start' }}>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card"
            style={{
              borderRadius: '16px',
              border: '1px solid rgba(67,204,209,0.15)',
              padding: '1.75rem',
              position: 'sticky',
              top: '90px',
            }}
          >
            {/* Avatar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, #003c84, #43ccd1)',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <User size={28} color="#fff" />
              </div>
              <div>
                <h2 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                  {user?.name || 'Delegate'}
                </h2>
                <span style={{
                  display: 'inline-block',
                  background: 'rgba(67,204,209,0.1)',
                  color: '#43ccd1',
                  border: '1px solid rgba(67,204,209,0.25)',
                  padding: '0.15rem 0.6rem',
                  borderRadius: '99px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  letterSpacing: '0.05em',
                }}>
                  {user?.role || 'Delegate'}
                </span>
              </div>
            </div>

            {/* Info rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {user?.institution && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <Building size={16} color="#43ccd1" style={{ flexShrink: 0 }} />
                  <span>{user.institution}</span>
                </div>
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <Mail size={16} color="#43ccd1" style={{ flexShrink: 0 }} />
                <span style={{ wordBreak: 'break-all' }}>{user?.email}</span>
              </div>
            </div>

            {/* Stats */}
            <div style={{
              marginTop: '1.5rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(67,204,209,0.1)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem',
              textAlign: 'center',
            }}>
              <div style={{ background: 'rgba(0,60,132,0.15)', borderRadius: '10px', padding: '0.85rem 0.5rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#43ccd1' }}>{papers.length}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Submitted</div>
              </div>
              <div style={{ background: 'rgba(0,60,132,0.15)', borderRadius: '10px', padding: '0.85rem 0.5rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#16a34a' }}>
                  {papers.filter(p => p.status.toLowerCase() === 'accepted').length}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Accepted</div>
              </div>
            </div>

            <div style={{ marginTop: '1.25rem' }}>
              <Link
                to="/registration"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#43ccd1',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                Edit Profile Details <ChevronRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Submissions Panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Section header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <FileText size={20} color="#43ccd1" /> My Submissions
              </h2>
              <Link
                to="/submission/submit"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'linear-gradient(135deg, #003c84, #43ccd1)',
                  color: '#fff',
                  padding: '0.55rem 1.1rem',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  boxShadow: '0 4px 14px rgba(67,204,209,0.25)',
                }}
              >
                <Plus size={16} /> New Submission
              </Link>
            </div>

            {/* Content */}
            {isLoading ? (
              <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  border: '3px solid rgba(67,204,209,0.2)',
                  borderTop: '3px solid #43ccd1',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite',
                  margin: '0 auto 1rem',
                }} />
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Loading submissions…</p>
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
                    style={{
                      background: 'rgba(0,60,132,0.1)',
                      border: '1px solid rgba(67,204,209,0.12)',
                      borderRadius: '14px',
                      padding: '1.4rem 1.6rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                      flexWrap: 'wrap',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.3rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {paper.title}
                      </h3>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        Submitted on {new Date(paper.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        background: st.bg,
                        color: st.color,
                        border: `1px solid ${st.color}33`,
                        padding: '0.3rem 0.75rem',
                        borderRadius: '99px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                      }}>
                        {st.icon} {st.label}
                      </span>

                      <a
                        href={paper.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '36px',
                          height: '36px',
                          background: 'rgba(67,204,209,0.1)',
                          color: '#43ccd1',
                          borderRadius: '8px',
                          transition: 'all 0.2s',
                        }}
                        title="View Manuscript"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                background: 'rgba(0,60,132,0.08)',
                border: '1.5px dashed rgba(67,204,209,0.2)',
                borderRadius: '16px',
              }}>
                <FileText size={44} color="rgba(67,204,209,0.3)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  No Submissions Yet
                </h3>
                <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  You haven't submitted any manuscripts yet.
                </p>
                <Link
                  to="/submission/submit"
                  style={{ color: '#43ccd1', fontWeight: 600, fontSize: '0.9rem' }}
                >
                  Start your first submission →
                </Link>
              </div>
            )}
          </motion.div>

        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .dashboard-container > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
