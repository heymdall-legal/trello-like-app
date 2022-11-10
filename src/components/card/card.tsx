import React from 'react';
import { CardType } from '../../store';
import styles from './card.module.css';
import { Button } from '../button/button';

type Props = {
  card: CardType;
}

export const Card = (props: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.buttons}>
        <Button title="Edit" icon="✏️" size="small" />
        <Button title="Delete" icon="🗑" size="small" />
      </div>

      {props.card.text}
    </div>
  );
}
