// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection.js')

const Schema = mongoose.Schema
// create your donut schema:
const CommentSchema = new Schema(    {
    alias: String,
    game: String,
    feedback: String
});

// export the donut model with module.exports
//DONT HAVE CURLY BRACKETS AROUND IT
module.exports = mongoose.model("Comment", CommentSchema)