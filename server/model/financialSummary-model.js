const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FinancialSummary = new Schema({
  id: { type: Number },
  profits: { type: Number },
  losses: { type: Number },
});

module.exports = mongoose.model("FinancialSummary", FinancialSummary);
