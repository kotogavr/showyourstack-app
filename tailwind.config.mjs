import harmonyPalette from "@evilmartians/harmony/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    colors: harmonyPalette,
		extend: {},
	},
	plugins: [],
}
