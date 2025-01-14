import React from 'react';
import { useParams } from 'react-router-dom';
import diplomaData from '../data/diplomaData';

const DiplomaDetails = () => {
  const { diplomaId } = useParams();
  let selectedDiploma;

  diplomaData.forEach((school) => {
    school.diplomas.forEach((diploma) => {
      if (diploma.id === parseInt(diplomaId, 10)) {
        selectedDiploma = diploma;
      }
    });
  });

  if (!selectedDiploma) {
    return <h2>Diploma not found</h2>;
  }

  return (
    <div>
      <h2>{selectedDiploma.name}</h2>
      <p>Details about {selectedDiploma.name} will be displayed here.</p>
    </div>
  );
};

export default DiplomaDetails;
