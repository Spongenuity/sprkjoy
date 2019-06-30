'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');

var useBox = createHook.createHook({
  name: "Box",
  keys: ["unstable_system"]
});
var Box = createComponent.createComponent({
  as: "div",
  useHook: useBox
});

exports.Box = Box;
exports.useBox = useBox;
