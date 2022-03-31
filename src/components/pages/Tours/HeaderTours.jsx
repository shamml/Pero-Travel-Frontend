import React from 'react';
import styles from './styles.module.css';
import CalendarPage from './CalendarPage';
import arrow from '../../../assets/arrow.svg';
import old from '../../../assets/headerTours/old.png';
import child from '../../../assets/headerTours/child.png';
import time from '../../../assets/headerTours/time.png';
import desk from '../../../assets/headerTours/1.svg';
import pic2 from '../../../assets/headerTours/изобр2.svg';
import cal from '../../../assets/headerTours/cal.png';
import rocks from '../../../assets/headerTours/rocks.png';
import reserve from '../../../assets/headerTours/reserve.png';
import calImg from '../../../assets/headerTours/calImg.svg';
import two from '../../../assets/headerTours/two.svg';

const HeaderTours = () => {
  return (
    <>
      <div className={styles.headerTours}>
        <div className={styles.headerToursBlock}>
          <div className={styles.headerMain}>
            <div className={styles.typeTour}>Автобустный тур</div>
            <div className={styles.tourTitle}>
              ЗОЛОТОЕ КОЛЬЦО АБХАЗИИ
              <br />
              (ИЗ АДЛЕРА)
            </div>
            <div className={styles.carouselButton}>
              <button>
                К экскурсиям <img src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////> */}
      <div className={styles.deskTrip}>
        <div className={styles.deskTripMain}>
          <div className={styles.deskBlock}>
            <img src={desk} alt="" srcset="" />
          </div>

          <div className={styles.tripCount}>
            <div className={styles.tripCountMain}>
              <div className={styles.personCount}>
                <div className={styles.coinImage}>
                  <img src={old} alt="" />
                </div>
              </div>
              <div className={styles.personCount}>
                <div className={styles.coinImage}>
                  <img src={child} alt="" />
                </div>
              </div>
              <div className={styles.personCount}>
                <div className={styles.coinImage}>
                  <img src={time} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////> */}
      <div className={styles.calendar}>
        <div className={styles.calendarBlock}>
          <div className={styles.calendarImage}>
            <img src={pic2} alt="surt" />
          </div>
          <div className={styles.calendarTrip}>
            <div className={styles.getCalendarName}>
              <img src={cal} alt="" srcset="" />
            </div>
            <div className={styles.mainCalendar}>
              <CalendarPage />
            </div>
          </div>
        </div>
      </div>
      {/* ///ОПИСАНИЕ МАРШРУТА(КАРУСЕЛЬ) */}
      -------------------------------------------
      <div className={styles.mainReserve}>
        <div className={styles.reserveBlock}>
          <div className={styles.reserveImage}>
            <img src={rocks} alt="surt" />
          </div>

          <div>
            <div className={styles.actuallyReserv}>
              <img src={reserve} alt="" srcset="" />
            </div>
            <div className={styles.termsMain}>
              <div className={styles.terms}>
                <div className={styles.date}>10 ноября 2021</div>
                <div className={styles.calImg}>
                  <img src={calImg} alt="" srcset="" />
                </div>
              </div>
              <div className={styles.terms}>
                <div className={styles.date}>5 взрослых</div>
                <div className={styles.calImg}>
                  <img src={two} alt="" srcset="" />
                </div>
              </div>
              <div className={styles.terms}>
                <div className={styles.date}>Количество детей</div>
                <div className={styles.calImg}>
                  <img src={two} alt="" srcset="" />
                </div>
              </div>
              <div className={styles.carouselButton}>
                <button>
                  Забронировать
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTours;
