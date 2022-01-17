'use strict';
var sql = require('../utils/db.js');


/**
 * Delete Favoritos ---------- Alterei!!!!!
 *
 * fav Long 
 * no response value expected for this operation
 **/
exports.deleteFavoritos = function(fav) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM lista_filme WHERE id_lista = ?, id_filme", [id_lista, id_filme], function (err, res){
      if (err || !res.affectedRows){
        console.log(err);
        console.log(res);
        reject();
      }
      else{
        console.log(res);
        resolve({"deleted":id});
      }
    });
  });
}


/**
 * Retrieve Favoritos
 *
 * fav Long 
 * returns Filmes
 **/


 /*exports.retrieveFavoritos = function(fav) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "original_title" : "original_title",
  "release_date" : "release_date",
  "genre" : "genre",
  "runtime" : 0,
  "language" : "language",
  "id" : 0,
  "title" : "title",
  "adult" : "adult"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}*/

exports.retrieveFavoritos = function() {
  return new Promise(function(resolve, reject) {
    sql.query("Select Filmes.original_title, user.id, user.first_name, user.last_name, mail, user.favoritos FROM user join lista_filme on user.favoritos = lista_filme.id_lista join filmes on lista_filme.id_filme = filmes.id", function(err, res){
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
 * Update Favoritos ----------- alterei !!!!!!
 *
 * body Filmes 
 * fav Long 
 * no response value expected for this operation
 **/
 exports.updateFavoritos = function(body,fav) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT favoritos set id = ?, original_title = ?, release_date = ?, genre = ?, runtime = ?, language = ?, title = ?, adult = ?", [body.id, body.original_title, body.release_date, body.genre, body.runtime, body.language, body.title, body.adult], function (err, res){
        if(err){
          console.log(err);
          reject(err);
        }
        else{
          console.log(res);
          resolve;
        }
    });
  });
}

