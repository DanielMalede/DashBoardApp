const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Orders = new Schema({
    category: {type: String,required: true},
    amount:{type: Number,required: true},
    date_order: {type: Date,required: true},    
},)

module.exports = mongoose.model('Orders', Orders);