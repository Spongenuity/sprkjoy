'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
require('react');
require('reakit-utils/useId');
require('reakit-utils/useSealedState');
var HiddenState = require('../Hidden/HiddenState.js');

function useDialogState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  return HiddenState.useHiddenState(initialState);
}
var keys = [].concat(HiddenState.useHiddenState.__keys);
useDialogState.__keys = keys;

exports.useDialogState = useDialogState;
