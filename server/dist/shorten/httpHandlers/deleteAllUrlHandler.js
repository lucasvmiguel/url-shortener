'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localRepository = require('../localRepository');

var localRepo = _interopRequireWildcard(_localRepository);

var _mongoRepository = require('../mongoRepository');

var mongoRepo = _interopRequireWildcard(_mongoRepository);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var handleDeleteAllResponse = function handleDeleteAllResponse(res) {
  return function () {
    console.log('all deleted');
    res.status(200).send('');
  };
};

var handleDeleteAllError = function handleDeleteAllError(res) {
  return function (err) {
    console.log('all deleted error:', err);
    res.status(500).send('internal server error');
  };
};

var deleteAllUrlHandler = function deleteAllUrlHandler(repo) {
  return function (req, res) {
    repo.removeAll().then(handleDeleteAllResponse(res)).catch(handleDeleteAllError(res));
  };
};

exports.default = deleteAllUrlHandler;