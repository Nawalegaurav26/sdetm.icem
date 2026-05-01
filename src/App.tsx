import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BackgroundAnimation from './components/BackgroundAnimation';
import Venue from './pages/Venue';
import ComingSoon from './pages/ComingSoon';
import Registration from './pages/Registration';
import Committee from './pages/Committee';

import Contact from './pages/Contact';
import ImportantDates from './pages/ImportantDates';
import AboutConference from './pages/AboutConference';
import AboutInstitute from './pages/AboutInstitute';
import ConferenceTracks from './pages/ConferenceTracks';
import PaperSubmission from './pages/PaperSubmission';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <BackgroundAnimation />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* About Routes */}
            <Route path="/about/conference" element={<AboutConference />} />
            <Route path="/about/institute" element={<AboutInstitute />} />

            {/* Committee Routes */}
            <Route path="/committee/patrons" element={<Committee />} />
            <Route path="/committee/core-team" element={<Committee />} />
            <Route path="/committee/college-advisory" element={<Committee />} />
            <Route path="/committee/international-advisory" element={<Committee />} />
            <Route path="/committee/national-advisory" element={<Committee />} />
            <Route path="/committee/organizing" element={<Committee />} />
            <Route path="/committee/student" element={<Committee />} />

            {/* Call for Papers — single page (all tracks) */}
            <Route path="/call-for-papers/tracks" element={<ConferenceTracks />} />

            {/* Submission — single unified page */}
            <Route path="/submission" element={<PaperSubmission />} />

            {/* Registration (fees & payment info only) */}
            <Route path="/registration" element={<Registration />} />

            {/* Other main routes */}
            <Route path="/dates" element={<ImportantDates />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/contact" element={<Contact />} />

            {/* More / Misc */}
            <Route path="/program" element={<ComingSoon title="Conference Program" />} />
            <Route path="/partners" element={<ComingSoon title="Technical Partners & Sponsors" />} />
            <Route path="/downloads" element={<ComingSoon title="Brochure & Forms" />} />
            <Route path="/faq" element={<ComingSoon title="Frequently Asked Questions" />} />
            <Route path="/policies" element={<ComingSoon title="Policies" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
