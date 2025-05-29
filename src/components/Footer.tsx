
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-black/40 backdrop-blur-md border-t border-purple-500/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/db8e3331-e30c-4713-8ef4-4a445eb07327.png" 
                alt="Zoombini" 
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold text-white">ZOOMBINI ON SOL</span>
            </div>
            <p className="text-purple-200 leading-relaxed">
              The smartest meme coin on Solana. Built on logic, powered by community, destined for success.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-purple-200">
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#games" className="hover:text-purple-400 transition-colors">Games</a></li>
              <li><a href="#tokenomics" className="hover:text-purple-400 transition-colors">Tokenomics</a></li>
              <li><a href="#roadmap" className="hover:text-purple-400 transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contract Info</h3>
            <div className="space-y-2 text-purple-200">
              <p className="text-sm">Contract Address:</p>
              <p className="text-xs font-mono bg-black/30 p-2 rounded border border-purple-500/30 break-all">
                Coming Soon...
              </p>
              <p className="text-sm text-yellow-300">⚠️ Always verify contract address!</p>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/30 pt-8 text-center">
          <p className="text-purple-200 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by the Zoombini Community
          </p>
          <p className="text-sm text-gray-400 mt-2">
            © 2024 Zoombini On Sol. Educational gaming meets crypto innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};
