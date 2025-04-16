import { getAllFilms } from "@/lib/api";
import FilmCard from "@/components/FilmCard";
import Pagination from "@/components/Pagination";

const FILMS_PER_PAGE = 6;

export default async function Home({ searchParams }) {
  const page = parseInt(searchParams?.page || "1", 10);
  const allFilms = await getAllFilms();
  const totalPages = Math.ceil(allFilms.length / FILMS_PER_PAGE);

  const start = (page - 1) * FILMS_PER_PAGE;
  const end = start + FILMS_PER_PAGE;
  const films = allFilms.slice(start, end);

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Studio Ghibli Films</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {films.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>

      <Pagination currentPage={page} totalPages={totalPages} />
    </main>
  );
}
