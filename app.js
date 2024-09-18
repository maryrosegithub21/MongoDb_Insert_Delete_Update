const cors = require("cors");
const express = require("express");
const mongoose = require('mongoose');
const connectDB = require('./db/db');
const Auction = require('./models/Auction');
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// ========== ROUTE IMPORT START HERE!!! ========== //
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// ========== ROUTE IMPORT END HERE ========== //

// ========== ROOT ENDPOINT ========== //
app.get("/", (req, res) => {
  res.send("The backend is running!");
});

// ========== API START HERE!!! ========== //
app.get('/api/auctions', async (req, res) => {
  const { search } = req.query;
  const query = search ? { title: new RegExp(search, 'i') } : {};
  const auctions = await Auction.find(query);
  res.json(auctions);
});
// to search API into the browser
app.get('/api/search', async (req, res) => {
  try {
    const { title, minPrice, maxPrice } = req.query;

    // Build search criteria
    const searchCriteria = {};
    if (title) {
      searchCriteria.title = { $regex: title, $options: 'i' }; // Case-insensitive search
    }
    if (minPrice) {
      searchCriteria.start_price = { $gte: parseFloat(minPrice) };
    }
    if (maxPrice) {
      searchCriteria.start_price = { ...searchCriteria.start_price, $lte: parseFloat(maxPrice) };
    }

    // Retrieve matching items from MongoDB
    const auctions = await Auction.find(searchCriteria);
    res.json(auctions);
  } catch (error) {
    console.error('Error retrieving items:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ========== API END HERE ========== //

const PORT = process.env.PORT || 3000;
app
  .listen(PORT, console.log(`Server is running http://localhost:${PORT}`))
  .on("error", (err) => {
    console.log(err);
  });