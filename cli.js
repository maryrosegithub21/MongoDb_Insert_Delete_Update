#!/usr/bin/env node
// import 
const { program } = require('commander');
const inquirer = require('inquirer');
const connectDB = require('./db/db');
const User = require('./models/User');
const Auction = require('./models/Auction');

// Connect to MongoDB
connectDB();

// Define CLI commands
program
  .command('add')
  .description('Add a new user')
  .action(async () => {
    const answers = await inquirer.prompt([
      { type: 'input', name: 'name', message: 'mary' },
      { type: 'input', name: 'email', message: 'maryrosea@missionreadyhq.com' },
    ]);

    const user = new User(answers);
    await user.save();
    console.log('User added:', user);
  });

program
  .command('list')
  .description('List all users')
  .action(async () => {
    const users = await User.find();
    console.log('Users:', users);
  });

program
  .command('remove <email>')
  .description('Remove a user by email')
  .action(async (email) => {
    await User.findOneAndDelete({ email });
    console.log('User removed');
  });

program
  .command('update-auction <id>')
  .description('Update an auction item by ID')
  .action(async (id) => {
    try{

  
    const answers = await inquirer.prompt([
      { type: 'input', name: 'title', message: 'update Vintage Wooden Rocking Chair' },
      { type: 'input', name: 'description', message: 'Update Step back in time with this beautifully crafted vintage wooden rocking chair. This charming piece of furniture is perfect for adding a touch of nostalgia to any room. Whether youre looking to enhance your living room, nursery, or reading nook, this rocking chair offers both comfort and style.' },
      { type: 'input', name: 'start_price', message: '1000' },
      { type: 'input', name: 'reserve_price', message: '2000' },
    ]);

    const updateData = {};
    if (answers.title) updateData.title = answers.title;
    if (answers.description) updateData.description = answers.description;
    if (answers.start_price) updateData.start_price = parseFloat(answers.start_price);
    if (answers.reserve_price) updateData.reserve_price = parseFloat(answers.reserve_price);

    await Auction.findByIdAndUpdate(id, updateData, { new: true });
    console.log('Auction item updated');
  } catch (error) {
    console.error('Error updating auction item:', error);
  }
  });
// Add Data

program
// Command Definition
  .command('seed-auctions')
  .description('Seed auction data')
  // Action Handler
  .action(async () => {
    // Auction Data
    const auctions = [
      { title: 'Vintage Wooden Rocking Chair', description: ' Step back in time with this beautifully crafted vintage wooden rocking chair. This charming piece of furniture is perfect for adding a touch of nostalgia to any room. Whether youre looking to enhance your living room, nursery, or reading nook, this rocking chair offers both comfort and style.', start_price: 100, reserve_price: 200 },
      { title: 'Classic Car', description: 'A well-maintained classic car from the 1960s.', start_price: 15000, reserve_price: 25000 },
      { title: 'Painting by Famous Artist', description: 'A beautiful painting by a renowned artist.', start_price: 5000, reserve_price: 10000 },
      { title: 'Rare Book', description: 'A first edition of a rare book.', start_price: 200, reserve_price: 500 },
      { title: 'Luxury Watch', description: 'A luxury watch with a diamond-studded bezel.', start_price: 3000, reserve_price: 5000 },
      { title: 'Vintage Guitar', description: 'A vintage guitar with a rich history.', start_price: 800, reserve_price: 1500 },
      { title: 'Antique Furniture', description: 'A set of antique furniture from the Victorian era.', start_price: 2500, reserve_price: 4000 },
      { title: 'Jewelry Set', description: 'A beautiful set of jewelry with precious stones.', start_price: 1000, reserve_price: 2000 },
      { title: 'Collectible Coins', description: 'A collection of rare and valuable coins.', start_price: 500, reserve_price: 1000 },
      { title: 'Sports Memorabilia', description: 'A signed jersey from a famous athlete.', start_price: 300, reserve_price: 600 },
    ];
// Database Insertion
    await Auction.insertMany(auctions);
// Confirmation Message
    console.log('Auction data seeded');
  });
// Delete Data
program
// defines a new command when this command invoke command line will executed
  .command('delete-auctions')
  // This will be displayed when user runs the help command
  .description('Delete all auction data')
  // This is asynchronous function 
  .action(async () => {
    // This line uses the deleteMany method from the Mongoose Model to delete auction
    await Auction.deleteMany({});
    // Message Confirmation
    console.log('All auction data deleted');
// Delete one row
  //   .command('delete-auction <id>')
  // .description('Delete an auction by ID')
  // .action(async (id) => {
  //   await Auction.deleteOne({ _id: id });
  //   console.log('Auction deleted');
  // });
  });


  // Search Data
program
  .command('search-auctions <title>')
  .description('Search for auctions by title')
  .action(async (title) => {
    try {
      const searchCriteria = { title: { $regex: title, $options: 'i' } }; // Case-insensitive search
      const auctions = await Auction.find(searchCriteria);
      if (auctions.length > 0) {
        console.log('Found auctions:', auctions);
      } else {
        console.log('No auctions found with the given title.');
      }
    } catch (error) {
      console.error('Error searching for auctions:', error);
    }
  });

program.parse(process.argv);
// This line parses the command-line arguments and executes the appropriate command based on the user's input.
program.parse(process.argv);