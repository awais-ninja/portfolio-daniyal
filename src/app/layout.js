import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Daniyal Faheem | Fashion Portfolio",
  description:
    "Professional fashion portfolio showcasing creative direction, styling, and design work by Muhammad Daniyal Faheem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navigation />
        <main className="min-h-screen pt-20">{children}</main>
      </body>
    </html>
  );
}
