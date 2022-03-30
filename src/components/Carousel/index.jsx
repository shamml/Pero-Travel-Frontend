import React from 'react';
import styles from './styles.module.css';
import face from '../../assets/homepage/Face.svg';
import insta from '../../assets/homepage/Insta.svg';
import vector from '../../assets/homepage/Vector.svg';

function Carousel() {
  return (
    <div className={styles.carouselGround}>
      <div className={styles.carouselMain}>
        <div className={styles.carouselInfo}>
          <div className={styles.carouselTextOne}>ПУТЕШЕСТВУЙ</div>
          <div className={styles.carouselTextTwo}>вместе с</div>
          <div className={styles.carouselTextThree}>PERO TRAVEL</div>
          <div className={styles.carouselButton}>
            <button>К экскурсиям</button>
          </div>
          <div className={styles.socialNetwork}>
            <img
              className={styles.carouselFacebook}
              src={face}
              alt="facebook"
            />
            <img
              className={styles.carouselInstagram}
              src={insta}
              alt="instagram"
            />
            <img
              className={styles.carouselVkontakte}
              src={vector}
              alt="vkontakte"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
