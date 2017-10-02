const Twitter = require('twitter-node-client').Twitter;

const config ={
  "consumerKey": process.env.CONSUMER_KEY,
  "consumerSecret": process.env.CONSUMER_SECRET,
  "accessToken": process.env.ACCESS_TOKEN,
  "accessTokenSecret": process.env.ACCESS_SECRET
  // "callBackUrl": ""
}

 exports.twitter = new Twitter(config);
