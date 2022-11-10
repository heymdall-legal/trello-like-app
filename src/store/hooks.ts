import React from 'react';
import { StateContext } from './context';
import { ApplicationState } from './types';

export function useStateDispatch() {
  return React.useContext(StateContext).dispatch;
}

export function useStateSelector<T>(selector: (state: ApplicationState) => T) {
  return selector(React.useContext(StateContext).state);
}
