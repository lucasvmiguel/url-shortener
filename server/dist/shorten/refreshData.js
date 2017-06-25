'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('./api');

var handleFetchStatsApiError = function handleFetchStatsApiError(err) {
  return console.error('error update stats: ', err);
};

var handleFetchStatsApiResponse = function handleFetchStatsApiResponse(repo, url) {
  return function (response) {
    if (response.statusCode != 200) return console.error('error update stats: status code different than 200');

    var body = JSON.parse(response.body);

    url.lastSeenDate = body.lastSeenDate;
    url.redirectCount = body.redirectCount;

    repo.update({ shortcode: url.shortcode, urlObj: url }).then(function (url) {
      return console.info('updated url stat: ', url);
    }).catch(handleFetchStatsApiError);
  };
};

var handleGetAllUrls = function handleGetAllUrls(urlApi, repo) {
  return function (urls) {
    urls.map(function (url) {
      (0, _api.fetchUrlStats)({ urlApi: urlApi, shortcode: url.shortcode }).then(handleFetchStatsApiResponse(repo, url)).catch(handleFetchStatsApiError);
    });
  };
};

var refreshData = function refreshData(repo, urlApi) {
  repo.all().then(handleGetAllUrls(urlApi, repo)).catch(handleFetchStatsApiError);
};

exports.default = refreshData;