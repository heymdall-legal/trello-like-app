import React from 'react';
import { CardType } from '../../store';
import styles from './card.module.css';
import { Button } from '../button/button';
import { Editable } from '../editable/editable';

type Props = {
  card: CardType;
}

export const Card = (props: Props) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleTitleChange = (title: string) => {
    console.log('new title: ', title);
    setIsEditing(false);
  }

  return (
    <div className={styles.card}>
      <div className={styles.buttons}>
        <Button title="Edit" icon="✏️" size="small" onClick={handleEditClick} />
        <Button title="Delete" icon="🗑" size="small" />
      </div>

      <Editable text={props.card.text} onChange={handleTitleChange} isEditing={isEditing}>
        <p className={styles.text}>{props.card.text}</p>
      </Editable>
    </div>
  );
}
