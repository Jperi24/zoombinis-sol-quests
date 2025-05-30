
import { Button } from "@/components/ui/button";
import { PuzzleGame } from "@/components/PuzzleGame";
import { MemoryGame } from "@/components/MemoryGame";
import { SequenceGame } from "@/components/SequenceGame";
import { LogicGrid } from "@/components/LogicGrid";
import { WordScramble } from "@/components/WordScramble";
import { SudokuGame } from "@/components/SudokuGame";
import { PatternMatch } from "@/components/PatternMatch";
import { CipherGame } from "@/components/CipherGame";
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
            Exercise your logical thinking with these Zoombini-inspired puzzle games! Sharpen your mind for crypto success.
          </p>
        </div>

        {!activeGame && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-lg p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all cursor-pointer"
                 onClick={() => setActiveGame('pattern')}>
              <div className="text-center">
                <div className="text-4xl mb-4">🧩</div>
                <h3 className="text-xl font-bold text-purple-300 mb-3">Pattern Puzzle</h3>
                <p className="text-white mb-4 text-sm">
                  Help the Zoombinis cross the bridge by solving color patterns!
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Play Now
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 backdrop-blur-md rounded-lg p-6 border border-green-500/30 hover:border-green-400/50 transition-all cursor-pointer"
                 onClick={() => setActiveGame('memory')}>
              <div className="text-center">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-xl font-bold text-green-300 mb-3">Memory Challenge</h3>
                <p className="text-white mb-4 text-sm">
                  Match the Zoombini faces and test your memory skills!
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  Play Now
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-lg p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all cursor-pointer"
                 onClick={() => setActiveGame('sequence')}>
              <div className="text-center">
                <div className="text-4xl mb-4">🧮</div>
                <h3 className="text-xl font-bold text-blue-300 mb-3">Number Sequence</h3>
                <p className="text-white mb-4 text-sm">
                  Find the pattern and complete the mathematical sequence!
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Play Now
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-md rounded-lg p-6 border border-orange-500/30 hover:border-orange-400/50 transition-all cursor-pointer"
                 onClick={() => setActiveGame('grid')}>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-orange-300 mb-3">Logic Grid</h3>
                <p className="text-white mb-4 text-sm">
                  Match the target pattern using logical deduction!
                </p>
                <Button className="bg-orange-600 hover:bg-orange-700">
                  Play Now
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-md rounded-lg p-6 border border-pink-500/30 hover:border-pink-400/50 transition-all cursor-pointer"
                 onClick={() => setActiveGame('word')}>
              <div className="text-center">
                <div className="text-4xl mb-4">🔤</div>
                <h3 className="text-xl font-bold text-pink-300 mb-3">Word Scramble</h3>
                <p className="text-white mb-4 text-sm">
                  Unscramble crypto-related words and phrases!
                </p>
                <Button className="bg-pink-600 hover:bg-pink-700">
                  Play Now
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-md rounded-lg p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all cursor-pointer"
                 onClick={() => setActiveGame('sudoku')}>
              <div className="text-center">
                <div className="text-4xl mb-4">🔢</div>
                <h3 className="text-xl font-bold text-cyan-300 mb-3">Zoombini Sudoku</h3>
                <p className="text-white mb-4 text-sm">
                  Classic logic puzzle with a Zoombini twist!
                </p>
                <Button className="bg-cyan-600 hover:bg-cyan-700">
                  Play Now
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-md rounded-lg p-6 border border-yellow-500/30 hover:border-yellow-400/50 transition-all cursor-pointer"
                 onClick={() => setActiveGame('patterns')}>
              <div className="text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-yellow-300 mb-3">Pattern Match</h3>
                <p className="text-white mb-4 text-sm">
                  Identify number and shape patterns like a true Zoombini!
                </p>
                <Button className="bg-yellow-600 hover:bg-yellow-700">
                  Play Now
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-md rounded-lg p-6 border border-indigo-500/30 hover:border-indigo-400/50 transition-all cursor-pointer"
                 onClick={() => setActiveGame('cipher')}>
              <div className="text-center">
                <div className="text-4xl mb-4">🔓</div>
                <h3 className="text-xl font-bold text-indigo-300 mb-3">Cipher Decoder</h3>
                <p className="text-white mb-4 text-sm">
                  Crack encrypted messages using cryptographic logic!
                </p>
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  Play Now
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Game Components */}
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

        {activeGame === 'sequence' && (
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-blue-300">Number Sequence</h3>
              <Button 
                variant="outline" 
                onClick={() => setActiveGame(null)}
                className="border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-black"
              >
                Back to Games
              </Button>
            </div>
            <SequenceGame />
          </div>
        )}

        {activeGame === 'grid' && (
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-orange-300">Logic Grid</h3>
              <Button 
                variant="outline" 
                onClick={() => setActiveGame(null)}
                className="border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-black"
              >
                Back to Games
              </Button>
            </div>
            <LogicGrid />
          </div>
        )}

        {activeGame === 'word' && (
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-pink-300">Word Scramble</h3>
              <Button 
                variant="outline" 
                onClick={() => setActiveGame(null)}
                className="border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-black"
              >
                Back to Games
              </Button>
            </div>
            <WordScramble />
          </div>
        )}

        {activeGame === 'sudoku' && (
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-cyan-300">Zoombini Sudoku</h3>
              <Button 
                variant="outline" 
                onClick={() => setActiveGame(null)}
                className="border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black"
              >
                Back to Games
              </Button>
            </div>
            <SudokuGame />
          </div>
        )}

        {activeGame === 'patterns' && (
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-yellow-300">Pattern Match</h3>
              <Button 
                variant="outline" 
                onClick={() => setActiveGame(null)}
                className="border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black"
              >
                Back to Games
              </Button>
            </div>
            <PatternMatch />
          </div>
        )}

        {activeGame === 'cipher' && (
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-indigo-300">Cipher Decoder</h3>
              <Button 
                variant="outline" 
                onClick={() => setActiveGame(null)}
                className="border-indigo-400 text-indigo-300 hover:bg-indigo-400 hover:text-black"
              >
                Back to Games
              </Button>
            </div>
            <CipherGame />
          </div>
        )}
      </div>
    </section>
  );
};
