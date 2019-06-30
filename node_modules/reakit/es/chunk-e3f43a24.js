function getTabId(stopId, prefix, suffix) {
  return [prefix, stopId, suffix].filter(Boolean).join("-");
}
function getTabPanelId(stopId, prefix) {
  return getTabId(stopId, prefix, "panel");
}

export { getTabPanelId as a, getTabId as g };
