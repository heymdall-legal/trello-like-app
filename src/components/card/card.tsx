import React from 'react';
import { CardType, changeCardText, deleteCard, useStateDispatch } from '../../store';
import styles from './card.module.css';
import { Button } from '../button/button';
import { Editable } from '../editable/editable';
import { useDraggable } from '../draggable/use-draggable';

type Props = {
  card: CardType;
  columnId: string;
}

export const Card = (props: Props) => {
  const dragRef = useDraggable({
    dragMeta: { cardId: props.card.id, columnId: props.columnId },
  });
  const dispatch = useStateDispatch();
  const [isEditing, setIsEditing] = React.useState(props.card.text === '');

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleTitleChange = (title: string) => {
    dispatch(changeCardText({ columnId: props.columnId, cardId: props.card.id, text: title }));
    setIsEditing(false);
  };

  const handleDeleteCard = () => {
    dispatch(deleteCard({ columnId: props.columnId, cardId: props.card.id }));
  };

  return (
    <div className={styles.card} ref={dragRef} draggable={true}>
      <div className={styles.buttons}>
        <Button title="Edit" icon="✏️" size="small" onClick={handleEditClick}/>
        <Button title="Delete" icon="🗑" size="small" onClick={handleDeleteCard}/>
      </div>

      <Editable text={props.card.text} onChange={handleTitleChange} isEditing={isEditing}>
        <p className={styles.text}>{props.card.text}</p>
      </Editable>
    </div>
  );
}
