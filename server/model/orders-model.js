const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Orders = new Schema({
    id:{type:Number},
    num_of_orders:{type:Number}
},)

module.exports = mongoose.model('Orders', Orders);