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

exports.delete = function(req, res){
    fire.remove({}, function(err, resp){
        if(err) throw err;
        res.status(200).status({status: "Removed all"})
    })
}

exports.postImages =function(req, res, next){
    fire.findById(req.params.id, function(err, resp){
        if (err)throw err;
     for(var i = (resp.images.length-1); i>=0; i--){
         resp.images.id(resp.images[i]._id).remove();
  
     }
    resp.images.push(req.body)
    resp.save(function(err, result){
        if(err) throw err;
        res.status(201).send({status: "images added"});
    })
    })
  
  }