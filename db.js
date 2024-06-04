const mongoose = require('mongoose');

const MONGODB_URL = 'mongodb+srv://ajayraja0903:0lKHH1YZNSSVKV6R@cluster0.7yitm3k.mongodb.net/';

mongoose.connect(MONGODB_URL);

const connection = mongoose.connection;

connection.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

connection.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});

module.exports =mongoose