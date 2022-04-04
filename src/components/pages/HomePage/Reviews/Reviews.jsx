import React from 'react';
import styles from './styles.module.css';
import avatar from '../../../../assets/homepage/reviews/Rectangle26.jpg';
import kov from "../../../../assets/homepage/reviews/kov.png";

const Reviews = () => {
  const array = [
    {
      firstname: 'Umar',
      lastname: 'Rakhmaev',
      age: 26,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      firstname: 'Umar',
      lastname: 'Rakhmaev',
      age: 26,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      firstname: 'Umar',
      lastname: 'Rakhmaev',
      age: 26,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  return (
    <div className={styles.reviewsBlock}>
      <div className={styles.reviewsTitle}>Отзывы</div>
      <div className={styles.carousel}>
        {array.map((item) => {
          return (
            <div className={styles.carouselItem}>
              <img className={styles.kov} src={kov} alt="bg" />
              <div className={styles.reviewAvatar}>
                <img src={avatar} alt="avatar" />
              </div>
              <div className={styles.reviewInfo}>
                <div className={styles.userInfo}>
                  {`${item.firstname} ${item.lastname}, ${item.age} лет`}
                </div>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
