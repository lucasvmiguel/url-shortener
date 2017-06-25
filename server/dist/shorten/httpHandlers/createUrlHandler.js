'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schema = require('../schema');

var _localRepository = require('../localRepository');

var localRepo = _interopRequireWildcard(_localRepository);

var _mongoRepository = require('../mongoRepository');

var mongoRepo = _interopRequireWildcard(_mongoRepository);

var _externalApi = require('../externalApi');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var createUrlObj = function createUrlObj(_ref) {
  var urlExtended = _ref.urlExtended,
      host = _ref.host,
      shortcode = _ref.shortcode;

  return {
    urlExtended: urlExtended,
    urlShorten: host + '/shorten/' + shortcode,
    shortcode: shortcode,
    startDate: Date.now(),
    lastSeenDate: Date.now(),
    redirectCount: 0
  };
};

var handleCreateUrlApiResponse = function handleCreateUrlApiResponse(_ref2) {
  var repo = _ref2.repo,
      res = _ref2.res,
      host = _ref2.host,
      urlExtended = _ref2.urlExtended;
  return function (response) {
    if (response.statusCode != 201) return res.status(500).send('internal server error');

    var url = createUrlObj({ urlExtended: urlExtended, host: host, shortcode: response.body.shortcode });

    repo.save(url).then(function () {
      res.status(201).send('');
      console.info('created: ', url);
    }).catch(handleCreateUrlApiError(res));
  };
};

var handleCreateUrlApiError = function handleCreateUrlApiError(res) {
  return function (err) {
    res.status(500).send('internal server error');
    console.error('error: ', err);
  };
};

var createUrl = function createUrl(_ref3) {
  var repo = _ref3.repo,
      urlApi = _ref3.urlApi,
      host = _ref3.host,
      req = _ref3.req,
      res = _ref3.res;

  (0, _externalApi.create)(urlApi, req.body.urlExtended, req.body.shortcode).then(handleCreateUrlApiResponse({ repo: repo, res: res, host: host, urlExtended: req.body.urlExtended })).catch(handleCreateUrlApiError(res));
};

var createUrlHandler = function createUrlHandler(_ref4) {
  var urlApi = _ref4.urlApi,
      host = _ref4.host,
      repo = _ref4.repo;
  return function (req, res) {
    if (!(0, _schema.isValidStructToCreate)(req.body)) return res.status(400).send('invalid params');

    createUrl({ repo: repo, urlApi: urlApi, host: host, req: req, res: res });
  };
};

exports.default = createUrlHandler;