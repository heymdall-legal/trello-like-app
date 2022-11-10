import { ApplicationState, CardType, ColumnType } from './types';
import type { AnyAction } from './actions';
import { getRandomId } from '../utils';


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
  switch (action.type) {
    case 'ADD_CARD': {
      const { columnId } = action.payload;
      const newCard: CardType = {
        id: getRandomId(),
        text: '',
      };

      return {
        ...state,
        columns: state.columns.map(column => {
          if (column.id === columnId) {
            return {
              ...column,
              cards: [...column.cards, newCard],
            };
          }

          return column;
        }),
      }
    }
    case 'ADD_COLUMN': {
      const newColumn: ColumnType = {
        id: getRandomId(),
        title: '',
        cards: [],
      };

      return {
        ...state,
        columns: [...state.columns, newColumn],
      };
    }
    case 'DELETE_CARD': {
      const { columnId, cardId } = action.payload;

      return {
        ...state,
        columns: state.columns.map(column => {
          if (column.id === columnId) {
            return {
              ...column,
              cards: column.cards.filter(card => card.id !== cardId),
            };
          }

          return column;
        }),
      };
    }
    case 'DELETE_COLUMN': {
      const { columnId } = action.payload;

      return {
        ...state,
        columns: state.columns.filter(column => column.id !== columnId),
      };
    }
    case 'CHANGE_COLUMN_TITLE': {
      const { columnId, title } = action.payload;

      return {
        ...state,
        columns: state.columns.map(column => {
          if (column.id === columnId) {
            return {
              ...column,
              title,
            };
          }

          return column;
        }),
      }
    }
    case 'CHANGE_CARD_TEXT': {
      const { columnId, cardId, text } = action.payload;

      return {
        ...state,
        columns: state.columns.map(column => {
          if (column.id === columnId) {
            return {
              ...column,
              cards: column.cards.map(card => {
                if (card.id === cardId) {
                  return {
                    ...card,
                    text,
                  };
                }

                return card;
              }),
            };
          }

          return column;
        }),
      }
    }
    case 'MOVE_CARD_TO_COLUMN': {
      const { fromColumnId, toColumnId, cardId } = action.payload;

      const cardToMove = state.columns
        .find(column => column.id === fromColumnId)
        ?.cards.find(card => card.id === cardId);

      return {
        ...state,
        columns: state.columns.map(column => {
          if (column.id === fromColumnId) {
            return {
              ...column,
              cards: column.cards.filter(card => card.id !== cardId),
            };
          }

          if (column.id === toColumnId) {
            return {
              ...column,
              cards: [...column.cards, cardToMove!],
            };
          }

          return column;
        }),
      };
    }
  }
  return state;
}
