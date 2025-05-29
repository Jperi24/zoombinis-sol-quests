
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const COLORS = ['purple', 'blue', 'green', 'red', 'yellow', 'pink'];
const PATTERNS = [
  ['purple', 'blue', 'green'],
  ['red', 'yellow', 'pink'],
  ['blue', 'green', 'purple'],
  ['yellow', 'red', 'blue'],
  ['green', 'pink', 'yellow']
];

export const PuzzleGame = () => {
  const [currentPattern] = useState(PATTERNS[Math.floor(Math.random() * PATTERNS.length)]);
  const [userGuess, setUserGuess] = useState<string[]>([]);
  const [gameWon, setGameWon] = useState(false);
  const { toast } = useToast();

  const addColor = (color: string) => {
    if (userGuess.length < 3 && !gameWon) {
      setUserGuess([...userGuess, color]);
    }
  };

  const checkPattern = () => {
    if (JSON.stringify(userGuess) === JSON.stringify(currentPattern)) {
      setGameWon(true);
      toast({
        title: "🎉 Congratulations!",
        description: "You solved the pattern! The Zoombinis can cross safely!",
      });
    } else {
      toast({
        title: "Try Again!",
        description: "That's not quite right. Keep thinking logically!",
        variant: "destructive",
      });
      setUserGuess([]);
    }
  };

  const resetGame = () => {
    setUserGuess([]);
    setGameWon(false);
  };

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      purple: 'bg-purple-500',
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      red: 'bg-red-500',
      yellow: 'bg-yellow-500',
      pink: 'bg-pink-500'
    };
    return colorMap[color] || 'bg-gray-500';
  };

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-purple-500/30">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold text-white mb-4">
          Help the Zoombinis cross the bridge!
        </h4>
        <p className="text-purple-200">
          Look at the pattern and recreate it in the correct order.
        </p>
      </div>

      <div className="mb-8">
        <h5 className="text-lg font-semibold text-white mb-4 text-center">Pattern to Match:</h5>
        <div className="flex justify-center space-x-2">
          {currentPattern.map((color, index) => (
            <div
              key={index}
              className={`w-16 h-16 rounded-full ${getColorClass(color)} border-4 border-white shadow-lg`}
            />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h5 className="text-lg font-semibold text-white mb-4 text-center">Your Guess:</h5>
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`w-16 h-16 rounded-full border-4 border-dashed border-gray-400 ${
                userGuess[index] ? getColorClass(userGuess[index]) + ' border-white' : ''
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h5 className="text-lg font-semibold text-white mb-4 text-center">Choose Colors:</h5>
        <div className="flex justify-center space-x-2 flex-wrap gap-2">
          {COLORS.map((color) => (
            <button
              key={color}
              onClick={() => addColor(color)}
              className={`w-12 h-12 rounded-full ${getColorClass(color)} border-2 border-white hover:scale-110 transition-transform shadow-lg`}
              disabled={gameWon}
            />
          ))}
        </div>
      </div>

      <div className="text-center space-x-4">
        <Button
          onClick={checkPattern}
          disabled={userGuess.length !== 3 || gameWon}
          className="bg-green-600 hover:bg-green-700"
        >
          Check Pattern
        </Button>
        <Button
          onClick={resetGame}
          variant="outline"
          className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black"
        >
          Reset
        </Button>
      </div>

      {gameWon && (
        <div className="mt-6 text-center">
          <div className="text-4xl mb-2">🎉</div>
          <p className="text-green-300 font-bold">
            Perfect! You're ready for crypto success!
          </p>
        </div>
      )}
    </div>
  );
};
