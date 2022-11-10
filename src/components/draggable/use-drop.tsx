import React, { useCallback, useContext, useEffect } from 'react';
import { DragContext, DragMeta } from './drag-context';

type Params = {
  canDrop: (dragMeta: DragMeta) => boolean;
  onDrop: (dragMeta: DragMeta) => void;
};

export const useDrop = ({ canDrop, onDrop }: Params) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const dragContext = useContext(DragContext);
  const [isOver, setIsOver] = React.useState(false);

  const handleDragEnter = useCallback(() => {
    if (dragContext.dragMeta && canDrop(dragContext.dragMeta)) {
      setIsOver(true);
    }
  }, [dragContext.dragMeta, canDrop]);

  const handleDragLeave = useCallback((e: DragEvent) => {
    if (ref.current && !ref.current.contains(e.relatedTarget as Node)) {
      setIsOver(false);
    }
  }, []);

  const handleDrop = useCallback(() => {
    setIsOver(false);
    if (dragContext.dragMeta) {
      onDrop(dragContext.dragMeta);
    }
  }, [dragContext.dragMeta, onDrop]);

  const handleDragOver = useCallback((e: DragEvent) => {
    if (dragContext.dragMeta && canDrop(dragContext.dragMeta)) {
      e.preventDefault();
    }
  }, [dragContext.dragMeta, canDrop]);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('dragenter', handleDragEnter);
      element.addEventListener('dragleave', handleDragLeave);
      element.addEventListener('drop', handleDrop);
      element.addEventListener('dragover', handleDragOver);
    }
    return () => {
      if (element) {
        element.removeEventListener('dragenter', handleDragEnter);
        element.removeEventListener('dragleave', handleDragLeave);
        element.removeEventListener('drop', handleDrop);
        element.removeEventListener('dragover', handleDragOver);
      }
    }
  }, [handleDragEnter, handleDragLeave, handleDragOver, handleDrop]);

  return [ref, isOver] as const;
}
