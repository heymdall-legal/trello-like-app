import React from 'react';
import styles from './app.module.css';
import { useStateSelector } from '../../store';
import { Column } from '../column/column';

function App() {
  const columns = useStateSelector((state) => state.columns);

  return (
    <div className={ styles.app }>
      { columns.map((column) => (
        <Column key={ column.id } column={column} />
      ))}
    </div>
  );
}

export default App;
