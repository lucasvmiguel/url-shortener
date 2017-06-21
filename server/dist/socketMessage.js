'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sendMessage = exports.sendMessage = function sendMessage(_ref) {
  var client = _ref.client,
      action = _ref.action,
      data = _ref.data;

  client.emit('event', { 'action': action, type: 'success', 'data': data });
};

var sendError = exports.sendError = function sendError(_ref2) {
  var client = _ref2.client,
      action = _ref2.action,
      data = _ref2.data;

  client.emit('event', { 'action': action, type: 'error', data: data });
};