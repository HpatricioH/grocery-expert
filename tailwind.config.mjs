/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        'primary-color': '#eff9f0',
				'secondary-color': '#4da10a',
				'accent-color': '#6fa541',
      },
			fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
		},
	},
	plugins: [require("rippleui")({
		themes: [
			{
				themeName: "light",
				colorScheme: "light",
				colors: {
					primary: "#eff9f0"
				}
			}
		]
	}) ],
}