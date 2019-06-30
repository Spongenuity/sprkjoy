import { createElement } from 'react';
import { IdProvider } from 'reakit-utils/useId';
import { SystemProvider } from 'reakit-system/SystemProvider';

function Provider(_ref) {
  var prefix = _ref.unstable_prefix,
      _ref$unstable_system = _ref.unstable_system,
      system = _ref$unstable_system === void 0 ? {} : _ref$unstable_system,
      children = _ref.children;
  return createElement(IdProvider, {
    unstable_prefix: prefix
  }, createElement(SystemProvider, {
    unstable_system: system
  }, children));
}

export { Provider };
