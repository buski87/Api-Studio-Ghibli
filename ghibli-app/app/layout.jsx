import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Noto_Serif_JP } from "next/font/google";

const japaneseFont = Noto_Serif_JP({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Studio Ghibli Explorer",
  description: "Explora películas con Next.js y la Ghibli API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
     <body className={`${japaneseFont.className} bg-gray-900 text-white`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
