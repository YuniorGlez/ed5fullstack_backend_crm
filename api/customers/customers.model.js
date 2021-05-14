const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 120,
        required: true,
    },
    email: {
        type: String,
        minlength: 3,
        maxlength: 120,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Introduzca un correo valido']
    },
    contacted: {
        type: Boolean,
        default : false
    },
    photoURL: {
        type: String
    }
})

var model = mongoose.model("customer", schema)

module.exports = model;