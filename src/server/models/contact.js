
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var image = new Schema({
    originalname: String,
    filename: String
})

var contact = new Schema({
    email: String,
    tel: Number,
    product: String,
    name: String,
    message: String
   

})

module.exports = mongoose.model('contact', contact)