'use client';

import { useState } from 'react';
import Link from 'next/link';
import AnimatedConstructionImage from '@/components/AnimatedConstructionImage';

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
        
          <div className="bg-[#0e1e2e] border border-yellow-400 rounded-xl p-6 shadow-xl text-white">
            
            <AnimatedConstructionImage />
            
            <ul className="text-sm text-gray-300 list-disc list-inside space-y-1 py-4">
              <li><strong>Piensa en un título:</strong> ¿Una aventura mágica? ¿Un dragón perdido? ¿Un bosque encantado?</li>
              <li><strong>Inventa personajes:</strong> Un héroe, una criatura, una misión... ¡tú mandas!</li>
              <li><strong>Escribe una sinopsis:</strong> Resume tu historia en unas líneas con alma y emoción.</li>
              <li><strong>Sube una imagen:</strong> Puedes usar:
                <ul className="ml-5 list-disc">
                  <li>Una <code>URL externa</code> como <code>https://i.imgur.com/xyz123.jpg</code></li>
                  <li>Una imagen local como <code>/images/explorer.png</code> o <code>/images/kit.png</code></li>
                </ul>
              </li>
              <li><strong>Recomendación:</strong> Imágenes PNG o JPG de al menos <strong>500x300 px</strong>.</li>
            </ul>
            <p className="text-sm text-cyan-400 text-center mt-4 font-semibold">
              🎬 Mi película Kit y el dragón , ya esta disponible.
            </p>
            <p className="text-sm text-yellow-200 text-center mt-4 font-semibold">
              ¡Dale vida a tu historia y mira cómo aparece junto a los clásicos del Studio Ghibli!
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