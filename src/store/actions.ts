export function addCard(columnId: string) {
  return {
    type: 'ADD_CARD' as const,
    payload: {
      columnId,
    },
  };
}

export type AddCardAction = ReturnType<typeof addCard>;

export function addColumn() {
  return {
    type: 'ADD_COLUMN' as const,
  };
}

export type AddColumnAction = ReturnType<typeof addColumn>;

export function deleteCard(columnId: string, cardId: string) {
  return {
    type: 'DELETE_CARD' as const,
    payload: {
      columnId,
      cardId,
    },
  };
}

export type DeleteCardAction = ReturnType<typeof deleteCard>;

export function deleteColumn(columnId: string) {
  return {
    type: 'DELETE_COLUMN' as const,
    payload: {
      columnId,
    },
  };
}

export type DeleteColumnAction = ReturnType<typeof deleteColumn>;

export type AnyAction = AddCardAction
  | AddColumnAction
  | DeleteCardAction
  | DeleteColumnAction;
