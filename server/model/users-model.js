const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema({
  added_users: { type: Number },
});

module.exports = mongoose.model("Users", Users);
