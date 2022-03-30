import React from 'react';
import styles from './styles.module.css';
import location from '../../../assets/excursions/location.png';
import data from '../../../assets/excursions/data.png';
import contacts from '../../../assets/excursions/contacts.png';

const Excursions = () => {
  return (
    <div className={styles.mainExcursions}>
      <div className={styles.menuExcursions}>
        <div className={styles.typeExcursions}>
          <a href="#">АВТОБУСНЫЙ ТУР</a>
          <a href="#">ДЖИППИНГ</a>
          <a href="#">ЯХТИНГ</a>
          <a href="#">КАНЬОНИНГ</a>
        </div>
        <div className={styles.buttonsExcursions}>
          <div className={styles.buttonExcursion}>
            Абхазия
            <img src={location} alt="no" />
          </div>
          <div className={styles.buttonExcursion}>
            10 ноября 2021 <img src={data} alt="no" />
          </div>
          <div className={styles.buttonExcursion}>
            5 человек <img src={contacts} alt="no" />
          </div>
          <div
            className={`${styles.buttonExcursion} ${styles.buttonExcursionShow}`}
          >
            Показать
          </div>
        </div>
      </div>
      <div className={styles.filterExcursions}>
        <div style={{ color: '#0499DD', fontSize: '14px', fontWeight: 'bold' }}>
          Фильтры
        </div>
        <div className={styles.priceExcursions}>
          <div className={styles.titleExcursion}>
            Стоимость<div className={styles.line}></div>
          </div>
          <div className={styles.inputsPriceExcursion}>
            <input className={styles.inputPriceExcursion} />
            <input className={styles.inputPriceExcursion} />
          </div>

          <input type="range" min="0" max="100" step="1" value="50"></input>

          <div className={styles.lineBorder}></div>
          <div className={styles.amountPeople}>
          <div className={styles.titleExcursion}>
            Количество человек<div className={styles.line}></div>
          </div>
          <div className={styles.amountButtons}>
            <button className={styles.buttonMan}>1 чел.</button>
            <button className={styles.buttonMan}>2 чел.</button>
            <button className={styles.buttonMan}>3 чел.</button>
            <button className={styles.buttonMan}>4 чел.</button>
            <button className={styles.buttonMan}>5 чел.</button>
            <button className={styles.buttonMan}>6 чел.</button>
            <button className={styles.buttonMan}>7 чел.</button>
            <button className={styles.buttonMan}>8 чел.</button>
            <button className={styles.buttonMan}>9 чел.</button>
            <button className={styles.buttonMan}>10 чел.</button>
            <button>Больше 10 чел.</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excursions;
