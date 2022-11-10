import React, { createContext } from 'react';
import { ApplicationState } from './types';
import { initialState } from './reducer';
import { AnyAction } from './actions';

type ContextType = {
  state: ApplicationState;
  dispatch: React.Dispatch<AnyAction>;
};

export const StateContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => {},
})
