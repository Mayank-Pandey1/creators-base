import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import CompanyCard from './CompanyCard';
import '../styles/TrendingCompanies.css'; // CSS for styling

const TrendingCompanies = () => {
  const [trendingCompanies, setTrendingCompanies] = useState([]);

  useEffect(() => {
    const fetchTrendingCompanies = async () => {
        // try { 
        //     const response = await axios.get('/api/companies/trending');
        //     console.log(response.data)
        //     setTrendingCompanies(response.data);
            
        // } catch (error) {
        //     console.error('Error fetching trending companies:', error);
        // }
        try {
          const response = await fetch('http://localhost:5000/api/companies/featured');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log('Fetched data:', data);
          setTrendingCompanies(data);
        } catch (error) {
          console.error('Error fetching featured startups:', error);
        }
    };
    fetchTrendingCompanies();
  }, []);

  return (
    <div className="trending-companies">
      <h2>Trending Companies</h2>
      <div className="company-list">
        {trendingCompanies.map((company) => (
          <CompanyCard key={company._id} company={company} />
        ))}
      </div>
    </div>
  );
};

export default TrendingCompanies;
