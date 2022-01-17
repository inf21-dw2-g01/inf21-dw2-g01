'use strict';

var utils = require('../utils/writer.js');
var FilmesController = require('../service/FilmesControllerService');



module.exports.retrieveFilme = function retrieveFilme (req, res, next, id) {
  FilmesController.retrieveFilme(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveFilmes = function retrieveFilmes (req, res, next) {
  FilmesController.retrieveFilmes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFilmes = function updateFilmes (req, res, next, body, id) {
  FilmesController.updateFilmes(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
