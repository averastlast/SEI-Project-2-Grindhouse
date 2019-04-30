// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection.js')

const Schema = mongoose.Schema
// create your donut schema:
const AltSchema = new Schema(    {
    alias: String,
    game: String,
    platform: String,
    hours: Number,
    youtubeLink: String,
    forSale: Boolean,
    price: Number
});

// export the donut model with module.exports
//DONT HAVE CURLY BRACKETS AROUND IT
module.exports = mongoose.model("Alt", AltSchema)