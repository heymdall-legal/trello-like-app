import React, { useReducer } from 'react';
import { StateContext } from './context';
import { initialState, reducer } from './reducer';

export const StateProvider = (props: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={ {state, dispatch} }>
      {props.children}
    </StateContext.Provider>
  );
}
