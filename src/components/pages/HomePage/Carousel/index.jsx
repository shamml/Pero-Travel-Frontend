import React from 'react';
import styles from './styles.module.css';
import face from '../../../../assets/homepage/Face.svg';
import insta from '../../../../assets/homepage/Insta.svg';
import vkontakte from '../../../../assets/homepage/Vector.svg';
import sceondTitle from '../../../../assets/homepage/PERO TRAVEL.svg';
import middle from '../../../../assets/homepage/middle.png';
import arrow from '../../../../assets/arrow.svg';
import { Link } from 'react-router-dom';

function Carousel() {
  return (
    <div className={styles.firstBlockBg}>
      <div className={styles.firstBlockContent}>
        <div className={styles.firstBlockLeft}>
          <div className={styles.firstTitle}>ПУТЕШЕСТВУЙ</div>
          <div className={styles.middleTitle}>
            <img src={middle} alt="middleTitle" />
          </div>
          <div className={styles.secondTitle}>
            <img src={sceondTitle} alt="secontdTitle" />
          </div>
          <div className={styles.carouselButton}>
            <Link to="excursions">
              <button style={{cursor:"pointer"}}>
                К экскурсиям <img src={arrow} alt="arrow" />
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.firstBlockRight}>
          <img src={vkontakte} alt="vkontakte" />
          <img src={insta} alt="instagram" />
          <img src={face} alt="facebook" />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
