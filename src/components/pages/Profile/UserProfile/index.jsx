import React from 'react';
import UserInfo from './UserInfo';
import Booking from './Booking';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import exitLogo from '../../../../assets/another/exit.png';
import { exit } from '../../../../redux/features/application';
import { useDispatch } from 'react-redux';

const UserProfile = ({ user, tours }) => {
  const dispatch = useDispatch();

  const exitUser = () => {
    dispatch(exit());
  };

  return (
    <div>
      <div className={styles.profileUser}>
        <div className={styles.profileBlock}>
          <div className={styles.profileDesk}>
            <UserInfo user={user} />
            <Booking tours={tours} />
          </div>
        </div>
      </div>
      );
      <Link to="/">
        <div
          style={{ cursor: 'pointer' }}
          onClick={exitUser}
          className={styles.exit}
        >
          <img src={exitLogo} alt="#" />
        </div>
      </Link>
    </div>
  );
};

export default UserProfile;
