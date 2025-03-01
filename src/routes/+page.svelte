<script>
  import Hero from "$lib/components/landing/Hero.svelte";
  import Vision from "$lib/components/landing/Vision.svelte";
  import Features from "$lib/components/landing/Features.svelte";
  import TechStack from "$lib/components/landing/TechStack.svelte";
  import Team from "$lib/components/landing/Team.svelte";
  import UseCases from "$lib/components/landing/UseCases.svelte";
  import TrainingSystem from "$lib/components/landing/TrainingSystem.svelte";
  import SuccessStories from "$lib/components/landing/SuccessStories.svelte";
  import Partnerships from "$lib/components/landing/Partnerships.svelte";
  import Pricing from "$lib/components/landing/Pricing.svelte";
  import Contact from "$lib/components/landing/Contact.svelte";
  import Footer from "$lib/components/landing/Footer.svelte";

  const AFFILIATE_URL = "https://whop.com/akchefs/?a=digitalartlab";
</script>

<main class="min-h-screen">
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

<style>
  /* Add any page-specific styles here */
</style>
