import Header from "@/components/header";
import { Provider } from "@/components/ui/provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import type React from "react";
import "./global.css";

export const metadata: Metadata = {
	title: "317moris",
	description: "しがないサイト with Chakra UI v3",
	// 	icons: "https://kirura.vercel.app/kirura_rounded.png",
	// 	twitter: {
	// 		card: "summary",
	// 		images: "https://kirura.vercel.app/kirura.png",
	// 	},
	// 	openGraph: {
	// 		images: "https://kirura.vercel.app/kirura.png",
	// 	},
};

const interJp = localFont({
	src: [
		{
			path: "fonts/InterJP-Thin.ttf",
			weight: "100",
			style: "normal",
		},
		{
			path: "fonts/InterJP-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "fonts/InterJP-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "fonts/InterJP-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "fonts/InterJP-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "fonts/InterJP-Black.ttf",
			weight: "900",
			style: "normal",
		},
	],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja" suppressHydrationWarning className={interJp.className}>
			<body>
				<Provider>
					<Header />
					{children}
					<SpeedInsights />
				</Provider>
			</body>
		</html>
	);
}
