import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import exitLogo from '../../../assets/another/exit.png';
import styles from './styles.module.css';
import { exit } from '../../../redux/features/application';
import AdminSide from './AdminDesk';
import AdminWorking from './AdminWorking';

function Admin() {
  const dispatch = useDispatch();

  const exitUser = () => {
    dispatch(exit());
  };

  return (
    <div className={styles.adminPage}>
      <h1>ПРОФИЛЬ АДМИНА</h1>
      <div className={styles.adminProfile}>
        <div className={styles.adminSide}>
          <AdminSide />
        </div>
        <div className={styles.adminWorking}>
          <AdminWorking />
        </div>
      </div>

      <Link to="/">
        <div
          style={{ cursor: 'pointer' }}
          onClick={exitUser}
          className={styles.exit}
        >
          <img src={exitLogo} alt="" />
        </div>
      </Link>
    </div>
  );
}

export default Admin;
