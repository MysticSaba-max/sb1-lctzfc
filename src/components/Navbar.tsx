import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Tv, Search, Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-pink-500 text-2xl font-bold">SeeFrench</Link>
        <div className="flex space-x-4">
          <NavLink to="/" icon={<Home size={20} />} text="Accueil" />
          <NavLink to="/films" icon={<Film size={20} />} text="Films" />
          <NavLink to="/series" icon={<Tv size={20} />} text="Séries" />
          <NavLink to="/rechercher" icon={<Search size={20} />} text="Rechercher" />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center text-gray-300 hover:text-white">
    {icon}
    <span className="ml-1">{text}</span>
  </Link>
);

export default Navbar;