import { PenTool, BrainCircuit, Monitor, RadioTower, Zap, TrendingUp, Leaf } from 'lucide-react';
import './ConferenceTracks.css';

const ConferenceTracks = () => {
  const tracks = [
    {
      id: 1,
      title: "Mechanical Engineering",
      icon: <PenTool size={32} strokeWidth={1.5} />,
      emoji: "🔧",
      description: "Emerging trends in thermal, design, and manufacturing.",
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      icon: <BrainCircuit size={32} strokeWidth={1.5} />,
      emoji: "🤖",
      description: "Revolutionizing industries with intelligent algorithms.",
    },
    {
      id: 3,
      title: "Information Technology",
      icon: <Monitor size={32} strokeWidth={1.5} />,
      emoji: "💻",
      description: "Cloud, Cybersecurity, and Modern Dev Architectures.",
    },
    {
      id: 4,
      title: "Electronics & Telecom",
      icon: <RadioTower size={32} strokeWidth={1.5} />,
      emoji: "📡",
      description: "5G, IoT, and Next-Gen Signal Processing.",
    },
    {
      id: 5,
      title: "Advanced Computing",
      icon: <Zap size={32} strokeWidth={1.5} />,
      emoji: "⚡",
      description: "Quantum and High-Performance Computation.",
    },
    {
      id: 6,
      title: "Business Innovation",
      icon: <TrendingUp size={32} strokeWidth={1.5} />,
      emoji: "📈",
      description: "Evolving management practices in the digital age.",
    },
    {
      id: 7,
      title: "Sustainable Practices",
      icon: <Leaf size={32} strokeWidth={1.5} />,
      emoji: "🌿",
      description: "Green technology and eco-friendly engineering.",
    }
  ];

  return (
    <div className="tracks-page relative z-10 w-full min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Conference <span className="text-icem-cyan">Tracks</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore the diverse domains of research to be presented. Submit your original, 
            unpublished work under one of the following multidisciplinary tracks.
          </p>
        </div>

        <div className="tracks-grid">
          {tracks.map((track) => (
            <div key={track.id} className="track-card">
              <div className="track-icon-wrapper">
                <div className="track-icon">
                  {track.icon}
                </div>
                <div className="track-emoji" aria-hidden="true">{track.emoji}</div>
              </div>
              <h3 className="track-title">{track.title}</h3>
              <p className="track-desc">{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConferenceTracks;
