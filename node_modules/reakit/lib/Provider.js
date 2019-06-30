'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useId = require('reakit-utils/useId');
var SystemProvider = require('reakit-system/SystemProvider');

function Provider(_ref) {
  var prefix = _ref.unstable_prefix,
      _ref$unstable_system = _ref.unstable_system,
      system = _ref$unstable_system === void 0 ? {} : _ref$unstable_system,
      children = _ref.children;
  return React.createElement(useId.IdProvider, {
    unstable_prefix: prefix
  }, React.createElement(SystemProvider.SystemProvider, {
    unstable_system: system
  }, children));
}

exports.Provider = Provider;
