'use client';

import { useFavorites } from '@/context/FavoritesContext';
import FilmCard from '@/components/FilmCard';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <main className="min-h-screen text-white px-4 py-12 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <h1 className="text-4xl font-extrabold mb-10 text-center uppercase tracking-wider">
        Películas Favoritas
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-300">
          No has añadido películas a favoritos aún.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      )}
    </main>
  );
}
