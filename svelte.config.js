// svelte.config.js
import sveltePreprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: [sveltePreprocess(), vitePreprocess()],
};
