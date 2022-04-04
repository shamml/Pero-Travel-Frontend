import React from 'react';
import styles from './styles.module.css';
import bgAboutUs from '../../../../assets/AboutUs/Rectangle4.jpg';

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <img src={bgAboutUs} alt="bgAboutUs" />
      <div className={styles.aboutUsContent}>
        <div className={styles.aboutUsBlock}>
          <div className={styles.aboutUsTitle}>О нас</div>
          <div className={styles.aboutUsTextPartOne}>
            PeroTravel - Первый онлайн-сервис по бронированию экскурсий без
            очередей и операторов. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </div>
          <div className={styles.aboutUsTextPartTwo}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
