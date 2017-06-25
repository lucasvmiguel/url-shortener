'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pipelineJs = require('pipeline-js');

var _pipelineJs2 = _interopRequireDefault(_pipelineJs);

var _schema = require('../schema');

var _localRepository = require('../localRepository');

var localRepo = _interopRequireWildcard(_localRepository);

var _mongoRepository = require('../mongoRepository');

var mongoRepo = _interopRequireWildcard(_mongoRepository);

var _externalApi = require('../externalApi');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleFetchUrlApiError = function handleFetchUrlApiError(res) {
  return function (err) {
    res.status(500).send('internal server error');
    console.error('redirect url error: ', err);
  };
};

var handleRepoUpdate = function handleRepoUpdate(url) {
  console.info('redirect url: ', url);
};

var handleFetchUrlApiResponse = function handleFetchUrlApiResponse(_ref) {
  var repo = _ref.repo,
      url = _ref.url,
      req = _ref.req,
      res = _ref.res;
  return function (response) {
    if (response.statusCode != 200) return res.status(500).send('internal server error');

    res.set('Location', url.urlExtended);
    res.status(302).send('');

    url.redirectCount++;

    repo.update({ shortcode: url.shortcode, urlObj: url }).then(handleRepoUpdate).catch(function (err) {
      return console.info('update url error: ', url);
    });
  };
};

var handleGetUrlResponse = function handleGetUrlResponse(_ref2) {
  var repo = _ref2.repo,
      urlApi = _ref2.urlApi,
      req = _ref2.req,
      res = _ref2.res;
  return function (url) {
    (0, _externalApi.fetchUrl)({ urlApi: urlApi, shortcode: url.shortcode }).then(handleFetchUrlApiResponse({ repo: repo, url: url, req: req, res: res })).catch(handleFetchUrlApiError(res));
  };
};

var getUrlHandler = function getUrlHandler(urlApi, repo) {
  return function (req, res) {
    if (!(0, _schema.isValidParam)(req.params)) return res.status(400).send('invalid params');

    repo.find(req.params.shortcode).then(handleGetUrlResponse({ repo: repo, urlApi: urlApi, req: req, res: res })).catch(handleFetchUrlApiError(res));
  };
};

exports.default = getUrlHandler;