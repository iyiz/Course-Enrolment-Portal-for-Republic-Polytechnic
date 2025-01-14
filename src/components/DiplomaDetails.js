import React from 'react';
import { useParams } from 'react-router-dom';
import diplomaData from '../data/diplomaData';
import '../DiplomaDetails.css'; // Ensure this CSS file is created

const DiplomaDetails = () => {
  const { diplomaId } = useParams();
  let selectedDiploma;

  diplomaData.forEach(school => {
    school.diplomas.forEach(diploma => {
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
      <h3>Modules:</h3>
      <div className="module-container">
        {Array.isArray(selectedDiploma.modules) && selectedDiploma.modules.length > 0 ? (
          selectedDiploma.modules.map(module => (
            <div key={module.id} className="module-card">
              {module.name}
            </div>
          ))
        ) : (
          <div>No modules available for this diploma.</div>
        )}
      </div>
    </div>
  );
};

export default DiplomaDetails;
