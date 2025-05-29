
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CARD_FACES = ['😎', '🤓', '🧐', '😄', '🤔', '😊', '🥸', '🤗'];

interface Card {
  id: number;
  face: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (matches === 8) {
      setGameWon(true);
      toast({
        title: "🎉 Memory Master!",
        description: `You matched all Zoombinis in ${moves} moves! Your brain is ready for crypto!`,
      });
    }
  }, [matches, moves, toast]);

  const initializeGame = () => {
    const gameCards: Card[] = [];
    CARD_FACES.forEach((face, index) => {
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
    setGameWon(false);
  };

  const flipCard = (cardId: number) => {
    if (flippedCards.length === 2 || gameWon) return;
    
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
        }, 1000);
      }
    }
  };

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-green-500/30">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold text-white mb-4">
          Zoombini Memory Challenge
        </h4>
        <p className="text-green-200 mb-4">
          Match the Zoombini faces by remembering their positions!
        </p>
        <div className="flex justify-center space-x-8 text-white">
          <span>Moves: {moves}</span>
          <span>Matches: {matches}/8</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => flipCard(card.id)}
            className={`w-16 h-16 rounded-lg cursor-pointer transition-all duration-300 flex items-center justify-center text-2xl font-bold border-2 ${
              card.isFlipped || card.isMatched
                ? 'bg-gradient-to-br from-purple-500 to-pink-500 border-white transform scale-105'
                : 'bg-gradient-to-br from-gray-600 to-gray-800 border-gray-400 hover:border-purple-400'
            }`}
          >
            {card.isFlipped || card.isMatched ? (
              <span className="animate-bounce">{card.face}</span>
            ) : (
              <span className="text-gray-400">?</span>
            )}
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button
          onClick={initializeGame}
          className="bg-green-600 hover:bg-green-700"
        >
          New Game
        </Button>
      </div>

      {gameWon && (
        <div className="mt-6 text-center">
          <div className="text-4xl mb-2">🧠</div>
          <p className="text-green-300 font-bold">
            Your memory skills are perfect for tracking crypto gains!
          </p>
        </div>
      )}
    </div>
  );
};
