import type { Metadata } from "next"
import {
	affogato,
	arial,
	avenirNext,
	barlow,
	cormorant,
	helvetica,
	inter,
	roboto,
	sfPro,
} from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
	title: "Kidztime ",
	description: "Created by Oleh Kliapko",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body
				className={`${barlow.variable} ${inter.variable} ${roboto.variable} ${affogato.variable} ${avenirNext.variable} ${arial.variable} ${cormorant.variable} ${helvetica.variable} ${sfPro.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
