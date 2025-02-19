import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
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
      <Testimonials />
      <SuccessStories />
      <Partnerships />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
