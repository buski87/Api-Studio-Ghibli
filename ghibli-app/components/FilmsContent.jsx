'use client';

import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { getAllFilms } from "@/lib/api";
import FilmCard from "@/components/FilmCard";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import LoadingSpinner from "@/components/LoadingSpinner";

const FILMS_PER_PAGE = 6;

export default function FilmsContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [allFilms, setAllFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [filters, setFilters] = useState({ search: "", director: "", year: "" });
  const [availableDirectors, setAvailableDirectors] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);
  const [loading, setLoading] = useState(true);

  const page = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    const loadFilms = async () => {
      const apiFilms = await getAllFilms();
      let localFilms = JSON.parse(localStorage.getItem("ghibli_films")) || [];

      const exampleFilm = {
        id: "ejemplo-dragon",
        title: "Kit y el dragon",
        description: "Historia de magia y dragones...",
        director: "Eyden Kazama",
        producer: "Buski87",
        year: "2025",
        image: "/images/kit.png",
        running_time: "90",
        rt_score: "75",
      };

      if (!localFilms.some(f => f.id === exampleFilm.id)) {
        localFilms = [exampleFilm, ...localFilms];
        localStorage.setItem("ghibli_films", JSON.stringify(localFilms));
      }

      const combined = [...localFilms, ...apiFilms].sort((a, b) => {
        const yearA = parseInt(a.year || a.release_date);
        const yearB = parseInt(b.year || b.release_date);
        return yearA - yearB;
      });

      setAllFilms(combined);

      const years = [...new Set(combined.map(f => parseInt(f.year || f.release_date)).filter(Boolean))].sort((a, b) => b - a);
      const directors = [...new Set(combined.map(f => f.director).filter(Boolean))].sort();

      setAvailableYears(years);
      setAvailableDirectors(directors);
      setLoading(false);
    };

    loadFilms();
  }, []);

  useEffect(() => {
    let result = [...allFilms];

    if (filters.search) {
      result = result.filter(f =>
        f.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.director) {
      result = result.filter(f => f.director === filters.director);
    }

    if (filters.year) {
      result = result.filter(
        f => String(f.year || f.release_date) === filters.year
      );
    }

    result.sort((a, b) => {
      const yearA = parseInt(a.year || a.release_date);
      const yearB = parseInt(b.year || b.release_date);
      return yearA - yearB;
    });

    setFilteredFilms(result);
  }, [filters, allFilms]);

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }));
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSearch = (search) => {
    setFilters(prev => ({ ...prev, search }));
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  };

  const totalPages = Math.ceil(filteredFilms.length / FILMS_PER_PAGE);
  const start = (page - 1) * FILMS_PER_PAGE;
  const end = start + FILMS_PER_PAGE;
  const filmsToShow = filteredFilms.slice(start, end);

  return (
    <div className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] min-h-screen text-white">
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <SearchBar onSearch={handleSearch} />
          <FilterBar onChange={handleFilterChange} directors={availableDirectors} years={availableYears} />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {loading ? (
          <LoadingSpinner />
        ) : filmsToShow.length === 0 ? (
          <p className="text-center text-gray-400 mt-12">No se encontraron películas.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filmsToShow.map(film => (
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
