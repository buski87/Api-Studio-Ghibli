'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import FilmCard from '@/components/FilmCard';
import Pagination from '@/components/Pagination';

export default function MisPeliculas() {
  const [films, setFilms] = useState([]);
  const [editing, setEditing] = useState(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const FILMS_PER_PAGE = 6;
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const totalPages = Math.ceil(films.length / FILMS_PER_PAGE);
  const paginatedFilms = films.slice(
    (currentPage - 1) * FILMS_PER_PAGE,
    currentPage * FILMS_PER_PAGE
  );

  const handlePageChange = (pageNum) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNum);
    router.push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('ghibli_films')) || [];

    const exampleFilm = {
      id: "ejemplo-dragon",
      title: "Kit y el dragon",
      description:
        "En un mundo donde los elementos gobiernan el equilibrio de la naturaleza, Kit...",
      director: "Eyden Kazama",
      producer: "Buski87",
      year: "2025",
      image: "/images/kit.png",
      running_time: "90",
      rt_score: "75",
    };

    const exists = stored.some((film) => film.id === exampleFilm.id);
    const updated = exists ? stored : [exampleFilm, ...stored];

    if (!exists) {
      localStorage.setItem("ghibli_films", JSON.stringify(updated));
    }

    setFilms(updated);
  }, []);

  const handleDelete = (id) => {
    if (id === "ejemplo-programador") return;
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
    <>
      {editing && (
        <div className="bg-[#1b2a40] border border-[#2d74da] rounded-xl p-6 mb-10 max-w-xl mx-auto shadow-xl">
          <h2 className="text-2xl font-bold text-[#50b4ff] mb-4 text-center uppercase">Editar Película</h2>
          <div className="space-y-4">
            <input className="w-full p-3 rounded-lg bg-[#0f1e2e] text-white border border-[#2d74da]" value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} placeholder="Título" />
            <input className="w-full p-3 rounded-lg bg-[#0f1e2e] text-white border border-[#2d74da]" value={editing.director} onChange={(e) => setEditing({ ...editing, director: e.target.value })} placeholder="Director" />
            <input className="w-full p-3 rounded-lg bg-[#0f1e2e] text-white border border-[#2d74da]" value={editing.producer || ""} onChange={(e) => setEditing({ ...editing, producer: e.target.value })} placeholder="Productor" />
            <input className="w-full p-3 rounded-lg bg-[#0f1e2e] text-white border border-[#2d74da]" value={editing.year} onChange={(e) => setEditing({ ...editing, year: e.target.value })} placeholder="Año" type="number" />
            <input className="w-full p-3 rounded-lg bg-[#0f1e2e] text-white border border-[#2d74da]" value={editing.running_time} onChange={(e) => setEditing({ ...editing, running_time: e.target.value })} placeholder="Duración (minutos)" type="number" />
            <input className="w-full p-3 rounded-lg bg-[#0f1e2e] text-white border border-[#2d74da]" value={editing.rt_score} onChange={(e) => setEditing({ ...editing, rt_score: e.target.value })} placeholder="Puntuación Rotten Tomatoes" type="number" />
            <textarea className="w-full p-3 rounded-lg bg-[#0f1e2e] text-white border border-[#2d74da]" value={editing.description} onChange={(e) => setEditing({ ...editing, description: e.target.value })} rows={4} placeholder="Descripción" />
            <input className="w-full p-3 rounded-lg bg-[#0f1e2e] text-white border border-[#2d74da]" value={editing.image} onChange={(e) => setEditing({ ...editing, image: e.target.value })} placeholder="URL de imagen" />
            <div className="flex flex-col sm:flex-row gap-4 justify-end mt-4">
              <button onClick={handleSaveEdit} className="bg-[#50b4ff] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#7ecfff] transition">Guardar</button>
              <button onClick={() => setEditing(null)} className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-500">Cancelar</button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paginatedFilms.map((film) => (
            <FilmCard key={film.id} film={film} editable onEdit={handleEdit} onDelete={handleDelete} />
          ))}
        </div>
        {films.length > FILMS_PER_PAGE && (
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        )}
      </div>
    </>
  );
}
