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
      const localFilms = JSON.parse(localStorage.getItem("ghibli_films")) || [];

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
