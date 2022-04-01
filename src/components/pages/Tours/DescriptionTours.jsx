import React from 'react';
import styles from './styles.module.css';
import desk from '../../../assets/headerTours/1.svg';
import old from '../../../assets/headerTours/old.png';
import child from '../../../assets/headerTours/child.png';
import time from '../../../assets/headerTours/time.png';

const DescriptionTours = () => {
  return (
    <div className={styles.deskTrip}>
      <div className={styles.deskTripMain}>
        <div className={styles.deskBlock}>
          <img src={desk} alt="#" />
        </div>

        <div className={styles.tripCount}>
          <div className={styles.tripCountMain}>
            <div className={styles.personCount}>
              <div className={styles.coinImage}>
                <img src={old} alt="#" />
              </div>
            </div>
            <div className={styles.personCount}>
              <div className={styles.coinImage}>
                <img src={child} alt="#" />
              </div>
            </div>
            <div className={styles.personCount}>
              <div className={styles.coinImage}>
                <img src={time} alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionTours;
