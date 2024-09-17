// import mongoose library which is an Object Data Modeling 
const mongoose = require('mongoose');
// Imports the dotenv from .env
require('dotenv').config();

// this function to connect MongoDB
const connectDB = async () => {
  // try catch is too define the connection if successful or not
  try {
    await mongoose.connect(process.env.MONGO_URI);
    // Confirmation Message
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    // Terminate the Node.js process with exit code
    process.exit(1);
  }
};
// Export the function that can be used or imported to other files 
module.exports = connectDB;