const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoPages = new Schema({
  id: { type: Number },
  name: { type: String },
  img: { type: String },
  sold: { type: Number },
});

module.exports = mongoose.model("infoPages", infoPages);
