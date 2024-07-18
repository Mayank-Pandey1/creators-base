const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: String,
  description: String,
  logoUrl: String,
  website: String,
  someTrendingMetric: Number, 
  isFeatured: Boolean,
});

module.exports = mongoose.model('Company', companySchema);
