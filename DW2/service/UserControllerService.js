'use strict';
var sql = require('../utils/db.js');



/**
 * Retrieve User
 *
 * returns List
 **/




/*exports.retrieveUser = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "mail" : "mail",
  "last_name" : "last_name",
  "id" : 0,
  "first_name" : "first_name"
}];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}*/


/**
 * Retrieve User
 *
 * id Long 
 * first_name String 
 * last_name String 
 * mail String 
 * returns User
 **/


/*exports.retrieveUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "mail" : "mail",
  "last_name" : "last_name",
  "id" : 0,
  "first_name" : "first_name"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}*/



exports.retrieveUser = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT user.id, user.mail, user.first_name, user.last_name, user.favoritos, filmes.id as filme_id, filmes.adult, filmes.original_title, filmes.release_date, filmes.runtime FROM user join lista_filme on lista_filme.id_lista = user.favoritos join filmes on filmes.id = lista_filme.id_filme WHERE user.id = ?", [id], function(err, res){
      if (err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res[0]);
      }
  });
});
}



exports.retrieveUsers = function() {
    return new Promise(function(resolve, reject) {
      sql.query("SELECT * FROM user", function(err, res){
        if (err){
          console.log(err);
          reject(err);
        }
        else{
          console.log(res);
          resolve(res[0]);
        }
    });
});
}


