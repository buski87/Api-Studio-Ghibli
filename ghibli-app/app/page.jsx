// src/app/page.jsx
'use client'

import { useEffect, useState } from 'react'
import { getAllFilms } from '@/lib/api'
import FilmCard from '@/components/FilmCard'

export default function Home() {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFilms = async () => {
      const data = await getAllFilms()
      setFilms(data)
      setLoading(false)
    }

    fetchFilms()
  }, [])

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Studio Ghibli Films</h1>

      {loading ? (
        <p className="text-center">Cargando películas...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {films.map(film => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      )}
    </main>
  )
}
