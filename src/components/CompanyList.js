import React from 'react';
import CompanyCard from './CompanyCard';

function CompanyList({ companies }) {
  return (
    <div>
      {companies.map((company) => (
        <CompanyCard key={company._id} company={company} />
      ))}
    </div>
  );
}

export default CompanyList;
