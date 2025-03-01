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
  <section class="responsive-container relative py-20">
    <div class="text-center">
      <p class="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        Stop missing out on life-changing sneaker reselling opportunities. Join AK CHEFS today and gain access to a world-class platform that guarantees your success.
      </p>
      <a
        href={AFFILIATE_URL}
        class="inline-block px-10 py-5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
      >
        Start Your Journey Now
      </a>
    </div>
  </section>

  <Vision />

  <section class="responsive-container relative py-20 bg-gray-50">
    <div class="text-center">
      <p class="text-gray-900 mb-8 max-w-3xl mx-auto text-xl leading-relaxed">
        Stop missing out on the most profitable drops. Join AK Chefs and start finally cooking up consistent resale profits.
      </p>
      <a
        href={AFFILIATE_URL}
        class="inline-block px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
      >
        Join AK Chefs & Start Profiting Now
      </a>
    </div>
  </section>

  <Features />
  <Team />

  <section class="responsive-container relative py-20 bg-white">
    <div class="text-center">
      <p class="text-gray-900 mb-8 max-w-3xl mx-auto text-xl leading-relaxed">
        Limited spots are open in AK Chefs. Don't wait – your seat at the reselling table is ready, but not for long.
      </p>
      <a
        href={AFFILIATE_URL}
        class="inline-block px-10 py-5 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
      >
        Secure Your Spot in AK Chefs Today
      </a>
    </div>
  </section>

  <UseCases />
  <TrainingSystem />
  <SuccessStories />
  <Partnerships />
  <Pricing />
  <TechStack />

  <section class="responsive-container relative py-20">
    <div class="text-center">
      <p class="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        It's time to scale your earnings. Join AK CHEFS to harness real‑time automation and insider alerts that keep you ahead.
      </p>
      <a
        href={AFFILIATE_URL}
        class="inline-block px-10 py-5 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
      >
        Scale Your Profits Now
      </a>
    </div>
  </section>

  <Contact />
  <Footer />
</main>

<style>
  /* Add any page-specific styles here */
</style>