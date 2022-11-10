import React from 'react';
import { combineClasses, useOnClickOutside } from '../../utils';
import styles from './editable.module.css';

type Props = {
  text: string;
  onChange: (text: string) => void;
  isEditing: boolean;
  children: React.ReactElement;
}

export const Editable = (props: Props) => {
  const [text, setText] = React.useState(props.text);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    switch (event.key) {
      case 'Enter': {
        event.preventDefault();
        event.currentTarget.blur();
        props.onChange(text);
        break;
      }
      case 'Escape': {
        event.preventDefault();
        event.currentTarget.blur();
        setText(props.text);
      }
    }
  };

  useOnClickOutside(textareaRef, () => {
    props.onChange(text);
  });

  React.useLayoutEffect(() => {
    if (!textareaRef.current) {
      return;
    }
    textareaRef.current.style.height = "inherit"; // reset height, otherwise it will not shrink if text is deleted
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, [text, props.isEditing]);

  React.useEffect(() => {
    if (props.isEditing) {
      textareaRef.current?.focus();
      textareaRef.current?.select()
    }
  }, [props.isEditing]);

  return (
    <div>
      {!props.isEditing && React.cloneElement(props.children, {
        children: props.text,
      })}
      {props.isEditing && (
        <textarea
          className={combineClasses(styles.textarea, props.children.props.className)}
          value={text}
          rows={1}
          ref={textareaRef}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
        />
      )}
    </div>
  )
}
