import React from 'react';
import styles from './styles.module.scss';
import {Link, Outlet} from 'react-router-dom';


const MainHeader = () => {
  return (
    <>
      <header className={styles.mainWrap}>
        <div className={styles.logo}>
          <Link to="/name" className={styles.logoLink}>
            <i className={styles.name}/>
            <h5 className={styles.title}>Name LASTNAME</h5>
          </Link>
        </div>
        <nav className={styles.listWrap}>
          <ul className={styles.mainList}>
            <li className={styles.list}>
              <Link to="/skills" className={styles.wrap}>
                <i className={styles.skills}/>
                <span className={styles.menu}>Skills</span>
              </Link>
            </li>
            <li className={styles.list}>
              <Link to="/projects" className={styles.wrap}>
                <i className={styles.projects}/>
                <span className={styles.menu}>Projects</span>
              </Link>
            </li>
            <li className={styles.list}>
              <Link to="/experiences" className={styles.wrap}>
                <i className={styles.experiences}/>
                <span className={styles.menu}>Experiences</span>
              </Link>
            </li>
            <li className={styles.list}>
              <Link to="/education" className={styles.wrap}>
                <i className={styles.education}/>
                <span className={styles.menu}>Education</span>
              </Link>
            </li>
            <li className={styles.list}>
              <Link to="/resume" className={styles.wrap}>
                <i className={styles.resume}/>
                <span className={styles.menu}>Resume</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.search}>
          <Link to="/search">
            <i className={styles.searchIcon}/>
          </Link>
          <i className={styles.themeIcon}/>
        </div>
      </header>
    </>
  )
}

export default MainHeader;

