const Twitter = require('twitter-node-client').Twitter;

//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};

const config ={
  "consumerKey": process.env.CONSUMER_KEY,
  "consumerSecret": process.env.CONSUMER_SECRET,
  "accessToken": process.env.ACCESS_TOKEN,
  "accessTokenSecret": process.env.ACCESS_SECRET
  // "callBackUrl": ""
}

 exports.twitter = new Twitter(config);
