const User = require("../model/User");
const asyncHandler = require("express-async-handler");

/**
 * getAllUser:  RESTful GET request returning all job objects
 */
const getAllUser = asyncHandler(async (req, res, next) => {
  const user = await User.find({});
  res.json(user);
});

/**
 * getUser:  RESTful GET request returning a particular job object
 */
const getUser = asyncHandler(async (req, res, next) => {
  const { id } = req.user;

  const user = await User.findById(id);
  if (!user) return res.json({ msg: "No job found with that id" });
  res.json(user);
});

/**
 * updateUser:  RESTful PUT request returning JSON object
 */
const updateUser = asyncHandler(async (req, res, next) => {
  const { id } = req.user;
  const { name, password, roles } = req.body;

  if (name || password || roles)
    return res.json({ msg: "Unable to update these fields" });
  const user = await User.findByIdAndUpdate(id, req.body);

  if (!user) return res.json({ msg: "No job found with that id" });
  res.json({ msg: "Updated successfully" });
});

/**
 * deleteUser:  RESTful DELETE request returning JSON object
 * @param id: string
 */
const deleteUser = asyncHandler(async (req, res, next) => {
  // giving the admin access to id to delete user
  let { id } = req.params;

  // if the admin didn't provide any id then delete the signed in id i.e. jobseeker/employer deleting their id
  if (!id) {
    console.log("This is runing");
    id = req.user.id;
  }

  const user = await User.findByIdAndDelete(id);

  if (!user) return res.json({ msg: "No user found with that id" });
  res.json({ msg: "Deleted successfully" });
});

module.exports = { getAllUser, getUser, updateUser, deleteUser };
