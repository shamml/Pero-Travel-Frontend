import React from 'react';
import UserInfo from './UserInfo';
import BookingInfo from './BookingInfo';
import styles from './styles.module.css';

const Profile = () => {
  const [modalHistoryBroning, setModalHistoryBroning] = React.useState(false);

  function handleClickOpenHistoryBroning() {
    setModalHistoryBroning(true);
  }

  return (
    <div className={styles.userProfilePage}>
      <div className={styles.myProfile}>ЛИЧНЫЙ КАБИНЕТ</div>
      <div className={styles.userProfileContent}>
        <UserInfo />
        <BookingInfo
          modalHistoryBroning={modalHistoryBroning}
          setModalHistoryBroning={setModalHistoryBroning}
          handleClickOpenHistoryBroning={handleClickOpenHistoryBroning}
        />
      </div>
    </div>
  );
};

export default Profile;
