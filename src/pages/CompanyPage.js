import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompanyPage = ({ match }) => {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      const response = await axios.get(`/api/companies/${match.params.id}`);
      setCompany(response.data);
    };
    fetchCompany();
  }, [match.params.id]);

  if (!company) return <div>Loading...</div>;

  return (
    <div>
      <img src={company.logoUrl} alt={company.name} />
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <a href={company.website} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    </div>
  );
}

export default CompanyPage;
