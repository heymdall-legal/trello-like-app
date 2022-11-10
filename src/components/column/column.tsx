import React from 'react';
import styles from './column.module.css'
import { ColumnType } from '../../store';
import { Card } from '../card/card';
import { Button } from '../button/button';

type Props = {
  column: ColumnType;
}

export const Column = (props: Props) => {
  return (
    <div className={styles.column}>
      <div className={styles.buttons}>
        <Button title="Edit" icon="✏️" />
        <Button title="Delete" icon="🗑" />
      </div>

      <h2 className={ styles.header }>{props.column.title}</h2>

      {props.column.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}

      <Button>+ Add card</Button>
    </div>
  );
}
