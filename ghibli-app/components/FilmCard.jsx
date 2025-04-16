import Link from "next/link";

export default function FilmCard({ film }) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg">
        <img src={film.image} alt={film.title} className="w-full h-48 object-cover rounded" />
        <h2 className="text-lg font-bold mt-2">{film.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">Director: {film.director}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">Año: {film.release_date}</p>
        <Link
        href={`/${film.id}`}
        className="inline-block mt-4 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Ver más
      </Link>
      </div>
    );
  }
  