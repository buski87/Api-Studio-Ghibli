'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NewFilmPage() {
  const [form, setForm] = useState({
    title: '',
    director: '',
    producer: '',
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
    setForm({
      title: '',
      director: '',
      producer: '',
      year: '',
      duration: '',
      rt_score: '',
      description: '',
      image: '',
    });
  };

  return (
    <main className="min-h-screen text-white px-4 py-12 flex justify-center items-start">
      <div className="w-full max-w-7xl bg-[#121f30] border border-[#2d74da] rounded-xl shadow-2xl p-8 flex flex-col lg:flex-row gap-8">

        {/* Columna izquierda */}
        <div className="w-full lg:w-1/2 space-y-10">
          <div className="bg-[#0e1e2e] border border-cyan-500 rounded-xl p-6 shadow-xl text-white">
            <h3 className="text-xl font-bold text-cyan-400 mb-4 uppercase text-center">
              🧪 Ejemplo de Película
            </h3>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <img
                src="/images/kit.png"
                alt="Kit y el dragón"
                className="w-full md:w-48 rounded-lg shadow"
              />
              <div className="text-sm text-gray-300 space-y-1">
                <p><strong>Título:</strong> Kit y el dragón</p>
                <p><strong>Director:</strong> Eyden Kazama</p>
                <p><strong>Productor:</strong> Buski87</p>
                <p><strong>Año:</strong> 2025</p>
                <p><strong>Duración:</strong> 90 minutos</p>
                <p><strong>Rotten Score:</strong> 75</p>
                <p><strong>Descripción:</strong> Una historia épica sobre un niño con poderes elementales y un huevo de dragón escondido en el bosque.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0e1e2e] border border-yellow-400 rounded-xl p-6 shadow-xl text-white">
            <h3 className="text-xl font-bold text-yellow-300 mb-4 uppercase text-center">
              ✨ ¡Crea tu propia película!
            </h3>
            <p className="text-sm text-gray-300 text-center mb-4">
              Puedes inventar tu historia, añadir un título original, y completar todos los campos como si fueras parte del Studio Ghibli.
              Es una oportunidad perfecta para soñar con tu propia producción animada.
            </p>
            <ul className="text-sm text-gray-300 list-disc list-inside">
              <li>Puedes usar una imagen desde una URL externa</li>
              <li>Recomendamos usar imágenes tipo <strong>PNG o JPG</strong> y de al menos <strong>300x400 px</strong>.</li>
              <li>También puedes usar imágenes locales como la chica explorando <code>/images/explorer.png</code></li>
            </ul>
            <p className="text-sm text-yellow-200 text-center mt-4 font-semibold">
              ¡Anímate a crear una película y verla listada junto a las del Studio Ghibli!
            </p>
          </div>
        </div>

        {/* Columna derecha - Formulario */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-extrabold text-[#50b4ff] mb-8 text-center uppercase tracking-wide">
            Añadir nueva película
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold text-gray-300">Título *</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="p-3 rounded-lg bg-[#0f2a40] text-white border border-[#50b4ff] focus:outline-none focus:ring-2 focus:ring-[#50b4ff]"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold text-gray-300">Director *</label>
              <input
                name="director"
                value={form.director}
                onChange={handleChange}
                className="p-3 rounded-lg bg-[#0f2a40] text-white border border-[#50b4ff]"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold text-gray-300">Productor</label>
              <input
                name="producer"
                value={form.producer}
                onChange={handleChange}
                className="p-3 rounded-lg bg-[#0f2a40] text-white border border-[#50b4ff]"
              />
            </div>

            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="flex flex-col flex-1">
                <label className="mb-1 text-sm font-semibold text-gray-300">Año *</label>
                <input
                  name="year"
                  type="number"
                  value={form.year}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-[#0f2a40] text-white border border-[#50b4ff] w-full"
                  required
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="mb-1 text-sm font-semibold text-gray-300">Duración (min)</label>
                <input
                  name="duration"
                  type="number"
                  value={form.duration}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-[#0f2a40] text-white border border-[#50b4ff] w-full"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="mb-1 text-sm font-semibold text-gray-300">Rotten Score</label>
                <input
                  name="rt_score"
                  type="number"
                  value={form.rt_score}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-[#0f2a40] text-white border border-[#50b4ff] w-full"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold text-gray-300">Descripción *</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                className="p-3 rounded-lg bg-[#0f2a40] text-white border border-[#50b4ff]"
                required
              ></textarea>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold text-gray-300">URL de imagen (opcional)</label>
              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                className="p-3 rounded-lg bg-[#0f2a40] text-white border border-[#50b4ff]"
              />
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-[#50b4ff] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#7ecfff] transition"
              >
                Añadir película
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-[#50b4ff] hover:underline text-sm">
              ← Volver al inicio
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}