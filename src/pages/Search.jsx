import React, { useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import SeriesList from '../components/SeriesList';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({ movies: [], series: [] });

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const movieResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f3d757824f08ea2cff45eb8f47ca3a1e&query=${query}`);
      const seriesResponse = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=f3d757824f08ea2cff45eb8f47ca3a1e&query=${query}`);
      setResults({
        movies: movieResponse.data.results,
        series: seriesResponse.data.results
      });
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Rechercher</h1>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un film ou une série..."
            className="flex-grow p-2 rounded-l-lg text-black"
          />
          <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-r-lg">
            Rechercher
          </button>
        </div>
      </form>
      {results.movies.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Films</h2>
          <MovieList movies={results.movies} />
        </section>
      )}
      {results.series.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Séries</h2>
          <SeriesList series={results.series} />
        </section>
      )}
    </div>
  );
}

export default Search;