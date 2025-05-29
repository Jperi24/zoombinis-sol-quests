
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const GRID_SIZE = 4;
const TARGET_PATTERNS = [
  [[1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1]], // Checkerboard
  [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]], // Quadrants
  [[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1]], // Diamond
];

export const LogicGrid = () => {
  const [targetPattern] = useState(TARGET_PATTERNS[Math.floor(Math.random() * TARGET_PATTERNS.length)]);
  const [playerGrid, setPlayerGrid] = useState(
    Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(0))
  );
  const [gameWon, setGameWon] = useState(false);
  const { toast } = useToast();

  const toggleCell = (row: number, col: number) => {
    if (gameWon) return;

    const newGrid = playerGrid.map((r, rIndex) =>
      r.map((c, cIndex) => {
        if (rIndex === row && cIndex === col) {
          return c === 0 ? 1 : 0;
        }
        return c;
      })
    );
    setPlayerGrid(newGrid);

    // Check if pattern matches
    const isMatch = newGrid.every((row, rIndex) =>
      row.every((cell, cIndex) => cell === targetPattern[rIndex][cIndex])
    );

    if (isMatch) {
      setGameWon(true);
      toast({
        title: "🎯 Pattern Master!",
        description: "You've solved the logic grid! Your problem-solving skills are blockchain-ready!",
      });
    }
  };

  const resetGame = () => {
    setPlayerGrid(Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(0)));
    setGameWon(false);
  };

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-orange-500/30">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold text-white mb-4">
          Logic Grid Puzzle
        </h4>
        <p className="text-orange-200">
          Match the target pattern by clicking the squares!
        </p>
      </div>

      <div className="flex justify-center space-x-8 mb-8">
        <div>
          <h5 className="text-white font-semibold mb-2 text-center">Target Pattern</h5>
          <div className="grid grid-cols-4 gap-1 p-2 bg-black/50 rounded">
            {targetPattern.map((row, rIndex) =>
              row.map((cell, cIndex) => (
                <div
                  key={`target-${rIndex}-${cIndex}`}
                  className={`w-8 h-8 rounded border ${
                    cell === 1
                      ? 'bg-orange-500 border-orange-300'
                      : 'bg-gray-700 border-gray-500'
                  }`}
                />
              ))
            )}
          </div>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-2 text-center">Your Grid</h5>
          <div className="grid grid-cols-4 gap-1 p-2 bg-black/50 rounded">
            {playerGrid.map((row, rIndex) =>
              row.map((cell, cIndex) => (
                <button
                  key={`player-${rIndex}-${cIndex}`}
                  onClick={() => toggleCell(rIndex, cIndex)}
                  className={`w-8 h-8 rounded border transition-colors ${
                    cell === 1
                      ? 'bg-orange-500 border-orange-300 hover:bg-orange-400'
                      : 'bg-gray-700 border-gray-500 hover:bg-gray-600'
                  }`}
                  disabled={gameWon}
                />
              ))
            )}
          </div>
        </div>
      </div>

      <div className="text-center">
        <Button
          onClick={resetGame}
          className="bg-orange-600 hover:bg-orange-700"
        >
          Reset Grid
        </Button>
      </div>

      {gameWon && (
        <div className="mt-6 text-center">
          <div className="text-4xl mb-2">🎯</div>
          <p className="text-orange-300 font-bold">
            Perfect logic! You're ready to navigate complex DeFi protocols!
          </p>
        </div>
      )}
    </div>
  );
};
