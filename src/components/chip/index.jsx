import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

const Chip = (props) => {
  const {
   label,
    isActive,
    onClick,
    className,
    children
  } = props;
  console.log(props)

  const classes = clsx(
    styles["chip-wrap"],
    {
      [styles["active"]]:isActive,
      [className]: className
    }
  )

  return(
    <div onClick={onClick} className={classes}>
     <span className={styles["label"]}>
       {label}
     </span>
    </div>
  )
}

export default Chip;