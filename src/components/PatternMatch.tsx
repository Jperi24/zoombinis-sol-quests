
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const PATTERNS = [
  { pattern: [1, 2, 1, 2], next: 1 },
  { pattern: [3, 1, 4, 1], next: 5 },
  { pattern: [2, 4, 8, 16], next: 32 },
  { pattern: [1, 1, 2, 3], next: 5 },
  { pattern: [5, 10, 20, 40], next: 80 }
];

const SHAPE_PATTERNS = [
  { shapes: ['🔴', '🔵', '🔴', '🔵'], next: '🔴' },
  { shapes: ['⭐', '⭐', '🔷', '⭐'], next: '⭐' },
  { shapes: ['🟦', '🟨', '🟦', '🟨'], next: '🟦' },
  { shapes: ['💎', '🔸', '💎', '🔸'], next: '💎' }
];

export const PatternMatch = () => {
  const [currentPattern] = useState(PATTERNS[Math.floor(Math.random() * PATTERNS.length)]);
  const [currentShapes] = useState(SHAPE_PATTERNS[Math.floor(Math.random() * SHAPE_PATTERNS.length)]);
  const [numberAnswer, setNumberAnswer] = useState("");
  const [shapeAnswer, setShapeAnswer] = useState("");
  const [gameWon, setGameWon] = useState(false);
  const { toast } = useToast();

  const checkAnswers = () => {
    const numberCorrect = parseInt(numberAnswer) === currentPattern.next;
    const shapeCorrect = shapeAnswer === currentShapes.next;

    if (numberCorrect && shapeCorrect) {
      setGameWon(true);
      toast({
        title: "🎯 Pattern Expert!",
        description: "You've mastered both number and shape patterns! Incredible logic skills!",
      });
    } else if (numberCorrect || shapeCorrect) {
      toast({
        title: "Half correct!",
        description: `You got the ${numberCorrect ? 'number' : 'shape'} pattern right! Keep going!`,
      });
    } else {
      toast({
        title: "Try again!",
        description: "Look more carefully at the patterns...",
        variant: "destructive",
      });
    }
  };

  const resetGame = () => {
    setNumberAnswer("");
    setShapeAnswer("");
    setGameWon(false);
    window.location.reload();
  };

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-yellow-500/30">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold text-white mb-4">
          Pattern Recognition Challenge
        </h4>
        <p className="text-yellow-200">
          Find the patterns and predict what comes next!
        </p>
      </div>

      <div className="space-y-8 mb-8">
        {/* Number Pattern */}
        <div className="bg-black/50 rounded-lg p-6">
          <h5 className="text-lg font-semibold text-yellow-300 mb-4 text-center">Number Pattern</h5>
          <div className="flex justify-center items-center space-x-4 mb-4">
            {currentPattern.pattern.map((num, index) => (
              <div
                key={index}
                className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl border-2 border-white"
              >
                {num}
              </div>
            ))}
            <div className="text-white text-2xl">→</div>
            <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-xl border-2 border-dashed border-gray-400">
              ?
            </div>
          </div>
          <div className="text-center">
            <input
              type="number"
              value={numberAnswer}
              onChange={(e) => setNumberAnswer(e.target.value)}
              placeholder="Next number"
              className="w-32 h-12 text-center text-xl font-bold bg-black/50 border-2 border-yellow-400 rounded-lg text-white placeholder-gray-400"
              disabled={gameWon}
            />
          </div>
        </div>

        {/* Shape Pattern */}
        <div className="bg-black/50 rounded-lg p-6">
          <h5 className="text-lg font-semibold text-yellow-300 mb-4 text-center">Shape Pattern</h5>
          <div className="flex justify-center items-center space-x-4 mb-4">
            {currentShapes.shapes.map((shape, index) => (
              <div
                key={index}
                className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-3xl border-2 border-white"
              >
                {shape}
              </div>
            ))}
            <div className="text-white text-2xl">→</div>
            <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-xl border-2 border-dashed border-gray-400">
              ?
            </div>
          </div>
          <div className="text-center space-x-2">
            {['🔴', '🔵', '⭐', '🔷', '🟦', '🟨', '💎', '🔸'].map((shape) => (
              <button
                key={shape}
                onClick={() => setShapeAnswer(shape)}
                className={`w-12 h-12 text-2xl rounded-lg border-2 transition-all ${
                  shapeAnswer === shape
                    ? 'bg-yellow-500 border-yellow-300'
                    : 'bg-gray-700 border-gray-500 hover:bg-gray-600'
                }`}
                disabled={gameWon}
              >
                {shape}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center space-x-4">
        <Button
          onClick={checkAnswers}
          disabled={!numberAnswer || !shapeAnswer || gameWon}
          className="bg-yellow-600 hover:bg-yellow-700"
        >
          Check Patterns
        </Button>
        <Button
          onClick={resetGame}
          variant="outline"
          className="border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black"
        >
          New Patterns
        </Button>
      </div>

      {gameWon && (
        <div className="mt-6 text-center">
          <div className="text-4xl mb-2">🎯</div>
          <p className="text-yellow-300 font-bold">
            Pattern master! You see connections others miss!
          </p>
        </div>
      )}
    </div>
  );
};
