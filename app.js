const express = require("express");
const app = express();

const confidb = require("./config/db");
const userModel = require("./models/user");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("hello word");
});
app.get("/form", (req, res) => {
  res.render("index");
});

app.listen(3000);