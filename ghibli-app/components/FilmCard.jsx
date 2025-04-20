import Link from "next/link";

export default function FilmCard({ film, editable = false, onEdit, onDelete }) {
  return (
    <div className="flip-card w-full max-w-xs mx-auto transition-transform hover:scale-[1.02]">
      <div className="flip-inner relative w-full h-[460px]">
        {/* Parte frontal */}
        <div className="flip-front absolute w-full h-full bg-gradient-to-b from-[#1c1c1e] to-[#0d0d0e] text-white rounded-xl overflow-hidden shadow-2xl border border-cyan-500">
          {film.image && (
            <img
              src={film.image}
              alt={film.title}
              className="w-full h-64 object-cover"
            />
          )}
          <div className="p-4 flex flex-col justify-between h-[calc(100%-256px)]">
            <h2 className="text-lg font-bold uppercase text-cyan-300 truncate">
              {film.title}
            </h2>
            <p className="text-xs italic text-gray-400 mt-1">
              Dirigida por {film.director} · {film.release_date || film.year}
            </p>
          </div>
        </div>

        {/* Parte trasera */}
        <div className="flip-back absolute w-full h-full bg-[#161616] text-white rounded-xl flex flex-col justify-between p-4 border border-cyan-500 shadow-xl">
          <div>
            <h3 className="text-base font-bold uppercase text-cyan-300 truncate">{film.title}</h3>
            <p className="text-xs leading-relaxed mt-2 text-gray-300 italic">
              {film.description?.slice(0, 160)}...
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <Link
              href={`/${film.id}`}
              className="bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-semibold py-2 text-center rounded transition"
            >
              🎟 Ver ficha completa
            </Link>

            {editable && (
              <div className="flex justify-between gap-2">
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
    </div>
  );
}
