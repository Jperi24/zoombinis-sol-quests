
import { CheckCircle, Circle, Clock } from "lucide-react";

export const Roadmap = () => {
  return (
    <section id="roadmap" className="py-16 px-4 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-6">
            Zoombini Journey
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Join us on the logical adventure to building the most engaging educational crypto ecosystem on Solana!
          </p>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-lg p-8 border border-purple-500/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">🎯 Our Vision</h3>
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
