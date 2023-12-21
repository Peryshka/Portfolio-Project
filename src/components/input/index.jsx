import React from 'react';
import styles from './styles.module.scss';

const Input = (props) => {
  const {
    value,
    onChange,
    type = 'text',
    placeholder
  } = props;
  return (
    <div className={styles["input-wrap"]}>
      <input
        className={styles["input"]}
        placeholder={placeholder}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  )
}

export default Input;