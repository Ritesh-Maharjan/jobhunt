const User = require("../model/User")
const asyncHandler = require('express-async-handler');

const getUser = asyncHandler(async (req, res, next) => {
    console.log("Welcome to user");
    res.send({"asd":"asd"})
})

module.exports =  {getUser}