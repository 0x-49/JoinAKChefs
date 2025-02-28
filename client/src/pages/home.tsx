import Hero from "@/components/landing/hero";
import Vision from "@/components/landing/vision";
import Features from "@/components/landing/features";
import TechStack from "@/components/landing/tech-stack";
import Team from "@/components/landing/team";
import UseCases from "@/components/landing/use-cases";
import TrainingSystem from "@/components/landing/training-system";
import SuccessStories from "@/components/landing/success-stories";
import Testimonials from "@/components/landing/testimonials";
import Partnerships from "@/components/landing/partnerships";
import Pricing from "@/components/landing/pricing";
import Contact from "@/components/landing/contact";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Vision />
      <Features />
      <TechStack />
      <Team />
      <UseCases />
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