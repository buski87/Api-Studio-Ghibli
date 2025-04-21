// context/FavoritesContext.js
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("ghibli_favorites")) || [];
    setFavorites(stored);
  }, []);

  const toggleFavorite = (film) => {
    const exists = favorites.some((f) => f.id === film.id);
    const updated = exists
      ? favorites.filter((f) => f.id !== film.id)
      : [...favorites, film];

    setFavorites(updated);
    localStorage.setItem("ghibli_favorites", JSON.stringify(updated));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
