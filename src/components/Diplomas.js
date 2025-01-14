import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import diplomaData from '../data/diplomaData'; // Make sure this path is correct
import '../Diplomas.css';

const Diplomas = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter diplomas based on the search term
  const filteredDiplomas = diplomaData.map(school => ({
    ...school,
    diplomas: school.diplomas.filter(diploma =>
      diploma.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <main>
      <h2>Available Diplomas</h2>
      <input 
        type="text" 
        placeholder="Search Diplomas..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar" // Ensure you have this class for styling
      />
      <ul>
        {filteredDiplomas.map(school => (
          <li key={school.school}>
            {school.school}
            <ul>
              {school.diplomas.length > 0 ? (
                school.diplomas.map(diploma => (
                  <li key={diploma.id}>
                    <Link to={`/diplomas/${diploma.id}`}>{diploma.name}</Link>
                  </li>
                ))
              ) : (
                <li>No diplomas found.</li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Diplomas;
