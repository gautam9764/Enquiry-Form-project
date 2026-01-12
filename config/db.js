const mongoose = require('mongoose');

const connection = mongoose.connection("mongodb://localhost:27017/Enquiry-Form").then(() => {
    console.log("yse mongodb connection to database")
}).catch(() => {
    console.log("no mongodb connection to database");
});

module.exports = connection