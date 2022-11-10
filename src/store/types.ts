export type CardType = {
  id: string;
  text: string;
}

export type ColumnType = {
  id: string;
  title: string;
  cards: CardType[];
}

export type ApplicationState = {
  columns: ColumnType[];
}
