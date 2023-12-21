import React from 'react';
import styles from './styles.module.scss';
import Chip from "../../components/chip";
import SearchBar from "../../components/search-bar";
import PortfolioCard from "../../components/portfolio-card";
import portfolioImg1 from '../../assets/images/portfolioImg1.svg';
import portfolioImg2 from '../../assets/images/portfolioImg2.png';
import ts from '../../assets/images/ts.png';


const Projects = () => {
  return (
    <div className={styles['project-wrap']}>
      <div className={styles.wrap}>
      </div>
      <SearchBar
        title="Projects"
      />
      <div className={styles['chip-wrap']}>
        <Chip
          className={styles.chip}
          label="Typescript"
        />
        <Chip
          className={styles.chip}
          label="Sass"
        />
        <Chip
          className={styles.chip}
          label="Svelte"
        />
      </div>
      <div className={styles['portfolio-wrap']}>
        <PortfolioCard
          img={portfolioImg1}
          title="Slick Portfolio"
          template="Website Template"
          quantityDay="1 day"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempore non dolores voluptatibus vitae praesentium aperiam,
          iure laboriosam repellendus sunt explicabo pariatur totam enim,
          nihil animi quisquam. Sit vero quod laborum!"
          image={ts}
        />

        <PortfolioCard
          img={portfolioImg2}
          title="Slick Portfolio"
          template="Website Template"
          quantityDay="1 day"
          description="A Vercel-like developer portfolio website template made with Typescript and SvelteKit."
          image={ts}
        />
      </div>
      {/*<CardLink*/}
      {/*to='https://www.google.com'*/}
      {/*label='Google'*/}
      {/*/>*/}
      {/*<ToolTipComp*/}
      {/*to="https//:yandex.ru"*/}
      {/*label="label"*/}
      {/*/>*/}
    </div>
  )
}

export default Projects;