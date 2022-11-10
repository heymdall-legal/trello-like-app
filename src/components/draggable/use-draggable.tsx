import React, { useCallback, useContext, useEffect } from 'react';
import { DragContext, DragMeta } from './drag-context';

// type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
//   getDragMeta: () => DragMeta;
// };

type Params = {
  dragMeta: DragMeta
};

export const useDraggable = ({ dragMeta }: Params) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const dragContext = useContext(DragContext);

  const handleDragStart = useCallback(() => {
    dragContext.setDragMeta(dragMeta);
  }, [dragContext, dragMeta]);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      element.addEventListener('dragstart', handleDragStart)
    }

    return () => {
      if (element) {
        element.removeEventListener('dragstart', handleDragStart);
      }
    }
  }, [handleDragStart]);

  return ref;
}
