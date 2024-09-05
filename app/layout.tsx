import type { Metadata } from "next";
import { Inter, Eczar } from "next/font/google"; // Import both fonts
import "./globals.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const inter = Inter({ subsets: ["latin"] });
const eczar = Eczar({ subsets: ["latin"], weight: ["400", "700", "800"] }); // Define weights as needed

export const metadata: Metadata = {
  title: "Neuroreach",
  description: "Welcoming all Neurology lovers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any"/>
      <body className={`${inter.className} ${eczar.className}`}>{children}</body>
    </html>
  );
}
