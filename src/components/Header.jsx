import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Tv, Search, Home } from 'lucide-react';

function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pink-500">SeeFrench</Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="flex items-center hover:text-pink-500">
                <Home className="mr-1" size={20} />
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/movies" className="flex items-center hover:text-pink-500">
                <Film className="mr-1" size={20} />
                Films
              </Link>
            </li>
            <li>
              <Link to="/series" className="flex items-center hover:text-pink-500">
                <Tv className="mr-1" size={20} />
                Séries
              </Link>
            </li>
            <li>
              <Link to="/search" className="flex items-center hover:text-pink-500">
                <Search className="mr-1" size={20} />
                Rechercher
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;