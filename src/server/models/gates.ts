const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var feature = new Schema({
  title:String,
  subtitle: String,
  desc: String
})

var product = new Schema({
  title:String,
  subtitle: String,
  desc: String,
   features: [feature]
})

var gate = new Schema({
  title:String,
  subtitle: String,
  desc: String,
    products: [product]
})


module.exports = mongoose.model('gate', gate)