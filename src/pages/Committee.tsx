import { useLocation } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';
import './Committee.css';

interface MemberProps {
  name: string;
  role: string;
  org: string;
  image?: string;
  email?: string;
  linkedin?: string;
}

const MemberCard: React.FC<MemberProps> = ({ name, role, org, image, email, linkedin }) => (
  <div className="profile-card" itemScope itemType="http://schema.org/Person">
    <div className="profile-image-container">
      <img 
        itemProp="image" 
        src={image || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=003c84&color=fff&size=200`} 
        alt={name} 
      />
    </div>
    <div className="profile-info">
      <span className="role" itemProp="jobTitle">{role}</span>
      <h3 itemProp="name">{name}</h3>
      <span className="org" itemProp="affiliation">{org}</span>
    </div>
    <div className="profile-social">
      {email && <a href={`mailto:${email}`} title="Email" itemProp="email"><Mail size={18} /></a>}
      {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" itemProp="url"><Linkedin size={18} /></a>}
    </div>
  </div>
);

const Committee = () => {
  const location = useLocation();
  const path = location.pathname;

  const renderSection = () => {
    if (path.includes('/patrons')) {
      return (
        <section className="committee-section">
          <h2 className="section-title text-center">Patrons</h2>
          
          <h3 className="dept-title dept-title-mt2">Chief Patron</h3>
          <div className="committee-grid centered">
            <MemberCard 
              name="Dr. Tarita Shankar" 
              role="Chief Patron" 
              org={"President - Indira University\nChairperson & Chief Mentor – Indira Group of Institutions"} 
              image="/01%20Chief%20Patron,%2002%20Patron/01_dr_tarita_shankar.png"
              linkedin="https://www.linkedin.com/in/tarita-shankar-a1901489/"
            />
          </div>

          <h3 className="dept-title dept-title-mt3">Patrons</h3>
          <div className="committee-grid">
            <MemberCard 
              name="Mr. Chetan Wakalkar" 
              role="Patron" 
              org="Chief Marketing Officer - IU & Managing Trustee - IGI" 
              image="/01%20Chief%20Patron,%2002%20Patron/02_prof_chetan_wakalkar.png"
              linkedin="https://www.linkedin.com/in/chetan-wakalkar-142655b/"
            />
            <MemberCard 
              name="Mr. Sahil Tarita Shankar" 
              role="Joint Secretary - IU" 
              org="Indira Group of Institutes" 
              image="/01%20Chief%20Patron,%2002%20Patron/03_mr_sahil_tarita_shankar.png"
            />
            <MemberCard 
              name="Mr. Shaan Tarita Shankar" 
              role="Trustee Member - IU" 
              org="Indira Group of Institutes" 
              image="/01%20Chief%20Patron,%2002%20Patron/04_mr_shaan_tarita_shankar.png"
            />
          </div>
        </section>
      );
    }

    if (path.includes('/core-team')) {
      return (
        <section className="committee-section">
          <h2 className="section-title text-center">Core Team</h2>
          
          <h3 className="dept-title dept-title-mt2">Conference Chair</h3>
          <div className="committee-grid centered">
            <MemberCard 
              name="Dr. Nilesh Uke" 
              role="Conference Chair" 
              org="Principal, Indira College of Engineering and Management" 
              image="/Core%20Team/Conference%20Chair/01_dr_nilesh_uke.png"
              linkedin="https://www.linkedin.com/in/dr-nilesh-uke-96104819/"
            />
          </div>

          <h3 className="dept-title dept-title-mt3">Convenors</h3>
          <div className="committee-grid">
            <MemberCard 
              name="Dr. Saurabh Gupta" 
              role="Convenor" 
              org="HOD Mechanical, ICEM" 
              email="saurabhgupta@indiraicem.ac.in"
              image="/Core%20Team/Convenor/01_dr_saurabh_gupta.png"
              linkedin="https://www.linkedin.com/in/dr-saurabh-gupta-434b7a70/"
            />
            <MemberCard 
              name="Dr. Manjusha Tatiya" 
              role="Co-Convenor" 
              org="HOD AI-DS, ICEM" 
              email="manjusha.tatiya@indiraicem.ac.in"
              image="/Core%20Team/Convenor/02_dr_manjusha_tatiya.png"
              linkedin="https://www.linkedin.com/in/dr-manjusha-tatiya-2228b421/"
            />
          </div>
        </section>
      );
    }

    if (path.includes('/college-advisory')) {
      return (
        <section className="committee-section">
          <h2 className="section-title text-center">College Advisory Committee</h2>
          <div className="committee-grid">
            {[
              { name: "Dr. Soumitra Das", role: "Vice Principal & Head of Deans", image: "/College%20Advisory%20Committee/01_dr_soumitra_das.png", linkedin: "https://www.linkedin.com/in/dr-soumitra-das-a6415341/" },
              { name: "Dr. Poorna Shankar", role: "Dean AI & HOD-Computer", image: "/College%20Advisory%20Committee/02_dr_poorna_shankar.png", linkedin: "https://www.linkedin.com/in/poornashankar10/" },
              { name: "Dr. Mahesh Bhong", role: "Dean, R&D", image: "/College%20Advisory%20Committee/03_dr_mahesh_bhong.png", linkedin: "https://www.linkedin.com/in/mahesh-bhong-3052ba50/" },
              { name: "Prof. Meenakshi Patil", role: "HOD, ENTC", image: "/College%20Advisory%20Committee/04_prof_meenakshi_patil.png", linkedin: "https://www.linkedin.com/in/meenakshi-patil-003402a8/" },
              { name: "Dr. Kirav Devade", role: "HOD, FE", image: "/College%20Advisory%20Committee/05_dr_kirav_devade.png", linkedin: "https://www.linkedin.com/in/kiran-devade-377b0857/" },
              { name: "Dr. Priyanka Pawar", role: "HOD, MBA", image: "/College%20Advisory%20Committee/06_dr_priyanka_pawar.png", linkedin: "https://www.linkedin.com/in/dr-priyanka-pawar-863b1218/" },
              { name: "Dr. Vikas Nandgaonkar", role: "HOD, IT", image: "/College%20Advisory%20Committee/07_dr_vikas_nandgaonkar.png", linkedin: "https://www.linkedin.com/in/vikas-nandgaonkar-b256b933/" },
              { name: "Prof. Savita Jangale", role: "HOD, Civil", image: "/College%20Advisory%20Committee/08_prof_savita_jangale.png", linkedin: "https://www.linkedin.com/in/savita-jangale-0b3726170/" },
              { name: "Dr. Avantika Bijawe", role: "HOD, MCA & BCA", image: "/College%20Advisory%20Committee/09_dr_avantika_bijawe.png" },
              { name: "Dr. Deepa Jamnik", role: "HOD, BBA-MBA(Integrated)", image: "/College%20Advisory%20Committee/10_dr_deepa_jamnik.png", linkedin: "https://www.linkedin.com/in/dr-deepa-jamnik-51baa2217/" }
            ].map((member, idx) => (
              <MemberCard 
                key={idx} 
                name={member.name} 
                role="College Advisory Member" 
                org={member.role}
                image={member.image} 
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </section>
      );
    }

    if (path.includes('/international-advisory')) {
      return (
        <section className="committee-section">
          <h2 className="section-title text-center">International Advisory Committee</h2>
          <div className="committee-grid">
            {[
              { 
                name: "Dr Celestino Ruivo", 
                role: "Professor in Mechanical Engineering", 
                org: "University of Algarve, Portugal",
                image: "/International%20Advisory%20Committee/01_dr_celestino_ruivo.png",
                linkedin: "https://www.researchgate.net/profile/Celestino-Ruivo"
              },
              { 
                name: "Prof. Md. Zahir Uddin Arif", 
                role: "Professor of Marketing", 
                org: "Jagannath University, Dhaka, Bangladesh",
                image: "/International%20Advisory%20Committee/02_prof_md_zahir_uddin_arif.png",
                linkedin: "https://www.linkedin.com/in/professor-md-zahir-uddin-arif-95b69413/"
              },
              { 
                name: "Dr. Md. Rahat Khan", 
                role: "Faculty Member & MBA Program Coordinator", 
                org: "Army Institute of Business Administration, Savar, Bangladesh",
                image: "/International%20Advisory%20Committee/03_dr_md_rahat_khan.png",
                linkedin: "https://www.linkedin.com/in/dr-md-rahat-khan-mba-mbs-16690b53/"
              },
              { 
                name: "Dr. Sonali Bhadoria", 
                role: "Senior Data Analyst", 
                org: "NC DIT, Raleigh, NC",
                image: "/International%20Advisory%20Committee/04_dr_sonali_bhadoria.png",
                linkedin: "https://www.linkedin.com/in/sonali-bhadoria/"
              },
              {
                name: "Dr. R. L. Bhatia",
                role: "Founder",
                org: "World CSR Day & World Sustainability",
                image: "/International%20Advisory%20Committee/05_dr_r_l_bhatia.png",
                linkedin: "https://www.linkedin.com/in/drrlbhatia/"
              }
            ].map((member, idx) => (
              <MemberCard 
                key={idx} 
                name={member.name} 
                role={member.role} 
                org={member.org}
                linkedin={member.linkedin}
                image={member.image} 
              />
            ))}
          </div>
        </section>
      );
    }

    if (path.includes('/national-advisory')) {
      return (
        <section className="committee-section">
          <h2 className="section-title text-center">National Advisory Committee</h2>
          <div className="committee-grid">
            {[
              { name: "Dr. R K Jain", role: "Vice Chancellor", org: "ADYPU, Pune", image: "/National%20Advisory%20Committee/01_dr_r_k_jain.png", linkedin: "https://scholar.google.com/citations?user=x_4w4O8AAAAJ&hl=en" },
              { name: "Dr. Suresh Shirbahadurkar", role: "Principal", org: "D Y Patil Technical Campus, Pune", image: "/National%20Advisory%20Committee/02_dr_suresh_shirbahadurkar.png", linkedin: "https://www.researchgate.net/profile/Suresh-Shirbahadurkar-2" },
              { name: "Dr Mahesh Abale", role: "Director", org: "Prin. N.G. Naralkar Institute, Pune", image: "/National%20Advisory%20Committee/03_dr_mahesh_abale.png", linkedin: "https://www.researchgate.net/profile/Mahesh-Abale" },
              { name: "Dr. Sangita Jagtap", role: "Principal", org: "Baburaoji Gholap College, Pune", image: "/National%20Advisory%20Committee/04_dr_sangita_jagtap.png", linkedin: "https://www.researchgate.net/profile/Sangeeta-Jagtap" },
              { name: "Dr. S. S. Ohol", role: "Asso Professor (Mechanical)", org: "COEP Technological University, Pune", image: "/National%20Advisory%20Committee/05_dr_s_s_ohol.png", linkedin: "https://www.researchgate.net/profile/Shantipal-Ohol" },
              { name: "Dr. Anil Sahu", role: "Dean (PhD)", org: "GHRCEM, Pune", image: "/National%20Advisory%20Committee/06_dr_anil_sahu.png" },
              { name: "Dr. Pendyala Srinivas", role: "HoD (Mechanical)", org: "GITAM University, Hyderabad", image: "/National%20Advisory%20Committee/07_dr_pendyala_srinivas.png" },
              { name: "Dr. Dilip Kumar Jang Bahadur Saini", role: "Asso Professor (CSE)", org: "Dayanand Sagar University, Bangalore", image: "/National%20Advisory%20Committee/08_dr_dilip_kumar_jang_bahadur_saini.png" },
              { name: "Dr. Sridaran Rajagopal", role: "Dean Executive", org: "Ganpat University, Mehsana", image: "/National%20Advisory%20Committee/09_dr_sridaran_rajagopal.png" },
              { name: "Dr. Kavitha Venkatachari", role: "Dean AI & ML", org: "Universal AI University, Karjat, Mumbai", image: "/National%20Advisory%20Committee/10_dr_kavitha_venkatachari.png" },
              { name: "Dr. M Karthikeyan", role: "Chief Scientist", org: "NCL, Pune", image: "/National%20Advisory%20Committee/11_dr_m_karthikeyan.png" },
              { name: "Dr Prashant Kumbharkar", role: "Professor & Dean", org: "ADYPU, Pune", image: "/National%20Advisory%20Committee/12_dr_prashant_kumbharkar.png" },
              { name: "Dr Anand Bewoor", role: "Dean-Academics", org: "Cummins College of Engineering, Pune", image: "/National%20Advisory%20Committee/13_dr_anand_bewoor.png" },
              { name: "Dr Vikas Mathe", role: "Professor", org: "Pune", image: "/National%20Advisory%20Committee/14_dr_vikas_mathe.png" },
              { name: "Dr Vahida Attar", role: "HoD (Computer)", org: "COEP Technological University, Pune", image: "/National%20Advisory%20Committee/15_dr_vahida_attar.png" },
              { name: "Dr Neha Sharma", role: "TCS", org: "Pune", image: "/National%20Advisory%20Committee/16_dr_neha_sharma.png" },
              { name: "Dr Rahul Mapari", role: "HoD (E&TC)", org: "PCCOER, Pune", image: "/National%20Advisory%20Committee/17_dr_rahul_mapari.png" },
              { name: "Dr Meghana Bhilare", role: "Director", org: "Dr.D.Y.Patil Institute, Pune", image: "/National%20Advisory%20Committee/18_dr_meghana_bhilare.png" },
              { name: "Dr Santosh Deshpande", role: "Director", org: "IMCC, Pune", image: "/National%20Advisory%20Committee/19_dr_santosh_deshpande.png" },
              { name: "Prof. Mohan Patel", role: "Professor of Practice", org: "Pune" },
              { name: "Prof. Ashok Saraf", role: "Professor of Practice", org: "Pune", image: "/National%20Advisory%20Committee/21_prof_ashok_saraf.png" }
            ].map((member, idx) => (
              <MemberCard 
                key={idx} 
                name={member.name} 
                role={member.role} 
                org={member.org} 
                linkedin={member.linkedin}
                image={member.image}
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
                { name: "Dr. Mahesh Bhong", role: "Associate Professor", image: "/Organizing%20Committee/01_dr_mahesh_bhong.png", linkedin: "https://www.linkedin.com/in/mahesh-bhong-3052ba50/" },
                { name: "Mr. Hemant Darokar", role: "Assistant Professor", image: "/Organizing%20Committee/02_mr_hemant_darokarm.png", linkedin: "https://www.linkedin.com/in/hemant-darokar-48a61743/" },
                { name: "Mr. Sushil Chopade", role: "Assistant Professor", image: "/Organizing%20Committee/03_mr_sushil_chopade.png", linkedin: "https://www.linkedin.com/in/sushil-chopade-2a2539310/" },
                { name: "Mr. Sagar Chirade", role: "Assistant Professor", image: "/Organizing%20Committee/04_mr_sagar_chirade.png", linkedin: "https://www.linkedin.com/in/sagar-chirade-17570316/" },
                { name: "Mr. Amit Narwade", role: "Assistant Professor", image: "/Organizing%20Committee/05_mr_amit_narwade.png", linkedin: "https://www.linkedin.com/in/amit-narwade-359488b9/" },
                { name: "Mr. Pravin Charde", role: "Assistant Professor", image: "/Organizing%20Committee/06_mr_pravin_charde.png", linkedin: "https://www.linkedin.com/in/pravin-charde-42290a161/" },
                { name: "Ms. Pranali Khatke", role: "Assistant Professor", image: "/Organizing%20Committee/07_ms_pranali_khatke.png", linkedin: "https://www.linkedin.com/in/pranali-khatake-313204a9/" },
                { name: "Ms. Ashwini Gaikwad", role: "Assistant Professor", image: "/Organizing%20Committee/08_ms_ashwini_gaikwad.png", linkedin: "https://www.linkedin.com/in/ashwini-gaikwad-534a74218/" },
                { name: "Ms. Ashwini Admane", role: "Assistant Professor", image: "/Organizing%20Committee/09_ms_ashwini_admane.png", linkedin: "https://www.linkedin.com/in/ashwini-admane-38328a151/" },
                { name: "Ms. Shubangi Manwatkar", role: "Assistant Professor", image: "/Organizing%20Committee/10_ms_shubangi_manwatkar.png", linkedin: "https://www.linkedin.com/in/shubhangi-manwatkar-33b66a3b1/" }
              ].map((member, idx) => (
                <MemberCard 
                  key={idx} 
                  name={member.name} 
                  role={member.role} 
                  org="Mechanical Department, ICEM" 
                  image={member.image}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>

          <div className="dept-group dept-group-mt">
            <h3 className="dept-title">AI & Data Science</h3>
            <div className="committee-grid">
              {[
                { name: "Ms. Deepa Padwal", role: "Assistant Professor", image: "/Organizing%20Committee/11_ms_deepa_padwal.png", linkedin: "https://www.linkedin.com/in/deepa-padwal/" },
                { name: "Ms. Pallavi Chavan", role: "Assistant Professor", image: "/Organizing%20Committee/12_ms_pallavi_chavan.png", linkedin: "https://www.linkedin.com/in/pallavi-chavan1731/" },
                { name: "Ms. Monika Patil", role: "Assistant Professor", image: "/Organizing%20Committee/13_ms_monika_patil.png", linkedin: "https://www.linkedin.com/in/monika-patil-7b198822a/" },
                { name: "Ms. Kavita Sharma", role: "Assistant Professor", image: "/Organizing%20Committee/14_ms_kavita_sharma.png", linkedin: "https://www.linkedin.com/in/kavita-sharma-1405/" },
                { name: "Mr. Vivek Kumar", role: "Assistant Professor", image: "/Organizing%20Committee/15_mr_vivek_kumar.png", linkedin: "https://www.linkedin.com/in/vivek-kumar-7a5b3b1a/" },
                { name: "Ms. Vidya Dhoke", role: "Assistant Professor", image: "/Organizing%20Committee/16_ms_vidya_dhoke.png", linkedin: "https://www.linkedin.com/in/vidya-dhoke-4a1b3b1a/" },
                { name: "Mr. Tushar Mahore", role: "Assistant Professor" },
                { name: "Ms. Tanuja Pande", role: "Assistant Professor" }
              ].map((member, idx) => (
                <MemberCard 
                  key={idx} 
                  name={member.name} 
                  role={member.role} 
                  org="AI-DS Department, ICEM" 
                  image={member.image}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>
        </section>
      );
    }

    if (path.includes('/student')) {
      return (
        <section className="committee-section">
          <h2 className="section-title text-center">Student Committee</h2>
          <div className="committee-grid">
            <MemberCard 
              name="Gaurav Raju Nawale" 
              role="Technical Secretary" 
              org="Founder of CertiOwn" 
              email="gaurav.nawale@indiraicem.ac.in"
              linkedin="https://www.linkedin.com/in/nawalegaurav26/"
              image="/Students%20Organizing%20Committee/01_Mr_Gaurav_Raju_Nawale.png"
            />
            <MemberCard 
              name="Vaishnavi Patare" 
              role="Student" 
              org="Indira College of Engineering and Management" 
              email="vaishnavi.paratre@indiraicem.ac.in"
              linkedin="https://www.linkedin.com/in/vaishnavi-patare-99a4ab379/"
              image="/Students%20Organizing%20Committee/02_ms_vaishnavi_patare.png"
            />
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
