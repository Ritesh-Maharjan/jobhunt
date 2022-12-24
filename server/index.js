const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path")
const cors = require("cors")
const connect = require("./config/dbConn")
const user = require('./route/user')
const auth = require('./route/auth')
const job = require('./route/job')
const admin = require('./route/admin')

const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())
app.use('/public', express.static(path.join(__dirname, 'public')))

// Routes
app.use("/api/user", user)
app.use("/api/auth", auth)
app.use("/api/job", job)
app.use("/api/admin", admin)

// when page not found
app.use("", (req,res,next) => {
  res.status(404).json({"msg":"Endpoints not found"})
})

// when an Error is thrown
app.use((err, req, res, next) => {
  console.log(err)
    res.status(500).json({err})
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
  