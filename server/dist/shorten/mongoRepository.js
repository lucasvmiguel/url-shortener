'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeAll = exports.find = exports.all = exports.update = exports.save = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schema = require('./schema.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var urlS = _mongoose2.default.model('urls', _schema.urlSchema);

var save = exports.save = function save(urlObj) {
  return new urlS(urlObj).save();
};

var update = exports.update = function update(_ref) {
  var shortcode = _ref.shortcode,
      urlObj = _ref.urlObj;

  return urlS.update({ shortcode: shortcode }, urlObj);
};

var all = exports.all = function all() {
  return urlS.find({}).exec();
};

var find = exports.find = function find(shortcode) {
  return urlS.findOne({ shortcode: shortcode }).exec();
};

var removeAll = exports.removeAll = function removeAll(shortcode) {
  return urlS.remove({});
};