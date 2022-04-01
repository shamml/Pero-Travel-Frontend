import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Carousel from './Carousel';
import Gallery from '../HomePage/Gallery/Gallery';
import styles from './styles.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Carousel />
      <AboutUs />
      <Gallery />
    </div>
  );
};

export default HomePage;
