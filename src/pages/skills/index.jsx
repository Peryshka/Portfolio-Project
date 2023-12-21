import React from 'react';
import styles from './styles.module.scss';
import SkillCard from "./skill-card";
import SearchBar from "../../components/search-bar";
import {SKILLS} from './mock_data';
import {Link} from 'react-router-dom';

const Skills = () => {
  return (
    <div className={styles["skills-page"]}>
      <SearchBar title="Skills"/>
      <div className={styles["skills-list"]}>
        {SKILLS.map((skill,idx) => (
          <Link to={`/skills/${skill.name}`} className={styles['link']}>
            <SkillCard
              key={skill.id}
              label={skill.label}
              img={skill.image}
            />
          </Link>
          ))}
      </div>
    </div>
  )
}

export default Skills;