import { getFilmById } from "@/lib/api";
import Link from "next/link";

export default async function FilmDetailPage({ params }) {
  const film = await getFilmById(params.id);

  if (!film) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-red-600">Película no encontrada</h2>
        <Link href="/" className="text-blue-600 underline mt-4 block">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Link href="/" className="text-blue-600 underline block mb-4">← Volver</Link>

      <div className="bg-white shadow rounded-lg p-6">
        <img src={film.image} alt={film.title} className="w-full rounded-md mb-6 max-h-[400px] object-cover" />
        <h1 className="text-3xl font-bold mb-2">{film.title}</h1>
        <p className="text-sm text-gray-500 mb-4">Dirigida por {film.director}, {film.release_date}</p>
        <p className="text-gray-800 leading-relaxed mb-4">{film.description}</p>

        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Productor:</strong> {film.producer}</p>
          <p><strong>Duración:</strong> {film.running_time} minutos</p>
          <p><strong>Score Rotten Tomatoes:</strong> {film.rt_score}/100</p>
        </div>
      </div>
    </main>
  );
}
