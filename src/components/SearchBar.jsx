import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import './SearchBar.css';
function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const delayedSearch = debounce(handleSearch, 500);

  useEffect(() => {
    delayedSearch(searchTerm);
    return delayedSearch.cancel;
  }, [searchTerm, delayedSearch]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar">
  <label htmlFor="search-input">Search:</label>
  <input
    id="search-input"
    type="text"
    placeholder="Search questions..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <button onClick={handleClick}>Search</button>
</div>

  );
}

export default SearchBar;
