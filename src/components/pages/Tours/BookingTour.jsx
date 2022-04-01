import React from 'react';
import styles from './styles.module.css';
import rocks from '../../../assets/headerTours/rocks.png';
import reserve from '../../../assets/headerTours/reserve.png';
import calImg from '../../../assets/headerTours/calImg.svg';
import two from '../../../assets/headerTours/two.svg';

const BookingTour = () => {
  return (
    <div className={styles.mainReserve}>
      <div className={styles.reserveBlock}>
        <div className={styles.reserveImage}>
          <img src={rocks} alt="#" />
        </div>

        <div>
          <div className={styles.actuallyReserv}>
            <img src={reserve} alt="#" />
          </div>
          <div className={styles.termsMain}>
            <div className={styles.terms}>
              <div className={styles.date}>10 ноября 2021</div>
              <div className={styles.calImg}>
                <img src={calImg} alt="#" />
              </div>
            </div>
            <div className={styles.terms}>
              <div className={styles.date}>5 взрослых</div>
              <div className={styles.calImg}>
                <img src={two} alt="#" />
              </div>
            </div>
            <div className={styles.terms}>
              <div className={styles.date}>Количество детей</div>
              <div className={styles.calImg}>
                <img src={two} alt="#" />
              </div>
            </div>
            <div className={styles.carouselButton}>
              <button>Забронировать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingTour;
