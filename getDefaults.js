var tinder = require('tinderjs');
var url = require('url');
var request = require('request');
var settings = require('./config');

var client = new tinder.TinderClient();



client.authorize(
    settings.authToken,
    settings.userID,
    function() {
        var defaults = client.getDefaults();
        console.log(defaults);
      });
