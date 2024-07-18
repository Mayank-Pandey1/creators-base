const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connection to MongoDB
mongoose.connect("mongodb://localhost:27017/crunchbase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const companyRoutes = require("./routes/companies");
app.use("/api/companies", companyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
