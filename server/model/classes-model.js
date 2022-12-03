const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classes = new Schema({
  id: { type: Number },
  name: { type: Date, require: true },
});

module.exports = mongoose.model("classes", classes);
