"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black border-b-4 border-yellow-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide uppercase text-yellow-400"
        >
          🎬 Ghibli Films
        </Link>


        <button
          className="sm:hidden text-yellow-400 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>
        
        <nav className={`sm:flex gap-4 text-sm font-semibold ${isOpen ? "block" : "hidden"} absolute sm:static top-[70px] left-0 w-full sm:w-auto bg-black sm:bg-transparent px-6 sm:px-0 pb-4 sm:pb-0 z-50`}>
          <Link href="/" className="block py-1 hover:text-yellow-400 transition">
            Inicio
          </Link>
          <Link href="/form" className="block py-1 hover:text-yellow-400 transition">
            Añadir Película
          </Link>
          <Link href="/films" className="block py-1 hover:text-yellow-400 transition">
            Mis Películas
          </Link>
          <Link href="/faqs" className="block py-1 text-yellow-400 hover:underline">
            FAQS
          </Link>
        </nav>
      </div>
    </header>
  );
}
