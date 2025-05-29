
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SolanaGuide } from "@/components/guides/SolanaGuide";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const SolanaDeepDive = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-800">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <Button 
            onClick={() => window.history.back()}
            variant="outline" 
            className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black mb-6"
          >
            <ArrowLeft className="mr-2" />
            Back to Education Hub
          </Button>
          
          <SolanaGuide />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolanaDeepDive;
