'use strict';

// Represents the current user of the application (if there is one)

var User = require('./user');

var CurrentUser = User.extend({
  url: '/api/currentuser'
});

var user = new CurrentUser();
user.fetch();

module.exports = user;