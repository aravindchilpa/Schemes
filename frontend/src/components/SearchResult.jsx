import React from 'react';
import Card from './Card';

function SearchResult({ data, searchTerm }) {

  const filteredData = data.filter((result) =>
    result.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      
      <div className="card-list">
        {filteredData.map((result) => (
          <Card key={result.id} data={result} />
        ))}
      </div>
    </div>
  );
}

export default SearchResult;
