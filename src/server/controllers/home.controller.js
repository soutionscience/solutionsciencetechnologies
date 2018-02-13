const home= require ('../models/home')

exports.post = function(req, res){
    console.log("htiitg post")
    var newHome = new home(req.body)
    newHome.save(function(err, resp){
        if(err) throw err;
        res.status(201).send({status: "new fire created"})
    })
}

exports.get = function(req, res){
    console.log("get")
    home.find({})
    .exec(function(err, resp){
        if(err) throw err;
        res.json(resp)
    })
}

exports.delete = function(req, res){
    home.remove({}, function(err, resp){
        if(err) throw err;
        res.status(200).status({status: "Removed all"})
    })
}