import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f3d757824f08ea2cff45eb8f47ca3a1e&page=${page}`);
        setMovies(prevMovies => [...prevMovies, ...response.data.results]);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Films populaires</h1>
      <MovieList movies={movies} />
      <div className="mt-8 text-center">
        <button
          onClick={loadMore}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
        >
          Charger plus
        </button>
      </div>
    </div>
  );
}

export default Movies;