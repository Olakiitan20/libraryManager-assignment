const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {type: String, require: true},

    isbn: {type: String, unique: true},

    authors: [{type: mongoose.Schema.Types.ObjectId, ref: "author"}],

        status: {type: String,
        enum: ["IN", "OUt"],
        default: "IN"
    },

    borrowedBy: {type: mongoose.Schema.Types.ObjectId, ref: "student"},

    IssuedBy: {type: mongoose.Schema.Types.ObjectId, ref: "attendant"},

    IssuedDate: {type: Date, require: true},

    returnDate: {type: Date, default: null},
},

{timestamps: true});

module.exports = mongoose.model('Book', bookSchema);