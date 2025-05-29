
import { TrendingUp, Users, Lock, Zap } from "lucide-react";

export const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 mb-6">
            $ZOOM Tokenomics
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Built with the same logical precision that made Zoombinis successful. Every token allocation serves a purpose!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-lg p-6 border border-purple-500/30">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-purple-300">Total Supply</h3>
              </div>
              <p className="text-3xl font-bold text-white mb-2">1,000,000,000 $ZOOM</p>
              <p className="text-purple-200">Fixed supply - No minting, no inflation!</p>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-md rounded-lg p-6 border border-green-500/30">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-2xl font-bold text-green-300">Community</h3>
              </div>
              <p className="text-3xl font-bold text-white mb-2">60% (600M)</p>
              <p className="text-green-200">Fair launch - No presale, equal opportunity for all!</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-600/20 to-red-600/20 backdrop-blur-md rounded-lg p-6 border border-yellow-500/30">
              <div className="flex items-center mb-4">
                <Lock className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-2xl font-bold text-yellow-300">Liquidity Pool</h3>
              </div>
              <p className="text-3xl font-bold text-white mb-2">30% (300M)</p>
              <p className="text-yellow-200">Locked for 2 years - Ensuring long-term stability!</p>
            </div>

            <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-md rounded-lg p-6 border border-pink-500/30">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-pink-400 mr-3" />
                <h3 className="text-2xl font-bold text-pink-300">Development</h3>
              </div>
              <p className="text-3xl font-bold text-white mb-2">10% (100M)</p>
              <p className="text-pink-200">Games, partnerships, and ecosystem growth!</p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-purple-500/30">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Token Distribution</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-purple-300 font-semibold">Community (60%)</span>
                  <div className="w-48 bg-gray-700 rounded-full h-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-green-300 font-semibold">Liquidity (30%)</span>
                  <div className="w-48 bg-gray-700 rounded-full h-4">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-4 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-yellow-300 font-semibold">Development (10%)</span>
                  <div className="w-48 bg-gray-700 rounded-full h-4">
                    <div className="bg-gradient-to-r from-yellow-500 to-red-500 h-4 rounded-full" style={{width: '10%'}}></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30">
                <h4 className="text-lg font-bold text-white mb-2">🔒 Contract Security</h4>
                <ul className="text-purple-200 space-y-1 text-sm">
                  <li>✅ Liquidity Locked</li>
                  <li>✅ Ownership Renounced</li>
                  <li>✅ No Hidden Mints</li>
                  <li>✅ Audited Smart Contract</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
