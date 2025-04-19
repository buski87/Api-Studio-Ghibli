import Link from "next/link";

export default function FilmCard({ film, editable = false, onEdit, onDelete }) {
  return (
    <div className="flip-card w-full max-w-sm mx-auto">
      <div className="flip-inner relative w-full h-[420px]">
        {/* Parte frontal */}
        <div className="flip-front absolute w-full h-full bg-black text-white rounded-xl overflow-hidden shadow-xl border-4 border-yellow-500">
          {film.image && (
            <img
              src={film.image}
              alt={film.title}
              className="w-full h-64 object-cover"
            />
          )}
          <div className="p-4">
            <h2 className="text-xl font-extrabold tracking-wide uppercase">
              {film.title}
            </h2>
            <p className="text-sm italic text-gray-300">
              Dirigida por {film.director} · {film.release_date || film.year}
            </p>
          </div>
        </div>

        {/* Parte trasera */}
        <div className="flip-back absolute w-full h-full bg-gray-900 text-white rounded-xl flex flex-col justify-between p-4 border-4 border-yellow-500">
          <h3 className="text-lg font-bold uppercase">{film.title}</h3>
          <p className="text-sm leading-relaxed italic">
            {film.description?.slice(0, 180)}...
          </p>

          <Link
            href={`/${film.id}`}
            className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 text-center rounded"
          >
            🎟 Ver ficha completa
          </Link>

          {editable && (
            <div className="flex justify-between mt-4 gap-2">
              <button
                onClick={() => onEdit(film)}
                className="bg-yellow-400 text-black text-xs px-3 py-1 rounded hover:bg-yellow-300 w-full"
              >
                ✏️ Editar
              </button>
              <button
                onClick={() => onDelete(film.id)}
                className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-400 w-full"
              >
                🗑 Eliminar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
