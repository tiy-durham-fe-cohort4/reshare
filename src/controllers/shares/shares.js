'use strict';

var $ = require('jquery');
var router = require('../../util/router');
var main = require('../../views/main');
var SharesView = require('../../views/shares/shares');

router.route('', 'shares', function () {
  main.show(new SharesView());
});