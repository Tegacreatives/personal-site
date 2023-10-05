import "./globals.css";
import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from "./providers";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tega Okorare",
  description: "Software Engineer based in Nigeria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {" "}
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
