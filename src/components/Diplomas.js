import React from 'react';
import { Link } from 'react-router-dom';
import diplomaData from '../data/diplomaData';

const Diplomas = () => {
  return (
    <div>
      <h2>Diplomas Offered</h2>
      {diplomaData.map((school) => (
        <div key={school.school}>
          <h3>{school.school}</h3>
          <ul>
            {school.diplomas.map((diploma) => (
              <li key={diploma.id}>
                <Link to={`/diplomas/${diploma.id}`}>{diploma.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Diplomas;
