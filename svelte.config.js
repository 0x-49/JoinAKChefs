import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // Vercel Edge Functions configuration
      runtime: 'edge',
      regions: ['lhr1'], // London region
    }),
    alias: {
      $lib: './src/lib'
    }
  },
  preprocess: preprocess({
    postcss: true
  })
};

export default config;