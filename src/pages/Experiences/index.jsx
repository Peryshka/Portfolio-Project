import React from 'react';
import styles from './styles.module.scss';
import SearchBar from "../../components/search-bar";
import DetailExperience from './detail-experience';


const Experiences = () => {
  return (
    <div>
      <SearchBar
        title="Experiences"
      />
      <DetailExperience
        link={'https://riadhadrani.github.io/slick-portfolio-svelte/experience/open-sourcer'}
          title={'Open Source Developer'}
          date={'December 2023 - Present - 1 day'}
          description={'Creating awesome tools for developers.'}
      />
    </div>
  )
}


export default Experiences;

