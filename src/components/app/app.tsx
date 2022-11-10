import React from 'react';
import styles from './app.module.css';
import { addColumn, useStateDispatch, useStateSelector } from '../../store';
import { Column } from '../column/column';
import { Button } from '../button/button';

function App() {
  const dispatch = useStateDispatch();
  const columns = useStateSelector((state) => state.columns);

  const handleAddColumnClick = () => {
    dispatch(addColumn());
  };

  return (
    <div className={ styles.app }>
      { columns.map((column) => (
        <Column key={ column.id } column={column} />
      ))}

      <Button onClick={handleAddColumnClick}>+ Add column</Button>
    </div>
  );
}

export default App;
