const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Temporary in-memory OTP store (Use Redis or DB for production)
const otpStore = new Map();

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// For testing if credentials aren't provided
const setupMockTransporter = async () => {
    if (!process.env.EMAIL_USER) {
        let testAccount = await nodemailer.createTestAccount();
        return nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
              user: testAccount.user,
              pass: testAccount.pass,
            },
        });
    }
    return transporter;
};

app.post('/api/auth/send-otp', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email is required' });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore.set(email, { otp, expires: Date.now() + 10 * 60 * 1000 }); // 10 mins

  try {
    const activeTransporter = await setupMockTransporter();
    
    const info = await activeTransporter.sendMail({
      from: '"SDETM ICEM 2025" <noreply@sdetm-icem.org>',
      to: email,
      subject: "Your OTP for Conference Registration",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #1a237e; text-align: center;">SDETM ICEM 2025</h2>
          <p>Hello,</p>
          <p>Thank you for your interest in SDETM ICEM 2025. Please use the following One-Time Password (OTP) to complete your registration:</p>
          <div style="background: #f5f5f5; padding: 20px; text-align: center; font-size: 32px; font-weight: bold; color: #00acc1; letter-spacing: 5px; border-radius: 5px;">
            ${otp}
          </div>
          <p style="color: #757575; font-size: 14px;">This code is valid for 10 minutes. If you did not request this code, please ignore this email.</p>
          <hr style="border: 0; border-top: 1px solid #e0e0e0; margin: 20px 0;">
          <p style="text-align: center; font-size: 12px; color: #9e9e9e;">Indira College of Engineering and Management, Pune</p>
        </div>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    if (!process.env.EMAIL_USER) {
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

    res.json({ message: 'OTP sent successfully', preview: nodemailer.getTestMessageUrl(info) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

app.post('/api/auth/verify-otp', (req, res) => {
  const { email, otp } = req.body;
  const storedData = otpStore.get(email);

  if (!storedData) return res.status(400).json({ message: 'OTP not found' });
  if (Date.now() > storedData.expires) {
    otpStore.delete(email);
    return res.status(400).json({ message: 'OTP expired' });
  }
  if (storedData.otp !== otp) return res.status(400).json({ message: 'Invalid OTP' });

  otpStore.delete(email);
  res.json({ message: 'OTP verified successfully', success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
