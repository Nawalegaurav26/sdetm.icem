import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BackgroundAnimation from './components/BackgroundAnimation';
import ComingSoon from './pages/ComingSoon';
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
            <Route path="/about/conference" element={<ComingSoon title="About Conference" />} />
            <Route path="/about/institute" element={<ComingSoon title="About ICEM" />} />
            <Route path="/about/vision" element={<ComingSoon title="Vision & Objectives" />} />
            <Route path="/about/theme" element={<ComingSoon title="Conference Theme" />} />
            
            {/* Committee Routes */}
            <Route path="/committee/chief-patron" element={<ComingSoon title="Chief Patron" />} />
            <Route path="/committee/patron" element={<ComingSoon title="Patron" />} />
            <Route path="/committee/chair" element={<ComingSoon title="Conference Chair" />} />
            <Route path="/committee/convenor" element={<ComingSoon title="Convenor & Co-Convenor" />} />
            <Route path="/committee/advisory" element={<ComingSoon title="Advisory Committee" />} />
            <Route path="/committee/organizing" element={<ComingSoon title="Organizing Committee" />} />
            
            {/* Call for Papers */}
            <Route path="/call-for-papers/tracks" element={<ComingSoon title="Conference Tracks" />} />
            <Route path="/call-for-papers/scope" element={<ComingSoon title="Scope" />} />
            
            {/* Submission */}
            <Route path="/submission/cmt" element={<ComingSoon title="Microsoft CMT Submission" />} />
            <Route path="/submission/guidelines" element={<ComingSoon title="Submission Guidelines" />} />
            <Route path="/submission/downloads" element={<ComingSoon title="Template Downloads" />} />
            <Route path="/submission/review" element={<ComingSoon title="Review Process" />} />

            {/* Registration */}
            <Route path="/registration" element={<ComingSoon title="Registration & Fees" />} />
            
            {/* Other main routes */}
            <Route path="/dates" element={<ComingSoon title="Important Dates" />} />
            <Route path="/venue" element={<ComingSoon title="Venue & Location" />} />
            <Route path="/contact" element={<ComingSoon title="Contact Us" />} />
            
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
