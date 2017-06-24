'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _config = require('./config.json');

var _config2 = _interopRequireDefault(_config);

var _refreshData = require('./shorten/refreshData');

var _refreshData2 = _interopRequireDefault(_refreshData);

var _createUrlHandler = require('./shorten/httpHandlers/createUrlHandler');

var _createUrlHandler2 = _interopRequireDefault(_createUrlHandler);

var _getAllUrlHandler = require('./shorten/httpHandlers/getAllUrlHandler');

var _getAllUrlHandler2 = _interopRequireDefault(_getAllUrlHandler);

var _deleteAllUrlHandler = require('./shorten/httpHandlers/deleteAllUrlHandler');

var _deleteAllUrlHandler2 = _interopRequireDefault(_deleteAllUrlHandler);

var _getUrlHandler = require('./shorten/httpHandlers/getUrlHandler');

var _getUrlHandler2 = _interopRequireDefault(_getUrlHandler);

var _schema = require('./shorten/schema');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_config2.default.repository.mongo.connString);
_mongoose2.default.Promise = global.Promise;

var db = _mongoose2.default.connection;

db.on('error', function (err) {
  console.error('couldnt open connection with mongo:', err);
  process.exit(1);
});

db.once('open', function () {
  console.log('connected with mongo');
});

// setTimeout(() => {
//   setInterval(() => refreshData(config.urlApi), config.scheduleTime);
// }, 10000);

var serverHttp = (0, _express2.default)();

serverHttp.use((0, _cors2.default)());
serverHttp.use(_bodyParser2.default.json());
serverHttp.use(_bodyParser2.default.urlencoded({ extended: true }));
serverHttp.use(function (err, req, res, next) {
  console.error('error: ', err.stack);
  res.status(500).send('internal server error');
});

serverHttp.get('/resource-status', function (req, res) {
  return res.send('status ok!');
});

serverHttp.post('/shorten', (0, _createUrlHandler2.default)(_config2.default.urlApi, _config2.default.http.host));
serverHttp.get('/shorten', (0, _getAllUrlHandler2.default)(_config2.default.urlApi));
serverHttp.delete('/shorten', (0, _deleteAllUrlHandler2.default)());
serverHttp.get('/shorten/:shortcode', (0, _getUrlHandler2.default)(_config2.default.urlApi));
serverHttp.all('*', function (req, res) {
  return res.send('not found', 404);
});

serverHttp.listen(_config2.default.http.host.split(':')[2], function () {
  return console.log('server listening on ' + _config2.default.http.host + '!');
});