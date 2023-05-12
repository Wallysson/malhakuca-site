import ScrollToTopButton from "./components/FabButton";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/global.css";

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
    <html lang="en">
      <body className="bg-neutral-50 ">
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
