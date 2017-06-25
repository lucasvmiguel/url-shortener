'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.fetchUrlStats = exports.fetchUrl = exports.__createReq = exports.__fetchUrlStatsReq = exports.__fetchUrl = undefined;

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __fetchUrl = exports.__fetchUrl = function __fetchUrl(_ref) {
  var urlApi = _ref.urlApi,
      shortcode = _ref.shortcode;

  return {
    uri: urlApi + '/' + shortcode,
    resolveWithFullResponse: true
  };
};

var __fetchUrlStatsReq = exports.__fetchUrlStatsReq = function __fetchUrlStatsReq(_ref2) {
  var urlApi = _ref2.urlApi,
      shortcode = _ref2.shortcode;

  return {
    uri: urlApi + '/' + shortcode + '/stats',
    resolveWithFullResponse: true
  };
};

var __createReq = exports.__createReq = function __createReq(urlApi, urlExtended, shortCode) {
  return {
    method: 'POST',
    uri: urlApi + '/shorten',
    body: shortCode ? { url: urlExtended, shortcode: shortCode } : { url: urlExtended },
    json: true,
    resolveWithFullResponse: true
  };
};

var fetchUrl = exports.fetchUrl = function fetchUrl(_ref3) {
  var urlApi = _ref3.urlApi,
      shortcode = _ref3.shortcode;
  return (0, _requestPromise2.default)(__fetchUrl({ urlApi: urlApi, shortcode: shortcode }));
};

var fetchUrlStats = exports.fetchUrlStats = function fetchUrlStats(_ref4) {
  var urlApi = _ref4.urlApi,
      shortcode = _ref4.shortcode;
  return (0, _requestPromise2.default)(__fetchUrlStatsReq({ urlApi: urlApi, shortcode: shortcode }));
};

var create = exports.create = function create(urlApi, urlExtended, shortCode) {
  return (0, _requestPromise2.default)(__createReq(urlApi, urlExtended, shortCode));
};