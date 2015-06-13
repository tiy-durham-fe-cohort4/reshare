'use strict';

// The template module is a helper for getting underscore templates out of our
// views hash.

var _ = require('underscore');
var views = require('views');

module.exports = function (templateKey) {
  return _.template(views[templateKey], { variable: 'm' });
};