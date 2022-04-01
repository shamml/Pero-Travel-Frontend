import React from 'react';
import Main from '../../Main';
import AboutUs from './AboutUs/AboutUs';
import Carousel from './Carousel';
import Gallery from '../HomePage/Gallery/Gallery';
import styles from './styles.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Carousel/>
      <Main />
      <AboutUs />
      <Gallery />
    </div>
  )
}

export default HomePage