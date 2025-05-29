
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coins, Droplets, TrendingUp, Shuffle, CheckCircle } from "lucide-react";
import { useState } from "react";

export const DeFiGuide = () => {
  const [completedSections, setCompletedSections] = useState<string[]>([]);

  const markSectionComplete = (section: string) => {
    if (!completedSections.includes(section)) {
      setCompletedSections([...completedSections, section]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <Coins className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 mb-4">
          DeFi for Beginners
        </h1>
        <p className="text-xl text-green-200">
          Decentralized Finance explained through puzzle-solving logic. Navigate DeFi like a true Zoombini!
        </p>
      </div>

      <Tabs defaultValue="liquidity-pools" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-black/30">
          <TabsTrigger value="liquidity-pools" className="data-[state=active]:bg-green-600">
            Liquidity Pools {completedSections.includes('pools') && <CheckCircle className="w-4 h-4 ml-2" />}
          </TabsTrigger>
          <TabsTrigger value="yield-farming" className="data-[state=active]:bg-green-600">
            Yield Farming {completedSections.includes('farming') && <CheckCircle className="w-4 h-4 ml-2" />}
          </TabsTrigger>
          <TabsTrigger value="amm-swapping" className="data-[state=active]:bg-green-600">
            AMMs & Swapping {completedSections.includes('amm') && <CheckCircle className="w-4 h-4 ml-2" />}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="liquidity-pools" className="mt-6">
          <Card className="bg-black/30 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-green-300 flex items-center">
                <Droplets className="w-8 h-8 mr-3" />
                Liquidity Pools: Community Resource Sharing
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white space-y-4">
              <div className="bg-green-600/20 rounded p-4">
                <h3 className="font-bold text-green-200 mb-2">🏊‍♂️ What is a Liquidity Pool?</h3>
                <p>
                  Imagine a community puzzle-solving center where Zoombinis pool their resources together. 
                  A liquidity pool is like a shared vault where people deposit pairs of tokens (like $ZOOM and $SOL) 
                  so others can easily trade between them.
                </p>
              </div>

              <div className="bg-blue-600/20 rounded p-4">
                <h3 className="font-bold text-blue-200 mb-2">🤝 How It Works - The Zoombini Way</h3>
                <div className="space-y-3">
                  <div className="bg-black/40 p-3 rounded">
                    <strong>Step 1:</strong> Zoombini Alice deposits 100 $ZOOM + 10 $SOL into the pool
                  </div>
                  <div className="bg-black/40 p-3 rounded">
                    <strong>Step 2:</strong> Zoombini Bob also deposits 100 $ZOOM + 10 $SOL
                  </div>
                  <div className="bg-black/40 p-3 rounded">
                    <strong>Step 3:</strong> Pool now has 200 $ZOOM + 20 $SOL for others to trade with
                  </div>
                  <div className="bg-black/40 p-3 rounded">
                    <strong>Step 4:</strong> Alice & Bob earn fees from every trade made using their pool!
                  </div>
                </div>
              </div>

              <div className="bg-purple-600/20 rounded p-4">
                <h3 className="font-bold text-purple-200 mb-2">💰 Earning from Liquidity Providing</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Trading Fees:</strong> 0.3% of every trade goes to liquidity providers</li>
                  <li><strong>Yield Farming:</strong> Additional $ZOOM rewards for supporting the ecosystem</li>
                  <li><strong>Governance Rights:</strong> LP token holders can vote on protocol changes</li>
                </ul>
              </div>

              <div className="bg-red-600/20 rounded p-4">
                <h3 className="font-bold text-red-200 mb-2">⚠️ Understanding Impermanent Loss</h3>
                <p>
                  Like a puzzle where pieces can shift, token prices in your pool can change. If $ZOOM goes way up 
                  compared to $SOL, you might have been better off just holding $ZOOM. This is called "impermanent loss" - 
                  it's the trade-off for earning fees!
                </p>
              </div>

              <Button 
                onClick={() => markSectionComplete('pools')}
                className="bg-green-600 hover:bg-green-700 w-full"
                disabled={completedSections.includes('pools')}
              >
                {completedSections.includes('pools') ? "Section Completed!" : "Mark as Complete"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="yield-farming" className="mt-6">
          <Card className="bg-black/30 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-green-300 flex items-center">
                <TrendingUp className="w-8 h-8 mr-3" />
                Yield Farming: Growing Your Crypto Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white space-y-4">
              <div className="bg-green-600/20 rounded p-4">
                <h3 className="font-bold text-green-200 mb-2">🌱 What is Yield Farming?</h3>
                <p>
                  Just like Zoombinis get better at puzzles through practice, yield farming is about putting your crypto 
                  to work to earn more crypto. You "plant" your tokens in various DeFi protocols and "harvest" rewards over time.
                </p>
              </div>

              <div className="bg-blue-600/20 rounded p-4">
                <h3 className="font-bold text-blue-200 mb-2">🎯 Yield Farming Strategies</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/40 p-3 rounded">
                    <h4 className="font-bold text-yellow-300 mb-2">Conservative Farming</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Stake $ZOOM for 5-15% APY</li>
                      <li>• Low risk, steady rewards</li>
                      <li>• Perfect for beginners</li>
                    </ul>
                  </div>
                  <div className="bg-black/40 p-3 rounded">
                    <h4 className="font-bold text-orange-300 mb-2">Advanced Farming</h4>
                    <ul className="text-sm space-y-1">
                      <li>• LP tokens in multiple pools</li>
                      <li>• 20-100%+ APY possible</li>
                      <li>• Higher risk, higher rewards</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-600/20 rounded p-4">
                <h3 className="font-bold text-purple-200 mb-2">🧮 Calculating Yields - Zoombini Math</h3>
                <div className="bg-black/40 p-3 rounded">
                  <strong>Example:</strong><br/>
                  You stake 1,000 $ZOOM at 50% APY<br/>
                  Daily reward: (1,000 × 0.50) ÷ 365 = 1.37 $ZOOM per day<br/>
                  Monthly reward: 1.37 × 30 = 41 $ZOOM per month<br/>
                  <span className="text-green-400">After 1 year: 1,500 $ZOOM total!</span>
                </div>
              </div>

              <div className="bg-orange-600/20 rounded p-4">
                <h3 className="font-bold text-orange-200 mb-2">🎮 Gamified Yield Farming</h3>
                <p>
                  Zoombini makes yield farming fun by adding puzzle elements:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Solve daily puzzles for bonus yield multipliers</li>
                  <li>Compete in monthly farming competitions</li>
                  <li>Unlock achievement badges for long-term farming</li>
                  <li>Earn NFT rewards for consistent participation</li>
                </ul>
              </div>

              <Button 
                onClick={() => markSectionComplete('farming')}
                className="bg-green-600 hover:bg-green-700 w-full"
                disabled={completedSections.includes('farming')}
              >
                {completedSections.includes('farming') ? "Section Completed!" : "Mark as Complete"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="amm-swapping" className="mt-6">
          <Card className="bg-black/30 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-green-300 flex items-center">
                <Shuffle className="w-8 h-8 mr-3" />
                AMMs & Swapping: Robots That Help You Trade
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white space-y-4">
              <div className="bg-green-600/20 rounded p-4">
                <h3 className="font-bold text-green-200 mb-2">🤖 What is an AMM?</h3>
                <p>
                  An Automated Market Maker (AMM) is like having a super-smart Zoombini robot that can instantly 
                  trade any token for any other token, 24/7, without needing a human to match your trade with someone else.
                </p>
              </div>

              <div className="bg-blue-600/20 rounded p-4">
                <h3 className="font-bold text-blue-200 mb-2">⚖️ How AMMs Work - The Balancing Act</h3>
                <p className="mb-3">
                  AMMs use mathematical formulas to determine prices. The most common is the constant product formula:
                </p>
                <div className="bg-black/40 p-3 rounded font-mono text-center">
                  x × y = k (always constant)
                </div>
                <p className="mt-3">
                  If someone buys $ZOOM (removing x), the price automatically increases to keep the formula balanced!
                </p>
              </div>

              <div className="bg-purple-600/20 rounded p-4">
                <h3 className="font-bold text-purple-200 mb-2">🔄 Swapping Made Simple</h3>
                <div className="space-y-3">
                  <div className="bg-black/40 p-3 rounded">
                    <strong>Step 1:</strong> Choose what you want to swap (e.g., 10 $SOL → $ZOOM)
                  </div>
                  <div className="bg-black/40 p-3 rounded">
                    <strong>Step 2:</strong> AMM calculates the best price based on current liquidity
                  </div>
                  <div className="bg-black/40 p-3 rounded">
                    <strong>Step 3:</strong> Confirm the trade (usually takes 1-2 seconds on Solana!)
                  </div>
                  <div className="bg-black/40 p-3 rounded">
                    <strong>Step 4:</strong> Your $ZOOM tokens appear in your wallet instantly
                  </div>
                </div>
              </div>

              <div className="bg-yellow-600/20 rounded p-4">
                <h3 className="font-bold text-yellow-200 mb-2">📊 Understanding Slippage</h3>
                <p>
                  Like solving a puzzle where the solution slightly changes while you work on it, token prices can 
                  move during your trade. Slippage is the difference between expected and actual price:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li><strong>Low slippage (0.1-0.5%):</strong> Large, stable pools</li>
                  <li><strong>Medium slippage (1-3%):</strong> Normal for smaller tokens</li>
                  <li><strong>High slippage (5%+):</strong> Very small pools or large trades</li>
                </ul>
              </div>

              <div className="bg-cyan-600/20 rounded p-4">
                <h3 className="font-bold text-cyan-200 mb-2">🎯 Pro Trading Tips</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Trade during high liquidity times for better prices</li>
                  <li>Split large trades into smaller ones to reduce slippage</li>
                  <li>Always check the "minimum received" amount before confirming</li>
                  <li>Use limit orders when available for exact price control</li>
                </ul>
              </div>

              <Button 
                onClick={() => markSectionComplete('amm')}
                className="bg-green-600 hover:bg-green-700 w-full"
                disabled={completedSections.includes('amm')}
              >
                {completedSections.includes('amm') ? "Section Completed!" : "Mark as Complete"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {completedSections.length === 3 && (
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-md rounded-lg p-6 border border-green-500/30">
            <h3 className="text-2xl font-bold text-white mb-2">🎓 DeFi Master!</h3>
            <p className="text-green-200">
              You're now ready to navigate the DeFi ecosystem like a true Zoombini puzzle master!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
