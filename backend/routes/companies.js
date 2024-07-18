const express = require('express');
const Company = require('../models/Company');
const router = express.Router();

router.get('/', async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
});

router.post('/', async (req, res) => {
  const newCompany = new Company(req.body);
  await newCompany.save();
  res.json(newCompany);
});


// Get trending companies
router.get('/trending', async (req, res) => {
    try {
      const trendingCompanies = await Company.find().sort({ someTrendingMetric: 96}).limit(10);
      res.json(trendingCompanies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Get featured startups
router.get('/featured', async (req, res) => {
    try {
      const featuredStartups = await Company.find({ isFeatured: true }).limit(10);
      res.json(featuredStartups);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

module.exports = router;
