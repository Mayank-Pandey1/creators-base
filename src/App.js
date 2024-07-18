import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import Navbar  from './components/Navbar';
import './App.css'
const App = () => {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company/:id" element={<CompanyPage /> } />
      </Routes>
    </Router>
  );
};

export default App;
