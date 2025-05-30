
import { Hero } from "@/components/Hero";
import { Games } from "@/components/Games";
import { Roadmap } from "@/components/Roadmap";
import { Community } from "@/components/Community";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-800">
      <Navigation />
      <Hero />
      <Games />
      <Roadmap />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
