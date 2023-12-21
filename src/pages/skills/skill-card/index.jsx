import React from 'react';
import styles from './styles.module.scss';
import BoxLayout from "../../../components/box-layout";

const SkillCard = (props) => {
  const {
    label,
    img
  } = props;
  return(
   <BoxLayout className={styles['skill-card']}>
     <h3 className={styles['title']}>{label}</h3>
     <div className={styles["image-wrap"]}>
       <img className={styles['image']} src={img} alt="image" />
     </div>
   </BoxLayout>
  )
}

export default SkillCard;