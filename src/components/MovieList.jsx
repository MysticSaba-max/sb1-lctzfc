import React from 'react';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/player/movie/${movie.id}`} className="block">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto transition-transform duration-300 transform hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white text-lg font-semibold">{movie.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MovieList;