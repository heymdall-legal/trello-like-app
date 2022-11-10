import React from 'react';
import styles from './column.module.css'
import {
  addCard,
  changeColumnTitle,
  ColumnType,
  deleteColumn,
  useStateDispatch
} from '../../store';
import { Card } from '../card/card';
import { Button } from '../button/button';
import { Editable } from '../editable/editable';
import { useDrop } from '../draggable/use-drop';
import { combineClasses } from '../../utils';

type Props = {
  column: ColumnType;
}

export const Column = (props: Props) => {
  const dispatch = useStateDispatch();
  const [isEditing, setIsEditing] = React.useState(props.column.title === '');
  const [dropZoneRef, isOver] = useDrop({
    canDrop: (dragMeta) => dragMeta.columnId !== props.column.id,
    onDrop: (dragMeta) => {
      console.log('drop', dragMeta);
    }
  });

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleTitleChange = (title: string) => {
    dispatch(changeColumnTitle({ columnId: props.column.id, title: title }));
    setIsEditing(false);
  };

  const handleAddCardClick = () => {
    dispatch(addCard({ columnId: props.column.id }));
  };

  const handleDeleteColumn = () => {
    dispatch(deleteColumn({ columnId: props.column.id }));
  };

  return (
    <div
      className={combineClasses(styles.column, isOver && styles.dragOver)}
      ref={dropZoneRef}
    >
      <div className={styles.buttons}>
        <Button title="Edit" icon="✏️" onClick={handleEditClick} />
        <Button title="Delete" icon="🗑" onClick={handleDeleteColumn} />
      </div>

      <Editable text={props.column.title} onChange={handleTitleChange} isEditing={isEditing}>
        <h2 className={ styles.header }>{props.column.title}</h2>
      </Editable>


      {props.column.cards.map((card) => (
        <Card key={card.id} card={card} columnId={props.column.id} />
      ))}

      <Button onClick={ handleAddCardClick }>+ Add card</Button>
    </div>
  );
}
