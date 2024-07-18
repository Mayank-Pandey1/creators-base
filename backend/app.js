const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const companyRoutes = require("./routes/companies");

const app = express();

mongoose.connect("mongodb://localhost:27017/crunchbase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use("/api/companies", companyRoutes);

module.exports = app;
