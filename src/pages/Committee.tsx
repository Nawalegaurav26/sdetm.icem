import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import './Committee.css';

interface MemberProps {
  name: string;
  role: string;
  org: string;
  email?: string;
  linkedin?: string;
}

const MemberCard: React.FC<MemberProps> = ({ name, role, org, email, linkedin }) => (
  <div className="profile-card">
    <div className="profile-image-container">
      <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=00CED1&color=fff&size=200`} alt={name} />
    </div>
    <div className="profile-info">
      <span className="role">{role}</span>
      <h3>{name}</h3>
      <span className="org">{org}</span>
    </div>
    <div className="profile-social">
      <a href={`mailto:${email || 'sdetm.icem@indiraicem.ac.in'}`} title="Email"><Mail size={18} /></a>
      <a href={linkedin || "#"} target="_blank" rel="noopener noreferrer" title="LinkedIn"><Linkedin size={18} /></a>
    </div>
  </div>
);

const Committee = () => {
  return (
    <div className="committee-page">
      <div className="container">
        
        {/* Chief Patron */}
        <section className="committee-section">
          <span className="section-subtitle">Leadership</span>
          <h2 className="section-title text-center">Chief Patron</h2>
          <div className="committee-grid centered">
            <MemberCard 
              name="Dr. Tarita Shankar" 
              role="Chief Patron" 
              org="Chairperson & Chief Mentor – Indira Group of Institutes" 
            />
          </div>
        </section>

        {/* Patrons */}
        <section className="committee-section">
          <h2 className="section-title text-center">Patrons</h2>
          <div className="committee-grid">
            <MemberCard 
              name="Mr. Chetan Wakalkar" 
              role="Patron" 
              org="Chief Marketing Officer - IU & Managing Trustee - IGI" 
            />
            <MemberCard 
              name="Mr. Sahil Tarita Shankar Aditya Mehendale" 
              role="Patron" 
              org="Joint Secretary - IU" 
            />
            <MemberCard 
              name="Mr. Shaan Tarita Shankar Aditya Mehendale" 
              role="Patron" 
              org="Trustee Member - IU" 
            />
          </div>
        </section>

        {/* Conference Leadership */}
        <section className="committee-section">
          <h2 className="section-title text-center">Conference Leadership</h2>
          <div className="committee-grid">
            <MemberCard 
              name="Dr. Nilesh Uke" 
              role="Conference Chair" 
              org="Principal, ICEM" 
            />
            <MemberCard 
              name="Dr. Saurabh Gupta" 
              role="Convenor" 
              org="HOD Mechanical, ICEM" 
            />
            <MemberCard 
              name="Dr. Manjusha Tatiya" 
              role="Co-Convenor" 
              org="HOD AI-DS, ICEM" 
            />
          </div>
        </section>

        {/* Advisory Committee */}
        <section className="committee-section">
          <h2 className="section-title text-center">Conference Advisory Committee</h2>
          <div className="committee-grid">
            {[
              { name: "Dr. Soumitra Das", role: "Vice Principal & Head of Deans" },
              { name: "Dr. Poorna Shankar", role: "Dean AI & HOD-Computer" },
              { name: "Dr. Mahesh Bhong", role: "Dean, R&D" },
              { name: "Prof. Meenakshi Patil", role: "HOD, ENTC" },
              { name: "Dr. Kirav Devade", role: "HOD, FE" },
              { name: "Dr. Priyanka Pawar", role: "HOD, MBA" },
              { name: "Dr. Vikas Nandgaonkar", role: "HOD, IT" },
              { name: "Prof. Savita Jangale", role: "HOD, Civil" },
              { name: "Dr. Avantika Bijawe", role: "HOD, MCA & BCA" },
              { name: "Dr. Deepa Jamnik", role: "HOD, BBA-MBA(Integrated)" }
            ].map((member, idx) => (
              <MemberCard 
                key={idx} 
                name={member.name} 
                role="Advisory Member" 
                org={member.role} 
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Committee;
