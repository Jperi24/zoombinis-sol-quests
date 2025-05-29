
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const GRID_SIZE = 5;
const TARGET_PATTERNS = [
  [[1, 0, 1, 0, 1], [0, 1, 0, 1, 0], [1, 0, 1, 0, 1], [0, 1, 0, 1, 0], [1, 0, 1, 0, 1]], // Checkerboard
  [[1, 1, 0, 1, 1], [1, 0, 1, 0, 1], [0, 1, 1, 1, 0], [1, 0, 1, 0, 1], [1, 1, 0, 1, 1]], // Plus pattern
  [[0, 0, 1, 0, 0], [0, 1, 1, 1, 0], [1, 1, 1, 1, 1], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0]], // Diamond
  [[1, 0, 0, 0, 1], [0, 1, 0, 1, 0], [0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [1, 0, 0, 0, 1]], // X pattern
  [[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]], // Border
];

export const LogicGrid = () => {
  const [currentPatternIndex, setCurrentPatternIndex] = useState(Math.floor(Math.random() * TARGET_PATTERNS.length));
  const [playerGrid, setPlayerGrid] = useState(
    Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(0))
  );
  const [gameWon, setGameWon] = useState(false);
  const [showPattern, setShowPattern] = useState(false);
  const [hints, setHints] = useState(3);
  const [moves, setMoves] = useState(0);
  const { toast } = useToast();

  const targetPattern = TARGET_PATTERNS[currentPatternIndex];

  const toggleCell = (row: number, col: number) => {
    if (gameWon) return;

    const newGrid = playerGrid.map((r, rIndex) =>
      r.map((c, cIndex) => {
        // Toggle clicked cell and adjacent cells (like Lights Out)
        const shouldToggle = 
          (rIndex === row && cIndex === col) ||
          (rIndex === row - 1 && cIndex === col) ||
          (rIndex === row + 1 && cIndex === col) ||
          (rIndex === row && cIndex === col - 1) ||
          (rIndex === row && cIndex === col + 1);
        
        return shouldToggle ? (c === 0 ? 1 : 0) : c;
      })
    );
    setPlayerGrid(newGrid);
    setMoves(moves + 1);

    // Check if pattern matches
    const isMatch = newGrid.every((row, rIndex) =>
      row.every((cell, cIndex) => cell === targetPattern[rIndex][cIndex])
    );

    if (isMatch) {
      setGameWon(true);
      const performance = moves < 15 ? "Brilliant!" : moves < 25 ? "Great!" : "Well done!";
      toast({
        title: `🎯 ${performance}`,
        description: `Pattern solved in ${moves} moves! Your logical thinking is exceptional!`,
      });
    }
  };

  const useHint = () => {
    if (hints > 0 && !gameWon) {
      setHints(hints - 1);
      setShowPattern(true);
      setTimeout(() => setShowPattern(false), 2000);
      toast({
        title: "💡 Hint Used",
        description: "Pattern revealed for 2 seconds!",
      });
    }
  };

  const resetGame = () => {
    setCurrentPatternIndex(Math.floor(Math.random() * TARGET_PATTERNS.length));
    setPlayerGrid(Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(0)));
    setGameWon(false);
    setShowPattern(false);
    setHints(3);
    setMoves(0);
  };

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-orange-500/30">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold text-white mb-4">
          Advanced Logic Grid Puzzle
        </h4>
        <p className="text-orange-200 mb-4">
          Click to toggle cells and adjacent neighbors. Match the hidden pattern!
        </p>
        <div className="flex justify-center space-x-6 text-white">
          <span>Moves: {moves}</span>
          <span>Hints: {hints}</span>
        </div>
      </div>

      <div className="flex justify-center space-x-8 mb-8">
        {showPattern && (
          <div>
            <h5 className="text-white font-semibold mb-2 text-center text-orange-300">Target Pattern (Hint)</h5>
            <div className="grid grid-cols-5 gap-1 p-2 bg-black/50 rounded border-2 border-orange-400">
              {targetPattern.map((row, rIndex) =>
                row.map((cell, cIndex) => (
                  <div
                    key={`target-${rIndex}-${cIndex}`}
                    className={`w-8 h-8 rounded border animate-pulse ${
                      cell === 1
                        ? 'bg-orange-500 border-orange-300'
                        : 'bg-gray-700 border-gray-500'
                    }`}
                  />
                ))
              )}
            </div>
          </div>
        )}

        <div>
          <h5 className="text-white font-semibold mb-2 text-center">Your Grid</h5>
          <div className="grid grid-cols-5 gap-1 p-2 bg-black/50 rounded">
            {playerGrid.map((row, rIndex) =>
              row.map((cell, cIndex) => (
                <button
                  key={`player-${rIndex}-${cIndex}`}
                  onClick={() => toggleCell(rIndex, cIndex)}
                  className={`w-8 h-8 rounded border transition-all duration-200 hover:scale-110 ${
                    cell === 1
                      ? 'bg-orange-500 border-orange-300 hover:bg-orange-400 shadow-lg'
                      : 'bg-gray-700 border-gray-500 hover:bg-gray-600'
                  }`}
                  disabled={gameWon}
                />
              ))
            )}
          </div>
        </div>
      </div>

      <div className="text-center space-x-4">
        <Button
          onClick={useHint}
          disabled={hints === 0 || gameWon}
          variant="outline"
          className="border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black"
        >
          Use Hint ({hints})
        </Button>
        <Button
          onClick={resetGame}
          className="bg-orange-600 hover:bg-orange-700"
        >
          New Puzzle
        </Button>
      </div>

      {gameWon && (
        <div className="mt-6 text-center">
          <div className="text-4xl mb-2">🎯</div>
          <p className="text-orange-300 font-bold">
            Masterful logic! You solved it in {moves} moves!
          </p>
        </div>
      )}
    </div>
  );
};
