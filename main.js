const app = require('express')();
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv').config()
const twitter = require('./twitter.js').twitter;
const routes = require('./app/server/routes/routes.js');

// need env vars for local dev
// for deploy, need to configure env vars on deploy machine
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

// configure our server with all the middleware
require('./app/server/middleware/middleware.js')(app, express, routes);

app.get('/*', (req, res) => res.redirect('/'));

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;

//Callback functions
// var error = function (err, response, body) {
//     console.log('error', err);
// };
// var success = function (data) {
//     console.log('data', data);
// };
//
// twitter.getUserTimeline({ screen_name: 'jonarnaldo', count: '10'}, error, success);
