
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/db8e3331-e30c-4713-8ef4-4a445eb07327.png" 
              alt="Zoombini" 
              className="w-8 h-8"
            />
            <span className="text-2xl font-bold text-white">ZOOMBINI</span>
            <span className="text-sm text-purple-300">ON SOL</span>
          </div>

          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('games')} className="text-white hover:text-purple-300 transition-colors">
              Games
            </button>
            <button onClick={() => scrollToSection('roadmap')} className="text-white hover:text-purple-300 transition-colors">
              Roadmap
            </button>
            <div className="bg-black/30 backdrop-blur-md rounded-lg px-4 py-2 border border-yellow-500/30">
              <span className="text-yellow-400 font-bold">🚀 COMING SOON</span>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black/40 backdrop-blur-md rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('games')} className="text-white hover:text-purple-300 transition-colors text-left">
                Games
              </button>
              <button onClick={() => scrollToSection('roadmap')} className="text-white hover:text-purple-300 transition-colors text-left">
                Roadmap
              </button>
              <div className="bg-black/30 backdrop-blur-md rounded-lg px-4 py-2 border border-yellow-500/30 text-center">
                <span className="text-yellow-400 font-bold">🚀 COMING SOON</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
