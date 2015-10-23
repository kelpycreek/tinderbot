var tinder = require('tinderjs');
var url = require('url');
var request = require('request');

var client = new tinder.TinderClient();



client.authorize(
'CAAGm0PX4ZCpsBAOsVAJL6pqkNZA2qpJwf2igDo4hdlt1GmriZCC6h3L7afXZARZCSlT2NlBH65NLqIKUJ6Dyp3ygZCfgckLQJLISbHMMwZBgFJC8JjcbPEATbxWTTvRGZCsOGwOhbEaZC2qvJW5cllYgIhb1EZAsJMjb7ZAHSJPul7LueZB4ufkPO8OquSh4qioZAlIihXDfAmZA0o2wZDZD',
'1085618201449665',
    function() {

        var defaults = client.getDefaults();

        client.getRecommendations(2, function(error, data){
          /*data.forEach(function(item) {
              client.like(item._id, function(error, data) {
                console.log(data);
              });
            });*/
            console.log(data);
        });
      });
