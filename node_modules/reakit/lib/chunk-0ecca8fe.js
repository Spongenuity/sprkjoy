'use strict';

function formatInputName(name, separator) {
  if (separator === void 0) {
    separator = ".";
  }

  if (Array.isArray(name)) return name.join(separator);
  return name;
}

exports.formatInputName = formatInputName;
