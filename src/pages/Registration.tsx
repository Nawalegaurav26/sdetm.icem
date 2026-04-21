import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, Building, ChevronRight, ShieldCheck, CheckCircle2, CreditCard, Info, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
  const { login } = useAuth();
  const [step, setStep] = useState(1); // 1: Info, 2: OTP, 3: Success
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    role: 'student',
    otp: ''
  });

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email }),
      });

      if (!response.ok) throw new Error('Failed to send OTP');
      
      setStep(2);
    } catch (error) {
      const e = error as Error;
      console.error('OTP Send Error:', e.message);
      if (!import.meta.env.VITE_API_URL) {
        setStep(2); // Mock for dev
      } else {
        alert("Error sending OTP: " + e.message);
      }
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
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otp,
          userData: {
            name: formData.name,
            institution: formData.institution,
            role: formData.role
          }
        }),
      });

      if (!response.ok) throw new Error('Invalid OTP');

      login({
        email: formData.email,
        name: formData.name,
        role: formData.role,
        institution: formData.institution
      });
      
      setStep(3);
    } catch (error) {
      const e = error as Error;
      console.error('Verification Error:', e.message);
      if (!import.meta.env.VITE_API_URL) {
        setStep(3); // Mock for dev
      } else {
        alert("Invalid OTP or Registration Error: " + e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="registration-page">
      <div className="container registration-grid">
        {/* Left Column: Info & Fees */}
        <div className="registration-info">
          <section className="info-section">
            <h2 className="section-title">Registration Fees</h2>
            <div className="fee-table-container">
              <table className="fee-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Indian (₹)</th>
                    <th>Foreign ($)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Students / Research Scholars</td>
                    <td>2000</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>Faculty / Academicians</td>
                    <td>2500</td>
                    <td>65</td>
                  </tr>
                  <tr>
                    <td>Industry Professionals</td>
                    <td>5000</td>
                    <td>75</td>
                  </tr>
                  <tr>
                    <td>Co-Author Registration</td>
                    <td>1000</td>
                    <td>30</td>
                  </tr>
                </tbody>
              </table>
              <p className="fee-note">** Additional fee will be applicable for SCOPUS publication (T&C Apply)</p>
            </div>
          </section>

          <section className="info-section bank-details">
            <h2 className="section-title"><CreditCard size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} /> Payment Details</h2>
            <div className="bank-card">
              <div className="bank-row"><span>Account Name:</span> <strong>Indira College of Engineering & Management</strong></div>
              <div className="bank-row"><span>Bank:</span> <strong>INDUSIND BANK LTD</strong></div>
              <div className="bank-row"><span>Branch:</span> <strong>Wakad, Pune</strong></div>
              <div className="bank-row"><span>IFSC Code:</span> <strong>INDB0000999</strong></div>
              <div className="bank-row"><span>Bank Account No:</span> <strong>201025452641</strong></div>
              <div className="bank-row"><span>Type of Account:</span> <strong>Current Account</strong></div>
            </div>
          </section>

          <section className="info-section notes">
            <h2 className="section-title"><Info size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} /> Important Notes</h2>
            <ul className="notes-list">
              <li>Registration fees shall not be refundable in case of any cancellation.</li>
              <li>Fees includes conference kit and food coupons for one author.</li>
              <li>Lodging & boarding will be arranged by participants themselves.</li>
              <li>Local transport from Somatane can be arranged on prior request.</li>
              <li>No TA/DA will be provided to attend conference.</li>
            </ul>
            <div className="login-prompt mt-8 p-4 rounded-xl bg-[#43ccd1]/10 border border-[#43ccd1]/20">
              <p className="text-sm text-gray-300 flex items-center gap-2">
                <LogIn size={18} className="text-icem-cyan" />
                Already have an account? <Link to="/login" className="text-icem-cyan hover:underline font-semibold">Log in here</Link>
              </p>
            </div>
          </section>
        </div>

        {/* Right Column: Registration Form */}
        <div className="registration-form-wrapper">
          <div className="registration-glass box-glow">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="reg-step"
                >
                  <h2 className="text-display-sub">Delegate Registration</h2>
                  <p className="reg-description">Provide your details to initiate the secure registration process.</p>
                  
                  <form onSubmit={handleSendOTP} className="reg-form">
                    <div className="input-group">
                      <User className="input-icon" size={18} />
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="input-group">
                      <Mail className="input-icon" size={18} />
                      <input 
                        type="email" 
                        placeholder="Official Email Address" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    
                    <div className="input-group">
                      <Building className="input-icon" size={18} />
                      <input 
                        type="text" 
                        placeholder="Institution / Organization" 
                        required 
                        value={formData.institution}
                        onChange={(e) => setFormData({...formData, institution: e.target.value})}
                      />
                    </div>

                    <div className="role-selector">
                      <label>Registering as:</label>
                      <div className="role-options">
                        <button 
                          type="button"
                          className={formData.role === 'student' ? 'active' : ''} 
                          onClick={() => setFormData({...formData, role: 'student'})}
                        >Student</button>
                        <button 
                          type="button"
                          className={formData.role === 'faculty' ? 'active' : ''} 
                          onClick={() => setFormData({...formData, role: 'faculty'})}
                        >Faculty</button>
                        <button 
                          type="button" 
                          className={formData.role === 'industry' ? 'active' : ''} 
                          onClick={() => setFormData({...formData, role: 'industry'})}
                        >Industry</button>
                      </div>
                    </div>

                    <button type="submit" disabled={isLoading} className="premium-btn premium-btn-primary full-width">
                      {isLoading ? 'Processing...' : 'Send Verification OTP'}
                      <ChevronRight size={18} />
                    </button>
                  </form>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="reg-step"
                >
                  <div className="shield-icon-container">
                    <ShieldCheck size={48} className="shield-icon" />
                  </div>
                  <h2 className="text-display-sub">Verify Identity</h2>
                  <p className="reg-description">A 6-digit code has been sent to <strong>{formData.email}</strong>. Enter it below to continue.</p>
                  
                  <form onSubmit={handleVerifyOTP} className="reg-form">
                    <div className="input-group otp-input-container">
                      <input 
                        type="text" 
                        placeholder="000000" 
                        maxLength={6}
                        className="otp-input"
                        required 
                        value={formData.otp}
                        onChange={(e) => setFormData({...formData, otp: e.target.value})}
                      />
                    </div>

                    <button type="submit" disabled={isLoading} className="premium-btn premium-btn-primary full-width">
                      {isLoading ? 'Verifying...' : 'Complete Registration'}
                      <CheckCircle2 size={18} />
                    </button>
                    
                    <button 
                      type="button" 
                      className="secondary-link" 
                      onClick={() => setStep(1)}
                    >Change Email</button>
                  </form>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="reg-step success-step"
                >
                  <div className="success-lottie-placeholder">
                    <CheckCircle2 size={80} color="var(--icem-cyan)" />
                  </div>
                  <h2 className="text-display-sub">Registration Confirmed!</h2>
                  <p className="reg-description">Welcome to ICEM NTAI 2026. You are now officially registered. Check your email for payment confirmation steps and submission link.</p>
                  <button className="premium-btn premium-btn-secondary" onClick={() => window.location.href = '/'}>
                    Back to Home
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
