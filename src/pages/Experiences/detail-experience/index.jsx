import React from 'react';
import styles from './styles.module.scss';
import sourceImg from '../../../assets/images/portfolioImg1.svg';
import ToolTipComp from "../../../components/tooltip";
import BoxLayout from "../../../components/box-layout";

const DetailExperience = (props) => {
  const {
    link,
    title,
    date,
    description,
  } = props;
  return (
    <>
      <BoxLayout className={styles['boxLayout']}>
        <div className={styles['experience-wrap']}>
          <div>
            <a href={link}>
              <img src={sourceImg} alt="image" className={styles['image-wrap']}/>
            </a>
          </div>
          <div className={styles['detail-wrap']}>
            <h3 className={styles['title']}>{title}</h3>
            <div className={styles['tooltip-wrap']}>
              <ToolTipComp
                to="https://riadhadrani.github.io/slick-portfolio-svelte/experience/open-sourcer"
                type="Company"
                className={styles['tooltip']}
              />
              <ToolTipComp
                to="https://riadhadrani.github.io/slick-portfolio-svelte/experience/open-sourcer"
                type="Location"
                className={styles['tooltip']}
              />
              <ToolTipComp
                to="https://riadhadrani.github.io/slick-portfolio-svelte/experience/open-sourcer"
                type="Contract"
                className={styles['tooltip']}
              />
            </div>
            <p className={styles['date']}>{date}</p>
            <p>{description}</p>
            <div className={styles['prog-lang-wrap']}>
              <ToolTipComp
                to="https://riadhadrani.github.io/slick-portfolio-svelte/experience/open-sourcer"
                type="Javascript"
                className={styles['tooltip']}
              />
              <ToolTipComp
                to="https://riadhadrani.github.io/slick-portfolio-svelte/experience/open-sourcer"
                type="Typescript"
                className={styles['tooltip']}
              />
            </div>
          </div>
        </div>
      </BoxLayout>
    </>
  )
}

export default DetailExperience;

