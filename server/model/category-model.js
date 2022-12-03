const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const category = new Schema({
  id:{type:Number},
  name:{type:String}
});

module.exports = mongoose.model("category", category);
