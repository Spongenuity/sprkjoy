import { createContext, useContext, useState, useEffect, createElement } from 'react';
import { createPortal } from 'react-dom';

var PortalContext = createContext(typeof document !== "undefined" ? document.body : null);
function Portal(_ref) {
  var children = _ref.children;
  // if it's a nested portal, context is the parent portal
  // otherwise it's document.body
  var context = useContext(PortalContext);

  var _React$useState = useState(function () {
    if (typeof document !== "undefined") {
      var portal = document.createElement("div");
      portal.className = Portal.__className;
      return portal;
    } // ssr


    return null;
  }),
      container = _React$useState[0];

  useEffect(function () {
    if (!container || !context) return undefined;
    context.appendChild(container);
    return function () {
      context.removeChild(container);
    };
  }, [container, context]);

  if (container) {
    var portal = createPortal(children, container);
    return createElement(PortalContext.Provider, {
      value: container
    }, portal);
  } // ssr


  return null;
}
Portal.__className = "__reakit-portal";
Portal.__selector = "." + Portal.__className;

export { Portal };
