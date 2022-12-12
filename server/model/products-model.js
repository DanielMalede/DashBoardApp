const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Products = new Schema({
  id: { type: Number },
  productName: { type: String },
  color: { type: String },
  num_in_stock: { type: Number },
});

module.exports = mongoose.model("Products", Products);
