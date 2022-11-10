import React from 'react';
import { CardType } from '../../store';
import styles from './card.module.css';

type Props = {
  card: CardType;
}

export const Card = (props: Props) => {
  return (
    <div className={ styles.card }>
      {props.card.text}
    </div>
  );
}
