import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SongItem from '../components/SongItem';

const Search = () => {
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    // Lógica para buscar canciones (puedes usar una API aquí)
    setResults([/* resultados de la búsqueda */]);
  };

  return (
    <div className="search">
      <SearchBar onSearch={handleSearch} />
      <div className="search-results">
        {results.map((song) => (
          <SongItem key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Search;