import React from 'react';
import styles from './styles.module.css';
import { NavLink, Outlet } from 'react-router-dom';

const AdminWorking = () => {
  return (
    <div>
      <div className={styles.adminPageMain}>
        <NavLink to="addTour">Добавить новый тур</NavLink>
        <NavLink to="allTours">Изменить тур</NavLink>
        <NavLink to="bookedTours">Забронированные туры</NavLink>
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminWorking;
