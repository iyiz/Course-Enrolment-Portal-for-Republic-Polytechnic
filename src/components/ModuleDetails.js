import React from 'react';
import { useParams } from 'react-router-dom';
import diplomaData from '../data/diplomaData';

const ModuleDetails = () => {
  const { diplomaId, moduleId } = useParams();
  let selectedModule;

  diplomaData.forEach((school) => {
    school.diplomas.forEach((diploma) => {
      if (diploma.id === parseInt(diplomaId, 10)) {
        selectedModule = diploma.modules.find(module => module.id === parseInt(moduleId, 10));
      }
    });
  });

  if (!selectedModule) {
    return <h2>Module not found</h2>;
  }

  return (
    <div>
      <h2>{selectedModule.name}</h2>
      <p>Details about {selectedModule.name} will be displayed here.</p>
      {/* You can add more information about the module here */}
    </div>
  );
};

export default ModuleDetails;
