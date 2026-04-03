const mongoose = require("mongoose")

const attendantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, unique: true},
    password: String,
    bio: String,
    dob: String
},

{timeStamps: true});

module.exports = mongoose.model("Attendant", attendantSchema);