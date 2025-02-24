import { Barlow, Inter, Roboto } from "next/font/google"
import localFont from "next/font/local"

// Google Fonts
export const barlow = Barlow({
	subsets: ["latin"],
	weight: ["400", "600", "700", "800", "300", "100"],
	variable: "--font-barlow",
})

export const inter = Inter({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-inter",
})

export const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
	variable: "--font-roboto",
})

// Local fonts
export const affogato = localFont({
	src: [
		{ path: "../../public/fonts/Affogato-Bold.ttf", weight: "700" },
		{ path: "../../public/fonts/Affogato-Light.ttf", weight: "300" },
		{ path: "../../public/fonts/Affogato-Medium.ttf", weight: "500" },
		{ path: "../../public/fonts/Affogato-Regular.ttf", weight: "400" },
	],
	variable: "--font-affogato",
})

export const avenirNext = localFont({
	src: "../../public/fonts/AvenirNext-Medium.ttf",
	weight: "500",
	variable: "--font-avenir-next",
})

export const arial = localFont({
	src: [
		{ path: "../../public/fonts/ArialBold.ttf", weight: "700" },
		{
			path: "../../public/fonts/ArialBoldItalic.ttf",
			weight: "700",
			style: "italic",
		},
		{ path: "../../public/fonts/ArialRegular.ttf", weight: "400" },
	],
	variable: "--font-arial",
})

export const cormorant = localFont({
	src: "../../public/fonts/Cormorant-Regular.ttf",
	variable: "--font-cormorant",
})

export const helvetica = localFont({
	src: "../../public/fonts/HelveticaRegular.ttf",
	weight: "400",
	variable: "--font-helvetica",
})

export const sfPro = localFont({
	src: [
		{ path: "../../public/fonts/SFProDisplay-Light.ttf", weight: "300" },
		{ path: "../../public/fonts/SFProDisplay-Regular.ttf", weight: "400" },
		{ path: "../../public/fonts/SFProDisplay-Semibold.ttf", weight: "700" },
	],
	variable: "--font-sfpro",
})
