import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import SeriesList from '../components/SeriesList';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingSeries, setTrendingSeries] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const moviesResponse = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=f3d757824f08ea2cff45eb8f47ca3a1e');
        const seriesResponse = await axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=f3d757824f08ea2cff45eb8f47ca3a1e');
        setTrendingMovies(moviesResponse.data.results.slice(0, 6));
        setTrendingSeries(seriesResponse.data.results.slice(0, 6));
      } catch (error) {
        console.error('Error fetching trending content:', error);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Bienvenue sur SeeFrench</h1>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Films à découvrir</h2>
        <MovieList movies={trendingMovies} />
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Séries à découvrir</h2>
        <SeriesList series={trendingSeries} />
      </section>
    </div>
  );
}

export default Home;