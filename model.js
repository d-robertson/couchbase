var Bucket = require('./app').bucket;
var Uuid = require('uuid');


function Model(){}

Model.get = function(callback){

}

Model.getById = function(id, callback){
  Bucket.get(id, function(error, result){
    if(error){
      return callback(error, null)
    }
    callback(null, result);

  })
}

Model.save = function(id, callback){
  var id = data.id ? data.id : Uuid.v4();
  Bucket.upsert(id, data, function(error, result){
    if(error){
      return callback(error, null)
    }
    callback(null, result);
  });
}

Model.deleteById = function(id, callback){
  
}

