import Navbar from "./components/Navbar";
import "./styles/global.css";

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

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
      </body>
    </html>
  );
}
