export const combineClasses = (...classes: (string | undefined | boolean)[]) => {
  return classes.filter(Boolean).join(' ');
}
