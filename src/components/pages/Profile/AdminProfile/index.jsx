import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import exitLogo from '../../../../assets/another/exit.png';
import styles from './styles.module.css';
import { exit } from '../../../../redux/features/application';
import AddTour from './AdminWorking/AddTour';
import FetchTour from './AdminWorking/FetchTour';
import Bookings from './AdminWorking/Bookings';
import AdminSide from './AdminInfo';
import { fetchIdUser } from '../../../../redux/features/user';
import AdminWorking from './AdminWorking';

function AdminProfile() {
  const dispatch = useDispatch();

  const exitUser = () => {
    dispatch(exit());
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(fetchIdUser());
  }, [dispatch]);

  const dataUser = useSelector((state) => state.user.data);

  return (
    <div className={styles.adminProfile}>
      <h1>ПРОФИЛЬ АДМИНА</h1>
      <div className={styles.profileWrapper}>
        {dataUser.map((user) => {
          return <AdminSide user={user} key={user._id} />;
        })}
        <div className={styles.adminWorking}>
          <Routes>
            <Route path="/" element={<AdminWorking />}>
              <Route path="addTour" element={<AddTour />} />
              <Route path="allTours" element={<FetchTour />} />
              <Route path="bookedTours" element={<Bookings />} />
            </Route>
          </Routes>
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

export default AdminProfile;
