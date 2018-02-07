
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var image = new Schema({
    name: String,
    location: String
})

var fire = new Schema({
    title: String,
    desc: String,
    images:[image]

})

module.exports = mongoose.model('fire', fire)