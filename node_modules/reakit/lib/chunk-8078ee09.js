'use strict';

function getTabId(stopId, prefix, suffix) {
  return [prefix, stopId, suffix].filter(Boolean).join("-");
}
function getTabPanelId(stopId, prefix) {
  return getTabId(stopId, prefix, "panel");
}

exports.getTabId = getTabId;
exports.getTabPanelId = getTabPanelId;
