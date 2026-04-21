const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');

dotenv.config();

const app = express();
const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Prisma handles data persistence now.
// const otpStore = new Map();

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
  // Save OTP to Prisma DB
  await prisma.oTP.create({
    data: {
      email,
      otp,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000) // 10 mins
    }
  });

  try {
    const activeTransporter = await setupMockTransporter();
    
    const info = await activeTransporter.sendMail({
      from: '"ICEM 2026 Registration" <noreply@indiraicem.ac.in>',
      to: email,
      subject: `[ICEM 2026] Verification Code: ${otp}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f172a; color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
          <div style="background: linear-gradient(135deg, #1a237e 0%, #00acc1 100%); padding: 40px 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; letter-spacing: 2px;">ICEM 2026</h1>
            <p style="margin: 10px 0 0; opacity: 0.8; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">International Conference - NTAI</p>
          </div>
          <div style="padding: 40px 30px; line-height: 1.6;">
            <h2 style="margin-top: 0; color: #00acc1;">Verify Your Email</h2>
            <p>Thank you for registering for the International Conference on Sustainable Developments in Engineering, Technology & Management (ICEM 2026).</p>
            <p>Please use the following verification code to secure your registration portal:</p>
            
            <div style="margin: 30px 0; background: rgba(255,255,255,0.05); border: 1px dashed rgba(0, 172, 193, 0.5); padding: 30px; text-align: center; border-radius: 12px;">
              <span style="font-size: 42px; font-weight: 800; color: #00acc1; letter-spacing: 8px; display: block;">${otp}</span>
              <span style="display: block; margin-top: 10px; font-size: 12px; color: #757575;">(Valid for 10 minutes)</span>
            </div>

            <p style="font-size: 14px; color: #94a3b8;">If you did not request this verification, please safely ignore this email.</p>
          </div>
          <div style="background: rgba(255,255,255,0.02); padding: 20px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
            <p style="margin: 0; font-size: 12px; color: #64748b;">Indira College of Engineering and Management, Pune</p>
            <p style="margin: 5px 0 0; font-size: 11px; color: #475569;">&copy; 2026 ICEM Committee. All rights reserved.</p>
          </div>
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

app.post('/api/auth/verify-otp', async (req, res) => {
  const { email, otp, userData } = req.body;
  
  try {
    const storedRecord = await prisma.oTP.findFirst({
      where: { email, otp, expiresAt: { gt: new Date() } },
      orderBy: { createdAt: 'desc' }
    });

    if (!storedRecord) return res.status(400).json({ message: 'Invalid or expired OTP' });

    let user = null;
    if (userData) {
      user = await prisma.user.upsert({
        where: { email },
        update: {
          name: userData.name,
          institution: userData.institution,
          role: userData.role
        },
        create: {
          email,
          name: userData.name,
          institution: userData.institution,
          role: userData.role
        }
      });
    }

    await prisma.oTP.deleteMany({ where: { email } });
    res.json({ message: 'OTP verified successfully', success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Verification error' });
  }
});

// 3. Paper Submission
app.post('/api/papers/submit', async (req, res) => {
  const { title, abstract, track, keywords, fileUrl, userEmail } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email: userEmail } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const paper = await prisma.paper.create({
      data: {
        userId: user.id,
        title,
        abstract,
        fileUrl,
        status: 'submitted'
      }
    });

    res.json({ message: 'Paper submitted successfully!', paper });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving submission' });
  }
});

// 4. User Dashboard & Profile
app.get('/api/user/papers/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { papers: true }
    });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user.papers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching papers' });
  }
});

app.get('/api/user/profile/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
