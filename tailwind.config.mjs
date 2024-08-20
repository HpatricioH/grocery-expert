/** @type {import('tailwindcss').Config} */
import rippleui from "rippleui"

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
        "primary-color": "#eff9f0",
				"secondary-color": "#4da10a",
				"tertiary-color": "#f8f8f8",
				"accent-color": "#6fa541",
				"main-color": "#5ac169",
      },
			fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
		},
	},

	plugins: [rippleui({
		themes: [
			{
				themeName: "light",
				colorScheme: "light",
				colors: {
					primary: "#eff9f0"
				}
			}
		]
	})],
}