const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    email: String,
    password: String
})

var model = mongoose.model("user", schema)

module.exports = model;