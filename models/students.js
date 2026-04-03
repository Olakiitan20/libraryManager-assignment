const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    bio: String,
    dob: String,
},

{timeStamps: true});

module.exports = mongoose.model("Students", studentSchema);