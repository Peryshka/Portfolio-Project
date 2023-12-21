import './App.module.scss';
import styles from './App.module.scss';
import {Routes, Link, Route, Navigate} from 'react-router-dom';
import Projects from "./pages/Projects";
import Skills from "./pages/skills";
import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import Search from "./pages/Search";
import Resume from "./components/Resume";
import DetailSkill from "./pages/skills/[Slug]";
import DetailProject from "./pages/Projects/[Slug]";
import DetailExperience from "./pages/Experiences/[Slug]";
import common from './assets/styles/common.module.scss';
import clsx from 'clsx';
import MainHeader from "./components/header2";
import NameLastname from "./pages/Name-lastname";
import Education from "./pages/Education";

function App() {
  return (
    <div className={styles['main-layout']}>
      <div className={styles["header"]}>
        <div className={common.container}>
         <MainHeader />
        </div>
      </div>
     <div className={clsx(common['container'], styles['page-indent'])}>
       <Routes>
         <Route path={'*'} element={<Navigate to="/" replace  /> }/>
         <Route path={'/'} element={<Home />}/>
         <Route path={'/name'} element={<NameLastname />}/>
         <Route path={'/skills/'}>
           <Route index element={<Skills />}/>
           <Route path={':slug'} element={<DetailSkill />}/>
         </Route>
         <Route path={'/projects'} >
           <Route index element={<Projects /> }/>
           <Route path={':slug'} element={<DetailProject />}/>
         </Route>
         <Route path={'/experiences'} >
           <Route index element={<Experiences /> }/>
           <Route path={':slug'} element={<DetailExperience />}/>
         </Route>
         <Route path={'/education'} element={<Education />}/>
         <Route path={'/search'} element={<Search />}/>
         <Route path={'/resume'} element={<Resume /> }/>
       </Routes>
     </div>
    </div>
  );
}


export default App;
