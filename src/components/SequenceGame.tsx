
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const SEQUENCES = [
  { sequence: [2, 4, 6, 8], answer: 10, rule: "Add 2" },
  { sequence: [1, 4, 9, 16], answer: 25, rule: "Square numbers" },
  { sequence: [5, 10, 15, 20], answer: 25, rule: "Add 5" },
  { sequence: [3, 6, 12, 24], answer: 48, rule: "Multiply by 2" },
  { sequence: [1, 3, 6, 10], answer: 15, rule: "Triangular numbers" }
];

export const SequenceGame = () => {
  const [currentSequence] = useState(SEQUENCES[Math.floor(Math.random() * SEQUENCES.length)]);
  const [userAnswer, setUserAnswer] = useState("");
  const [gameWon, setGameWon] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const { toast } = useToast();

  const checkAnswer = () => {
    if (parseInt(userAnswer) === currentSequence.answer) {
      setGameWon(true);
      toast({
        title: "🎉 Brilliant!",
        description: "You cracked the sequence! Your logical thinking is crypto-ready!",
      });
    } else {
      toast({
        title: "Not quite right!",
        description: "Think about the pattern between the numbers...",
        variant: "destructive",
      });
    }
  };

  const resetGame = () => {
    setUserAnswer("");
    setGameWon(false);
    setShowHint(false);
    window.location.reload();
  };

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-blue-500/30">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold text-white mb-4">
          Number Sequence Challenge
        </h4>
        <p className="text-blue-200">
          Find the pattern and complete the sequence!
        </p>
      </div>

      <div className="mb-8">
        <div className="flex justify-center items-center space-x-4 mb-6">
          {currentSequence.sequence.map((num, index) => (
            <div
              key={index}
              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl border-2 border-white"
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
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Enter next number"
            className="w-32 h-12 text-center text-xl font-bold bg-black/50 border-2 border-blue-400 rounded-lg text-white placeholder-gray-400"
            disabled={gameWon}
          />
        </div>
      </div>

      <div className="text-center space-x-4 mb-4">
        <Button
          onClick={checkAnswer}
          disabled={!userAnswer || gameWon}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Check Answer
        </Button>
        <Button
          onClick={() => setShowHint(!showHint)}
          variant="outline"
          className="border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-black"
          disabled={gameWon}
        >
          {showHint ? 'Hide Hint' : 'Show Hint'}
        </Button>
        <Button
          onClick={resetGame}
          variant="outline"
          className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black"
        >
          New Sequence
        </Button>
      </div>

      {showHint && !gameWon && (
        <div className="text-center mb-4">
          <p className="text-yellow-300 font-semibold">
            Hint: {currentSequence.rule}
          </p>
        </div>
      )}

      {gameWon && (
        <div className="mt-6 text-center">
          <div className="text-4xl mb-2">🧮</div>
          <p className="text-blue-300 font-bold">
            Mathematical genius! You're ready for DeFi calculations!
          </p>
        </div>
      )}
    </div>
  );
};
