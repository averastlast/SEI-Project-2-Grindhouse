// requirements: import mongoose
const mongoose = require('mongoose');

// Connect to a local database called "the-donut-shop"
const connectionString = "mongodb://localhost/the-grindhouse";

// When it connects, then console.log "Connected to MongoDB"
//newUrlParser diables the deprication warning
mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("Connected to MongoDB at: " + connectionString);
  });

// export your mongoose connection
module.exports = mongoose;