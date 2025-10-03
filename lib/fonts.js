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

export const montserrat = localFont({
  src: [
    { path: "../fonts/Montserrat/Montserrat-Regular.ttf", weight: "400" },
    { path: "../fonts/Montserrat/Montserrat-Medium.ttf", weight: "500" },
    { path: "../fonts/Montserrat/Montserrat-Bold.ttf", weight: "700" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

export const roboto = localFont({
  src: [
    { path: "../fonts/Roboto/Roboto-Regular.ttf", weight: "400" },
    { path: "../fonts/Roboto/Roboto-Medium.ttf", weight: "500" },
    { path: "../fonts/Roboto/Roboto-Bold.ttf", weight: "700" },
  ],
  variable: "--font-roboto",
  display: "swap",
});
