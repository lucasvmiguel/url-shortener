'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleGetAllUrlHandlerResponse = function handleGetAllUrlHandlerResponse(res) {
  return function (urls) {
    console.log('get all urls: ', urls);

    var urlsChanged = urls.map(function (u) {
      var startDate = ((0, _moment2.default)(u.startDate).unix() * 1000).toString();
      var lastSeenDate = ((0, _moment2.default)(u.lastSeenDate).unix() * 1000).toString();

      return {
        urlExtended: u.urlExtended,
        urlShorten: u.urlShorten,
        shortcode: u.shortcode,
        startDate: startDate,
        lastSeenDate: lastSeenDate,
        redirectCount: u.redirectCount
      };
    });

    res.status(200).send(urlsChanged);
  };
};

var handleGetAllUrlHandlerError = function handleGetAllUrlHandlerError(res) {
  return function (err) {
    console.error('error to get all', err);
    res.status(500).send('internal server error');
  };
};

var getAllUrlHandler = function getAllUrlHandler(urlApi, repo) {
  return function (req, res) {
    // if (!isValidSearch(req.query)) return res.status(400).send('invalid params');

    repo.all().then(handleGetAllUrlHandlerResponse(res)).catch(handleGetAllUrlHandlerError(res));
  };
};

exports.default = getAllUrlHandler;