import { createContext } from 'react';

export type DragMeta = {
  columnId: string;
  cardId: string;
}

type DragContextType = {
  dragMeta: DragMeta | null; // how to type it in general way?
  setDragMeta: (dragMeta: DragMeta) => void
};

export const DragContext = createContext<DragContextType>({
  dragMeta: null,
  setDragMeta: () => {},
});
