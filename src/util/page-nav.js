'use strict';

// A utility for tracking information about the current navigation level.
// If breadcrumbs are ever added, it probably should be here.

var Backbone = require('backbone');
var router = require('./router');

var PageNav = Backbone.Model.extend({
  initialize: function () {
    this.page = '';
    
    this.listenTo(router, 'route', this.syncPage);
  },
  
  syncPage: function () {
    var page = Backbone.history.getFragment().split('/', 2)[0].trim() || 'shares';
    this.set('page', page);
  }
});

module.exports = new PageNav();