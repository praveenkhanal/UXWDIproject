const mongoose = require('mongoose');
// const mongoose = require ("mongodb");







 mongoose.connect('mongodb://localhost:27017/express-personal-api-db', {useNewUrlParser: true})
 		.then(() => console.log('Mongodb connected on port 27017...'))
 		.catch((err) => console.log('MongoDB connection error: ${err}'))








 module.exports = {
 	Profile: require('./profile.js'),
 }