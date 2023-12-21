import styles from "./styles.module.scss";
import BoxLayout from "../box-layout";
import React from "react";
import Chip from "../chip";
import CardLink from "../card-link";

const PortfolioCard = (props) => {
  const  {
    description,
    image,
    img,
    quantityDay,
    template,
    title,
  } = props;

  return(
    <div className={styles["project-card"]}>
      <BoxLayout>
        <img src={img} alt=" Portfolio Image" className={styles['portfolio-img']} />
        <div className={styles['title-wrap']}>
          <h3 className={styles['title']}>{title}</h3>
          <CardLink
            to='https://www.github.com'
            label='Github'
          />

        </div>
        <div className={styles['website-template']}>
          <p className={styles['text']}>{template}</p>
          <p className={styles['text']}>{quantityDay}</p>
        </div>
        <p className={styles['description']}>
          {description}
        </p>
        <div className={styles['chip-wrap']}>
          <Chip
          label="December 2023"
          />
          <Chip
            label="now"
          />
        </div>
      </BoxLayout>
    </div>
  )
}

export default PortfolioCard;