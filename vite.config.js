import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from "path";
import UnpluginIcons from 'unplugin-icons/vite'

export default defineConfig({
	plugins: [
		sveltekit(),
		UnpluginIcons({ compiler: 'svelte' })
	],
	resolve: {
		alias: {
			"$sections": path.resolve("./src/sections"),
			"$components": path.resolve("./src/components"),
			"$styles": path.resolve("./src/styles"),
		}
	},
});
