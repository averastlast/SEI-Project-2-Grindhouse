// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection.js')


const Schema = mongoose.Schema
// create your donut schema:
const AxisSchema = new Schema(    {
    name: String,
    email: String,
    costPerHour: Number
});

// export the donut model with module.exports
//DONT HAVE CURLY BRACKETS AROUND IT
module.exports = mongoose.model("Axis", AxisSchema)