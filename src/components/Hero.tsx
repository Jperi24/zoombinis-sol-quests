import { Button } from "@/components/ui/button";
import { ArrowRight, Gamepad2 } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <img 
            src="/lovable-uploads/db8e3331-e30c-4713-8ef4-4a445eb07327.png" 
            alt="Zoombini Character" 
            className="w-32 h-32 mx-auto mb-8 animate-bounce"
          />
          
          <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6">
            ZOOMBINI
          </h1>
          
          <p className="text-2xl md:text-3xl text-white mb-4">
            The <span className="text-yellow-400 font-bold">SMARTEST</span> Meme Coin on Solana
          </p>
          
          <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
            Join the logical revolution! Built on the foundation of education, problem-solving, and pure nostalgia. 
            Zoombini On Sol brings the beloved puzzle masters to the blockchain!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-yellow-500/30">
              <CountdownTimer />
            </div>
            
            <Button size="lg" variant="outline" className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg">
              <Gamepad2 className="mr-2" />
              Play Games
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-purple-300 mb-2">🧠 Logic-Powered</h3>
              <p className="text-white">Built on smart contracts that reward logical thinking</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-green-500/30">
              <h3 className="text-xl font-bold text-green-300 mb-2">🚀 Community</h3>
              <p className="text-white">Join thousands of puzzle enthusiasts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
