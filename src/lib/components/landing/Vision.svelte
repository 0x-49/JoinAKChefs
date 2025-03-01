<script>
  import { fly } from 'svelte/transition';
  import { Target, Zap, Users, Shield } from 'lucide-svelte';

  const AFFILIATE_URL = "https://whop.com/akchefs/?a=digitalartlab";

  const visionPoints = [
    {
      title: "Expert-Driven Success",
      description: "Learn from industry veterans with proven track records in sneaker reselling",
      icon: Target
    },
    {
      title: "Cutting-Edge Tools",
      description: "Access advanced monitoring and automation tools that give you the competitive edge",
      icon: Zap
    },
    {
      title: "Supportive Community",
      description: "Join an exclusive network of successful resellers sharing insights and strategies",
      icon: Users
    },
    {
      title: "Proven Systems",
      description: "Follow battle-tested methods that consistently generate profits on every release",
      icon: Shield
    }
  ];
</script>

<section class="py-24 bg-gradient-to-b from-white to-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div 
      in:fly={{ y: 20, duration: 500 }}
      class="text-center max-w-3xl mx-auto"
    >
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Transform Your Reselling Journey
      </h2>
      <p class="mt-4 text-lg text-gray-600">
        Join AK CHEFS and gain access to the tools, knowledge, and community you need to succeed in the competitive world of sneaker reselling
      </p>
      <div class="mt-8">
        <a 
          href={AFFILIATE_URL}
          class="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg font-semibold"
        >
          Start Your Journey Today
        </a>
      </div>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {#each visionPoints as point, i}
        <div
          in:fly={{ y: 20, duration: 500, delay: i * 100 }}
          class="relative group"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-white rounded-lg transform group-hover:scale-105 transition-transform duration-300"></div>
          <div class="relative p-6 bg-white rounded-lg shadow-sm group-hover:shadow-lg transition-shadow duration-300">
            <div class="p-3 bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <svelte:component this={point.icon} class="h-6 w-6 text-blue-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
            <p class="text-gray-600">{point.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>