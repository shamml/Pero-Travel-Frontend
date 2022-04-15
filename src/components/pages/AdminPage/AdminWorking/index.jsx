import React from 'react';
import styles from './styles.module.css';
import { Link, Outlet } from 'react-router-dom';

const AdminWorking = () => {
  return (
    <div className={styles.working}>
      <div className={styles.workingNav}>
        <Link to="/profile">Добавить</Link>
        <Link to="/profile/fetchTour">Туры</Link>
        <Link to="/profile/booking">Брони</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminWorking;
