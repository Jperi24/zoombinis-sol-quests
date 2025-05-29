
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, ChevronRight, CheckCircle } from "lucide-react";
import { useState } from "react";

export const BlockchainBasicsGuide = () => {
  const [completedChapters, setCompletedChapters] = useState<number[]>([]);

  const markChapterComplete = (chapter: number) => {
    if (!completedChapters.includes(chapter)) {
      setCompletedChapters([...completedChapters, chapter]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <BookOpen className="w-16 h-16 text-blue-400 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 mb-4">
          Blockchain Basics
        </h1>
        <p className="text-xl text-blue-200">
          Learn blockchain technology through Zoombini logic puzzles!
        </p>
      </div>

      <Tabs defaultValue="chapter1" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-black/30">
          <TabsTrigger value="chapter1" className="data-[state=active]:bg-blue-600">
            Chapter 1 {completedChapters.includes(1) && <CheckCircle className="w-4 h-4 ml-2" />}
          </TabsTrigger>
          <TabsTrigger value="chapter2" className="data-[state=active]:bg-blue-600">
            Chapter 2 {completedChapters.includes(2) && <CheckCircle className="w-4 h-4 ml-2" />}
          </TabsTrigger>
          <TabsTrigger value="chapter3" className="data-[state=active]:bg-blue-600">
            Chapter 3 {completedChapters.includes(3) && <CheckCircle className="w-4 h-4 ml-2" />}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chapter1" className="mt-6">
          <Card className="bg-black/30 border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-300">Chapter 1: What is a Block?</CardTitle>
            </CardHeader>
            <CardContent className="text-white space-y-4">
              <p className="text-lg">
                Think of blocks like Zoombini transport vehicles - each one carries important data!
              </p>
              
              <div className="bg-blue-600/20 rounded p-4">
                <h3 className="font-bold text-blue-200 mb-2">🚌 The Zoombini Transport Analogy</h3>
                <p>
                  Just like how Zoombinis travel in groups on specific vehicles, data travels in "blocks" on the blockchain. 
                  Each block contains:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Transaction data (like Zoombini passenger info)</li>
                  <li>Timestamp (when the journey started)</li>
                  <li>Hash (unique ID for the vehicle)</li>
                  <li>Previous hash (connection to the last vehicle)</li>
                </ul>
              </div>

              <div className="bg-cyan-600/20 rounded p-4">
                <h3 className="font-bold text-cyan-200 mb-2">🧩 Interactive Example</h3>
                <p>
                  Imagine you're organizing Zoombinis for transport. Each vehicle (block) can hold exactly 3 Zoombinis and their traits:
                </p>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <div className="bg-black/40 p-2 rounded text-center text-sm">
                    Zoombini #1<br/>
                    Blue Hair, Round Feet
                  </div>
                  <div className="bg-black/40 p-2 rounded text-center text-sm">
                    Zoombini #2<br/>
                    Red Hair, Spring Feet
                  </div>
                  <div className="bg-black/40 p-2 rounded text-center text-sm">
                    Zoombini #3<br/>
                    Green Hair, Wheel Feet
                  </div>
                </div>
              </div>

              <div className="bg-green-600/20 rounded p-4">
                <h3 className="font-bold text-green-200 mb-2">🎯 Key Concepts</h3>
                <ul className="space-y-2">
                  <li><strong>Immutability:</strong> Once Zoombinis are in a vehicle, you can't change their traits</li>
                  <li><strong>Transparency:</strong> Everyone can see which Zoombinis are in each vehicle</li>
                  <li><strong>Verification:</strong> Other players can verify the Zoombini traits are correct</li>
                </ul>
              </div>

              <Button 
                onClick={() => markChapterComplete(1)}
                className="bg-blue-600 hover:bg-blue-700 w-full"
                disabled={completedChapters.includes(1)}
              >
                {completedChapters.includes(1) ? "Chapter Completed!" : "Mark as Complete"}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chapter2" className="mt-6">
          <Card className="bg-black/30 border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-300">Chapter 2: The Chain Connection</CardTitle>
            </CardHeader>
            <CardContent className="text-white space-y-4">
              <p className="text-lg">
                Just like Zoombinis follow logical paths, blocks connect in a logical sequence.
              </p>
              
              <div className="bg-blue-600/20 rounded p-4">
                <h3 className="font-bold text-blue-200 mb-2">🔗 The Chain Journey</h3>
                <p>
                  In Logical Journey of the Zoombinis, each challenge leads to the next in a specific order. 
                  Blockchain works the same way - each block references the previous one, creating an unbreakable chain!
                </p>
                
                <div className="flex items-center justify-center mt-4 space-x-2">
                  <div className="bg-purple-600/40 p-3 rounded text-center">
                    Block 1<br/>
                    <small>Genesis</small>
                  </div>
                  <ChevronRight className="text-blue-400" />
                  <div className="bg-purple-600/40 p-3 rounded text-center">
                    Block 2<br/>
                    <small>Links to 1</small>
                  </div>
                  <ChevronRight className="text-blue-400" />
                  <div className="bg-purple-600/40 p-3 rounded text-center">
                    Block 3<br/>
                    <small>Links to 2</small>
                  </div>
                </div>
              </div>

              <div className="bg-orange-600/20 rounded p-4">
                <h3 className="font-bold text-orange-200 mb-2">🛡️ Security Through Connection</h3>
                <p>
                  If someone tries to cheat and change a Zoombini's traits in Block 2, it would break the connection to Block 3. 
                  This makes tampering immediately obvious to everyone!
                </p>
              </div>

              <Button 
                onClick={() => markChapterComplete(2)}
                className="bg-blue-600 hover:bg-blue-700 w-full"
                disabled={completedChapters.includes(2)}
              >
                {completedChapters.includes(2) ? "Chapter Completed!" : "Mark as Complete"}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chapter3" className="mt-6">
          <Card className="bg-black/30 border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-300">Chapter 3: Consensus & Trust</CardTitle>
            </CardHeader>
            <CardContent className="text-white space-y-4">
              <p className="text-lg">
                How the network agrees on truth - democratic decision making in action!
              </p>
              
              <div className="bg-green-600/20 rounded p-4">
                <h3 className="font-bold text-green-200 mb-2">🗳️ Zoombini Democracy</h3>
                <p>
                  Imagine if every Zoombini village had to agree on which path to take. In blockchain, 
                  thousands of computers (nodes) vote on which transactions are valid. The majority wins!
                </p>
              </div>

              <div className="bg-purple-600/20 rounded p-4">
                <h3 className="font-bold text-purple-200 mb-2">⚖️ Proof of Work vs Proof of Stake</h3>
                <div className="grid md:grid-cols-2 gap-4 mt-2">
                  <div className="bg-black/40 p-3 rounded">
                    <h4 className="font-bold text-yellow-300">Proof of Work</h4>
                    <p className="text-sm">Like solving the hardest Zoombini puzzles - whoever solves it first gets to add the next block</p>
                  </div>
                  <div className="bg-black/40 p-3 rounded">
                    <h4 className="font-bold text-green-300">Proof of Stake</h4>
                    <p className="text-sm">Like being chosen based on how many Zoombini coins you hold - more stake, more responsibility</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-600/20 rounded p-4">
                <h3 className="font-bold text-red-200 mb-2">🚫 Preventing Cheating</h3>
                <p>
                  Just like in Zoombini puzzles, there are rules everyone must follow. 
                  The network automatically rejects any blocks that don't follow the rules, 
                  keeping the system fair for everyone!
                </p>
              </div>

              <Button 
                onClick={() => markChapterComplete(3)}
                className="bg-blue-600 hover:bg-blue-700 w-full"
                disabled={completedChapters.includes(3)}
              >
                {completedChapters.includes(3) ? "Chapter Completed!" : "Mark as Complete"}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {completedChapters.length === 3 && (
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-md rounded-lg p-6 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-2">🎓 Congratulations!</h3>
            <p className="text-blue-200">
              You've mastered Blockchain Basics! You're ready for more advanced topics.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
