'use client';

import { useEffect, useState } from "react";
import { getFilmById } from "@/lib/api";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FilmDetailPage({ params }) {
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFilmById(params.id);
      setFilm(data);
    };
    fetchData();
  }, [params.id]);

  if (!film) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-red-600">Cargando película...</h2>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen flex justify-center items-start bg-gray-900 p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-5xl md:h-[80vh] bg-black text-white rounded-xl shadow-2xl border-4 border-yellow-500 overflow-hidden flex flex-col md:flex-row"
      >
        {/* Imagen arriba en móvil, izquierda en desktop */}
        <img
          src={film.image}
          alt={film.title}
          className="w-full md:w-1/2 h-60 md:h-full object-cover"
        />

        {/* Contenido */}
        <div className="flex flex-col justify-between p-4 md:p-6 md:w-1/2">
          <div className="space-y-3">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-wider uppercase">{film.title}</h1>
            <p className="text-xs md:text-sm italic text-gray-300">
              Dirigida por {film.director} · Productor: {film.producer} · Año {film.release_date}
            </p>
            <p className="text-sm text-gray-200 leading-relaxed">
              {film.description}
            </p>
            <p className="text-xs text-gray-400">
              ⏱️ {film.running_time} min · 🍅 Rotten Score: {film.rt_score}/100
            </p>
          </div>

          {/* Botón centrado al final */}
          <div className="mt-6 flex justify-center">
            <Link
              href="/"
              className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition text-sm"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
