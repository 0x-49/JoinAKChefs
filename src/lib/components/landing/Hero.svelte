<script>
  import { onMount } from 'svelte';
  import { fly, scale } from 'svelte/transition';
  import { ArrowRight, Sparkles, TrendingUp, Users, Shield } from 'lucide-svelte';

  const stats = [
    { label: "Success Rate", value: "97%", icon: TrendingUp, description: "Consistent success across all releases" },
    { label: "Active Members", value: "1000+", icon: Users, description: "Growing community of experts" },
    { label: "Average Profit", value: "$500+", icon: Sparkles, description: "Per successful release" }
  ];
</script>

<section class="relative overflow-hidden bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
    <div 
      in:scale={{ duration: 500, delay: 200 }}
      class="relative"
    >
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
        Master the Art of
        <span class="text-blue-600 block mt-2">Sneaker Reselling</span>
      </h1>
      <div 
        class="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full blur-3xl opacity-50"
        style="animation: pulse 5s infinite;"
      ></div>
    </div>

    <p 
      in:fly={{ y: 20, duration: 500, delay: 400 }}
      class="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600"
    >
      Join the elite community of sneaker resellers who consistently profit from every drop using our proven systems and tools
    </p>

    <div 
      in:fly={{ y: 20, duration: 500, delay: 600 }}
      class="mt-8"
    >
      <a 
        href="https://whop.com/akchefs/" 
        target="_blank" 
        rel="noopener noreferrer"
        class="group inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
      >
        Start Reselling Today 
        <ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </a>
    </div>

    <div 
      class="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {#each stats as stat, i}
        <div 
          in:fly={{ y: 20, duration: 300, delay: 800 + i * 100 }}
          class="group relative bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          <div class="relative z-10">
            <svelte:component this={stat.icon} class="h-8 w-8 text-blue-600 mb-3" />
            <p class="text-3xl font-bold text-gray-900">{stat.value}</p>
            <p class="text-sm font-medium text-gray-900">{stat.label}</p>
            <p class="text-sm text-gray-600 mt-1">{stat.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @keyframes pulse {
    0%, 100% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.2) rotate(45deg); }
  }
</style>