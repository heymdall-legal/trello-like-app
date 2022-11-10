import React, { useEffect, useReducer } from 'react';
import { StateContext } from './context';
import { initialState, reducer } from './reducer';
import { saveState } from './localstorage';

export const StateProvider = (props: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    saveState(state);
  });

  return (
    <StateContext.Provider value={ {state, dispatch} }>
      {props.children}
    </StateContext.Provider>
  );
}
