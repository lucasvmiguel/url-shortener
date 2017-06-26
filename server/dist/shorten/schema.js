'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var validUrl = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

var urlSchema = exports.urlSchema = {
  urlExtended: String,
  urlShorten: String,
  shortcode: String,
  startDate: Date,
  lastSeenDate: Date,
  redirectCount: Number
};

var isValidStructToCreate = exports.isValidStructToCreate = function isValidStructToCreate(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return false;
  if (typeof obj.urlExtended !== 'string' || typeof obj.shortcode !== 'string' || !obj.urlExtended) return false;

  if (!validUrl.test(obj.urlExtended)) return false;

  return true;
};

var isValidParam = exports.isValidParam = function isValidParam(param) {
  if ((typeof param === 'undefined' ? 'undefined' : _typeof(param)) !== 'object') return false;
  if (typeof param.shortcode !== 'string' || !param.shortcode) return false;

  return true;
};