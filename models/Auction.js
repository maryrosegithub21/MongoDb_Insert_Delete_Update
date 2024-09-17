// When compare to mysql this is where you put the type of data you will put in the database 
// Import Mongoose library
const mongoose = require('mongoose');
// if you compare this in mysql this is the analogous to defining table structure
const AuctionSchema = new mongoose.Schema({
  // This define the field in schema 
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  start_price: {
    type: Number,
    required: true,
  },
  reserve_price: {
    type: Number,
    required: true,
  },
});
// In mysql this is equivalent to creating and exporting a table definition that can be used to interact with tha database
module.exports = mongoose.model('Auction', AuctionSchema);