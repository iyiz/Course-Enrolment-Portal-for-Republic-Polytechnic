import React from 'react';
import { useLocation } from 'react-router-dom';

const Confirmation = () => {
  const { state } = useLocation();

  return (
    <div>
      <h2>Thank You for Registering!</h2>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Course: {state.course}</p>
    </div>
  );
};

export default Confirmation;
