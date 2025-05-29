
import { Button } from "@/components/ui/button";
import { PuzzleGame } from "@/components/PuzzleGame";
import { MemoryGame } from "@/components/MemoryGame";
import { useState } from "react";

export const Games = () => {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  return (
    <section id="games" className="py-16 px-4 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 mb-6">
            Zoombini Puzzle Games
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Exercise your logical thinking with these Zoombini-inspired puzzle games! Earn bragging rights and prepare your mind for crypto success.
          </p>
        </div>

        {!activeGame && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-lg p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all cursor-pointer"
                 onClick={() => setActiveGame('pattern')}>
              <div className="text-center">
                <div className="text-6xl mb-4">🧩</div>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Pattern Puzzle</h3>
                <p className="text-white mb-6">
                  Help the Zoombinis cross the bridge by solving the color pattern sequence!
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Play Now
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 backdrop-blur-md rounded-lg p-8 border border-green-500/30 hover:border-green-400/50 transition-all cursor-pointer"
                 onClick={() => setActiveGame('memory')}>
              <div className="text-center">
                <div className="text-6xl mb-4">🎭</div>
                <h3 className="text-2xl font-bold text-green-300 mb-4">Memory Challenge</h3>
                <p className="text-white mb-6">
                  Match the Zoombini faces and test your memory skills!
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  Play Now
                </Button>
              </div>
            </div>
          </div>
        )}

        {activeGame === 'pattern' && (
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-purple-300">Pattern Puzzle</h3>
              <Button 
                variant="outline" 
                onClick={() => setActiveGame(null)}
                className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black"
              >
                Back to Games
              </Button>
            </div>
            <PuzzleGame />
          </div>
        )}

        {activeGame === 'memory' && (
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-green-300">Memory Challenge</h3>
              <Button 
                variant="outline" 
                onClick={() => setActiveGame(null)}
                className="border-green-400 text-green-300 hover:bg-green-400 hover:text-black"
              >
                Back to Games
              </Button>
            </div>
            <MemoryGame />
          </div>
        )}
      </div>
    </section>
  );
};
