'use strict';

var Backbone = require('backbone');
var User = require('./user');

module.exports = Backbone.Collection.extend({
  model: User,

  url: '/api/users'
});