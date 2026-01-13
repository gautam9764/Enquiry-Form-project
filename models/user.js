const mongoose = require('mongoose');

userSchema = mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    subject: String,
    message: String,
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;