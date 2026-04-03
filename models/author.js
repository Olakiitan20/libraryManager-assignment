const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    bio: String,
    DOB: String
},

{timeStamps: true});

module.exports = mongoose.model("Author", authorSchema);