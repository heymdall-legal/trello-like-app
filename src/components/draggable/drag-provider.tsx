import React from 'react';
import { DragContext, DragMeta } from './drag-context';

export const DragProvider = (props: React.PropsWithChildren) => {
  const [dragMeta, setDragMeta] = React.useState<DragMeta | null>(null);
  return (
    <DragContext.Provider value={{ dragMeta, setDragMeta }}>
      {props.children}
    </DragContext.Provider>
  );
}
