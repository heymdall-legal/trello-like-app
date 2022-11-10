import { ApplicationState } from './types';

export type AnyAction = {
  type: string;
  payload: unknown;
};

export const initialState: ApplicationState = {
  columns: [],
};

export function reducer(state: ApplicationState, action: AnyAction) {
  return state;
}
