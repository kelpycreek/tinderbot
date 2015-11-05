var tinder = require('tinderjs');
var url = require('url');
var request = require('request');
var generator = require('./generator');
var settings = require('./config');
var sleep = require('sleep');

var client = new tinder.TinderClient();

 client.authorize(
            settings.authToken,
            settings.userID,
            function() {
                client.getRecommendations(10, function(error, data){
                  if (!data.results) {
                        console.log(data);
                  } else {
                      data.results.forEach(function(item) {
                          sleep.sleep(1);//keeps things from getting crazy
                          client.like(item._id, function(error, likeData) {
                            if (error) {
                                console.log(error);
                            }
                            if (likeData && likeData.match) {
                                client.sendMessage(likeData.match._id, generator.generateLine());
                                console.log("\n  ... \n ...  \n");
                                console.log(likeData.match);
                                console.log(item._id);
                            } else {
                                console.log("didnt like us :(");
                            }
                          });
                        });
                    }
                });
              });

