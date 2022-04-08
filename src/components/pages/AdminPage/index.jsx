import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import exitLogo from '../../../assets/another/exit.png';
import styles from './styles.module.css';
import { exit } from '../../../redux/features/application';
import AddTour from './AddTour/AddTour';
import FetchTour from './FetchTour/FetchTour';
import Bookings from './Bookings/Bookings';
import AdminSide from './AdminDesk/AdminSide';

function Admin() {
  const dispatch = useDispatch();

  const exitUser = () => {
    dispatch(exit());
  };

  return (
    <div className={styles.adminPage}>
      <div style={{ marginTop: '120px' }} className={styles.adminProfile}>
        ПРОФИЛЬ АДМИНА
      </div>

      <div>
        <AdminSide />

        <Routes>
          <Route path="/profile/addTour" element={<AddTour />} />
          <Route path="/profile/fetchTour" element={<FetchTour />} />
          <Route path="/profile/booking" element={<Bookings />} />
        </Routes>
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
