import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ShieldCheck, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [step, setStep] = useState(1); // 1: Email, 2: OTP
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error('Failed to send OTP');
      setStep(2);
    } catch (error) {
      const e = error as Error;
      console.error(e);
      if (!import.meta.env.VITE_API_URL) setStep(2); // Mock for dev
      else alert(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
      if (!response.ok) throw new Error('Invalid OTP');
      const user = await response.json();
      login({ email, name: user.user?.name, role: user.user?.role });
      navigate(from, { replace: true });
    } catch (error) {
      const e = error as Error;
      console.error(e);
      if (!import.meta.env.VITE_API_URL) {
        login({ email, name: 'Guest User' });
        navigate(from, { replace: true });
      } else {
        alert(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-split">

        {/* Left — ICEM Branding Panel */}
        <div className="login-brand">
          <div>
            <img src="/icem-logo.png" alt="ICEM Logo" className="login-brand-logo" />
            <h2>
              Welcome to <span>ICEM 2026</span>
            </h2>
            <p>
              International Conference on Emerging Multidisciplinary Research —
              organised by Indira College of Engineering &amp; Management, Pune.
            </p>
          </div>
          <ul className="login-features">
            <li><span className="feat-dot"></span> Track your paper submission status</li>
            <li><span className="feat-dot"></span> Receive real-time review notifications</li>
            <li><span className="feat-dot"></span> Download acceptance certificates</li>
            <li><span className="feat-dot"></span> Manage conference registration</li>
          </ul>
        </div>

        {/* Right — Form Panel */}
        <div className="login-form-panel">
          <div className="login-form-header">
            <div className="login-icon">
              <ShieldCheck size={26} />
            </div>
            <h1>Delegate Login</h1>
            <p>Enter your registered email to receive a secure login code</p>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.form
                key="step1"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                onSubmit={handleSendOTP}
                className="login-form"
              >
                <div className="form-group">
                  <label>Registered Email</label>
                  <div className="input-wrapper">
                    <Mail className="input-icon" size={18} />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@institution.edu"
                    />
                  </div>
                </div>

                <button type="submit" disabled={isLoading} className="login-submit-btn">
                  {isLoading
                    ? <Loader2 className="animate-spin" size={20} />
                    : <><span>Send Login Code</span> <ArrowRight size={18} /></>
                  }
                </button>

                <p className="login-alt-link">
                  Don't have an account?{' '}
                  <button type="button" onClick={() => navigate('/registration')}>
                    Register here
                  </button>
                </p>
              </motion.form>
            ) : (
              <motion.form
                key="step2"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                onSubmit={handleVerifyOTP}
                className="login-form"
              >
                <div className="otp-confirm-header">
                  <div className="otp-shield-icon">
                    <ShieldCheck size={28} />
                  </div>
                  <p>
                    Verification code sent to<br />
                    <strong>{email}</strong>
                  </p>
                </div>

                <div className="form-group">
                  <label className="text-center">Enter 6-Digit Code</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="otp-input-large"
                      placeholder="000000"
                    />
                  </div>
                </div>

                <button type="submit" disabled={isLoading} className="login-submit-btn">
                  {isLoading
                    ? <Loader2 className="animate-spin" size={20} />
                    : <><CheckCircle size={18} /> Verify &amp; Log In</>
                  }
                </button>

                <p className="login-alt-link">
                  <button type="button" onClick={() => setStep(1)}>
                    ← Change email address
                  </button>
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Login;
