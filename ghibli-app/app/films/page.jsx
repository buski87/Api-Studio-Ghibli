"use client";

import { useEffect, useState } from "react";
import { getAllFilms } from "@/lib/api";
import FilmCard from "@/components/FilmCard";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import LoadingSpinner from "@/components/LoadingSpinner";

const FILMS_PER_PAGE = 6;

export default function Home({ searchParams }) {
  const [allFilms, setAllFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [filters, setFilters] = useState({ search: "", director: "", year: "" });
  const [availableDirectors, setAvailableDirectors] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);
  const [loading, setLoading] = useState(true);

  const page = parseInt(searchParams?.page || "1", 10);

  useEffect(() => {
    const loadFilms = async () => {
      const apiFilms = await getAllFilms();
      let localFilms = JSON.parse(localStorage.getItem("ghibli_films")) || [];

      if (localFilms.length === 0) {
        const exampleFilm = {
          id: "ejemplo-dragon",
          title: "Kit y el dragon",
          description:
          "En un mundo donde los elementos gobiernan el equilibrio de la naturaleza, Kit, un niño curioso de 12 años con habilidades elementales innatas, vive en un pequeño pueblo rodeado de bosques ancestrales. Aunque controla el viento y el agua con facilidad, aún no comprende el verdadero alcance de su poder.\n\nDurante una excursión escolar al bosque prohibido, Kit se desvía del grupo tras escuchar un extraño susurro que solo él puede oír. Guiado por esa voz elemental, descubre un enorme huevo brillante oculto entre raíces antiguas, como si el bosque mismo lo protegiera.\n\nDesde ese momento, su destino cambia. El huevo guarda en su interior un dragón legendario vinculado al equilibrio de los elementos, y Kit es el único que puede protegerlo. Pero no está solo: fuerzas oscuras también han sentido el despertar del dragón y harán todo por arrebatárselo.\n\nA lo largo de la historia, Kit deberá ocultar el huevo, aprender a dominar sus poderes, y descubrir su conexión ancestral con los guardianes de los dragones. La relación entre Kit y el dragón que nacerá será clave para restaurar el equilibrio de un mundo que está empezando a desmoronarse.",
          director: "Eyden Kazama",
          producer: "Buski87",
          year: "2025",
          image: "/images/kit.png", 
          running_time: "90", 
          rt_score: "75",  
        };

        localFilms = [exampleFilm];
        localStorage.setItem("ghibli_films", JSON.stringify(localFilms));
      }

      const combined = [...localFilms, ...apiFilms].sort((a, b) => {
        const yearA = parseInt(a.release_date || a.year, 10);
        const yearB = parseInt(b.release_date || b.year, 10);
        return yearA - yearB;
      });

      setAllFilms(combined);
      setFilteredFilms(combined);

      const uniqueYears = [
        ...new Set(
          combined
            .map((f) => parseInt(f.release_date || f.year))
            .filter((y) => !isNaN(y) && y > 1900 && y < 2100)
        ),
      ].sort((a, b) => b - a);

      const uniqueDirectors = [
        ...new Set(combined.map((f) => f.director).filter(Boolean)),
      ].sort();

      setAvailableDirectors(uniqueDirectors);
      setAvailableYears(uniqueYears);
      setLoading(false);
    };

    loadFilms();
  }, []);

  useEffect(() => {
    let result = [...allFilms];

    if (filters.search) {
      result = result.filter((film) =>
        film.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    if (filters.director) {
      result = result.filter((film) => film.director === filters.director);
    }
    if (filters.year) {
      result = result.filter(
        (film) => parseInt(film.release_date || film.year) === parseInt(filters.year)
      );
    }

    setFilteredFilms(result);
  }, [filters, allFilms]);

  const totalPages = Math.ceil(filteredFilms.length / FILMS_PER_PAGE);
  const start = (page - 1) * FILMS_PER_PAGE;
  const end = start + FILMS_PER_PAGE;
  const filmsToShow = filteredFilms.slice(start, end);

  return (
    <div className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] min-h-screen text-white">
      <section className="py-16 px-4 text-center bg-transparent">
        <div className="max-w-3xl mx-auto">
          <SearchBar
            onSearch={(search) => setFilters((prev) => ({ ...prev, search }))}
          />
          <FilterBar
            onFilter={setFilters}
            directors={availableDirectors}
            years={availableYears}
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {loading ? (
          <LoadingSpinner />
        ) : filmsToShow.length === 0 ? (
          <p className="text-center text-gray-400 mt-12">
            No se encontraron películas.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filmsToShow.map((film) => (
                <FilmCard key={film.id} film={film} />
              ))}
            </div>
            <Pagination currentPage={page} totalPages={totalPages} />
          </>
        )}
      </div>
    </div>
  );
}
