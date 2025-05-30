
import { CheckCircle, Circle, Clock, Trophy, Gamepad2, Users, Zap } from "lucide-react";

export const Roadmap = () => {
  return (
    <section id="roadmap" className="py-16 px-4 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-6">
            The $100M Vision
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Our ambitious goal: Reach a $100 million market cap to acquire the official Zoombini IP and build the ultimate gaming ecosystem!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-md rounded-lg p-6 border border-green-500/30 text-center">
            <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-300 mb-2">Phase 1: Community</h3>
            <p className="text-white mb-4">Build the strongest crypto gaming community</p>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-green-300 ml-2 font-semibold">Active</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-md rounded-lg p-6 border border-blue-500/30 text-center">
            <Gamepad2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-blue-300 mb-2">Phase 2: Mini Games</h3>
            <p className="text-white mb-4">Launch interactive puzzle games</p>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-green-300 ml-2 font-semibold">Complete</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-md rounded-lg p-6 border border-yellow-500/30 text-center">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-yellow-300 mb-2">Phase 3: $100M Goal</h3>
            <p className="text-white mb-4">Reach $100M market cap milestone</p>
            <div className="flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-300 ml-2 font-semibold">In Progress</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-lg p-6 border border-purple-500/30 text-center">
            <Trophy className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-purple-300 mb-2">Phase 4: Official IP</h3>
            <p className="text-white mb-4">Acquire Zoombini rights & build empire</p>
            <div className="flex items-center justify-center">
              <Circle className="w-6 h-6 text-gray-400" />
              <span className="text-gray-300 ml-2 font-semibold">Pending</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-lg p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">🏆 The Ultimate Goal</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-purple-300">Why $100 Million?</h4>
                <ul className="text-purple-200 space-y-2">
                  <li>• Purchase official Zoombini intellectual property</li>
                  <li>• Hire original developers and designers</li>
                  <li>• Fund massive game development projects</li>
                  <li>• Create educational partnerships</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-green-300">What We'll Build</h4>
                <ul className="text-green-200 space-y-2">
                  <li>• Full 3D Zoombini adventure games</li>
                  <li>• Educational crypto curriculum</li>
                  <li>• NFT collections and metaverse worlds</li>
                  <li>• Mobile apps and console games</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-600/20 to-red-600/20 rounded-lg border border-yellow-500/30">
              <h4 className="text-2xl font-bold text-white mb-4 text-center">💰 Community Ownership</h4>
              <p className="text-yellow-200 text-center leading-relaxed">
                Every $ZOOM holder becomes a stakeholder in the official Zoombini empire. 
                Together, we'll bring these beloved characters back to life for a new generation of puzzle lovers!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
