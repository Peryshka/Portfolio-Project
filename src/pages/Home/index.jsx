import React from 'react';
import styles from './styles.module.scss';
import SkillsSlider from "./skills-slider";

const Home = () => {
  return(
    <div className={styles['home-page-wrap']}>
      <div className={styles['main-info']}>
      Lorem sdjfg sdfkjhsdls sghjsflghsfg
      </div>
      <div className={styles['slider']}>
        <SkillsSlider />
      </div>
    </div>
  )
}

export default Home;