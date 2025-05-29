
import { CheckCircle, Circle, Clock } from "lucide-react";

export const Roadmap = () => {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Launch & Community Building",
      status: "completed",
      items: [
        "Token Launch on Solana",
        "Website & Social Media",
        "First 1,000 Holders",
        "Basic Puzzle Games"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Game Development",
      status: "current",
      items: [
        "Advanced Logic Puzzles",
        "Leaderboard System",
        "Token Rewards for Gaming",
        "Mobile-Friendly Games"
      ]
    },
    {
      phase: "Phase 3",
      title: "Ecosystem Expansion",
      status: "upcoming",
      items: [
        "NFT Collection Launch",
        "Educational Partnerships",
        "Staking Mechanisms",
        "Cross-Chain Bridge"
      ]
    },
    {
      phase: "Phase 4",
      title: "Zoombini Metaverse",
      status: "future",
      items: [
        "3D Virtual World",
        "Interactive Learning Hub",
        "Community Governance",
        "Global Puzzle Championships"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-400" />;
      case 'current':
        return <Clock className="w-6 h-6 text-yellow-400" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500/50 bg-green-600/10';
      case 'current':
        return 'border-yellow-500/50 bg-yellow-600/10';
      default:
        return 'border-gray-500/50 bg-gray-600/10';
    }
  };

  return (
    <section id="roadmap" className="py-16 px-4 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-6">
            Roadmap to Success
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Our logical journey to building the most engaging educational crypto ecosystem on Solana!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapItems.map((item, index) => (
            <div 
              key={index}
              className={`bg-black/30 backdrop-blur-md rounded-lg p-6 border ${getStatusColor(item.status)} hover:border-opacity-75 transition-all`}
            >
              <div className="flex items-center mb-4">
                {getStatusIcon(item.status)}
                <div className="ml-3">
                  <span className="text-sm text-purple-300 font-semibold">{item.phase}</span>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
              </div>
              
              <ul className="space-y-2">
                {item.items.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span className="text-sm text-gray-300">{task}</span>
                  </li>
                ))}
              </ul>
              
              {item.status === 'current' && (
                <div className="mt-4 p-2 bg-yellow-600/20 rounded border border-yellow-500/30">
                  <span className="text-xs text-yellow-300 font-semibold">🚀 IN PROGRESS</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-lg p-8 border border-purple-500/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">🎯 Long-term Vision</h3>
            <p className="text-purple-200 leading-relaxed">
              To become the leading educational cryptocurrency that combines fun, learning, and financial growth. 
              Every Zoombini holder will be part of a community that values logic, problem-solving, and collective success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
