//below requires other programs
var keys = require("./keys.js");
var Twitter = require("twitter");
//var spotify = require("spotify");
//var request = require("request");
//file system
//var fs = require("fs")

var getTweets = function() {
    var client = new Twitter(keys.twitterKeys);
   
  var params = {screen_name: 'JayRatpack42'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      //console.log(tweets);
      for(var i=0; i<tweets.length; i++) {
          console.log(tweets[i].created_at);
          console.log(" ");
          console.log(tweets[i].text);
      }
    }  
  });

}

var select = function(caseData, functionData) {
    switch(caseData) {
        case "my-tweets" :
        getTweets();
        break;
        default:
        console.log("Liri does not know this");
    }
}

var Do = function(argOne, argTwo) {
    select(argOne, argTwo);
};

do(process.argv[2], process.argv[3]);