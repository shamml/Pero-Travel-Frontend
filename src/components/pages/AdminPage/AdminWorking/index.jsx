import React from 'react';
import styles from './styles.module.css';
import { Link, Outlet } from 'react-router-dom';

const AdminWorking = () => {
  return (
    <div className={styles.working}>
      <div className={styles.workingNav}>
        <Link to="/profile/addTour">Добавление тура</Link>
        <Link to="/profile/fetchTour">Показать все туры</Link>
        <Link to="/profile/booking">Забронированные туры</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminWorking;
