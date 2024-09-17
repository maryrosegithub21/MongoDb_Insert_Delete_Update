const cors = require("cors");
const express = require("express");
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
// ========== API END HERE ========== //

const PORT = process.env.PORT || 3000;
app
  .listen(PORT, console.log(`Server is running http://localhost:${PORT}`))
  .on("error", (err) => {
    console.log(err);
  });