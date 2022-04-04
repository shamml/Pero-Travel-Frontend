import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Carousel from './Carousel';
import Gallery from '../HomePage/Gallery/Gallery';
import styles from './styles.module.css';
import TypesOf from './TypesOfExcursions/TypesOf';
import ContactUs from './ContactUs/ContactUs';
import Popular from './Popular/Popular';
import Reviews from './Reviews/Reviews';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Carousel />
      <Popular />
      <AboutUs />
      <TypesOf />
      <Gallery />
      <Reviews />
      <ContactUs />
    </div>
  );
};

export default HomePage;
