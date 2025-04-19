'use client';

import { useEffect, useState } from 'react';
import FilmCard from '@/components/FilmCard';

export default function MisPeliculasPage() {
  const [films, setFilms] = useState([]);
  const [editing, setEditing] = useState(null);

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

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center uppercase">Mis Películas</h1>

      {editing && (
        <div className="bg-black border-4 border-yellow-500 rounded-xl p-4 mb-6 max-w-xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Editar Película</h2>
          <div className="space-y-3">
            <input
              className="w-full p-2 rounded bg-white text-black"
              value={editing.title}
              onChange={(e) => setEditing({ ...editing, title: e.target.value })}
              placeholder="Título"
            />
            <input
              className="w-full p-2 rounded bg-white text-black"
              value={editing.director}
              onChange={(e) => setEditing({ ...editing, director: e.target.value })}
              placeholder="Director"
            />
            <input
              className="w-full p-2 rounded bg-white text-black"
              value={editing.year}
              onChange={(e) => setEditing({ ...editing, year: e.target.value })}
              placeholder="Año"
              type="number"
            />
            <textarea
              className="w-full p-2 rounded bg-white text-black"
              value={editing.description}
              onChange={(e) => setEditing({ ...editing, description: e.target.value })}
              rows={3}
              placeholder="Descripción"
            />
            <input
              className="w-full p-2 rounded bg-white text-black"
              value={editing.image}
              onChange={(e) => setEditing({ ...editing, image: e.target.value })}
              placeholder="URL de imagen"
            />
            <div className="flex gap-4 justify-end mt-4">
              <button onClick={handleSaveEdit} className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300">
                Guardar
              </button>
              <button onClick={() => setEditing(null)} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {films.length === 0 ? (
        <p className="text-center text-gray-400">No has añadido ninguna película aún.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {films.map((film) => (
            <FilmCard
              key={film.id}
              film={film}
              editable
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </main>
  );
}
