import React, { createContext } from 'react';
import { ApplicationState } from './types';
import { AnyAction, initialState } from './reducer';

type ContextType = {
  state: ApplicationState;
  dispatch: React.Dispatch<AnyAction>;
};

export const StateContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => {},
})
