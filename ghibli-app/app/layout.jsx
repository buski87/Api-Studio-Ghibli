import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Studio Ghibli Explorer",
  description: "Explora películas con Next.js y la Ghibli API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
