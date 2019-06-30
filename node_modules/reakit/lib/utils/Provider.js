'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var warning = require('reakit-utils/warning');
require('react');
require('reakit-utils/useId');
require('reakit-system/SystemProvider');
var Provider = require('../Provider.js');

process.env.NODE_ENV !== "production" ? warning.warning(false, undefined, "Importing `Provider` from `reakit/utils` or `reakit/utils/Provider` is deprecated.", "Please, import `Provider` from `reakit` or `reakit/Provider` instead") : void 0;

exports.Provider = Provider.Provider;
