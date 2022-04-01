import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Carousel from './Carousel';
import Gallery from '../HomePage/Gallery/Gallery';
import styles from './styles.module.css';
import TypesOf from './TypesOfExcursions/TypesOf';
import ContactUs from './ContactUs/ContactUs';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Carousel />
      <AboutUs />
      <TypesOf />
      <Gallery />
      <ContactUs />
    </div>
  );
};

export default HomePage;
