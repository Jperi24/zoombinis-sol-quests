
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CRYPTO_WORDS = [
  { word: "BLOCKCHAIN", scrambled: "KHCAINLCBO" },
  { word: "SOLANA", scrambled: "NALASO" },
  { word: "PUZZLE", scrambled: "ZUZLEP" },
  { word: "LOGIC", scrambled: "CIGOL" },
  { word: "TOKEN", scrambled: "KENTO" },
  { word: "CRYPTO", scrambled: "TOPYRC" }
];

export const WordScramble = () => {
  const [currentWord] = useState(CRYPTO_WORDS[Math.floor(Math.random() * CRYPTO_WORDS.length)]);
  const [userGuess, setUserGuess] = useState("");
  const [gameWon, setGameWon] = useState(false);
  const { toast } = useToast();

  const checkAnswer = () => {
    if (userGuess.toUpperCase() === currentWord.word) {
      setGameWon(true);
      toast({
        title: "🔤 Word Master!",
        description: "You unscrambled it! Your pattern recognition is crypto-grade!",
      });
    } else {
      toast({
        title: "Try again!",
        description: "That's not quite right. Keep thinking!",
        variant: "destructive",
      });
    }
  };

  const resetGame = () => {
    setUserGuess("");
    setGameWon(false);
    window.location.reload();
  };

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-pink-500/30">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold text-white mb-4">
          Crypto Word Scramble
        </h4>
        <p className="text-pink-200">
          Unscramble the crypto-related word!
        </p>
      </div>

      <div className="text-center mb-8">
        <div className="text-4xl font-bold text-pink-300 mb-4 tracking-widest">
          {currentWord.scrambled}
        </div>
        <input
          type="text"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          placeholder="Enter your guess"
          className="w-64 h-12 text-center text-xl font-bold bg-black/50 border-2 border-pink-400 rounded-lg text-white placeholder-gray-400"
          disabled={gameWon}
        />
      </div>

      <div className="text-center space-x-4">
        <Button
          onClick={checkAnswer}
          disabled={!userGuess || gameWon}
          className="bg-pink-600 hover:bg-pink-700"
        >
          Check Word
        </Button>
        <Button
          onClick={resetGame}
          variant="outline"
          className="border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-black"
        >
          New Word
        </Button>
      </div>

      {gameWon && (
        <div className="mt-6 text-center">
          <div className="text-4xl mb-2">🔤</div>
          <p className="text-pink-300 font-bold">
            Word wizard! You're ready to decode smart contracts!
          </p>
        </div>
      )}
    </div>
  );
};
