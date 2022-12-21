const express = require("express");
const app = express();
require("dotenv").config();
// Using Node.js `require()`
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connect = require("./config/dbConn")
const user = require('./route/user')
const auth = require('./route/auth')
const job = require('./route/job')

const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Routes
app.use("/user", user)
app.use("/auth", auth)
app.use("/job", job)

app.get("/", (req, res, next) => {
    console.log("test run")
  res.json({ message: "Hello, Welcome to jobhunt" });
});


// when an Error is thrown
app.use((err, req, res, next) => {
    console.log("Throwing error")
    console.log({err})
    res.status(500).json({err: err})
})


// Connecting to mongo db
connect();


// when mongoose is connected
mongoose.connection.once("open", () => {
    console.log("Mongo DB connected");
    app.listen(PORT, () => console.log("App is running on", PORT));
  });
  
//   when mongoose throws an error
  mongoose.connection.on("error", (err) => {
    console.log(err);
  });
  