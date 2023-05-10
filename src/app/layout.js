import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
 title: "Niyicodes portfolio",
 description: "Frontend Developer portfolio",
};

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <body
    className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
   >
    <Navbar />
    {children}
    <Footer />
   </body>
  </html>
 );
}
