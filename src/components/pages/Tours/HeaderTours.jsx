import React from 'react';
import styles from './styles.module.css';
import arrow from '../../../assets/arrow.svg';
import { Link } from 'react-router-dom'

const HeaderTours = () => {
  return (
      <div className={styles.headerTours}>
        <div className={styles.headerToursBlock}>
          <div>
            <div className={styles.typeTour}>Автобустный тур</div>
            <div className={styles.tourTitle}>
              ЗОЛОТОЕ КОЛЬЦО АБХАЗИИ
              <br />
              (ИЗ АДЛЕРА)
            </div>
            <div className={styles.carouselButton}>
              <Link to="/excursions">
                <button>
                  К экскурсиям <img src={arrow} alt="#" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HeaderTours;
