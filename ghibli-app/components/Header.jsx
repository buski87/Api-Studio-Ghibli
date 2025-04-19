import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black border-b-4 border-yellow-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold tracking-wide uppercase text-yellow-400">
          🎬 Ghibli Films
        </Link>

        <nav className="flex gap-4 text-sm font-semibold">
          <Link href="/" className="hover:text-yellow-400 transition">Inicio</Link>
          <Link href="/form" className="hover:text-yellow-400 transition">Añadir Película</Link>
          <Link href="/films" className="hover:text-yellow-400 transition">Mis Películas</Link>
        </nav>
      </div>
    </header>
  );
}
