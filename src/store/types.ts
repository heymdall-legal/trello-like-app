export type Card = {
  id: string;
  text: string;
}

export type Column = {
  id: string;
  title: string;
  cards: Card[];
}

export type ApplicationState = {
  columns: Column[];
}
