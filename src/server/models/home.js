
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var image = new Schema({
    originalname: String,
    filename: String
})

var home = new Schema({
    title: String,
    desc: String,
    images:[image]

})

module.exports = mongoose.model('home', home)