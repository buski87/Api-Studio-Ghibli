// src/lib/api.js

const BASE_URL = 'https://ghibliapi.vercel.app'

export async function getAllFilms() {
  try {
    const res = await fetch(`${BASE_URL}/films`)
    if (!res.ok) throw new Error('Error al obtener las películas')
    return await res.json()
  } catch (error) {
    console.error('getAllFilms:', error)
    return []
  }
}

export async function getFilmById(id) {
  try {
    const res = await fetch(`${BASE_URL}/films/${id}`)
    if (!res.ok) throw new Error('Película no encontrada')
    return await res.json()
  } catch (error) {
    console.error('getFilmById:', error)
    return null
  }
}
