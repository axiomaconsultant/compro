import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Axioma Data Solutions",
  description: "Layanan pengolahan data statistik profesional",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main style={{ paddingTop: "80px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}