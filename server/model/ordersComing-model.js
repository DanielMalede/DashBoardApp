const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrdersComing = new Schema({
  orderNumber: { type: Number },
  Name: { type: String },
  Address: { type: String },
  deliveryTime: { type: String },
  numberOfProduct: { type: Number },
  total: { type: String },
});

module.exports = mongoose.model("OrdersComing", OrdersComing);
