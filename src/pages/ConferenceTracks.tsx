import { PenTool, BrainCircuit, Monitor, RadioTower, Zap, TrendingUp, Leaf } from 'lucide-react';
import './ConferenceTracks.css';

const ConferenceTracks = () => {
  const tracks = [
    {
      id: 1,
      title: "Mechanical Engineering",
      icon: <PenTool size={32} strokeWidth={1.5} />,
      emoji: "🔧",
      description: "Emerging trends in thermal, design, and manufacturing systems. Focus on advanced materials and robotics.",
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      icon: <BrainCircuit size={32} strokeWidth={1.5} />,
      emoji: "🤖",
      description: "Revolutionizing industries with intelligent algorithms, deep learning, and neural network architectures.",
    },
    {
      id: 3,
      title: "Information Technology",
      icon: <Monitor size={32} strokeWidth={1.5} />,
      emoji: "💻",
      description: "Exploring Cloud Computing, Cybersecurity protocols, and Modern Full-stack Development Architectures.",
    },
    {
      id: 4,
      title: "Electronics & Telecom",
      icon: <RadioTower size={32} strokeWidth={1.5} />,
      emoji: "📡",
      description: "Next-Gen communication systems including 5G/6G, IoT ecosystems, and advanced Signal Processing.",
    },
    {
      id: 5,
      title: "Advanced Computing",
      icon: <Zap size={32} strokeWidth={1.5} />,
      emoji: "⚡",
      description: "Quantum computation paradigms and High-Performance Parallel Computing for complex simulations.",
    },
    {
      id: 6,
      title: "Business Innovation",
      icon: <TrendingUp size={32} strokeWidth={1.5} />,
      emoji: "📈",
      description: "Evolving management practices, digital transformation strategies, and disruptive business models.",
    },
    {
      id: 7,
      title: "Sustainable Practices",
      icon: <Leaf size={32} strokeWidth={1.5} />,
      emoji: "🌿",
      description: "Green technology initiatives, eco-friendly engineering solutions, and renewable energy integration.",
    }
  ];

  return (
    <div className="tracks-page-hud relative z-10 w-full min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="tracks-header-hud text-center mb-16">
          <div className="tech-subheading">DOMAIN CATEGORIES</div>
          <h1 className="hud-title mt-4">
            Conference <span className="text-icem-cyan">Tracks</span>
          </h1>
          <div className="header-line mx-auto mt-6"></div>
          <p className="hud-para max-w-2xl mx-auto mt-8 opacity-80">
            Explore the diverse domains of research to be presented. Submit your original, 
            unpublished work under one of the following multidisciplinary tracks.
          </p>
        </header>

        <div className="tracks-grid-hud">
          {tracks.map((track, index) => (
            <div key={track.id} className="hud-frame track-terminal-hud">
              <div className="hud-corner top-left"></div>
              <div className="hud-corner top-right"></div>
              <div className="hud-corner bottom-left"></div>
              <div className="hud-corner bottom-right"></div>
              
              <div className="terminal-header flex justify-between items-center px-4 py-2 border-b border-icem-cyan/20">
                <span className="terminal-id text-[10px] opacity-50">TRACK_ID_0{index + 1}</span>
                <div className="terminal-dots flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-icem-cyan/40"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-icem-cyan/20"></div>
                </div>
              </div>

              <div className="terminal-content p-6">
                <div className="icon-box-hud mb-6">
                  <div className="main-icon">{track.icon}</div>
                  <div className="ghost-emoji">{track.emoji}</div>
                </div>
                
                <h3 className="tech-heading text-xl mb-4 group-hover:text-icem-cyan transition-colors">
                  {track.title}
                </h3>
                
                <p className="hud-para text-sm leading-relaxed opacity-70">
                  {track.description}
                </p>
                
                <div className="scan-line"></div>
              </div>

              <div className="terminal-footer mt-4 px-6 pb-6">
                <div className="flex items-center gap-2 text-[10px] text-icem-cyan/40 font-mono">
                  <div className="w-2 h-2 border border-icem-cyan/40 animate-pulse"></div>
                  <span>SYSTEM_READY</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConferenceTracks;
