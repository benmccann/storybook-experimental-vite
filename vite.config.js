import { sveltekit } from '@sveltejs/kit/experimental/vite';

/** @type {import('vite').UserConfig} */
export default {
	plugins: [sveltekit()],

	server: {
		port: 5000 // For demo purposes only
	}
};
