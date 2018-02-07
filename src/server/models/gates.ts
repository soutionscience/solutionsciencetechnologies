const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var feature = new Schema({
  desc: String
})

var product = new Schema({
   title: String,
   desc: String,
   features: [feature]
})

var gate = new Schema({
    title: String,
    desc: String,
    products: [product]
})


module.exports = mongoose.model('gate', gate)