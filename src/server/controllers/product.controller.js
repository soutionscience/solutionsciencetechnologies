const product= require ('../models/product')

exports.post = function(req, res){
    console.log("hitting post")
    var newprod = new product(req.body)
    newprod.save(function(err, resp){
        if(err) throw err;
        res.status(201).json(resp)
    })
}

exports.get = function(req, res){
    console.log("get")
    product.find({})
    .exec(function(err, resp){
        if(err) throw err;
        res.json(resp)
    })
}

exports.delete = function(req, res){
    product.remove({}, function(err, resp){
        if(err) throw err;
        res.status(200).send({status: "Removed all"})
    })
}

exports.postImages =function(req, res, next){
    product.findById(req.params.id, function(err, resp){
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

  exports.postTypes = function(req, res, next){
      console.log("hitting post")
      product.findById(req.params.id, function(err, resp){
          if(err) throw err;
          resp.types.push(req.body)
          resp.save(function(err, result){
              if(err) throw err;
              res.status(201).send({status: "added product type to"})
          })
      })

  }

  exports.getTypes = function(req, res, next){
     product.findById(req.params.id, function(err, resp){
         if(err) throw err;
         res.status(200).json(resp.types)
     })
  }

  exports.deleteTypes = function(req, res, next){
      product.findById(req.params.id, function(err, resp){
          if(err) throw err;
          for(var i = (resp.types.length-1); i>=0; i--){
            resp.types.id(resp.types[i]._id).remove();
     
        }
        resp.types.length =0;
        res.status(200).send({status:"types deleted"})
      })
  }