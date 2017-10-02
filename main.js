const app = require('http').createServer((req, res) => res.send('Ahoy!'));
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv').config()
// const Twitter = require('twitter-node-client').Twitter;
const twitter = require('./twitter.js').twitter;

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

console.log(twitter.getUserTimeline)

//Callback functions
var error = function (err, response, body) {
    console.log('error', err);
};
var success = function (data) {
    console.log('data', data);
};

twitter.getUserTimeline({ screen_name: 'jonarnaldo', count: '10'}, error, success);
