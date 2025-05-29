
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CIPHER_TYPES = {
  ROT13: (text: string) => text.replace(/[A-Z]/g, (char) => 
    String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65)
  ),
  CAESAR: (text: string, shift: number) => text.replace(/[A-Z]/g, (char) => 
    String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65)
  ),
  REVERSE: (text: string) => text.split('').reverse().join(''),
  ATBASH: (text: string) => text.replace(/[A-Z]/g, (char) => 
    String.fromCharCode(90 - (char.charCodeAt(0) - 65))
  )
};

const CRYPTO_WORDS = [
  "BLOCKCHAIN", "SOLANA", "ETHEREUM", "BITCOIN", "DEFI", "SMART", "TOKEN", 
  "WALLET", "MINING", "STAKING", "YIELD", "LIQUIDITY", "PROTOCOL", "GOVERNANCE"
];

export const CipherGame = () => {
  const [currentWord] = useState(CRYPTO_WORDS[Math.floor(Math.random() * CRYPTO_WORDS.length)]);
  const [cipherType] = useState(() => {
    const types = Object.keys(CIPHER_TYPES);
    return types[Math.floor(Math.random() * types.length)] as keyof typeof CIPHER_TYPES;
  });
  const [shift] = useState(Math.floor(Math.random() * 25) + 1);
  const [userAnswer, setUserAnswer] = useState("");
  const [gameWon, setGameWon] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showFrequencyAnalysis, setShowFrequencyAnalysis] = useState(false);
  const { toast } = useToast();

  const getEncryptedWord = () => {
    switch (cipherType) {
      case 'CAESAR':
        return CIPHER_TYPES.CAESAR(currentWord, shift);
      case 'ROT13':
        return CIPHER_TYPES.ROT13(currentWord);
      case 'REVERSE':
        return CIPHER_TYPES.REVERSE(currentWord);
      case 'ATBASH':
        return CIPHER_TYPES.ATBASH(currentWord);
      default:
        return currentWord;
    }
  };

  const encryptedWord = getEncryptedWord();

  const getLetterFrequency = (text: string) => {
    const freq: { [key: string]: number } = {};
    for (const char of text) {
      freq[char] = (freq[char] || 0) + 1;
    }
    return Object.entries(freq).sort((a, b) => b[1] - a[1]);
  };

  const checkAnswer = () => {
    setAttempts(attempts + 1);
    
    if (userAnswer.toUpperCase() === currentWord) {
      setGameWon(true);
      const performance = attempts === 0 ? "Genius!" : attempts < 3 ? "Excellent!" : "Good work!";
      toast({
        title: `🔓 ${performance}`,
        description: `Cipher cracked in ${attempts + 1} attempts! You're a cryptographic master!`,
      });
    } else {
      const isClose = userAnswer.toUpperCase().length === currentWord.length;
      toast({
        title: "🔒 Not quite right!",
        description: isClose ? "Right length! Check your cipher logic..." : "Think about the cipher pattern...",
        variant: "destructive",
      });
    }
  };

  const resetGame = () => {
    setUserAnswer("");
    setGameWon(false);
    setAttempts(0);
    setShowFrequencyAnalysis(false);
    window.location.reload();
  };

  const getCipherHint = () => {
    switch (cipherType) {
      case 'CAESAR':
        return `Each letter is shifted ${shift} positions forward in the alphabet`;
      case 'ROT13':
        return 'Each letter is shifted 13 positions in the alphabet';
      case 'REVERSE':
        return 'The letters are in reverse order';
      case 'ATBASH':
        return 'A↔Z, B↔Y, C↔X... (reverse alphabet substitution)';
      default:
        return 'Unknown cipher type';
    }
  };

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-indigo-500/30">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold text-white mb-4">
          Advanced Cryptographic Challenge
        </h4>
        <p className="text-indigo-200">
          Crack the encrypted crypto term using logical deduction!
        </p>
        <div className="mt-4 text-indigo-300">
          <span className="font-semibold">Attempts: {attempts}</span>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-black/50 rounded-lg p-6 text-center border border-indigo-400">
          <h5 className="text-lg font-semibold text-indigo-300 mb-4">Encrypted Message</h5>
          <div className="text-4xl font-mono font-bold text-indigo-400 tracking-widest mb-6 bg-gray-900 rounded p-4">
            {encryptedWord}
          </div>
          <div className="text-center">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value.toUpperCase())}
              placeholder="Enter decoded message"
              className="w-64 h-12 text-center text-xl font-bold bg-black/50 border-2 border-indigo-400 rounded-lg text-white placeholder-gray-400"
              disabled={gameWon}
              maxLength={15}
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
          onClick={() => setShowFrequencyAnalysis(!showFrequencyAnalysis)}
          variant="outline"
          className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black"
          disabled={gameWon}
        >
          {showFrequencyAnalysis ? 'Hide Analysis' : 'Frequency Analysis'}
        </Button>
        <Button
          onClick={resetGame}
          variant="outline"
          className="border-indigo-400 text-indigo-300 hover:bg-indigo-400 hover:text-black"
        >
          New Cipher
        </Button>
      </div>

      {showFrequencyAnalysis && !gameWon && (
        <div className="mb-4">
          <div className="bg-purple-600/20 rounded-lg p-4 border border-purple-500/30">
            <h6 className="text-purple-300 font-semibold mb-2">Letter Frequency Analysis</h6>
            <div className="flex flex-wrap gap-2 justify-center">
              {getLetterFrequency(encryptedWord).map(([letter, count]) => (
                <span key={letter} className="bg-purple-500/30 px-2 py-1 rounded text-purple-200">
                  {letter}: {count}
                </span>
              ))}
            </div>
            <p className="text-purple-200 text-sm mt-2">
              Cipher Type: {cipherType}
            </p>
            <p className="text-purple-200 text-sm">
              Hint: {getCipherHint()}
            </p>
          </div>
        </div>
      )}

      {gameWon && (
        <div className="mt-6 text-center">
          <div className="text-4xl mb-2">🔓</div>
          <p className="text-indigo-300 font-bold">
            Cryptographic genius! The word was "{currentWord}"
          </p>
          <p className="text-indigo-200 text-sm mt-2">
            You cracked the {cipherType} cipher perfectly!
          </p>
        </div>
      )}
    </div>
  );
};
