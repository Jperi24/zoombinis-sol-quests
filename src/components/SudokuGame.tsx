
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const PUZZLE = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const SOLUTION = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

export const SudokuGame = () => {
  const [grid, setGrid] = useState(PUZZLE.map(row => [...row]));
  const [gameWon, setGameWon] = useState(false);
  const { toast } = useToast();

  const updateCell = (row: number, col: number, value: string) => {
    if (PUZZLE[row][col] !== 0 || gameWon) return;
    
    const num = parseInt(value) || 0;
    if (num < 0 || num > 9) return;

    const newGrid = grid.map((r, rIndex) =>
      r.map((c, cIndex) => {
        if (rIndex === row && cIndex === col) {
          return num;
        }
        return c;
      })
    );
    
    setGrid(newGrid);

    // Check if puzzle is solved
    const isSolved = newGrid.every((row, rIndex) =>
      row.every((cell, cIndex) => cell === SOLUTION[rIndex][cIndex])
    );

    if (isSolved) {
      setGameWon(true);
      toast({
        title: "🧩 Sudoku Master!",
        description: "Perfect logic! You've solved the Zoombini Sudoku puzzle!",
      });
    }
  };

  const resetGame = () => {
    setGrid(PUZZLE.map(row => [...row]));
    setGameWon(false);
  };

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-cyan-500/30">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold text-white mb-4">
          Zoombini Sudoku
        </h4>
        <p className="text-cyan-200">
          Fill the 9x9 grid so each row, column, and 3x3 box contains digits 1-9!
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="grid grid-cols-9 gap-1 p-4 bg-black/50 rounded-lg border-2 border-cyan-400">
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <input
                key={`${rowIndex}-${colIndex}`}
                type="number"
                min="1"
                max="9"
                value={cell === 0 ? '' : cell}
                onChange={(e) => updateCell(rowIndex, colIndex, e.target.value)}
                className={`w-8 h-8 text-center text-sm font-bold border rounded ${
                  PUZZLE[rowIndex][colIndex] !== 0
                    ? 'bg-cyan-200 text-black border-cyan-400'
                    : 'bg-black text-white border-gray-500 hover:border-cyan-400'
                } ${
                  (rowIndex + 1) % 3 === 0 && rowIndex !== 8 ? 'mb-1' : ''
                } ${
                  (colIndex + 1) % 3 === 0 && colIndex !== 8 ? 'mr-1' : ''
                }`}
                disabled={PUZZLE[rowIndex][colIndex] !== 0 || gameWon}
              />
            ))
          )}
        </div>
      </div>

      <div className="text-center">
        <Button
          onClick={resetGame}
          className="bg-cyan-600 hover:bg-cyan-700"
        >
          Reset Puzzle
        </Button>
      </div>

      {gameWon && (
        <div className="mt-6 text-center">
          <div className="text-4xl mb-2">🧩</div>
          <p className="text-cyan-300 font-bold">
            Sudoku genius! Your logical thinking is unstoppable!
          </p>
        </div>
      )}
    </div>
  );
};
