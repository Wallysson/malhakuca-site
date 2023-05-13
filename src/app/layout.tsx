import ScrollToTopButton from "./components/FabButton";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/global.css";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--inter-font",
  subsets: ["latin"],
});

export const metadata = {
  title: "Malhakuca",
  description: "Bumerangue para vida",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-neutral-50">
        <header className="container mx-auto">
          <Navbar />
        </header>

        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
