const user= require ('../models/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const config = require('../config')

exports.post = function(req, res){
    
    var password = bcrypt.hashSync(req.body.password, 10);
    var newuser = new user({username: req.body.username, password:password})
    newuser.save(function(err, resp){
        if(err) throw err;
        res.status(201).json(resp)
    })
}
exports.get = function(req, res){
    console.log("get")
    user.find({})
    .exec(function(err, resp){
        if(err) throw err;
        res.json(resp)
    })
}

exports.delete = function(req, res){
    user.remove({}, function(err, resp){
        if(err) throw err;
        res.status(200).send({status: "Removed all"})
    })
}

exports.authenticate = function(req, res){
    console.log("hittinh auth")
    const myUser = req.body
    user.findOne({username: myUser.username}, function(err, result){
        if(!result){
            return res.status(404).json({errr: 'user not found'})
        }
        if (!bcrypt.compareSync(myUser.password, result.password)) {
            return res.status(401).json({ error: 'incorrect password' })
          }
          const payload = {
            username: result.username,
            admin: result.admin
          }
          const token = jwt.sign(payload,config.secretKey, { expiresIn: '4h' });
  
          return res.json({
            message: 'succsefully authenticated',
            token: token
          })
    })
}