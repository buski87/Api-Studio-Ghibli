'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import FilmCard from '@/components/FilmCard';
import Pagination from '@/components/Pagination';

export default function MisPeliculasPage() {
  const [films, setFilms] = useState([]);
  const [editing, setEditing] = useState(null);

  const FILMS_PER_PAGE = 6;

  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const router = useRouter();
  const pathname = usePathname();

  const totalPages = Math.ceil(films.length / FILMS_PER_PAGE);
  const paginatedFilms = films.slice(
    (currentPage - 1) * FILMS_PER_PAGE,
    currentPage * FILMS_PER_PAGE
  );

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('ghibli_films')) || [];
    setFilms(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = films.filter((film) => film.id !== id);
    localStorage.setItem('ghibli_films', JSON.stringify(updated));
    setFilms(updated);
  };

  const handleEdit = (film) => {
    setEditing(film);
  };

  const handleSaveEdit = () => {
    const updated = films.map((f) => (f.id === editing.id ? editing : f));
    localStorage.setItem('ghibli_films', JSON.stringify(updated));
    setFilms(updated);
    setEditing(null);
  };

  const handlePageChange = (pageNum) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNum);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <main className="min-h-screen text-white px-4 py-12 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <h1 className="text-4xl font-extrabold text-white mb-10 text-center uppercase tracking-wider">
        Mis Películas
      </h1>

      {editing && (
        <div className="bg-[#1b2a40] border border-[#2d74da] rounded-xl p-6 mb-10 max-w-xl mx-auto shadow-xl">
          <h2 className="text-2xl font-bold text-[#50b4ff] mb-4 text-center uppercase">Editar Película</h2>
          <div className="space-y-4">
            <input
              className="w-full p-3 rounded-lg bg-[#0f1e2e] text-white border border-[#2d74da]"
              value={editing.title}
              onChange={(e) => setEditing({ ...editing, title: e.target.value })}
              placeholder="Título"
            />
            <input
              className="w-full p-3 rounded-lg bg-[#0f1e2e] text-white border border-[#2d74da]"
              value={editing.director}
              onChange={(e) => setEditing({ ...editing, director: e.target.value })}
              placeholder="Director"
            />
            <input
              className="w-full p-3 rounded-lg bg-[#0f1e2e] text-white border border-[#2d74da]"
              value={editing.year}
              onChange={(e) => setEditing({ ...editing, year: e.target.value })}
              placeholder="Año"
              type="number"
            />
            <textarea
              className="w-full p-3 rounded-lg bg-[#0f1e2e] text-white border border-[#2d74da]"
              value={editing.description}
              onChange={(e) => setEditing({ ...editing, description: e.target.value })}
              rows={4}
              placeholder="Descripción"
            />
            <input
              className="w-full p-3 rounded-lg bg-[#0f1e2e] text-white border border-[#2d74da]"
              value={editing.image}
              onChange={(e) => setEditing({ ...editing, image: e.target.value })}
              placeholder="URL de imagen"
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-end mt-4">
              <button
                onClick={handleSaveEdit}
                className="bg-[#50b4ff] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#7ecfff] transition"
              >
                Guardar
              </button>
              <button
                onClick={() => setEditing(null)}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-500"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {films.length === 0 ? (
        <p className="text-center text-gray-300 text-lg mt-16">
          No has añadido ninguna película aún.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {paginatedFilms.map((film) => (
              <FilmCard
                key={film.id}
                film={film}
                editable
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>

          {films.length > FILMS_PER_PAGE && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </main>
  );
}
