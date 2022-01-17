'use strict';

var utils = require('../utils/writer.js');
var UserController = require('../service/UserControllerService');


module.exports.retrieveUser = function retrieveUser (req, res, next, id) {
  UserController.retrieveUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveUsers = function retrieveUsers (req, res, next) {
  UserController.retrieveUsers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
