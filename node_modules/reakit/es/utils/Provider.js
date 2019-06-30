import { warning } from 'reakit-utils/warning';
import 'react';
import 'reakit-utils/useId';
import 'reakit-system/SystemProvider';
export { Provider } from '../Provider.js';

process.env.NODE_ENV !== "production" ? warning(false, undefined, "Importing `Provider` from `reakit/utils` or `reakit/utils/Provider` is deprecated.", "Please, import `Provider` from `reakit` or `reakit/Provider` instead") : void 0;
