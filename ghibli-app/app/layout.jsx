import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Noto_Serif_JP } from "next/font/google";
import { FavoritesProvider } from "@/context/FavoritesContext"; // Asegúrate de que la ruta sea correcta

const japaneseFont = Noto_Serif_JP({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Studio Ghibli Explorer",
  description: "Explora películas con Next.js y la Ghibli API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${japaneseFont.className} text-white bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]`}>
        <FavoritesProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}
