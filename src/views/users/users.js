'use strict';

var Backbone = require('backbone');
var _ = require('underscore');
var template = require('../template');
var handleError = require('../../util/handle-error');
var formToObj = require('form-to-obj');

module.exports = Backbone.View.extend({
  template: template('users/users'),

  className: 'users-page',
  
  events: {
    'submit .new-users-form': 'addUser',
    'click .remove-user': 'removeUser'
  },

  initialize: function () {
    this.listenTo(this.model, 'change remove add', this.render);
    
    this.model.fetch().done(this.render.bind(this)).fail(function () {
      alert('Failed to load users!');
      console.error(arguments);
    });
  },

  render: function () {
    console.log(this.model.toJSON());
    this.$el.html(this.template({ 
      users: _.chain(this.model.toJSON()).sortBy('userId')
    }));
  },
  
  addUser: function (e) {
    e.preventDefault();

    var user = formToObj(e.target);
    
    this.model.create(user, handleError());
  },
  
  removeUser: function (e) {
    var user = this.model.get(this.$(e.target).data('id'));
    user.destroy(handleError());
  }
});