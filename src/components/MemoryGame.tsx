
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CARD_FACES = ['🎭', '🎪', '🎨', '🎵', '⚡', '🔥', '💎', '🌟', '🎯', '🚀'];
const DIFFICULTY_LEVELS = {
  easy: { pairs: 6, time: 60 },
  medium: { pairs: 8, time: 90 },
  hard: { pairs: 10, time: 120 }
};

interface Card {
  id: number;
  face: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export const MemoryGame = () => {
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DIFFICULTY_LEVELS[difficulty].time);
  const [gameWon, setGameWon] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const { toast } = useToast();

  const pairsCount = DIFFICULTY_LEVELS[difficulty].pairs;

  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !gameWon) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !gameWon) {
      toast({
        title: "⏰ Time's Up!",
        description: "Try again with a fresh puzzle!",
        variant: "destructive",
      });
      initializeGame();
    }
  }, [timeLeft, gameStarted, gameWon, toast]);

  useEffect(() => {
    if (matches === pairsCount && gameStarted) {
      setGameWon(true);
      const timeBonus = timeLeft * 10;
      const moveBonus = Math.max(0, (pairsCount * 4 - moves) * 5);
      toast({
        title: "🎉 Memory Champion!",
        description: `Perfect recall! Score: ${timeBonus + moveBonus} points!`,
      });
    }
  }, [matches, pairsCount, gameStarted, timeLeft, moves, toast]);

  const initializeGame = () => {
    const selectedFaces = CARD_FACES.slice(0, pairsCount);
    const gameCards: Card[] = [];
    
    selectedFaces.forEach((face, index) => {
      gameCards.push(
        { id: index * 2, face, isFlipped: false, isMatched: false },
        { id: index * 2 + 1, face, isFlipped: false, isMatched: false }
      );
    });
    
    // Shuffle cards
    for (let i = gameCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gameCards[i], gameCards[j]] = [gameCards[j], gameCards[i]];
    }
    
    setCards(gameCards);
    setFlippedCards([]);
    setMatches(0);
    setMoves(0);
    setTimeLeft(DIFFICULTY_LEVELS[difficulty].time);
    setGameWon(false);
    setGameStarted(false);
  };

  const startGame = () => {
    setGameStarted(true);
    setShowPreview(true);
    // Show all cards for 2 seconds
    const previewCards = cards.map(c => ({ ...c, isFlipped: true }));
    setCards(previewCards);
    
    setTimeout(() => {
      setCards(cards.map(c => ({ ...c, isFlipped: false })));
      setShowPreview(false);
    }, 2000);
  };

  const flipCard = (cardId: number) => {
    if (flippedCards.length === 2 || gameWon || !gameStarted || showPreview) return;
    
    const card = cards.find(c => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;

    const newCards = cards.map(c => 
      c.id === cardId ? { ...c, isFlipped: true } : c
    );
    setCards(newCards);

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [firstId, secondId] = newFlippedCards;
      const firstCard = newCards.find(c => c.id === firstId);
      const secondCard = newCards.find(c => c.id === secondId);

      if (firstCard && secondCard && firstCard.face === secondCard.face) {
        // Match found
        setTimeout(() => {
          setCards(prevCards => 
            prevCards.map(c => 
              c.id === firstId || c.id === secondId 
                ? { ...c, isMatched: true }
                : c
            )
          );
          setMatches(matches + 1);
          setFlippedCards([]);
        }, 1000);
      } else {
        // No match
        setTimeout(() => {
          setCards(prevCards => 
            prevCards.map(c => 
              c.id === firstId || c.id === secondId 
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setFlippedCards([]);
        }, 1500);
      }
    }
  };

  useEffect(() => {
    initializeGame();
  }, [difficulty]);

  const getGridCols = () => {
    switch (pairsCount) {
      case 6: return 'grid-cols-4';
      case 8: return 'grid-cols-4';
      case 10: return 'grid-cols-5';
      default: return 'grid-cols-4';
    }
  };

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-green-500/30">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold text-white mb-4">
          Elite Memory Challenge
        </h4>
        <p className="text-green-200 mb-4">
          Choose difficulty and memorize the pattern before time runs out!
        </p>
        
        <div className="flex justify-center space-x-4 mb-4">
          {Object.keys(DIFFICULTY_LEVELS).map((level) => (
            <Button
              key={level}
              onClick={() => setDifficulty(level as keyof typeof DIFFICULTY_LEVELS)}
              className={`${
                difficulty === level 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-gray-600 hover:bg-gray-700'
              }`}
              disabled={gameStarted && !gameWon}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </Button>
          ))}
        </div>
        
        <div className="flex justify-center space-x-8 text-white">
          <span className={`font-bold ${timeLeft < 10 ? 'text-red-400 animate-pulse' : ''}`}>
            Time: {timeLeft}s
          </span>
          <span>Moves: {moves}</span>
          <span>Matches: {matches}/{pairsCount}</span>
        </div>
      </div>

      <div className={`grid ${getGridCols()} gap-4 max-w-lg mx-auto mb-8`}>
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => flipCard(card.id)}
            className={`w-16 h-16 rounded-lg cursor-pointer transition-all duration-500 flex items-center justify-center text-2xl font-bold border-2 ${
              card.isFlipped || card.isMatched
                ? 'bg-gradient-to-br from-purple-500 to-pink-500 border-white transform scale-105 rotate-12'
                : 'bg-gradient-to-br from-gray-600 to-gray-800 border-gray-400 hover:border-green-400 hover:scale-105'
            }`}
            style={{
              transformStyle: 'preserve-3d',
              transform: card.isFlipped || card.isMatched ? 'rotateY(180deg) scale(1.05)' : 'rotateY(0deg)'
            }}
          >
            {card.isFlipped || card.isMatched ? (
              <span className="animate-bounce">{card.face}</span>
            ) : (
              <span className="text-gray-400">?</span>
            )}
          </div>
        ))}
      </div>

      <div className="text-center space-x-4">
        {!gameStarted ? (
          <Button
            onClick={startGame}
            className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
          >
            Start Challenge
          </Button>
        ) : (
          <Button
            onClick={initializeGame}
            className="bg-green-600 hover:bg-green-700"
          >
            New Game
          </Button>
        )}
      </div>

      {gameWon && (
        <div className="mt-6 text-center">
          <div className="text-4xl mb-2">🧠</div>
          <p className="text-green-300 font-bold">
            Memory Master! Perfect for crypto portfolio tracking!
          </p>
        </div>
      )}
    </div>
  );
};
