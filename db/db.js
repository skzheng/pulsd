const mongoose = require('mongoose');

mongoURI = 'mongodb://simon:simon@ds119688.mlab.com:19688/pulsd'; 
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', function(err) {
  console.log('Mongodb connection error' + err);
});
db.on('connected', function() {
  console.log('Mongodb connection open');
});

module.exports = db;

