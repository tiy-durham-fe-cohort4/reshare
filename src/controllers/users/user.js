'use strict';

var router = require('../../util/router');
var main = require('../../views/main');
var UserView = require('../../views/users/user');
var User = require('../../models/users/user');

router.route('users/:id', function (id) {
  main.show(new UserView({
    model: new User({ userId: id })
  }));
});