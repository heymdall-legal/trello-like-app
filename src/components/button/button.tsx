import React from 'react';
import { combineClasses } from '../../utils';
import styles from './button.module.css';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  icon?: string;
  size?: 'small' | 'medium';
};

export const Button = ({ icon, size = 'medium', ...props }: Props) => {
  const className = combineClasses(
    styles.button,
    props.className,
    size === 'small' && styles.small,
    size === 'medium' && styles.medium,
    icon && styles.icon,
  );
  return (
    <button
      className={className}
      type="button"
      {...props}
      children={icon || props.children}
    />
  );
};
