import React from 'react';
import styles from './styles.module.scss';
import SkillsSlider from "../Home/skills-slider";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaStackOverflow} from "react-icons/fa";
import {MdOutlineAlternateEmail} from "react-icons/md"
import {FaYoutube} from "react-icons/fa";
import {FaSquareFacebook} from "react-icons/fa6";
import {MdAlternateEmail} from "react-icons/md";


const NameLastname = () => {
  return (
    <div className={styles.nameWrap}>
      <div className={styles.wrap}>
        <div className={styles.nameTextWrap}>
          <h1 className={styles.nameTitle}>Name LASTNAME,
          </h1>
          <p className={styles.text}>
            If the customer is very smart, he or she will be able to achieve the desired <span
            className={styles.space}/>
            result. Corrupt, things. Are the debts of the accusers forgiven, for he is the <span
            className={styles.space}/>
            most worthy? Like, exercise! He hates, indeed, never seeks what is the most <span className={styles.space}/>
            reasonable reason for rejecting those who praise him!
          </p>
        </div>
        <div className={styles.slider}>
          <SkillsSlider/>
        </div>
      </div>
      <div className={styles.icons}>
        <a href="https://www.github.com" className={styles['link']}>
          <FaGithub className={styles.svg}/>
        </a>
        <a href="https://www.linkedin.com/" className={styles['link']}>
          <FaLinkedin/>
        </a>
        <a href="https://twitter.com/" className={styles['link']}>
          <FaTwitter/>
        </a>
        <a href="https://stackoverflow.com/" className={styles['link']}>
          <FaStackOverflow/>
        </a>
        <a href="https://mail.ru/" className={styles['link']}>
          <MdAlternateEmail/>
        </a>
        <a href="https://www.youtube.com/" className={styles['link']}>
          <FaYoutube/>
        </a>
        <a href="https://www.facebook.com/" className={styles['link']}>
          <FaSquareFacebook/>
        </a>
      </div>
    </div>
  )
}

export default NameLastname;