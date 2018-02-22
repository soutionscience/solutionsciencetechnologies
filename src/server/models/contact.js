
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var image = new Schema({
    originalname: String,
    filename: String
})

var contact = new Schema({
    email: String,
    telephone: Number,
    title: String,
    subtitle: String,
    desc: String
   

})

module.exports = mongoose.model('contact', contact)