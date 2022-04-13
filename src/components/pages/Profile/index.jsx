import React from 'react';
import UserInfo from './UserInfo';
import BookingInfo from './BookingInfo';
import styles from './styles.module.css';

const Profile = () => {
  return (
    <div className={styles.userProfilePage}>
      <div className={styles.myProfile}>
        ЛИЧНЫЙ КАБИНЕТ
      </div>
      <div className={styles.userProfileContent}>
        <UserInfo />
        <BookingInfo />
      </div>
    </div>
  );
};

export default Profile;
