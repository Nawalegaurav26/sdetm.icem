import { useLocation } from 'react-router-dom';
import { Mail, Linkedin, User, ShieldCheck, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import './Committee.css';

interface MemberProps {
  name: string;
  role: string;
  org: string;
  email?: string;
  linkedin?: string;
}

const MemberCard: React.FC<MemberProps> = ({ name, role, org, email, linkedin }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="profile-card-hud hud-frame"
  >
    <div className="hud-corner top-left"></div>
    <div className="hud-corner top-right"></div>
    <div className="hud-corner bottom-left"></div>
    <div className="hud-corner bottom-right"></div>
    
    <div className="dossier-header px-4 py-2 flex justify-between items-center border-b border-icem-cyan/20 bg-icem-cyan/5">
      <div className="flex items-center gap-2">
        <ShieldCheck size={12} className="text-icem-cyan" />
        <span className="text-[10px] font-mono tracking-tighter opacity-70">VERIFIED_PERSONNEL</span>
      </div>
      <div className="flex items-center gap-2">
        <Activity size={12} className="text-icem-cyan animate-pulse" />
        <span className="text-[10px] font-mono opacity-50">ACTIVE</span>
      </div>
    </div>

    <div className="profile-image-section p-6 flex flex-col items-center">
      <div className="profile-image-hud">
        <div className="image-ring"></div>
        <div className="image-container">
          <img 
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=060f1e&color=43ccd1&size=200&bold=true&font-size=0.33`} 
            alt={name} 
          />
          <div className="scan-overlay"></div>
        </div>
      </div>

      <div className="profile-details text-center mt-6 w-full">
        <div className="role-tag text-icem-cyan font-mono text-[10px] tracking-widest mb-2 px-2 py-1 bg-icem-cyan/10 inline-block rounded">
          {role.toUpperCase()}
        </div>
        <h3 className="tech-heading text-lg mb-2 text-white">{name}</h3>
        <p className="hud-para text-xs opacity-60 line-clamp-2 min-h-[32px]">
          {org}
        </p>
      </div>
    </div>

    <div className="profile-actions-hud grid grid-cols-2 border-t border-icem-cyan/20">
      <a 
        href={`mailto:${email || 'sdetm.icem@indiraicem.ac.in'}`} 
        className="social-btn border-r border-icem-cyan/20"
        title="SECURE MAIL"
      >
        <Mail size={16} />
        <span className="text-[9px] font-mono mt-1">MAIL</span>
      </a>
      <a 
        href={linkedin || "#"} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-btn"
        title="NETWORK ID"
      >
        <Linkedin size={16} />
        <span className="text-[9px] font-mono mt-1">LINKEDIN</span>
      </a>
    </div>
    
    <div className="card-glitch-line"></div>
  </motion.div>
);

const Committee = () => {
  const location = useLocation();
  const path = location.pathname;
  const sectionTitle = path.split('/').pop()?.replace(/_/g, ' ').toUpperCase() || 'COMMITTEE';

  const renderSection = () => {
    if (path.includes('/chief-patron')) {
      return (
        <section className="committee-section-hud">
          <div className="committee-grid centered">
            <MemberCard 
              name="Dr. Tarita Shankar" 
              role="Chief Patron" 
              org="Chairperson & Chief Mentor – Indira Group of Institutions" 
            />
          </div>
        </section>
      );
    }

    if (path.includes('/patron')) {
      return (
        <section className="committee-section-hud">
          <div className="committee-grid">
            <MemberCard 
              name="Mr. Chetan Wakalkar" 
              role="Patron" 
              org="Chief Marketing Officer - IU & Managing Trustee - IGI" 
            />
            <MemberCard 
              name="Mr. Sahil Tarita Shankar" 
              role="Joint Secretary - IU" 
              org="Indira Group of Institutes" 
            />
            <MemberCard 
              name="Mr. Shaan Tarita Shankar" 
              role="Trustee Member - IU" 
              org="Indira Group of Institutes" 
            />
          </div>
        </section>
      );
    }

    if (path.includes('/chair')) {
      return (
        <section className="committee-section-hud">
          <div className="committee-grid centered">
            <MemberCard 
              name="Dr. Nilesh Uke" 
              role="Conference Chair" 
              org="Principal, Indira College of Engineering and Management" 
            />
          </div>
        </section>
      );
    }

    if (path.includes('/convenor')) {
      return (
        <section className="committee-section-hud">
          <div className="committee-grid">
            <MemberCard 
              name="Dr. Saurabh Gupta" 
              role="Convenor" 
              org="HOD Mechanical, ICEM" 
              email="saurabhgupta@indiraicem.ac.in"
            />
            <MemberCard 
              name="Dr. Manjusha Tatiya" 
              role="Co-Convenor" 
              org="HOD AI-DS, ICEM" 
              email="manjusha.tatiya@indiraicem.ac.in"
            />
          </div>
        </section>
      );
    }

    if (path.includes('/collegeadvisory')) {
      return (
        <section className="committee-section-hud">
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
                role="College Advisory Member" 
                org={member.role} 
              />
            ))}
          </div>
        </section>
      );
    }

    if (path.includes('/international_advisory_committee')) {
      return (
        <section className="committee-section-hud">
          <div className="committee-grid">
            {[
              { name: "Dr Celestino Ruivo", role: "Professor", org: "University of Algarve, Portugal" },
              { name: "Prof. Md. Zahir Uddin Arif", role: "Professor", org: "Jagannath University, Bangladesh" },
              { name: "Prof. Md. Rahat Khan", role: "Professor", org: "Bangladesh University of Professionals" },
              { name: "Dr. Sonali Bhadoria", role: "Senior Data Analyst", org: "NC DIT, Raleigh, NC" }
            ].map((member, idx) => (
              <MemberCard 
                key={idx} 
                name={member.name} 
                role={member.role} 
                org={member.org} 
              />
            ))}
          </div>
        </section>
      );
    }

    if (path.includes('/national_advisory_committee')) {
      return (
        <section className="committee-section-hud">
          <div className="committee-grid">
            {[
              { name: "Dr. R K Jain", role: "Vice Chancellor", org: "ADYPU, Pune" },
              { name: "Dr. Suresh Shirbahadurkar", role: "Principal", org: "D Y Patil Technical Campus, Pune" },
              { name: "Dr Mahesh Abale", role: "Director", org: "Prin. N.G. Naralkar Institute, Pune" },
              { name: "Dr. Sangita Jagtap", role: "Principal", org: "Baburaoji Gholap College, Pune" },
              { name: "Dr. S. S. Ohol", role: "Asso Professor", org: "COEP Technological University, Pune" },
              { name: "Dr. Anil Sahu", role: "Dean (PhD)", org: "GHRCEM, Pune" },
              { name: "Dr. Pendyala Srinivas", role: "HoD (Mechanical)", org: "GITAM University, Hyderabad" },
              { name: "Dr. Dilip Kumar Jang Bahadur Saini", role: "Asso Professor", org: "Dayanand Sagar University, Bangalore" },
              { name: "Dr. Sridaran Rajagopal", role: "Dean Executive", org: "Ganpat University, Mehsana" },
              { name: "Dr. Kavitha Venkatachari", role: "Dean AI & ML", org: "Universal AI University, Karjat" },
              { name: "Dr. M Karthikeyan", role: "Chief Scientist", org: "NCL, Pune" },
              { name: "Dr Prashant Kumbharkar", role: "Professor & Dean", org: "ADYPU, Pune" },
              { name: "Dr Anand Bewoor", role: "Dean-Academics", org: "Cummins College of Engineering, Pune" },
              { name: "Dr Vikas Mathe", role: "Professor", org: "Pune" },
              { name: "Dr Vahida Attar", role: "HoD (Computer)", org: "COEP Technological University, Pune" },
              { name: "Dr Neha Sharma", role: "TCS", org: "Pune" },
              { name: "Dr Rahul Mapari", role: "HoD (E&TC)", org: "PCCOER, Pune" },
              { name: "Dr Meghana Bhilare", role: "Director", org: "Dr.D.Y.Patil Institute, Pune" },
              { name: "Dr Santosh Deshpande", role: "Director", org: "IMCC, Pune" },
              { name: "Prof. Mohan Patel", role: "Professor of Practice", org: "Pune" },
              { name: "Prof. Ashok Saraf", role: "Professor of Practice", org: "Pune" }
            ].map((member, idx) => (
              <MemberCard 
                key={idx} 
                name={member.name} 
                role={member.role} 
                org={member.org} 
              />
            ))}
          </div>
        </section>
      );
    }

    if (path.includes('/organizing')) {
      return (
        <section className="committee-section-hud">
          <div className="dept-group-hud mb-12">
            <h3 className="tech-heading text-center text-icem-cyan mb-8 tracking-[0.2em]">MECHANICAL ENGINEERING</h3>
            <div className="committee-grid">
              {[
                { name: "Dr. Mahesh Bhong", role: "Associate Professor" },
                { name: "Mr. Hemant Darokarm", role: "Assistant Professor" },
                { name: "Mr. Sushil Chopade", role: "Assistant Professor" },
                { name: "Mr. Sagar Chirade", role: "Assistant Professor" },
                { name: "Mr. Amit Narwade", role: "Assistant Professor" },
                { name: "Mr. Pravin Charde", role: "Assistant Professor" },
                { name: "Ms. Pranali Khatke", role: "Assistant Professor" },
                { name: "Ms. Ashwini Gaikwad", role: "Assistant Professor" },
                { name: "Ms. Ashwini Admane", role: "Assistant Professor" },
                { name: "Ms. Shubangi Manwatkar", role: "Assistant Professor" }
              ].map((member, idx) => (
                <MemberCard 
                  key={idx} 
                  name={member.name} 
                  role={member.role} 
                  org="Mechanical Department, ICEM" 
                />
              ))}
            </div>
          </div>

          <div className="dept-group-hud">
            <h3 className="tech-heading text-center text-icem-cyan mb-8 tracking-[0.2em]">AI & DATA SCIENCE</h3>
            <div className="committee-grid">
              {[
                { name: "Ms. Deepa Padwal", role: "Assistant Professor" },
                { name: "Ms. Pallavi Chavan", role: "Assistant Professor" },
                { name: "Ms. Monika Patil", role: "Assistant Professor" },
                { name: "Ms. Kavita Sharma", role: "Assistant Professor" },
                { name: "Mr. Vivek Kumar", role: "Assistant Professor" },
                { name: "Ms. Vidya Dhoke", role: "Assistant Professor" },
                { name: "Mr. Tushar Mahore", role: "Assistant Professor" },
                { name: "Ms. Tanuja Pande", role: "Assistant Professor" }
              ].map((member, idx) => (
                <MemberCard 
                  key={idx} 
                  name={member.name} 
                  role={member.role} 
                  org="AI-DS Department, ICEM" 
                />
              ))}
            </div>
          </div>
        </section>
      );
    }

    return <div>Section not found</div>;
  };

  return (
    <div className="committee-page-hud relative z-10 pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <header className="committee-header-hud text-center mb-16">
          <div className="tech-subheading">PERSONNEL_DOSSIER</div>
          <h1 className="hud-title mt-4">
            {sectionTitle}
          </h1>
          <div className="header-line mx-auto mt-6"></div>
        </header>
        
        {renderSection()}
      </div>
    </div>
  );
};

export default Committee;
