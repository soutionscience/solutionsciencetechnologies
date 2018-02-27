let User = require('../models/users');
let jwt = require('jsonwebtoken');
let config = require('../config');

exports.getToken = function(user){

    return jwt.sign(user, config.secretKey, {
        expiresIn: 360000
    })

}

exports.checkUser = function(){
(checkJwt({ secret: config.secretKey }).unless({ path: '/api/users/authenticate' }))
(function(err, req, res , next){
  if(err.name ==='UnauthorizedError'){
    res.status(401).send({error: err.message})
  } 
})
}

exports.verifyOrdinaryUser = function(req, res ,next){
  console.log("checking ordinary user", req.headers['authorization'])
  var token = req.body.token || req.query.token || req.headers['authorization'];
  if(token){
    jwt.verify(token, config.secretKey, function(err, decoded){
      if(err){
        var err = new Error('You are not autenticated')
        err.status=401;
        return next(err)
      }
      else{
        req.decoded = decoded;
        next();
      }

    })
  }
  else{
    var err = new Error('No token provided');
    err.status = 403;
    return next (err);
  }
}