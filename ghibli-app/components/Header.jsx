"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold tracking-widest uppercase text-white flex items-center gap-2"
        >
          <span className="text-3xl">🎥</span> Ghibli Stream
        </Link>

        <button
          className="sm:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <nav
          className={`sm:flex sm:items-center gap-6 text-sm font-medium transition-all duration-300 ease-in-out ${
            isOpen
              ? "block absolute top-[70px] left-0 w-full bg-[#1a1a1a] sm:bg-transparent px-6 pb-4 z-50"
              : "hidden sm:flex"
          }`}
        >
          {[
            { href: "/", label: "Inicio" },
            { href: "/form", label: "Añadir Película" },
            { href: "/films", label: "Mis Películas" },
            { href: "/faqs", label: "FAQS", highlight: true },
          ].map(({ href, label, highlight }) => (
            <Link
              key={href}
              href={href}
              className={`block py-2 relative hover:text-cyan-300 transition ${
                highlight ? "text-cyan-400" : "text-white"
              }`}
            >
              <span className="hover-underline">{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
