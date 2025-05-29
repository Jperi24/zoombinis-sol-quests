
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Zap, DollarSign, CheckCircle } from "lucide-react";
import { useState } from "react";

export const SolanaGuide = () => {
  const [completedSections, setCompletedSections] = useState<string[]>([]);

  const markSectionComplete = (section: string) => {
    if (!completedSections.includes(section)) {
      setCompletedSections([...completedSections, section]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <Brain className="w-16 h-16 text-purple-400 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          Solana Deep Dive
        </h1>
        <p className="text-xl text-purple-200">
          Discover why Solana is the perfect home for Zoombini - fast, cheap, and environmentally friendly!
        </p>
      </div>

      <Tabs defaultValue="proof-of-history" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-black/30">
          <TabsTrigger value="proof-of-history" className="data-[state=active]:bg-purple-600">
            Proof of History {completedSections.includes('poh') && <CheckCircle className="w-4 h-4 ml-2" />}
          </TabsTrigger>
          <TabsTrigger value="speed" className="data-[state=active]:bg-purple-600">
            Transaction Speed {completedSections.includes('speed') && <CheckCircle className="w-4 h-4 ml-2" />}
          </TabsTrigger>
          <TabsTrigger value="fees" className="data-[state=active]:bg-purple-600">
            Low Fees {completedSections.includes('fees') && <CheckCircle className="w-4 h-4 ml-2" />}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="proof-of-history" className="mt-6">
          <Card className="bg-black/30 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-300 flex items-center">
                <Brain className="w-8 h-8 mr-3" />
                Proof of History: Time-keeping Like a Zoombini
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white space-y-4">
              <div className="bg-purple-600/20 rounded p-4">
                <h3 className="font-bold text-purple-200 mb-2">🕐 What is Proof of History?</h3>
                <p>
                  Imagine you're timing Zoombini puzzle solutions. Instead of waiting for everyone to agree on the time, 
                  Solana creates a historical record that proves when each event happened. It's like having a super-accurate 
                  stopwatch that everyone trusts!
                </p>
              </div>

              <div className="bg-cyan-600/20 rounded p-4">
                <h3 className="font-bold text-cyan-200 mb-2">⚡ The Speed Advantage</h3>
                <p>
                  Traditional blockchains are like having Zoombinis wait in line to confirm their turn. 
                  Solana's Proof of History lets everyone know the exact order without waiting - like having a 
                  timestamp on every puzzle move!
                </p>
                
                <div className="mt-3 p-3 bg-black/40 rounded">
                  <strong>Example:</strong> If Zoombini A solves a puzzle at timestamp 1000 and Zoombini B at 1001, 
                  everyone knows A was first without needing a long discussion!
                </div>
              </div>

              <div className="bg-green-600/20 rounded p-4">
                <h3 className="font-bold text-green-200 mb-2">🔗 How It Works</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Solana generates cryptographic timestamps for every event</li>
                  <li>These timestamps create an unbreakable sequence of events</li>
                  <li>Validators can quickly verify the order without consensus delays</li>
                  <li>This enables parallel processing - multiple puzzles solved simultaneously!</li>
                </ol>
              </div>

              <Button 
                onClick={() => markSectionComplete('poh')}
                className="bg-purple-600 hover:bg-purple-700 w-full"
                disabled={completedSections.includes('poh')}
              >
                {completedSections.includes('poh') ? "Section Completed!" : "Mark as Complete"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="speed" className="mt-6">
          <Card className="bg-black/30 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-300 flex items-center">
                <Zap className="w-8 h-8 mr-3" />
                65,000 TPS: Faster Than Any Zoombini!
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white space-y-4">
              <div className="bg-yellow-600/20 rounded p-4">
                <h3 className="font-bold text-yellow-200 mb-2">🏃‍♂️ Speed Comparison</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-black/40 p-3 rounded text-center">
                    <div className="text-2xl font-bold text-red-400">7</div>
                    <div className="text-sm">Bitcoin TPS</div>
                  </div>
                  <div className="bg-black/40 p-3 rounded text-center">
                    <div className="text-2xl font-bold text-blue-400">15</div>
                    <div className="text-sm">Ethereum TPS</div>
                  </div>
                  <div className="bg-black/40 p-3 rounded text-center">
                    <div className="text-2xl font-bold text-purple-400">65,000</div>
                    <div className="text-sm">Solana TPS</div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-600/20 rounded p-4">
                <h3 className="font-bold text-purple-200 mb-2">🎮 Gaming Applications</h3>
                <p>
                  This speed means Zoombini games can have real-time interactions! Imagine:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Instant puzzle completion rewards</li>
                  <li>Real-time multiplayer competitions</li>
                  <li>Immediate leaderboard updates</li>
                  <li>Seamless in-game purchases with $ZOOM tokens</li>
                </ul>
              </div>

              <div className="bg-green-600/20 rounded p-4">
                <h3 className="font-bold text-green-200 mb-2">🌍 Real-World Impact</h3>
                <p>
                  Solana's speed enables applications that feel like traditional web apps but with blockchain benefits:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Sub-second transaction confirmation</li>
                  <li>No waiting for "network congestion"</li>
                  <li>Smooth user experience for newcomers to crypto</li>
                </ul>
              </div>

              <Button 
                onClick={() => markSectionComplete('speed')}
                className="bg-purple-600 hover:bg-purple-700 w-full"
                disabled={completedSections.includes('speed')}
              >
                {completedSections.includes('speed') ? "Section Completed!" : "Mark as Complete"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fees" className="mt-6">
          <Card className="bg-black/30 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-300 flex items-center">
                <DollarSign className="w-8 h-8 mr-3" />
                Micro-Cent Transactions That Don't Break the Bank
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white space-y-4">
              <div className="bg-green-600/20 rounded p-4">
                <h3 className="font-bold text-green-200 mb-2">💰 Fee Comparison</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-black/40 rounded">
                    <span>Ethereum Transaction:</span>
                    <span className="text-red-400 font-bold">$5-50+</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-black/40 rounded">
                    <span>Bitcoin Transaction:</span>
                    <span className="text-orange-400 font-bold">$1-10+</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-purple-600/40 rounded">
                    <span>Solana Transaction:</span>
                    <span className="text-green-400 font-bold">$0.00025</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600/20 rounded p-4">
                <h3 className="font-bold text-blue-200 mb-2">🎯 What This Means for Zoombini</h3>
                <p className="mb-3">
                  With fees this low, we can enable micro-transactions that were impossible before:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Tip other players 1 cent for helping with puzzles</li>
                  <li>Buy small in-game items without worrying about fees</li>
                  <li>Reward every puzzle completion, no matter how small</li>
                  <li>Enable daily/hourly challenges with tiny rewards</li>
                </ul>
              </div>

              <div className="bg-purple-600/20 rounded p-4">
                <h3 className="font-bold text-purple-200 mb-2">🌱 Environmental Benefits</h3>
                <p>
                  Solana uses Proof of Stake, which consumes 99.9% less energy than Bitcoin's Proof of Work. 
                  Playing Zoombini games won't harm the planet - logical solutions for logical minds!
                </p>
              </div>

              <div className="bg-orange-600/20 rounded p-4">
                <h3 className="font-bold text-orange-200 mb-2">📊 Real Numbers</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">4,000</div>
                    <div className="text-sm">Transactions for $1</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">0.000001</div>
                    <div className="text-sm">SOL average fee</div>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => markSectionComplete('fees')}
                className="bg-purple-600 hover:bg-purple-700 w-full"
                disabled={completedSections.includes('fees')}
              >
                {completedSections.includes('fees') ? "Section Completed!" : "Mark as Complete"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {completedSections.length === 3 && (
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-lg p-6 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-2">🎓 Solana Expert!</h3>
            <p className="text-purple-200">
              You now understand why Solana is the perfect blockchain for the Zoombini ecosystem!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
