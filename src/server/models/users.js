const Mongoose = require('mongoose')

let Schema = Mongoose.Schema

let User = new Schema({
    firstName: String,
    secondName: String,
    username: String,
    admin:{
        type: Boolean,
        default: 'false'

    },
    password: String



})
User.methods.getNames = function(){
    return(this.firstName +' '+ this.secondName)
}

module.exports = Mongoose.model('user', User)
