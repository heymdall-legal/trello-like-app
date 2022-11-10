import { ApplicationState } from './types';

export type AnyAction = {
  type: string;
  payload: unknown;
};

export const initialState: ApplicationState = {
  columns: [
    {
      id: '1',
      title: 'To do',
      cards: [
        { id: '1', text: 'implement basic state management' },
        { id: '2', text: 'create base components structure' },
        { id: '3', text: '??' },
        { id: '4', text: 'profit' },
      ],
    },
    {
      id: '2',
      title: 'In progress',
      cards: [],
    }
  ],
};

export function reducer(state: ApplicationState, action: AnyAction) {
  return state;
}
