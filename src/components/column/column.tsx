import React from 'react';
import styles from './column.module.css'
import { ColumnType } from '../../store';
import { Card } from '../card/card';
import { Button } from '../button/button';
import { Editable } from '../editable/editable';

type Props = {
  column: ColumnType;
}

export const Column = (props: Props) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
  }

  const handleTitleChange = (title: string) => {
    console.log('new title: ', title);
    setIsEditing(false);
  }

  return (
    <div className={styles.column}>
      <div className={styles.buttons}>
        <Button title="Edit" icon="✏️" onClick={handleEditClick} />
        <Button title="Delete" icon="🗑" />
      </div>

      <Editable text={props.column.title} onChange={handleTitleChange} isEditing={isEditing}>
        <h2 className={ styles.header }>{props.column.title}</h2>
      </Editable>


      {props.column.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}

      <Button>+ Add card</Button>
    </div>
  );
}
