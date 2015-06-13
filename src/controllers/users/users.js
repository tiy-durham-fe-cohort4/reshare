'use strict';

var router = require('../../util/router');
var main = require('../../views/main');
var UsersView = require('../../views/users/users');
var UsersCollection = require('../../models/users/users-collection');

router.route('users', function () {
  main.show(new UsersView({
    model: new UsersCollection()
  }));
});