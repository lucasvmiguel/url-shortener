'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUrl = exports.getUrlStats = exports.getUrl = undefined;

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUrl = exports.getUrl = function getUrl(_ref) {
  var urlApi = _ref.urlApi,
      urlShorten = _ref.urlShorten;

  var options = {
    uri: urlApi + '/' + urlShorten,
    resolveWithFullResponse: true
  };

  return (0, _requestPromise2.default)(options);
};

var getUrlStats = exports.getUrlStats = function getUrlStats(_ref2) {
  var urlApi = _ref2.urlApi,
      urlShorten = _ref2.urlShorten;

  var options = {
    uri: urlApi + '/' + urlShorten + '/stats',
    resolveWithFullResponse: true
  };

  return (0, _requestPromise2.default)(options);
};

var createUrl = exports.createUrl = function createUrl(_ref3) {
  var urlApi = _ref3.urlApi,
      url = _ref3.url,
      shortCode = _ref3.shortCode;

  var options = {
    method: 'POST',
    uri: urlApi + '/shorten',
    body: shortCode ? { url: url, shortcode: shortCode } : { url: url },
    json: true,
    resolveWithFullResponse: true
  };

  return (0, _requestPromise2.default)(options);
};