import Hero from "@/components/landing/hero";
import Vision from "@/components/landing/vision";
import Features from "@/components/landing/features";
import TechStack from "@/components/landing/tech-stack";
import Team from "@/components/landing/team";
import UseCases from "@/components/landing/use-cases";
import TrainingSystem from "@/components/landing/training-system";
import SuccessStories from "@/components/landing/success-stories";
import Partnerships from "@/components/landing/partnerships";
import Pricing from "@/components/landing/pricing";
import Contact from "@/components/landing/contact";
import Footer from "@/components/landing/footer";

const AFFILIATE_URL = "https://whop.com/akchefs/?a=digitalartlab";

// CTA Section 1: Direct & Benefit-Driven
const CTASection1 = () => (
  <div className="responsive-container relative py-20 bg-gray-50">
    <div className="text-center">
      <p className="text-gray-900 mb-8 max-w-3xl mx-auto text-xl leading-relaxed">
        Stop missing out on the most profitable drops. Join AK Chefs and start finally cooking up consistent resale profits.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
      >
        Join AK Chefs & Start Profiting Now
      </a>
    </div>
  </div>
);

// CTA Section 2: Urgency & Limited Access
const CTASection2 = () => (
  <div className="responsive-container relative py-20 bg-white">
    <div className="text-center">
      <p className="text-gray-900 mb-8 max-w-3xl mx-auto text-xl leading-relaxed">
        Limited spots are open in AK Chefs. Don't wait – your seat at the reselling table is ready, but not for long.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
      >
        Secure Your Spot in AK Chefs Today
      </a>
    </div>
  </div>
);

// CTA Section 3: Problem/Solution Focus
const CTASection3 = () => (
  <div className="responsive-container relative py-20 bg-gray-50">
    <div className="text-center">
      <p className="text-gray-900 mb-8 max-w-3xl mx-auto text-xl leading-relaxed">
        Tired of reselling frustration? AK Chefs provides the PROVEN system to turn your hustle into consistent, bankable income.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
      >
        Solve Your Reselling Problems - Join AK Chefs
      </a>
    </div>
  </div>
);

// CTASection4: ROI Focus
const CTASection4 = () => (
  <div className="responsive-container relative py-20">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        Unlock unparalleled ROI and accelerate profits with proven, data‑driven strategies curated by top reselling experts.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
      >
        Boost Your ROI Today
      </a>
    </div>
  </div>
);

// CTASection5: Expertise Focus
const CTASection5 = () => (
  <div className="responsive-container relative py-20">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        Elevate your reselling game with expert insights and robust strategies designed for success. Make every drop count.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
      >
        Elevate Your Game
      </a>
    </div>
  </div>
);

// CTASection6: Final Action
const CTASection6 = () => (
  <div className="responsive-container relative py-20">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        It's time to scale your earnings. Join AK CHEFS to harness real‑time automation and insider alerts that keep you ahead.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
      >
        Scale Your Profits Now
      </a>
    </div>
  </div>
);

// Hero Section CTA
const HeroSectionCTA = () => (
  <div className="responsive-container relative py-20">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        Stop missing out on life-changing sneaker reselling opportunities. Join AK CHEFS today and gain access to a world-class platform that guarantees your success.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
      >
        Start Your Journey Now
      </a>
    </div>
  </div>
);

// Features Section CTA
const FeaturesSectionCTA = () => (
  <div className="responsive-container relative py-20">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        Why struggle alone when you can dominate with AK CHEFS? Get exclusive access to our proven tools, expert guidance, and premium partnerships that ensure your success.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
      >
        Try AK CHEFS Risk-Free
      </a>
    </div>
  </div>
);

// Pricing Section CTA
const PricingSectionCTA = () => (
  <div className="responsive-container relative py-20">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        Simplify your reselling business with AK CHEFS. Join today and transform your sneaker reselling into a highly profitable venture.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
      >
        Upgrade Your Game Today
      </a>
    </div>
  </div>
);

// Success Stories Section CTA
const SuccessStoriesSectionCTA = () => (
  <div className="responsive-container relative py-20">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        Don't settle for average results. Join AK CHEFS and become part of a community that consistently dominates the sneaker market.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
      >
        Secure Your Spot Today
      </a>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HeroSectionCTA />
      <Vision />
      <CTASection1 />
      <Features />
      <FeaturesSectionCTA />
      <Team />
      <CTASection2 />
      <UseCases />
      <CTASection3 />
      <TrainingSystem />
      <CTASection4 />
      <SuccessStories />
      <SuccessStoriesSectionCTA />
      <Partnerships />
      <CTASection5 />
      <Pricing />
      <PricingSectionCTA />
      <TechStack />
      <CTASection6 />
      <Contact />
      <Footer />
    </main>
  );
}