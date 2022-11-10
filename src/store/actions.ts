export function addCard(payload: { columnId: string }) {
  return {
    type: 'ADD_CARD' as const,
    payload,
  };
}

export type AddCardAction = ReturnType<typeof addCard>;

export function addColumn() {
  return {
    type: 'ADD_COLUMN' as const,
  };
}

export type AddColumnAction = ReturnType<typeof addColumn>;

export function deleteCard(payload: { columnId: string, cardId: string }) {
  return {
    type: 'DELETE_CARD' as const,
    payload,
  };
}

export type DeleteCardAction = ReturnType<typeof deleteCard>;

export function deleteColumn(payload: { columnId: string }) {
  return {
    type: 'DELETE_COLUMN' as const,
    payload,
  };
}

export type DeleteColumnAction = ReturnType<typeof deleteColumn>;

export function changeColumnTitle(payload: { columnId: string, title: string }) {
  return {
    type: 'CHANGE_COLUMN_TITLE' as const,
    payload,
  };
}

export type ChangeColumnTitleAction = ReturnType<typeof changeColumnTitle>;

export function changeCardText(payload: { columnId: string, cardId: string, text: string }) {
  return {
    type: 'CHANGE_CARD_TEXT' as const,
    payload,
  };
}

export type ChangeCardTextAction = ReturnType<typeof changeCardText>;

export type AnyAction = AddCardAction
  | AddColumnAction
  | DeleteCardAction
  | DeleteColumnAction
  | ChangeColumnTitleAction
  | ChangeCardTextAction;
