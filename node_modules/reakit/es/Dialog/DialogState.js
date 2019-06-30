import 'reakit-utils/warning';
import 'react';
import 'reakit-utils/useId';
import 'reakit-utils/useSealedState';
import { useHiddenState } from '../Hidden/HiddenState.js';

function useDialogState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  return useHiddenState(initialState);
}
var keys = [].concat(useHiddenState.__keys);
useDialogState.__keys = keys;

export { useDialogState };
