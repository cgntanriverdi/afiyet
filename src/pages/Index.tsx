import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Gamification } from "@/components/Gamification";
import { Pricing } from "@/components/Pricing";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Gamification />
      <Pricing />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
