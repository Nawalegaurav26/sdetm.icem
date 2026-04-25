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
      <div className="neural-background"></div>
      <div className="container registration-grid">
        {/* Left Column: Info & Fees */}
        <div className="registration-info">
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="info-section hud-frame"
          >
            <div className="hud-corner top-left"></div>
            <div className="hud-corner bottom-right"></div>
            <h2 className="hud-section-title">01 // REGISTRATION FEES</h2>
            <div className="fee-table-container">
              <table className="fee-table">
                <thead>
                  <tr>
                    <th>CATEGORY</th>
                    <th>INDIAN (₹)</th>
                    <th>FOREIGN ($)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Students / Research Scholars</td>
                    <td className="fee-value">2000</td>
                    <td className="fee-value">50</td>
                  </tr>
                  <tr>
                    <td>Faculty / Academicians</td>
                    <td className="fee-value">2500</td>
                    <td className="fee-value">65</td>
                  </tr>
                  <tr>
                    <td>Industry Professionals</td>
                    <td className="fee-value">5000</td>
                    <td className="fee-value">75</td>
                  </tr>
                  <tr>
                    <td>Co-Author Registration</td>
                    <td className="fee-value">1000</td>
                    <td className="fee-value">30</td>
                  </tr>
                </tbody>
              </table>
              <div className="hud-divider"></div>
              <p className="fee-note">** Additional fee will be applicable for SCOPUS publication (T&C Apply)</p>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="info-section bank-details hud-frame"
          >
            <div className="hud-corner top-right"></div>
            <div className="hud-corner bottom-left"></div>
            <h2 className="hud-section-title"><CreditCard size={18} /> 02 // PAYMENT PROTOCOL</h2>
            <div className="bank-card">
              <div className="bank-row"><span>ACCOUNT:</span> <strong>Indira College of Engineering & Management</strong></div>
              <div className="bank-row"><span>BANK:</span> <strong>INDUSIND BANK LTD</strong></div>
              <div className="bank-row"><span>BRANCH:</span> <strong>Wakad, Pune</strong></div>
              <div className="bank-row"><span>IFSC:</span> <strong className="tech-code">INDB0000999</strong></div>
              <div className="bank-row"><span>ACCOUNT NO:</span> <strong className="tech-code">201025452641</strong></div>
              <div className="bank-row"><span>TYPE:</span> <strong>Current Account</strong></div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="info-section notes hud-frame"
          >
            <div className="hud-corner top-left"></div>
            <h2 className="hud-section-title"><Info size={18} /> 03 // TERMS & CONDITIONS</h2>
            <ul className="notes-list">
              <li>Registration fees shall not be refundable in case of any cancellation.</li>
              <li>Fees includes conference kit and food coupons for one author.</li>
              <li>Lodging & boarding will be arranged by participants themselves.</li>
              <li>Local transport from Somatane can be arranged on prior request.</li>
              <li>No TA/DA will be provided to attend conference.</li>
            </ul>
            <div className="login-prompt">
              <p className="login-text">
                <LogIn size={16} />
                EXISTING USER? <Link to="/login" className="login-link">ACCESS PORTAL</Link>
              </p>
            </div>
          </motion.section>
        </div>

        {/* Right Column: Registration Form */}
        <div className="registration-form-wrapper">
          <div className="registration-glass hud-frame main-terminal">
            <div className="hud-corner top-left"></div>
            <div className="hud-corner top-right"></div>
            <div className="hud-corner bottom-left"></div>
            <div className="hud-corner bottom-right"></div>
            <div className="terminal-header">
              <span className="terminal-title">DELEGATE_REGISTRATION_v2.0</span>
              <div className="terminal-dots"><span></span><span></span><span></span></div>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="reg-step"
                >
                  <div className="step-indicator">STEP 01 / 03</div>
                  <h2 className="hud-form-title">Delegate Identity</h2>
                  <p className="reg-description">Initialize secure registration sequence.</p>
                  
                  <form onSubmit={handleSendOTP} className="reg-form">
                    <div className="input-group">
                      <label className="input-label">FULL_NAME</label>
                      <div className="input-wrapper">
                        <User className="input-icon" size={18} />
                        <input 
                          type="text" 
                          placeholder="ENTER NAME" 
                          required 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="input-group">
                      <label className="input-label">COMM_EMAIL</label>
                      <div className="input-wrapper">
                        <Mail className="input-icon" size={18} />
                        <input 
                          type="email" 
                          placeholder="OFFICIAL ADDRESS" 
                          required 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="input-group">
                      <label className="input-label">ORG_AFFILIATION</label>
                      <div className="input-wrapper">
                        <Building className="input-icon" size={18} />
                        <input 
                          type="text" 
                          placeholder="INSTITUTION" 
                          required 
                          value={formData.institution}
                          onChange={(e) => setFormData({...formData, institution: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="role-selector">
                      <label className="input-label">ACCESS_LEVEL</label>
                      <div className="role-options">
                        <button 
                          type="button"
                          className={formData.role === 'student' ? 'active' : ''} 
                          onClick={() => setFormData({...formData, role: 'student'})}
                        >STUDENT</button>
                        <button 
                          type="button"
                          className={formData.role === 'faculty' ? 'active' : ''} 
                          onClick={() => setFormData({...formData, role: 'faculty'})}
                        >FACULTY</button>
                        <button 
                          type="button" 
                          className={formData.role === 'industry' ? 'active' : ''} 
                          onClick={() => setFormData({...formData, role: 'industry'})}
                        >INDUSTRY</button>
                      </div>
                    </div>

                    <button type="submit" disabled={isLoading} className="hud-btn-primary full-width">
                      {isLoading ? 'INITIATING...' : 'GENERATE OTP'}
                      <ChevronRight size={18} />
                    </button>
                  </form>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="reg-step"
                >
                  <div className="step-indicator">STEP 02 / 03</div>
                  <div className="shield-icon-container">
                    <ShieldCheck size={48} className="shield-icon" />
                  </div>
                  <h2 className="hud-form-title">Security Check</h2>
                  <p className="reg-description">Verification code sent to: <br/><strong>{formData.email}</strong></p>
                  
                  <form onSubmit={handleVerifyOTP} className="reg-form">
                    <div className="input-group otp-input-container">
                      <label className="input-label">VERIFICATION_CODE</label>
                      <input 
                        type="text" 
                        placeholder="______" 
                        maxLength={6}
                        className="otp-input"
                        required 
                        value={formData.otp}
                        onChange={(e) => setFormData({...formData, otp: e.target.value})}
                      />
                    </div>

                    <button type="submit" disabled={isLoading} className="hud-btn-primary full-width">
                      {isLoading ? 'VERIFYING...' : 'AUTHORIZE REGISTRATION'}
                      <CheckCircle2 size={18} />
                    </button>
                    
                    <button 
                      type="button" 
                      className="secondary-link" 
                      onClick={() => setStep(1)}
                    >CHANGE EMAIL</button>
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
                    <CheckCircle2 size={80} className="success-check" />
                  </div>
                  <h2 className="hud-form-title">Confirmed.</h2>
                  <p className="reg-description">Welcome to SDETM 2026. Credentials established. Please finalize payment protocol via email instructions.</p>
                  <button className="hud-btn-secondary" onClick={() => window.location.href = '/'}>
                    RETURN TO COMMAND
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="terminal-footer">
              <span className="terminal-status">SECURE_CONNECTION: ACTIVE</span>
              <span className="terminal-encoding">UTF-8 // RSA-2048</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
