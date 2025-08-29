"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

interface Movie {
  id: number,
  title: string,
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

function Main() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
        console.log(data)
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="min-h-screen p-2">
      <h1 className="text-3xl font-bold text-center text-white-800 mb-8 pt-2">Popular Movies</h1>
      {movies.length === 0 ? (
      <div className="ml-12 animate-spin h-20 w-20 rounded-full border-4 border-blue-500 border-t-transparent"></div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:px-32 px-4">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Link href=''>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-fit h-fit object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
              <p className="text-gray-600 text-sm">
                {movie.overview.length > 100 ? movie.overview.slice(0, 100) : movie.overview}...
              </p>
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>⭐ {movie.vote_average}</span>
                <span>{movie.release_date}</span>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
      )}
    </div>
  )
}

export default Main