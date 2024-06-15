//Home

import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import "../App.css"
import Category from './Category';
const Home = () => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [searchData, setSearchData] = useState([]);
    const apiEndpoints = ['/agricutlure', '/education', '/centralgovt', '/housing', '/health'];
//    const API = process.env.REACT_APP_API;
   const API = 'http://localhost:3001';
   useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        // Fetch data from all relevant API endpoints and combine the results
        const promises = apiEndpoints.map((endpoint) =>
          fetch(`${API}${endpoint}?title=${searchTerm}`)
            .then((response) => response.json())
            .catch((error) => {
              console.error('Error fetching data from', endpoint, ':', error);
              return [];
            })
        );
  
        try {
          const results = await Promise.all(promises);
          // Combine the results from all endpoints into a single array
          const combinedResults = results.flat();
          setSearchData(combinedResults);
        } catch (error) {
          console.error('Error combining results or one of the promises failed:', error);
          // Handle the error, e.g., set an error state or show an error message.
        }
        
      } else {
        setSearchData([]);
      }
    };
  
    fetchData(); // Call the fetchData function inside the useEffect
  
    // Include dependencies in the dependency array
  }, [searchTerm, API, apiEndpoints]);
  

    return ( 
        <div>
            <div>
              <div className='heading-container'>
            <h1  className="heading"></h1>
            </div>
            <SearchBar onSearch={(term) => setSearchTerm(term)} />
            <SearchResult data={searchData} searchTerm={searchTerm} />
          </div>
           <Category />
        </div>
     );
}
 
export default Home;