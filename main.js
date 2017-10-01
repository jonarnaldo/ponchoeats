const app = require('http').createServer((req, res) => res.send('Ahoy!'));
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv').config()
const Twitter = require('twitter-node-client').Twitter;

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// TODO - move into a module
//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', JSON.stringify(err));
};
var success = function (data) {
    console.log('Data [%s]', data);
};

const config ={
  "consumerKey": process.env.CONSUMER_KEY,
  "consumerSecret": process.env.CONSUMER_SECRET,
  "accessToken": process.env.ACCESS_TOKEN,
  "accessTokenSecret": process.env.ACCESS_SECRET,
  "callBackUrl": ""
}

console.log(config)
const twitter = new Twitter(config);
console.log(twitter.getUserTimeline)

twitter.getUserTimeline({ screen_name: 'jonarnaldo', count: '10'}, error, success);
