import React, { useState } from 'react';
import axios from 'axios';
import "../styles/SearchBar.css"

const SearchBar = ({ setCompanies }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const response = await axios.get(`/api/companies?query=${query}`);
    setCompanies(response.data);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for companies..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
