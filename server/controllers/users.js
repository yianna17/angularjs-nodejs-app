'use strict'

var User = require('../models/user');

module.exports = function (app) {

  app.get('/api/v1/users', function (req, res) {

    var user1 = new User({
      name: 'Jane Doe',
      username: 'admin1@test.com',
      password: 'password',
      role: 'admin'
    });

    user1.save(function(err, user) {
      res.json(user);
    });

  });

};
