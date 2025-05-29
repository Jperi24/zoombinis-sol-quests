
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BlockchainBasicsGuide } from "@/components/guides/BlockchainBasicsGuide";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BlockchainBasics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-800">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <Button 
            onClick={() => window.history.back()}
            variant="outline" 
            className="border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-black mb-6"
          >
            <ArrowLeft className="mr-2" />
            Back to Education Hub
          </Button>
          
          <BlockchainBasicsGuide />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlockchainBasics;
