import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Player() {
  const { type, id } = useParams();
  const [content, setContent] = useState(null);
  const [selectedServer, setSelectedServer] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=f3d757824f08ea2cff45eb8f47ca3a1e`);
        setContent(response.data);
        
        // Fetch FREMbed stream URL
        const frembedResponse = await axios.get(`https://api.frembed.pro/${type === 'movie' ? 'movies' : 'tv'}/check?id=${id}`);
        setSelectedServer(frembedResponse.data.stream_url);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, [type, id]);

  if (!content) {
    return <div className="container mx-auto py-8">Chargement...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">{content.title || content.name}</h1>
      <div className="aspect-w-16 aspect-h-9 mb-8">
        <iframe
          src={selectedServer}
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Synopsis</h2>
        <p>{content.overview}</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Choisissez un serveur</h2>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setSelectedServer(selectedServer)}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              FREMbed
            </button>
          </li>
          {/* Ajoutez d'autres serveurs ici si nécessaire */}
        </ul>
      </div>
    </div>
  );
}

export default Player;