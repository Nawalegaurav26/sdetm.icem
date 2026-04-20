import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, Building, Send, ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './Registration.css';

const Registration = () => {
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
      const response = await fetch('http://localhost:5000/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email })
      });
      
      const data = await response.json();
      if (response.ok) {
        setStep(2);
      } else {
        alert(data.message || 'Failed to send OTP');
      }
    } catch (err) {
      alert('Error connecting to authentication server');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, otp: formData.otp })
      });
      
      const data = await response.json();
      if (response.ok) {
        setStep(3);
      } else {
        alert(data.message || 'Invalid OTP');
      }
    } catch (err) {
      alert('Error verifying OTP');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="registration-container">
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
                <CheckCircle2 size={80} color="#00f3ff" />
              </div>
              <h2 className="text-display-sub">Registration Confirmed!</h2>
              <p className="reg-description">Welcome to SDETM ICEM 2025. You are now officially registered as a delegate. Check your email for further instructions and event details.</p>
              <button className="premium-btn premium-btn-secondary" onClick={() => window.location.href = '/'}>
                Back to Home
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Registration;
