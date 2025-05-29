
export const About = () => {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
            About Zoombini On Sol
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Remember the joy of guiding colorful Zoombinis through logical challenges? Now bring that same problem-solving spirit to the world of cryptocurrency!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">🎯 Our Mission</h3>
              <p className="text-white leading-relaxed">
                To create a cryptocurrency that celebrates education, logical thinking, and the timeless appeal of the Zoombinis universe. 
                We're building more than just a token - we're creating a community of puzzle lovers and crypto enthusiasts.
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-pink-500/30">
              <h3 className="text-2xl font-bold text-pink-300 mb-4">🧩 The Zoombini Way</h3>
              <p className="text-white leading-relaxed">
                Just like the original game taught us that every problem has a solution, $ZOOM represents the power of community-driven problem solving. 
                Each holder becomes part of the logical journey to the moon!
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-300 mb-4">🌟 Built Different</h3>
              <p className="text-white leading-relaxed">
                Unlike other meme coins, $ZOOM combines nostalgia with utility. Play games, solve puzzles, earn rewards, and help build the most logical crypto community on Solana.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/dcd8a283-fc99-4a62-8b81-a720df846978.png" 
              alt="Zoombini Adventure" 
              className="rounded-lg border-4 border-purple-500/50 shadow-2xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-4">
              <img 
                src="/lovable-uploads/db8e3331-e30c-4713-8ef4-4a445eb07327.png" 
                alt="Zoombini" 
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
