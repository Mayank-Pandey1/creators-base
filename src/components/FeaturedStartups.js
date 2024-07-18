import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import CompanyCard from './CompanyCard';
import '../styles/FeaturedStartups.css'; // CSS for styling

const FeaturedStartups = () => {
  const [featuredStartups, setFeaturedStartups] = useState([]);

  useEffect(() => {
    const fetchFeaturedStartups = async () => {
        // try {
        //     const response = await axios.get('/api/companies/featured');
        //     console.log('Response :', response)
        //     setFeaturedStartups(response.data);
        // } catch (error) {
        //     console.error("Error fetching featured Startups:", error)
        // }
        try {
          const response = await fetch('http://localhost:5000/api/companies/featured');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log('Fetched data:', data);
          setFeaturedStartups(data);
        } catch (error) {
          console.error('Error fetching featured startups:', error);
        }
    };
    fetchFeaturedStartups();
  }, []);

  return (
    <div className="featured-startups">
      <h2>Featured Startups</h2>
      <div className="company-list">
        {featuredStartups.map((startup) => (
          <CompanyCard key={startup._id} company={startup} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedStartups;
