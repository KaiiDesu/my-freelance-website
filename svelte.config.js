import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			base: '/my-freelance-website'
		},
		prerender: {
			// When prerender finds links to fragment IDs that don't exist it fails the build by default.
			// Handle them here: return 'warn' to emit a warning instead of throwing.
			handleMissingId: ({ path, id }) => {
				console.warn(`prerender: missing id="${id}" referenced from ${path}`);
				return 'warn';
			}
		},
	}
};

export default config;