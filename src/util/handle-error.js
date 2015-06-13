'use strict';

// A convenience method for performing a waiting AJAX call and handling errors
module.exports = function (message) {
  return {
    wait: true,
    error: function (req, response) {
      console.error(arguments);
      
      if (response && response.responseJSON && response.responseJSON.message) {
        alert( response.responseJSON.message);
      } else {
        alert(message || 'An error occurred while processing your request.');
      }
    }
  };
}