import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SeriesList from '../components/SeriesList';

function Series() {
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=f3d757824f08ea2cff45eb8f47ca3a1e&page=${page}`);
        setSeries(prevSeries => [...prevSeries, ...response.data.results]);
      } catch (error) {
        console.error('Error fetching series:', error);
      }
    };

    fetchSeries();
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Séries populaires</h1>
      <SeriesList series={series} />
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

export default Series;