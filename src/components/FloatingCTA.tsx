import { useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';

const FloatingCTA = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 items-end animate-fade-in-up">
      <button
        onClick={() => navigate('/submission')}
        className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <span className="font-bold tracking-wider uppercase text-xs">Submit Paper</span>
        <div className="bg-white/20 p-2 rounded-full group-hover:rotate-12 transition-transform">
          <Send size={18} />
        </div>
      </button>
    </div>
  );
};

export default FloatingCTA;
