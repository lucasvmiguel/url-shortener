'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _config = require('./config.json');

var _config2 = _interopRequireDefault(_config);

var _shortenApi = require('./shortenApi.js');

var shortenApi = _interopRequireWildcard(_shortenApi);

var _socketMessage = require('./socketMessage.js');

var socketMsg = _interopRequireWildcard(_socketMessage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serverHttp = _http2.default.createServer();
var ws = (0, _socket2.default)(serverHttp);

shortenApi.createUrl({ urlApi: _config2.default.urlShorten, url: 'teste' }).then(function (x) {
  return 'a';
}).catch(function (y) {
  return console.error('a', y);
}).then(function (x) {
  return console.log('d', x);
}).catch(function (y) {
  return console.error('b', y);
});

ws.on('connection', function (client) {
  console.log('new client');

  client.on('CREATE_URL', function (data) {});

  // client.on('LIST_URLS', (data) => {

  // });

  // client.on('FIND_URLS', (data) => {

  // });

  // client.on('CLEAN_URLS', (data) => {

  // });

  client.on('disconnect', function (data) {
    console.log(data);
  });
});

// serverHttp.listen(config.port, () => {
//   console.log(`listening in ${config.port}`)
// });