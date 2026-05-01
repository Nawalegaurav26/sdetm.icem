import { useLocation } from 'react-router-dom';
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
      <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=003c84&color=fff&size=200`} alt={name} />
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
  const location = useLocation();
  const path = location.pathname;

  const renderSection = () => {
    if (path.includes('/chief-patron')) {
      return (
        <section className="committee-section">
          <h2 className="section-title text-center">Chief Patron</h2>
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
        <section className="committee-section">
          <h2 className="section-title text-center">Patrons</h2>
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
        <section className="committee-section">
          <h2 className="section-title text-center">Conference Chair</h2>
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
        <section className="committee-section">
          <h2 className="section-title text-center">Convenors</h2>
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
        <section className="committee-section">
          <h2 className="section-title text-center">College Advisory Committee</h2>
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
        <section className="committee-section">
          <h2 className="section-title text-center">International Advisory Committee</h2>
          <div className="committee-grid">
            {[
              { 
                name: "Dr Celestino Ruivo", 
                role: "Professor in Mechanical Engineering", 
                org: "University of Algarve, Portugal" 
              },
              { 
                name: "Prof. Md. Zahir Uddin Arif", 
                role: "Professor", 
                org: "Jagannath University, Dhaka, Bangladesh" 
              },
              { 
                name: "Prof. Md. Rahat Khan", 
                role: "Professor", 
                org: "Bangladesh University of Professionals, Dhaka, Bangladesh" 
              },
              { 
                name: "Dr. Sonali Bhadoria", 
                role: "Senior Data Analyst", 
                org: "NC DIT, Raleigh, NC" 
              }
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
        <section className="committee-section">
          <h2 className="section-title text-center">National Advisory Committee</h2>
          <div className="committee-grid">
            {[
              { name: "Dr. R K Jain", role: "Vice Chancellor", org: "ADYPU, Pune" },
              { name: "Dr. Suresh Shirbahadurkar", role: "Principal", org: "D Y Patil Technical Campus, Pune" },
              { name: "Dr Mahesh Abale", role: "Director", org: "Prin. N.G. Naralkar Institute, Pune" },
              { name: "Dr. Sangita Jagtap", role: "Principal", org: "Baburaoji Gholap College, Pune" },
              { name: "Dr. S. S. Ohol", role: "Asso Professor (Mechanical)", org: "COEP Technological University, Pune" },
              { name: "Dr. Anil Sahu", role: "Dean (PhD)", org: "GHRCEM, Pune" },
              { name: "Dr. Pendyala Srinivas", role: "HoD (Mechanical)", org: "GITAM University, Hyderabad" },
              { name: "Dr. Dilip Kumar Jang Bahadur Saini", role: "Asso Professor (CSE)", org: "Dayanand Sagar University, Bangalore" },
              { name: "Dr. Sridaran Rajagopal", role: "Dean Executive", org: "Ganpat University, Mehsana" },
              { name: "Dr. Kavitha Venkatachari", role: "Dean AI & ML", org: "Universal AI University, Karjat, Mumbai" },
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
        <section className="committee-section">
          <h2 className="section-title text-center">Organizing Committee</h2>
          
          <div className="dept-group">
            <h3 className="dept-title">Mechanical Engineering</h3>
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

          <div className="dept-group dept-group-mt">
            <h3 className="dept-title">AI & Data Science</h3>
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
    <div className="committee-page">
      <div className="container">
        {renderSection()}
      </div>
    </div>
  );
};

export default Committee;
