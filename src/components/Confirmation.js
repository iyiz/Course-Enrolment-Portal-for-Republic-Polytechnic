import React from 'react';
import { useLocation } from 'react-router-dom';

const Confirmation = () => {
  const { state } = useLocation();

  if (!state) {
    return <h2>No registration data available.</h2>; // Handle missing state
  }

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
