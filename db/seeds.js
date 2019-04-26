const mongoose = require('mongoose')

// Connect to database
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
  }
  else {
    mongoose.connect('mongodb://localhost/express-movies');
  }
  mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
    }
  );
  mongoose.connection.once('open', function() {
    console.log("Mongoose has connected to MongoDB!");
  });

let Axis = require('../models/Axis.js')
//working, ran once
let newAxis = [
  {
    name: 'rob',
    email: 'rob@rob',
    boostOffer: false,
    costPerHour: 0
  },
  {
    name: 'bob',
    email: 'bob@bob',
    boostOffer: true,
    costPerHour: 8
  }
]

Axis.create(newAxis).then(axis => {
    console.log('Saved Axis', axis)
  })

