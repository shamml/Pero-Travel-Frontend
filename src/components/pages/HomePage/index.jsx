import React from 'react';
import HomeBlock from './HomeBlock';
import Main from '../../Main';
import AboutUs from './AboutUs/AboutUs';
import Gallery from '../HomePage/Gallery/Gallery';
import styles from './styles.module.css';
import Popular from './Poular/Popular';
import Reviews from './Reviews/Reviews';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <HomeBlock/>
      <Popular />
      <Main />
      <AboutUs />
      <Gallery />
      <Reviews />
    </div>
  )
}

export default HomePage