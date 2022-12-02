const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegistersUsers = new Schema({
  id: { type: Number },
  registerData: { type: Date, require: true },
});

module.exports = mongoose.model("RegistersUsers", RegistersUsers);
