import React from 'react';
import { Link } from 'react-router-dom';
import { truncateText } from '../utils/truncateText';
import "../styles/CompanyCard.css"

const CompanyCard = ({ company }) => {
  return (
    <div>
      <img src={company.logoUrl} alt={company.name} />
      <h3>{company.name}</h3>
      <p>{truncateText(company.description, 20)}</p>
      <Link to={`/company/${company._id}`}>View Details</Link>
    </div>
  );
}

export default CompanyCard;
