import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BackgroundAnimation from './components/BackgroundAnimation';
import Venue from './pages/Venue';
import ComingSoon from './pages/ComingSoon';
import Registration from './pages/Registration';
import Committee from './pages/Committee';
import SubmissionGuidelines from './pages/SubmissionGuidelines';
import Contact from './pages/Contact';
import ImportantDates from './pages/ImportantDates';
import AboutConference from './pages/AboutConference';
import AboutInstitute from './pages/AboutInstitute';
import ConferenceTracks from './pages/ConferenceTracks';
import PaperSubmission from './pages/PaperSubmission';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';

function App() {
  return (
    <AuthProvider>
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
            <Route path="/about/vision" element={<ComingSoon title="Vision & Objectives" />} />
            <Route path="/about/theme" element={<ComingSoon title="Conference Theme" />} />
            
            {/* Committee Routes */}
            <Route path="/committee/chief-patron" element={<Committee />} />
            <Route path="/committee/patron" element={<Committee />} />
            <Route path="/committee/chair" element={<Committee />} />
            <Route path="/committee/convenor" element={<Committee />} />
            <Route path="/committee/collegeadvisory" element={<Committee />} />
            <Route path="/committee/international_advisory_committee" element={<Committee />} />
            <Route path="/committee/national_advisory_committee" element={<Committee />} />
            <Route path="/committee/organizing" element={<Committee />} />
            
            {/* Call for Papers */}
            <Route path="/call-for-papers/tracks" element={<ConferenceTracks />} />
            <Route path="/call-for-papers/scope" element={<ComingSoon title="Scope" />} />
            
            {/* Submission */}
            <Route path="/submission" element={<PaperSubmission />} />

            {/* Registration & Login */}
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            
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
    </AuthProvider>
  );
}

export default App;
