import type { Metadata } from "next";
import { Inter, Eczar } from "next/font/google"; // Import both fonts
import "./globals.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const inter = Inter({ subsets: ["latin"] });
const eczar = Eczar({ subsets: ["latin"], weight: ["400", "700", "800"] }); // Define weights as needed

export const metadata: Metadata = {
  title: "Neuroreach",
  description: "Prototyping stage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${eczar.className}`}>{children}</body>
    </html>
  );
}
