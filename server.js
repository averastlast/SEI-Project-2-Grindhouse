// Requirements
// require express, method-override, morgan (logging tool), and our routes
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const logger = require('morgan')
const routes = require('./routes/index')

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

// Logger provides extra information in our Node console about each request being made.
app.use(logger('dev'))

// Router
// Links the server to our Router File
app.use('/', routes)

// LISTENERS
const port = process.env.PORT || 3000
app.listen(port, "0.0.0.0", function(){
    console.log("hello from the server side")
})

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