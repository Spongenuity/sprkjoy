'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');

var PortalContext = React.createContext(typeof document !== "undefined" ? document.body : null);
function Portal(_ref) {
  var children = _ref.children;
  // if it's a nested portal, context is the parent portal
  // otherwise it's document.body
  var context = React.useContext(PortalContext);

  var _React$useState = React.useState(function () {
    if (typeof document !== "undefined") {
      var portal = document.createElement("div");
      portal.className = Portal.__className;
      return portal;
    } // ssr


    return null;
  }),
      container = _React$useState[0];

  React.useEffect(function () {
    if (!container || !context) return undefined;
    context.appendChild(container);
    return function () {
      context.removeChild(container);
    };
  }, [container, context]);

  if (container) {
    var portal = ReactDOM.createPortal(children, container);
    return React.createElement(PortalContext.Provider, {
      value: container
    }, portal);
  } // ssr


  return null;
}
Portal.__className = "__reakit-portal";
Portal.__selector = "." + Portal.__className;

exports.Portal = Portal;
