const contact= require ('../models/contact')

exports.post = function(req, res){
    console.log("hitting post")
    var newcontact = new contact(req.body)
    newcontact.save(function(err, resp){
        if(err) throw err;
        res.status(201).json(resp)
    })
}

exports.get = function(req, res){
    console.log("get")
    contact.find({})
    .exec(function(err, resp){
        if(err) throw err;
        res.json(resp)
    })
}

exports.delete = function(req, res){
    contact.remove({}, function(err, resp){
        if(err) throw err;
        res.status(200).send({status: "Removed all"})
    })
}

exports.postImages =function(req, res, next){
    contact.findById(req.params.id, function(err, resp){
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