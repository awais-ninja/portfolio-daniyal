import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata = {
  title: "Muhammad Daniyal Faheem - Fashion Buyer & Sourcing Specialist",
  description:
    "Professional fashion buyer and sourcing specialist with expertise in retail operations, merchandising, and sourcing.",
  other: {
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "preconnect",
        href: "https://www.instagram.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "preconnect",
        href: "https://www.linkedin.com",
        crossOrigin: "anonymous",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
