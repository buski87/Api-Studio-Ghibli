'use client';

import { useEffect, useState } from "react";
import { getFilmById } from "@/lib/api";
import Link from "next/link";
import { motion } from "framer-motion";
import LoadingSpinner from "@/components/LoadingSpinner"; // Asegúrate de que el path sea correcto

export default function FilmDetailPage({ params }) {
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFilmById(params.id);
      if (data) {
        setFilm(data);
      } else {
        const localFilms = JSON.parse(localStorage.getItem("ghibli_films")) || [];
        const localFilm = localFilms.find((f) => f.id === params.id);
        setFilm(localFilm || null);
      }
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-[#1f1f1f] via-[#141414] to-[#1f1f1f]">
        <LoadingSpinner />
      </div>
    );
  }

  if (!film) {
    return (
      <div className="p-10 text-center bg-gradient-to-b from-[#1f1f1f] via-[#141414] to-[#1f1f1f] min-h-screen text-white">
        <h2 className="text-2xl font-bold text-red-500">Película no encontrada</h2>
        <Link href="/films" className="mt-4 inline-block text-[#50b4ff] underline hover:text-[#7ecfff] transition">
          ← Volver
        </Link>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen text-white p-4 sm:p-6 flex justify-center items-start">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl bg-[#121f30] rounded-xl shadow-2xl border border-[#2d74da] overflow-hidden flex flex-col md:flex-row"
      >
        <img
          src={film.image}
          alt={film.title}
          className="w-full md:w-1/2 h-64 md:h-auto object-cover"
        />

        <div className="flex flex-col justify-between p-4 sm:p-6 md:w-1/2">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-widest uppercase text-[#50b4ff]">
              {film.title}
            </h1>
            <p className="text-sm italic text-gray-300">
              Dirigida por {film.director} · Productor: {film.producer || "N/D"} · Año {film.release_date || film.year}
            </p>
            <p className="text-gray-200 text-sm leading-relaxed">
              {film.description}
            </p>
            <p className="text-xs text-gray-400 mt-2">
              ⏱️ {film.running_time || film.duration || "N/D"} min · 🍅 Rotten Score: {film.rt_score || "N/D"}/100
            </p>
          </div>

          <div className="mt-6 flex justify-center md:justify-start">
            <Link
              href="/films"
              className="bg-[#50b4ff] text-black px-5 py-2 rounded-lg font-semibold hover:bg-[#7ecfff] transition text-sm"
            >
              ← Volver a películas
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
