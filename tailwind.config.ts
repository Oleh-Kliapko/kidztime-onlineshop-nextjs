import type { Config } from "tailwindcss"

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				barlow: ["var(--font-barlow)"],
				inter: ["var(--font-inter)"],
				roboto: ["var(--font-roboto)"],
				affogato: ["var(--font-affogato)"],
				"avenir-next": ["var(--font-avenir-next)"],
				arial: ["var(--font-arial)"],
				cormorant: ["var(--font-cormorant)"],
				helvetica: ["var(--font-helvetica)"],
				"sf-pro": ["var(--font-sfpro)"],
			},
		},
	},
	plugins: [],
} satisfies Config
