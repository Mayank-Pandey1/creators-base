import React from 'react';
//import SearchBar from '../components/SearchBar';
import TrendingCompanies from '../components/TrendingCompanies';
import FeaturedStartups from '../components/FeaturedStartups';
import Hero from '../components/Hero';
 import "../styles/HomePage.css"

const HomePage = () => {
  

  return (
    <div className="homepage">
      <Hero />
      <TrendingCompanies />
      <FeaturedStartups />
    </div>
  );
}

export default HomePage;
