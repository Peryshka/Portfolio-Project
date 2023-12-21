import React from 'react';
import styles from './styles.module.scss';
import {ReactComponent as LinkIcon} from "../../assets/icons/infinity-icon.svg";

const CardLink = (props) => {
  const {
    to,
    label
  } = props;
  return (
    <a target='_blank' href={to} data-label={label} className={styles['card-link']}>
      <LinkIcon />
    </a>
  )
}


export default CardLink;