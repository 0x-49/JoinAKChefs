import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import TechStack from "@/components/landing/tech-stack";
import ROICalculator from "@/components/landing/roi-calculator";
import MarketIntelligence from "@/components/landing/market-intelligence";
import TrainingSystem from "@/components/landing/training-system";
import Testimonials from "@/components/landing/testimonials";
import SuccessStories from "@/components/landing/success-stories";
import Partnerships from "@/components/landing/partnerships";
import Pricing from "@/components/landing/pricing";
import Contact from "@/components/landing/contact";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <TechStack />
      <ROICalculator />
      <MarketIntelligence />
      <TrainingSystem />
      <SuccessStories />
      <Testimonials />
      <Partnerships />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}