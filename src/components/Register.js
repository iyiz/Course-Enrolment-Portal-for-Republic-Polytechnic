import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import diplomaData from '../data/diplomaData';
import '../index.css'; // Add a CSS file for styling

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', course: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/confirmation', { state: formData });
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Register Your Interest</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          className="register-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="register-input"
        />
        <select
          name="course"
          onChange={handleChange}
          required
          className="register-select"
        >
          <option value="">Select a Diploma</option>
          {diplomaData.map((school) =>
            school.diplomas.map((diploma) => (
              <option key={diploma.id} value={diploma.name}>
                {diploma.name}
              </option>
            ))
          )}
        </select>
        <button type="submit" className="register-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
