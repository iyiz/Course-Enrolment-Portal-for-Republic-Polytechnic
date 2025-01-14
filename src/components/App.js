import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Diplomas from './Diplomas';
import DiplomaDetails from './DiplomaDetails';
import ModuleDetails from './ModuleDetails'; // New Component
import Register from './Register';
import Confirmation from './Confirmation';
import Header from './Header';
import FAQs from './FAQs'; // New Component

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/diplomas" element={<Diplomas />} />
        <Route path="/diplomas/:diplomaId" element={<DiplomaDetails />} />
        <Route path="/diplomas/:diplomaId/:moduleId" element={<ModuleDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/faqs" element={<FAQs />} /> {/* FAQs Page */}
      </Routes>
    </div>
  );
};

export default App;
