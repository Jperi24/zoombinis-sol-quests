
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, BookOpen, Brain, Coins, Lock } from "lucide-react";

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-800">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <Button 
              onClick={() => window.history.back()}
              variant="outline" 
              className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black mb-6"
            >
              <ArrowLeft className="mr-2" />
              Back to Home
            </Button>
            
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 mb-6">
              Zoombini Educational Hub
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl">
              Master blockchain technology with logical thinking! Our educational resources are designed to make complex crypto concepts as simple as solving a Zoombini puzzle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blockchain Basics */}
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-blue-500/30">
              <BookOpen className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Blockchain Basics</h3>
              <p className="text-white mb-6 leading-relaxed">
                Learn how blockchain works using Zoombini logic puzzles. Understand blocks, chains, and consensus mechanisms through interactive examples.
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-blue-600/20 rounded p-3">
                  <h4 className="font-semibold text-blue-200">Chapter 1: What is a Block?</h4>
                  <p className="text-sm text-gray-300">Think of blocks like Zoombini transport vehicles - each one carries important data!</p>
                </div>
                <div className="bg-blue-600/20 rounded p-3">
                  <h4 className="font-semibold text-blue-200">Chapter 2: The Chain Connection</h4>
                  <p className="text-sm text-gray-300">Just like Zoombinis follow logical paths, blocks connect in a logical sequence.</p>
                </div>
                <div className="bg-blue-600/20 rounded p-3">
                  <h4 className="font-semibold text-blue-200">Chapter 3: Consensus & Trust</h4>
                  <p className="text-sm text-gray-300">How the network agrees on truth - democratic decision making in action!</p>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                Start Learning
              </Button>
            </div>

            {/* Solana Deep Dive */}
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-purple-500/30">
              <Brain className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-purple-300 mb-4">Solana Deep Dive</h3>
              <p className="text-white mb-6 leading-relaxed">
                Discover why Solana is the perfect home for Zoombini. Fast, cheap, and environmentally friendly - just like our logical solutions!
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-purple-600/20 rounded p-3">
                  <h4 className="font-semibold text-purple-200">Proof of History</h4>
                  <p className="text-sm text-gray-300">Time-keeping that would make any Zoombini proud - logical and efficient!</p>
                </div>
                <div className="bg-purple-600/20 rounded p-3">
                  <h4 className="font-semibold text-purple-200">Transaction Speed</h4>
                  <p className="text-sm text-gray-300">65,000 TPS - faster than any Zoombini can solve puzzles!</p>
                </div>
                <div className="bg-purple-600/20 rounded p-3">
                  <h4 className="font-semibold text-purple-200">Low Fees</h4>
                  <p className="text-sm text-gray-300">Micro-cent transactions that don't break the bank.</p>
                </div>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                Explore Solana
              </Button>
            </div>

            {/* DeFi for Beginners */}
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-green-500/30">
              <Coins className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold text-green-300 mb-4">DeFi for Beginners</h3>
              <p className="text-white mb-6 leading-relaxed">
                Decentralized Finance explained through puzzle-solving logic. Learn to navigate DeFi protocols like a true Zoombini!
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-green-600/20 rounded p-3">
                  <h4 className="font-semibold text-green-200">Liquidity Pools</h4>
                  <p className="text-sm text-gray-300">Think of them as community resource pools - everyone contributes!</p>
                </div>
                <div className="bg-green-600/20 rounded p-3">
                  <h4 className="font-semibold text-green-200">Yield Farming</h4>
                  <p className="text-sm text-gray-300">Grow your crypto like Zoombinis grow their problem-solving skills.</p>
                </div>
                <div className="bg-green-600/20 rounded p-3">
                  <h4 className="font-semibold text-green-200">AMMs & Swapping</h4>
                  <p className="text-sm text-gray-300">Automated market makers - robots that help you trade fairly!</p>
                </div>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 w-full">
                Master DeFi
              </Button>
            </div>

            {/* Smart Contracts */}
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-orange-500/30">
              <Lock className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold text-orange-300 mb-4">Smart Contracts</h3>
              <p className="text-white mb-6 leading-relaxed">
                Self-executing contracts with built-in logic - like having a Zoombini that automatically follows the rules!
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-orange-600/20 rounded p-3">
                  <h4 className="font-semibold text-orange-200">What are Smart Contracts?</h4>
                  <p className="text-sm text-gray-300">Code that runs exactly as programmed - no human intervention needed.</p>
                </div>
                <div className="bg-orange-600/20 rounded p-3">
                  <h4 className="font-semibold text-orange-200">Real-World Examples</h4>
                  <p className="text-sm text-gray-300">From simple token transfers to complex DeFi protocols.</p>
                </div>
                <div className="bg-orange-600/20 rounded p-3">
                  <h4 className="font-semibold text-orange-200">Security Best Practices</h4>
                  <p className="text-sm text-gray-300">How to spot secure contracts and avoid common pitfalls.</p>
                </div>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700 w-full">
                Learn Contracts
              </Button>
            </div>

            {/* Tokenomics Guide */}
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-pink-500/30">
              <Brain className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold text-pink-300 mb-4">Tokenomics Guide</h3>
              <p className="text-white mb-6 leading-relaxed">
                Understand how $ZOOM token economics work. Supply, demand, and utility - the holy trinity of crypto success!
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-pink-600/20 rounded p-3">
                  <h4 className="font-semibold text-pink-200">Supply Mechanics</h4>
                  <p className="text-sm text-gray-300">Fixed supply ensures scarcity - just like rare Zoombini traits!</p>
                </div>
                <div className="bg-pink-600/20 rounded p-3">
                  <h4 className="font-semibold text-pink-200">Utility Functions</h4>
                  <p className="text-sm text-gray-300">How $ZOOM powers games, governance, and community rewards.</p>
                </div>
                <div className="bg-pink-600/20 rounded p-3">
                  <h4 className="font-semibold text-pink-200">Value Accrual</h4>
                  <p className="text-sm text-gray-300">Understanding what drives long-term token value growth.</p>
                </div>
              </div>
              <Button className="bg-pink-600 hover:bg-pink-700 w-full">
                Study Economics
              </Button>
            </div>

            {/* Crypto Security */}
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-red-500/30">
              <Lock className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-bold text-red-300 mb-4">Crypto Security</h3>
              <p className="text-white mb-6 leading-relaxed">
                Protect your crypto like a Zoombini protects their logical solutions. Security through careful thinking and planning!
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-red-600/20 rounded p-3">
                  <h4 className="font-semibold text-red-200">Wallet Security</h4>
                  <p className="text-sm text-gray-300">Hardware vs software wallets - choose your protection level.</p>
                </div>
                <div className="bg-red-600/20 rounded p-3">
                  <h4 className="font-semibold text-red-200">Seed Phrases</h4>
                  <p className="text-sm text-gray-300">Your 12-24 word backup - guard it like the ultimate puzzle solution!</p>
                </div>
                <div className="bg-red-600/20 rounded p-3">
                  <h4 className="font-semibold text-red-200">Scam Prevention</h4>
                  <p className="text-sm text-gray-300">Logical thinking to spot and avoid common crypto scams.</p>
                </div>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 w-full">
                Secure Yourself
              </Button>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-lg p-8 border border-purple-500/30">
              <h3 className="text-3xl font-bold text-white mb-4">🎓 Complete the Zoombini Academy</h3>
              <p className="text-purple-200 text-lg mb-6">
                Master all modules to become a certified Zoombini Crypto Expert and earn exclusive $ZOOM rewards!
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg">
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;
