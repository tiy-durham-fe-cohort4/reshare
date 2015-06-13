'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  idAttribute: 'userId',
  
  urlRoot: '/api/users'
});