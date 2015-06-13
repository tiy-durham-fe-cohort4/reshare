'use strict';

var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var PageHeader = require('./page-header');

// This is the main view. It is the parent view for our app. All other views
// go inside this one.
module.exports = Backbone.View.extend({
  el: document.body,

  initialize: function () {
    this.header = new PageHeader({ model: this.model });
  },
  
  show: function (childView) {
    this.$el.find('.main-content').html(childView.$el);
  }
});