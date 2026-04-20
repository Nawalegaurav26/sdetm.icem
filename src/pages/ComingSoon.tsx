import { motion } from 'framer-motion';
import { Rocket, Clock, ArrowLeft } from 'lucide-react';

const ComingSoon = ({ title }: { title: string }) => {
  return (
    <div className="coming-soon-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="coming-soon-content glass-card"
      >
        <div className="status-badge">Phase: Development</div>
        <h1 className="text-display-section">{title}</h1>
        <p className="text-body-premium">
          This section of the SDETM ICEM 2025 platform is currently being optimized for a premium experience.
        </p>
        <div className="neural-loader">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
