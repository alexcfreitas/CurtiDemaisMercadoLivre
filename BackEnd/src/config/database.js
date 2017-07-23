const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connection.on('error', function() {
  console.error('✗ MongoDB Connection Error. Please make sure MongoDB is running.');
})
module.exports = mongoose.connect('mongodb://localhost/curtiDemais')