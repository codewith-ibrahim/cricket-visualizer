import "./globals.css";
import { bebas, inter } from "../lib/fonts";

export const metadata = {
  title: "Cricket Visualizer",
  description: "Live scoreboard built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
