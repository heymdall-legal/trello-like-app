import { useEffect } from 'react';

export const combineClasses = (...classes: (string | undefined | boolean)[]) => {
  return classes.filter(Boolean).join(' ');
}

export function useOnClickOutside(ref: React.RefObject<HTMLElement>, handler: () => void) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

// probably should use something like UUID generator instead of this
export function getRandomId() {
  return Math.random().toString(36).substr(2, 9);
}
