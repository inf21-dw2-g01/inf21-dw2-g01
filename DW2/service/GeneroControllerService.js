'use strict';
var sql = require('../utils/db.js');

/**
 * Retrieve Genero -------------- Alterei !!!
 *
 * returns List
 **/
exports.retrieveGenero = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM genero WHERE id = ?", [id], function(err, res){
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


/**
 * Retrieve Genero ----------- Alterei!!!
 *
 * id Long 
 * returns Genero
 **/
exports.retrieveGeneros = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM genero", function(err, res){
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

