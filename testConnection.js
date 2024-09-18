const connectDB = require('./db/db');

const testConnection = async () => {
  await connectDB();
  console.log('Connection test completed');
};

testConnection();