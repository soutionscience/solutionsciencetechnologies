const fire = require ('../models/fire')

exports.post = function(req, res){
    console.log("htiitg post")
    var newFire = new fire(req.body)
    newFire.save(function(err, resp){
        if(err) throw err;
        res.status(201).send({status: "new fire created"})
    })
}

exports.get = function(req, res){
    console.log("get")
    fire.find({})
    .exec(function(err, resp){
        if(err) throw err;
        res.json(resp)
    })
}