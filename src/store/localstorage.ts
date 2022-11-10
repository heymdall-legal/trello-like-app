const LOCAL_STORAGE_KEY = 'trello-app-state';

export function loadState<T>(): T | undefined {
  const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (serializedState === null) {
    return undefined;
  }

  return JSON.parse(serializedState);
}

export function saveState(state: unknown) {
  const serializedState = JSON.stringify(state);
  localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
}
