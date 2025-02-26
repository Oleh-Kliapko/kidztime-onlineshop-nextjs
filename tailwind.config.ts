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
			colors: {
				primary: "#2C3E50", // Темно-сірий для тексту/навігації
				secondary: "#4682B4", // Блакитний для акцентів
				background: "#E6F0F5", // Світло-блакитний фон
				accent: "#F4C7C3", // Рожевий для кнопок/тегів
				greenAccent: "#4CAF50", // Зелений для іконок
				beigeBg: "#F5E8E4", // Світло-бежевий для коробок
				shineGreen: "#C8E6C9", // Світло-зелений для продуктів
				shineGray: "#F5F7FA", // Світло-сірий для бордерів/фонів
				saleRed: "#FF6F61", // Яскраво-рожевий для знижок
				oliveGreen: "#D4E8D7", // Світло-оливковий для "Toddler"
				shineBlue: "#D9E6F2", // Світло-блакитний для "Nursery"
				shinePink: "#F8E1E7", // Світло-рожевий для "Kindergarten" та секцій
				productBlue: "#87CEEB", // Блакитний для пляшок
				productPink: "#FFB6C1", // Рожевий для пляшок
				lightPurple: "#E6E6FA", // Світло-фіолетовий для продуктів
				brightRed: "#FF4040", // Яскраво-червоний для акцентів
				feedbackYellow: "#FDFD96", // Світло-жовтий для відгуків
				feedbackGreen: "#F0FFF0", // Світло-зелений для відгуків
				softGray: "#F5F5F5", // Світло-сірий для відгуків
				brightBlue: "#1E90FF", // Яскраво-блакитний для акцентів
				lightBlueBg: "#E6F0FF", // Світло-блакитний фон заголовка
				tableGray: "#F9FAFB", // Світло-сірий для таблиць
				statusYellow: "#F5C11B", // Жовтий для статусів
				lightBeige: "#F5F5F0", // Світло-бежевий для нижньої смуги
				facebookBlue: "#3B5998", // Блакитний для кнопки Facebook
				googleRed: "#EA4335", // Червоний для кнопки Google
			},
		},
	},
	plugins: [],
} satisfies Config
