var Model = require("./model");

var router = function(app){

  app.get("/person", function(req, res){

  });

  app.get("/person/:id", function(req, res){
    if(!req.params.id){
      req.status(400).send('id was required');
    }

    Model.getById(req.params.id, function(error, result){
      if(error){
        res.status(500).send(error);
      }
      res.send(result);
    });
  });

  app.post("/person", function(req, res){
    
  });

  app.delete("/person/:id", function(req, res){
    
  });

}

modules.exports = router;