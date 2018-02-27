let User = require('../models/users');
let jwt = require('jsonwebtoken');
let config = require('../config');

exports.getToken = function(user){

    return jwt.sign(user, config.secretKey, {
        expiresIn: 360000
    })

}
