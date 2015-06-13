var MainContent = require('./views/shared/main-content');
var router = require('./util/router');
var bulk = require('bulk-require');

// Require all controllers (which register their own routes)
bulk(__dirname, ['controllers/**/*.js']);

// Add jQuery as a global. Not great, but pretty much the only way to use
// jQuery plugins that aren't browserify friendly. 
global.jQuery = require('jquery');

// Require parsleyjs, which itself needs jQuery!
require('parsleyjs');

// Require the main view so it gets created and bound to the DOM
require('./views/main');

// Start the router
router.init();