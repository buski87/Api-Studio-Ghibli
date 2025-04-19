'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NewFilmPage() {
  const [form, setForm] = useState({
    title: '',
    director: '',
    year: '',
    duration: '',
    rt_score: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.director || !form.year || !form.description) {
      alert('Por favor, completa los campos obligatorios.');
      return;
    }

    const existing = JSON.parse(localStorage.getItem("ghibli_films")) || [];

    const newFilm = {
      id: Date.now().toString(),
      ...form,
    };

    const updatedFilms = [...existing, newFilm];
    localStorage.setItem("ghibli_films", JSON.stringify(updatedFilms));

    alert("Película guardada correctamente en localStorage.");
    console.log("Película añadida:", newFilm);

    setForm({
      title: '',
      director: '',
      year: '',
      duration: '',
      rt_score: '',
      description: '',
      image: '',
    });
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white flex justify-center items-start p-6">
      <div className="w-full max-w-3xl bg-black border-4 border-yellow-500 rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold uppercase text-yellow-400 mb-6 text-center">
          Añadir nueva película
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm">Título *</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="p-2 rounded bg-white text-black"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm">Director *</label>
            <input
              name="director"
              value={form.director}
              onChange={handleChange}
              className="p-2 rounded bg-white text-black"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="flex flex-col flex-1">
              <label className="mb-1 text-sm">Año *</label>
              <input
                name="year"
                type="number"
                value={form.year}
                onChange={handleChange}
                className="p-2 rounded bg-white text-black w-full"
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="mb-1 text-sm">Duración (min)</label>
              <input
                name="duration"
                type="number"
                value={form.duration}
                onChange={handleChange}
                className="p-2 rounded bg-white text-black w-full"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="mb-1 text-sm">Rotten Score</label>
              <input
                name="rt_score"
                type="number"
                value={form.rt_score}
                onChange={handleChange}
                className="p-2 rounded bg-white text-black w-full"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm">Descripción *</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              className="p-2 rounded bg-white text-black"
              required
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm">URL de imagen (opcional)</label>
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              className="p-2 rounded bg-white text-black"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold px-6 py-2 rounded hover:bg-yellow-300 transition"
            >
              Añadir película
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <Link href="/" className="text-yellow-400 hover:underline text-sm">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
