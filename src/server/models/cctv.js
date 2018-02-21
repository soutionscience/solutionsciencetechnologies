const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var feature = new Schema({
  desc: String
})
var image = new Schema({
    originalname: String,
    filename: String
})

var type = new Schema({
   title: String,
   desc: String,
   features: [feature],
   images:[image]
})

var cctv = new Schema({
    title: String,
    subtitle: String,
    desc: String,
    types: [type],
    images:[image]
})


module.exports = mongoose.model('cctv', cctv)