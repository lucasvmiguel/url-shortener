'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeAll = exports.find = exports.all = exports.update = exports.save = undefined;

var _ramda = require('ramda');

var R = _interopRequireWildcard(_ramda);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var urls = [];

var save = exports.save = function save(urlObj) {
  return new Promise(function (resolve, reject) {
    urls = R.append(urlObj, urls);
    resolve(urls);
  });
};

var update = exports.update = function update(_ref) {
  var shortcode = _ref.shortcode,
      urlObj = _ref.urlObj;

  return new Promise(function (resolve, reject) {
    var index = R.findIndex(R.propEq('shortcode', shortcode))(urls);

    if (index !== -1) {
      urls = R.update(index, urlObj, urls);
      return resolve(R.indexOf(index, urls));
    }

    reject('notfound');
  });
};

var all = exports.all = function all() {
  return new Promise(function (resolve, reject) {
    resolve(R.clone(urls));
  });
};

var find = exports.find = function find(shortcode) {
  return new Promise(function (resolve, reject) {
    var url = R.find(R.propEq('shortcode', shortcode))(urls);

    if (!url) return reject('notfound');

    resolve(R.clone(url));
  });
};

var removeAll = exports.removeAll = function removeAll(shortcode) {
  return new Promise(function (resolve, reject) {
    urls = [];
    resolve();
  });
};