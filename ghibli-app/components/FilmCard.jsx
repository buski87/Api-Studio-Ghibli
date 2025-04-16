// src/components/FilmCard.jsx
export default function FilmCard({ film }) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg">
        <img src={film.image} alt={film.title} className="w-full h-48 object-cover rounded" />
        <h2 className="text-lg font-bold mt-2">{film.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">Director: {film.director}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">Año: {film.release_date}</p>
      </div>
    );
  }
  