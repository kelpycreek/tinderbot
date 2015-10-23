var tinder = require('tinderjs');
var url = require('url');
var request = require('request');
var generator = require('./generator');
var settings = require('./config');

var client = new tinder.TinderClient();

var string = "wingardium leviosa!";


client.authorize(
    settings.authToken,
    settings.userID,
    function() {
        client.sendMessage('5316c560f34bd2781e00007e551c162ebd2d112104aa21ff', string)
      });
