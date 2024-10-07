import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Search from './pages/Search';
import Player from './pages/Player';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
          <Route path="/player/:type/:id" element={<Player />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;