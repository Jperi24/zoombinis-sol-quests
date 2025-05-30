
import { Button } from "@/components/ui/button";
import { MessageCircle, Twitter, Send, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Community = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 mb-6">
            Join the Zoombini Community
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Connect with fellow puzzle enthusiasts, share strategies, and be part of the smartest crypto community on Solana!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-md rounded-lg p-6 border border-blue-500/30 text-center">
            <Twitter className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-blue-300 mb-2">Twitter/X</h3>
            <p className="text-white mb-4">Latest updates & memes</p>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 w-full"
              onClick={() => window.open('https://x.com/ZoombiniOnSol', '_blank')}
            >
              Follow @ZoombiniOnSol
            </Button>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-lg p-6 border border-purple-500/30 text-center">
            <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-purple-300 mb-2">Discord</h3>
            <p className="text-white mb-4">Chat & game together</p>
            <Button 
              className="bg-purple-600 hover:bg-purple-700 w-full"
              onClick={() => window.open('https://discord.gg/qEgfQnkq', '_blank')}
            >
              Join Discord
            </Button>
          </div>

          <div className="bg-gradient-to-br from-pink-600/20 to-red-600/20 backdrop-blur-md rounded-lg p-6 border border-pink-500/30 text-center">
            <Send className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-pink-300 mb-2">Telegram</h3>
            <p className="text-white mb-4">Community discussions</p>
            <Button 
              className="bg-pink-600 hover:bg-pink-700 w-full"
              onClick={() => window.open('https://t.me/+6evszhnfIwkxY2Qx', '_blank')}
            >
              Join Telegram
            </Button>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-md rounded-lg p-6 border border-green-500/30 text-center">
            <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-300 mb-2">Community</h3>
            <p className="text-white mb-4">5,000+ Members</p>
            <Button className="bg-green-600 hover:bg-green-700 w-full">
              View Stats
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-300 mb-4">📚 Educational Resources</h3>
              <p className="text-white leading-relaxed mb-4">
                Access exclusive guides on crypto, DeFi, and blockchain technology - all explained with Zoombini-style logical thinking!
              </p>
              <Button 
                onClick={() => navigate('/education')}
                className="bg-green-600 hover:bg-green-700"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/lovable-uploads/55f649ac-fe44-4c88-bb28-e40cf8664ea5.png" 
              alt="Zoombini Community" 
              className="rounded-lg border-4 border-purple-500/50 shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent rounded-lg flex items-end">
              <div className="p-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Ready to Join?</h4>
                <p className="text-purple-200">
                  Be part of the logical revolution that's changing crypto forever!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
