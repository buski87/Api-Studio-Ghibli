import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:underline">
          🎬 Ghibli Films
        </Link>
        <nav className="space-x-4 text-sm">
          <Link href="/" className="hover:underline">Inicio</Link>
          <Link href="/new" className="hover:underline">Añadir Película</Link>
        </nav>
      </div>
    </header>
  );
}
