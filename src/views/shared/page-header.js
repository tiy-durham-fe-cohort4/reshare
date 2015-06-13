'use strict';

var Backbone = require('backbone');
var template = require('../template');
var router = require('../../util/router');

// The page-header view is responsible for managing the page-header component
// links, current-user info in the nav-bar, etc
module.exports = Backbone.View.extend({
  template: template('shared/page-header'),

  el: '.page-header',

  initialize: function () {
    this.listenTo(this.model.nav, 'change', this.render);
    this.listenTo(this.model.currentUser, 'change', this.render);
    this.render();
  },

  render: function () {
    this.$el.html(this.template({
      page: this.model.nav.get('page'),
      currentUser: this.model.currentUser.toJSON()
    }));
  }
});