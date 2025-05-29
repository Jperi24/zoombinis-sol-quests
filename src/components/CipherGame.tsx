
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CIPHERS = [
  { encoded: "FUBCGVAV", decoded: "ZOOMBINI", cipher: "ROT13" },
  { encoded: "AQQOCPKP", decoded: "ZOOMBINI", cipher: "Caesar +8" },
  { encoded: "CRRUOPLOL", decoded: "BLOCKCHAIN", cipher: "ROT13" },
  { encoded: "YVAPB", decoded: "LOGIC", cipher: "Caesar +7" }
];

export const CipherGame = () => {
  const [currentCipher] = useState(CIPHERS[Math.floor(Math.random() * CIPHERS.length)]);
  const [userAnswer, setUserAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const { toast } = useToast();

  const checkAnswer = () => {
    if (userAnswer.toUpperCase() === currentCipher.decoded) {
      setGameWon(true);
      toast({
        title: "🔓 Cipher Cracked!",
        description: "You've broken the code! Your cryptographic skills are blockchain-ready!",
      });
    } else {
      toast({
        title: "Code not cracked yet!",
        description: "Think about letter substitution patterns...",
        variant: "destructive",
      });
    }
  };

  const resetGame = () => {
    setUserAnswer("");
    setShowHint(false);
    setGameWon(false);
    window.location.reload();
  };

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-indigo-500/30">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold text-white mb-4">
          Crypto Cipher Challenge
        </h4>
        <p className="text-indigo-200">
          Decode the encrypted message using logical deduction!
        </p>
      </div>

      <div className="mb-8">
        <div className="bg-black/50 rounded-lg p-6 text-center">
          <h5 className="text-lg font-semibold text-indigo-300 mb-4">Encrypted Message</h5>
          <div className="text-4xl font-mono font-bold text-indigo-400 tracking-widest mb-6">
            {currentCipher.encoded}
          </div>
          <div className="text-center">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value.toUpperCase())}
              placeholder="Enter decoded message"
              className="w-64 h-12 text-center text-xl font-bold bg-black/50 border-2 border-indigo-400 rounded-lg text-white placeholder-gray-400"
              disabled={gameWon}
            />
          </div>
        </div>
      </div>

      <div className="text-center space-x-4 mb-4">
        <Button
          onClick={checkAnswer}
          disabled={!userAnswer || gameWon}
          className="bg-indigo-600 hover:bg-indigo-700"
        >
          Decrypt Message
        </Button>
        <Button
          onClick={() => setShowHint(!showHint)}
          variant="outline"
          className="border-indigo-400 text-indigo-300 hover:bg-indigo-400 hover:text-black"
          disabled={gameWon}
        >
          {showHint ? 'Hide Hint' : 'Show Hint'}
        </Button>
        <Button
          onClick={resetGame}
          variant="outline"
          className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black"
        >
          New Cipher
        </Button>
      </div>

      {showHint && !gameWon && (
        <div className="text-center mb-4">
          <div className="bg-yellow-600/20 rounded-lg p-4 border border-yellow-500/30">
            <p className="text-yellow-300 font-semibold">
              Cipher Type: {currentCipher.cipher}
            </p>
            <p className="text-yellow-200 text-sm mt-2">
              {currentCipher.cipher.includes('ROT13') 
                ? 'Each letter is shifted 13 positions in the alphabet' 
                : 'Each letter is shifted by a fixed number of positions'}
            </p>
          </div>
        </div>
      )}

      {gameWon && (
        <div className="mt-6 text-center">
          <div className="text-4xl mb-2">🔓</div>
          <p className="text-indigo-300 font-bold">
            Codebreaker extraordinaire! You're ready for cryptographic protocols!
          </p>
        </div>
      )}
    </div>
  );
};
