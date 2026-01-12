const mongoose = require("mongoose");

const connection = mongoose
  .connect("mongodb://localhost:27017/EnquiryForm")
  .then(() => {
    console.log("yse mongodb connection to database");
  })
  .catch(() => {
    console.log("no mongodb connection to database");
  });

module.exports = connection;
