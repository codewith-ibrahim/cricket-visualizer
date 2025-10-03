import localFont from "next/font/local";

export const bebas = localFont({
  src: "../fonts/BebasNeue/BebasNeue-Regular.ttf",
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const inter = localFont({
  src: [
    { path: "../fonts/Inter/Inter-Regular.ttf", weight: "400" },
    { path: "../fonts/Inter/Inter-Medium.ttf", weight: "500" },
    { path: "../fonts/Inter/Inter-Bold.ttf", weight: "700" },
  ],
  variable: "--font-inter",
  display: "swap",
});
