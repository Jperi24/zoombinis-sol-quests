
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Multiple pre-made puzzles with different difficulties
const PUZZLES = {
  easy: [
    [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ],
    [
      [0, 0, 0, 6, 0, 0, 4, 0, 0],
      [7, 0, 0, 0, 0, 3, 6, 0, 0],
      [0, 0, 0, 0, 9, 1, 0, 8, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 5, 0, 1, 8, 0, 0, 0, 3],
      [0, 0, 0, 3, 0, 6, 0, 4, 5],
      [0, 4, 0, 2, 0, 0, 0, 6, 0],
      [9, 0, 3, 0, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 0, 1, 0, 0]
    ]
  ],
  hard: [
    [
      [0, 0, 0, 0, 0, 0, 6, 8, 0],
      [0, 0, 0, 0, 0, 3, 0, 0, 0],
      [7, 0, 0, 0, 9, 0, 0, 0, 0],
      [5, 0, 0, 0, 0, 7, 0, 0, 0],
      [0, 0, 0, 0, 4, 5, 7, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 3, 0],
      [0, 0, 1, 0, 0, 0, 0, 6, 8],
      [0, 0, 8, 5, 0, 0, 0, 1, 0],
      [0, 9, 0, 0, 0, 0, 4, 0, 0]
    ]
  ]
};

const SOLUTIONS = {
  easy: [
    [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ],
    [
      [1, 3, 2, 6, 7, 8, 4, 9, 5],
      [7, 8, 9, 2, 5, 3, 6, 1, 4],
      [4, 5, 6, 4, 9, 1, 7, 8, 2],
      [6, 1, 3, 8, 4, 9, 5, 2, 7],
      [2, 5, 7, 1, 8, 4, 9, 6, 3],
      [8, 9, 4, 3, 2, 6, 1, 4, 5],
      [3, 4, 1, 2, 6, 5, 8, 6, 9],
      [9, 6, 3, 7, 1, 2, 2, 5, 8],
      [5, 2, 8, 9, 3, 7, 1, 3, 6]
    ]
  ],
  hard: [
    [
      [1, 2, 3, 4, 5, 6, 6, 8, 9],
      [4, 5, 6, 7, 8, 3, 1, 2, 3],
      [7, 8, 9, 1, 9, 2, 4, 5, 6],
      [5, 1, 2, 3, 6, 7, 8, 9, 4],
      [6, 3, 4, 8, 4, 5, 7, 1, 2],
      [8, 7, 9, 1, 2, 4, 5, 3, 6],
      [2, 4, 1, 9, 3, 8, 3, 6, 8],
      [3, 6, 8, 5, 7, 9, 2, 1, 7],
      [7, 9, 5, 6, 1, 3, 4, 8, 5]
    ]
  ]
};

export const SudokuGame = () => {
  const [difficulty, setDifficulty] = useState<'easy' | 'hard'>('easy');
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [grid, setGrid] = useState<number[][]>([]);
  const [originalPuzzle, setOriginalPuzzle] = useState<number[][]>([]);
  const [gameWon, setGameWon] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [notes, setNotes] = useState<{ [key: string]: number[] }>({});
  const [noteMode, setNoteMode] = useState(false);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    initializeGame();
  }, [difficulty]);

  const initializeGame = () => {
    const puzzles = PUZZLES[difficulty];
    const randomIndex = Math.floor(Math.random() * puzzles.length);
    const puzzle = puzzles[randomIndex].map(row => [...row]);
    
    setPuzzleIndex(randomIndex);
    setOriginalPuzzle(puzzle);
    setGrid(puzzle);
    setGameWon(false);
    setMistakes(0);
    setNotes({});
    setSelectedCell(null);
  };

  const isValidMove = (grid: number[][], row: number, col: number, num: number) => {
    // Check row
    for (let x = 0; x < 9; x++) {
      if (x !== col && grid[row][x] === num) return false;
    }

    // Check column
    for (let x = 0; x < 9; x++) {
      if (x !== row && grid[x][col] === num) return false;
    }

    // Check 3x3 box
    const startRow = row - (row % 3);
    const startCol = col - (col % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const currentRow = startRow + i;
        const currentCol = startCol + j;
        if (currentRow !== row && currentCol !== col && grid[currentRow][currentCol] === num) {
          return false;
        }
      }
    }

    return true;
  };

  const updateCell = (row: number, col: number, value: string) => {
    if (originalPuzzle[row][col] !== 0 || gameWon) return;
    
    const num = parseInt(value) || 0;
    if (num < 0 || num > 9) return;

    if (noteMode && num > 0) {
      const cellKey = `${row}-${col}`;
      const cellNotes = notes[cellKey] || [];
      const newNotes = cellNotes.includes(num) 
        ? cellNotes.filter(n => n !== num)
        : [...cellNotes, num].sort();
      
      setNotes({ ...notes, [cellKey]: newNotes });
      return;
    }

    const newGrid = grid.map((r, rIndex) =>
      r.map((c, cIndex) => {
        if (rIndex === row && cIndex === col) {
          return num;
        }
        return c;
      })
    );

    // Check if move is valid
    if (num > 0 && !isValidMove(newGrid, row, col, num)) {
      setMistakes(mistakes + 1);
      toast({
        title: "❌ Invalid Move",
        description: "This number conflicts with Sudoku rules!",
        variant: "destructive",
      });
      
      if (mistakes >= 2) {
        toast({
          title: "💡 Too many mistakes!",
          description: "Starting fresh puzzle...",
        });
        setTimeout(initializeGame, 1500);
      }
      return;
    }
    
    setGrid(newGrid);

    // Clear notes for this cell
    const cellKey = `${row}-${col}`;
    if (notes[cellKey]) {
      const newNotes = { ...notes };
      delete newNotes[cellKey];
      setNotes(newNotes);
    }

    // Check if puzzle is solved
    const isSolved = newGrid.every((row, rIndex) =>
      row.every((cell, cIndex) => {
        if (cell === 0) return false;
        return isValidMove(newGrid, rIndex, cIndex, cell);
      })
    ) && newGrid.flat().every(cell => cell !== 0);

    if (isSolved) {
      setGameWon(true);
      toast({
        title: "🧩 Sudoku Champion!",
        description: `Perfect logic! Solved ${difficulty} puzzle with ${mistakes} mistakes!`,
      });
    }
  };

  const getCellNotes = (row: number, col: number) => {
    return notes[`${row}-${col}`] || [];
  };

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-cyan-500/30">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold text-white mb-4">
          Master Sudoku Challenge
        </h4>
        <p className="text-cyan-200 mb-4">
          Complete the 9x9 grid following all Sudoku rules!
        </p>
        
        <div className="flex justify-center space-x-4 mb-4">
          <Button
            onClick={() => setDifficulty('easy')}
            className={difficulty === 'easy' ? 'bg-cyan-600 hover:bg-cyan-700' : 'bg-gray-600 hover:bg-gray-700'}
            disabled={!gameWon && grid.some(row => row.some(cell => cell !== 0))}
          >
            Easy
          </Button>
          <Button
            onClick={() => setDifficulty('hard')}
            className={difficulty === 'hard' ? 'bg-cyan-600 hover:bg-cyan-700' : 'bg-gray-600 hover:bg-gray-700'}
            disabled={!gameWon && grid.some(row => row.some(cell => cell !== 0))}
          >
            Hard
          </Button>
          <Button
            onClick={() => setNoteMode(!noteMode)}
            variant="outline"
            className={`border-yellow-400 text-yellow-300 ${noteMode ? 'bg-yellow-400 text-black' : 'hover:bg-yellow-400 hover:text-black'}`}
          >
            {noteMode ? '📝 Notes ON' : '📝 Notes OFF'}
          </Button>
        </div>
        
        <div className="text-cyan-300">
          <span className="font-semibold">Mistakes: {mistakes}/3</span>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <div className="grid grid-cols-9 gap-1 p-4 bg-black/50 rounded-lg border-2 border-cyan-400">
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
              const cellNotes = getCellNotes(rowIndex, colIndex);
              const isSelected = selectedCell?.row === rowIndex && selectedCell?.col === colIndex;
              
              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-10 h-10 border rounded relative ${
                    originalPuzzle[rowIndex][colIndex] !== 0
                      ? 'bg-cyan-200 border-cyan-400'
                      : `bg-black border-gray-500 hover:border-cyan-400 cursor-pointer ${
                          isSelected ? 'ring-2 ring-cyan-400' : ''
                        }`
                  } ${
                    (rowIndex + 1) % 3 === 0 && rowIndex !== 8 ? 'mb-1' : ''
                  } ${
                    (colIndex + 1) % 3 === 0 && colIndex !== 8 ? 'mr-1' : ''
                  }`}
                  onClick={() => setSelectedCell({ row: rowIndex, col: colIndex })}
                >
                  {cell > 0 ? (
                    <input
                      type="number"
                      min="1"
                      max="9"
                      value={cell}
                      onChange={(e) => updateCell(rowIndex, colIndex, e.target.value)}
                      className={`w-full h-full text-center text-sm font-bold border-none bg-transparent outline-none ${
                        originalPuzzle[rowIndex][colIndex] !== 0
                          ? 'text-black cursor-not-allowed'
                          : 'text-white'
                      }`}
                      disabled={originalPuzzle[rowIndex][colIndex] !== 0 || gameWon}
                    />
                  ) : (
                    <>
                      <input
                        type="number"
                        min="1"
                        max="9"
                        value=""
                        onChange={(e) => updateCell(rowIndex, colIndex, e.target.value)}
                        className="w-full h-full text-center text-sm font-bold border-none bg-transparent outline-none text-white"
                        disabled={gameWon}
                        placeholder=""
                      />
                      {cellNotes.length > 0 && (
                        <div className="absolute inset-0 grid grid-cols-3 gap-0 p-1 text-xs text-cyan-300 pointer-events-none">
                          {[1,2,3,4,5,6,7,8,9].map(num => (
                            <span key={num} className="text-center">
                              {cellNotes.includes(num) ? num : ''}
                            </span>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="text-center space-x-4">
        <Button
          onClick={initializeGame}
          className="bg-cyan-600 hover:bg-cyan-700"
        >
          New Puzzle
        </Button>
      </div>

      {gameWon && (
        <div className="mt-6 text-center">
          <div className="text-4xl mb-2">🧩</div>
          <p className="text-cyan-300 font-bold">
            Sudoku Master! Your logical thinking is unmatched!
          </p>
        </div>
      )}
    </div>
  );
};
