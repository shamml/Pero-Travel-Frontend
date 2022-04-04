import React from 'react';
import styles from './styles.module.css';
import cardBg from '../../../../assets/homepage/popular/cardBgOne.jpg';
import timeIcon from '../../../../assets/timeIcon.svg';
import priceIcon from '../../../../assets/priceIcon.svg';

const Popular = () => {
  const array = [
    {
      type: 'Конный тур',
      title: 'Конные прогулки',
      duration: 6,
      desc: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      type: 'Конный тур',
      title: 'Конные прогулки',
      duration: 6,
      desc: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
    },
    {
      type: 'Конный тур',
      title: 'Конные прогулки',
      duration: 6,
      desc: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      type: 'Конный тур',
      title: 'Конные прогулки',
      duration: 6,
      desc: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
    },
    {
      type: 'Конный тур',
      title: 'Конные прогулки',
      duration: 6,
      desc: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
    },
  ];

  return (
    <div className={styles.popularBlock}>
      <div className={styles.popularTitle}>Популярные экскурсии</div>
      <div className={styles.carousel}>
        {array.map((item) => {
          return (
            <div className={styles.carouselItem}>
              <div className={styles.cardBg}>
                <img src={cardBg} alt="pic" />
              </div>
              <div className={styles.cardInfo}>
                <div className={styles.typeOf}>{item.type}</div>
                <h2 className={styles.carouselItemTitle}>{item.title}</h2>
                <div className={styles.priceAndTime}>
                  <div className={styles.time}>
                    <img src={timeIcon} alt="time" />
                    {item.duration} часов
                  </div>
                  <div className={styles.price}>
                    <img src={priceIcon} alt="price" />
                    2000 ₽
                  </div>
                </div>
                <p>{item.desc.substr(0, 300) + "..."}</p>
              </div>
              <button className={styles.moreBtn}>Подробнее</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;