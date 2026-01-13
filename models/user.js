const mongoose = require('mongoose');

userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    mobile: Number,
    subject: String,
    message: String,
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;