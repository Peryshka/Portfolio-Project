import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styles from './styles.module.scss';
import {SKILLS_BY_NAME} from '../mock_data';

const DetailSkill = () => {
  const [skillByName, setSkillByName] = useState(null);
  const {slug} = useParams();
  useEffect(() => {
    setSkillByName(SKILLS_BY_NAME(slug))
  }, [])

  if(!skillByName) {
    return null;
  }

  return (
    <div className={styles['detail-page-wrap']}>
      <h1 className={styles['title']}>{skillByName.label}</h1>
      <p className={styles['description']}>
        {skillByName.description}
      </p>
    </div>
  )
}

export default DetailSkill;

