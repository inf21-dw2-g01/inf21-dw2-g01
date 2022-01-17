'use strict';
var sql = require('../utils/db.js');



/**
 * Retrieve Filmes --------------- alterei !!!!!!!!
 *
 * id Long 
 * returns Filmes
 **/
exports.retrieveFilme = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("Select original_title ,adult, `language`, release_date, runtime ,genero.genero from filmes join genero_filme on Filmes.id = genero_filme.id_filme join genero on genero_filme.id_genero = genero.id WHERE filmes.id = ?", [id],  function(err, res){
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
 * Retrieve Filmes ------------- alterei !!!!!
 *
 * returns List
 **/
exports.retrieveFilmes = function() {
  return new Promise(function(resolve, reject) {
    sql.query("Select original_title ,adult, `language`, release_date, runtime ,genero.genero from filmes join genero_filme on Filmes.id = genero_filme.id_filme join genero on genero_filme.id_genero = genero.id", function(err, res){
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
 * Update Filmes ----------------- alterei !!!!!
 *
 * body Filmes 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateFilmes = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE filmes set id = ?, original_title = ?, release_date = ?, genre = Select original_title, adult, language, release_date, Genero.genre join genero_fime on filmes.id = genero_fime.id_filme join genero on genero_filme.id_genero = genero.id, runtime = ?, language = ?, title = ?, adult = ?", [body.id, body.original_title, body.release_date, body.genre, body.runtime, body.language, body.title, body.adult], function (err, res){
      if(err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(id);
      }
    });
  });
}

