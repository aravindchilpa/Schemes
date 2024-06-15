import React, { useState } from 'react';
import "../App.css"
function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className='heading-container'>
      <div class="form__group field">
    <input required="" placeholder="Name" class="form__field" type="input"   value={searchTerm} onChange={handleSearch} />
    <label class="form__label" for="name"  >Search Schemes Here</label>
</div>
</div>
  );
}

export default SearchBar;
