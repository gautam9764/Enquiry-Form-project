const express = require("express");
const app = express();

const confidb = require("./config/db");
const userModel = require("./models/user");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello word");
});
app.get("/form", (req, res) => {
  res.render("index");
});
// app.get("/form-data" ,(req ,res)=>{
//   console.log(req.query);
//   res.send("form dan");
// });
app.post("/form-data", async (req, res) => {
  console.log(req.body);
  const { fullname, email, mobile, subject, message } = req.body;

  await userModel.create({
    fullname: fullname,
    email: email,
    mobile: mobile,
    subject: subject,
    message: message,
  });

  res.send("form dan");
});
app.listen(30001);
